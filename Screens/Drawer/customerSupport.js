import { View, StyleSheet, Alert} from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button, Text, TextInput} from 'react-native-paper'
import {ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CustomAlert } from '../../Components/customAlert'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"


export default function CustomerSupport() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState('');

    const [editName, setEditName] = useState(false);
    const [editEmail, setEditEmail] = useState(false);

    const [message, setMessage] = useState('');
    const [alertVisible, setAlertVisible] = useState(false);


    const [pendingRequest, setPendingRequest] = useState(false);
    const [placeReqEnabled, setPlaceReqEnabled] = useState(true);
    const [renderForm, setRenderForm] = useState(false);
    const [renderRequestsView, setRenderRequestedView] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});



    const user = auth().currentUser;

    const [userRequests, setUserRequests] = useState([]);

    
    useEffect(() => {
        const fetchUserRequests = async () => {    
            try {
            const snapshot = await firestore()
                .collection('userReqForCustomerSupport')
                .where('userId', '==', user.uid)
                .get();

                const requests = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                  }));
            setUserRequests(requests);
            } catch (error) {
            console.log('Error fetching user requests:', error);
            }
        };

        fetchUserRequests();

        setPendingRequest(userRequests.length > 0? true : false)
    });


    const handleDeleteRequest = async (requestId) => {
        try {
          await firestore().collection('userReqForCustomerSupport').doc(requestId).delete();
          setUserRequests((prevRequests) =>
            prevRequests.filter((request) => request.id !== requestId)
          );
        } catch (error) {
          console.log('Error deleting user request:', error);
        }

        setPlaceReqEnabled(true)
      };



    const fetchUserData = () => {
        // Retrieve the user details from Firestore
        firestore()
        .collection('users')
        .doc(user.uid)
        .get()
        .then((documentSnapshot) => {
            if (documentSnapshot.exists) {
                const userDetails = documentSnapshot.data();
                setName(userDetails.name);
                setEmail(userDetails.email);
                // console.log(userDetails)
            } else {
                console.log('User document does not exist');
            }
        })
        .catch((error) => {
            console.log('Error fetching user details:', error);
        });
    }

    useEffect(()=>{
        fetchUserData();
    },[])


    const handleCreateNewRequest = () =>{
        setRenderForm(true);
        setPlaceReqEnabled(false);
        setRenderRequestedView(false);
    }

    const handleFormCancel = () => {
        setRenderForm(false);
        setPlaceReqEnabled(true);
    }

    const handleInputChange = (inputName, value) => {
        if(errors[inputName]){
            setErrors((prevErrors) => ({
                ...prevErrors,
                [inputName]: "",
            }));
        }

        switch (inputName){
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;   
            case 'description':
                setDescription(value);
                break;
            default:
                break;
        }
    };

    const postRequest = () => {
        const userRequest = {
            userId: user.uid,
            userName: name,
            userEmail: email,
            requestDescription: description,
            timestamp: firestore.FieldValue.serverTimestamp()
        }

        firestore()
        .collection('userReqForCustomerSupport')
        .add(userRequest)
        .then(()=>{
            setMessage("Request Posted Successfully");         
        })
        .catch(() => {
            setMessage("Error! Failed to Post Request");
        })
    } 

    const handleFormSubmit = () => {
        const validationErrors = {}

        if (name.trim() === '')
            validationErrors.name = 'Name field is required';

        if (email.trim() === '')
            validationErrors.email = 'Email field is required';
        
        if (description.trim() === '')
            validationErrors.description = 'Description field is required';

        if (Object.keys(validationErrors).length > 0){
            setErrors(validationErrors);
            return;
        }
        postRequest(); 
        setAlertVisible(true);
        setSubmitted(true);
    }

    const closeForm = () => {
        if (submitted){
            
            setSubmitted(false);
            setTimeout(()=>{
                handleFormCancel();
                setAlertVisible(false);
                setPendingRequest(true);
                setDescription("")
            }, 3500);
            
        }
    }

    const showRequestView = () => {
        setRenderRequestedView(true);
        setRenderForm(false);
    }

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.boxingAround}
        disabled={!placeReqEnabled}
        onPress={handleCreateNewRequest}>
            <Text variant='titleLarge'>
                Place a New Request
            </Text>
        </TouchableOpacity>

        {renderForm && 

        <KeyboardAwareScrollView style={styles.form}>
            <TextInput style={[styles.inputFields, {marginTop:25}]}
                mode="outlined"
                label="Name"
                value={name}
                onChangeText={(text) => handleInputChange('name', text)}
                disabled={!editName}
                right={<TextInput.Icon icon={'eye'}  onPress={()=>setEditName(!editName)}/>}
                error={!!errors.name}
                />
                {errors.name && <Text>{errors.name}</Text>}
            <TextInput style={styles.inputFields}
                mode="outlined"
                label="Email"
                value={email}
                disabled={!editEmail}
                onChangeText={(text) => handleInputChange('email', text)}
                right={<TextInput.Icon icon={'eye'}  onPress={()=>setEditEmail(!editEmail)}/>}
                error={!!errors.email}
                />
                {errors.email && <Text>{errors.email}</Text>}

            <TextInput style={styles.textArea}
                mode="outlined"
                label="Desccription"
                value={description}
                onChangeText={(text) => handleInputChange('description', text)}
                error={!!errors.description}
                />
                {errors.description && <Text>{errors.description}</Text>}

            <View style={styles.row}>
                <Button mode='outlined'
                    style={styles.button}
                    onPress={handleFormCancel}>
                    Cancel
                </Button>
                <Button mode='outlined'
                    style={styles.button}
                    onPress={handleFormSubmit}>
                    Submit
                </Button>
            </View>
            {alertVisible && <CustomAlert message={message} />}
     </KeyboardAwareScrollView>
    }

    {closeForm()}


       {pendingRequest &&  
       <TouchableOpacity style={styles.boxingAround}
       onPress={showRequestView}>
            <Text variant='titleLarge'>
                View my Current Request
            </Text>
        </TouchableOpacity>}

        {renderRequestsView && 
            <ScrollView style={{width:'100%', marginTop:10, padding:5}}>
            {userRequests.map((request) => (
              <View key={request.id} style={styles.requestContainer}>
                <Text style={{textAlign:'right', marginBottom:5}}>{request.timestamp?.toDate().toString().split('GMT')[0]}</Text>
                <Text variant='bodyLarge'>Name: {request.userName}</Text>
                <Text variant='bodyLarge'>Email: {request.userEmail}</Text>
                <Text variant='bodyLarge'>Description: {request.requestDescription}</Text>
                <TouchableOpacity style={{marginTop:-25, marginLeft:-5}}
                    onPress={() => 
                        Alert.alert(
                            'Delete Request',
                            'Are you sure you want to delete this request?',
                            [
                              {
                                text: 'Cancel',
                                style: 'cancel',
                              },
                              {
                                text: 'Delete',
                                style: 'destructive',
                                onPress: () => handleDeleteRequest(request.id),
                              },
                            ],
                          )
                    }
                >
                    <Icon name="trash-can-outline" size={30} style={{backgroundColor:"pink", 
                                                                    position:'relative', 
                                                                    justifyContent: 'center', 
                                                                    alignSelf:"flex-end",
                                                                    borderRadius:5}} />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        }

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    outerContainer: {
        display: "flex",
        justifyContent: "center",
        marginTop:20
    },

    innerContainer:{
        display: "flex",
        justifyContent: "flex-start",
        position: "relative",
        alignItems:"center",
        backgroundColor: "#D9D9D9",
        height: "92.5%",
        margin: 20, 
        padding: 20,
        
        borderRadius:25
    },

    form:{
        backgroundColor:'#FEFEFE',
        height: '90%',
        width:'100%',
        margin:25,
        padding:10,
        borderRadius:15
    },

    inputFields:{
        paddingLeft:5,
        marginTop: 25
    },

    textArea: {
        height:120, 
        marginTop: 25,
        marginBottom: 35
    },

    row:{
        padding:10,
        display: "flex",
        alignItems: "center",
        flexDirection:"row",
        justifyContent:'space-between'
    },

    button:{
        width: "45%"
    },
    boxingAround:{
        padding:2,
        borderWidth:1, 
        alignItems:"center",
        borderRadius:25,
        padding:15,
        backgroundColor: "#FEFEFE"
    }, 
    requestContainer: {
        margin: 10,
        padding: 10,
        borderWidth:2,
        width: "95%",
        borderRadius:15,
        justifyContent: "center",
        backgroundColor: "lightblue"
    }
})