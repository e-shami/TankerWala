import React, {useState}from "react";
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    ScrollView
} from "react-native";

import {
    Text,
    TextInput,
    Button,
} from "react-native-paper";

import firestore from '@react-native-firebase/firestore';

const window = Dimensions.get('window');
const screen = {
    height: window.height,
    width: window.width
}


const registerUser = async (name, email, password, easypaisaAccountNumber, cnic) => {
    try{
        const userRef = firestore().collection('users');
        await userRef.add({
            name: name,
            email: email,
            password: password,
            easypaisaAccountNo: easypaisaAccountNumber,
            CNIC: cnic
        });
    }
    catch (error){
        console.log(error);
    }
}


function Register(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [easypaisaAccountNumber, setEasypaisaAccountNumber] = useState("");
    const [cnic, setCnic] = useState("");

    const [errors, setErrors] = useState({});
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };

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
            case 'password':
                setPassword(value);
                break;
            case 'confirmPassword':
                setConfirmPassword(value);
                break;
            case 'easypaisaAccountNo':
                setEasypaisaAccountNumber(value);
                break;
            case 'cnic':
                setCnic(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = () => {
        const validationErrors = {}

        if (name.trim() === '')
            validationErrors.name = 'Name field is required';

        if (email.trim() === '')
            validationErrors.email = 'Email field is required';
        
        if (password.trim() === '')
            validationErrors.password = 'Password field is required';
        
        if (confirmPassword.trim() === '')
            validationErrors.confirmPassword = 'Confirm password field is required';

        if (easypaisaAccountNumber.trim() === '')
            validationErrors.easypaisaAccountNo = 'Easypaisa account number field is required';

        if (cnic.trim() === '')
            validationErrors.cnic = 'CNIC field is required';

        if (Object.keys(validationErrors).length > 0){
            setErrors(validationErrors);
            return;
        }

        registerUser(name, email, password, easypaisaAccountNumber, cnic);
    }
    
    
    return(
        <View style={[styles.outerContainer, {height:screen.height}]}>
            <View style={styles.innerContainer}>
                <Text variant="displaySmall"
                    style={{textAlign:"center", marginBottom:25}}>
                        Register
                </Text>

                <ScrollView >
                    <TextInput style={styles.inputFields}
                        mode="outlined"
                        label="Name"
                        value={name}
                        onChangeText={(text) => handleInputChange('name', text)}
                        error={!!errors.name}
                        />
                        {errors.name && <Text>{errors.name}</Text>}

                    <TextInput style={styles.inputFields}
                        mode="outlined"
                        label="Email"
                        value={email}
                        onChangeText={(text) => handleInputChange('email', text)}
                        error={!!errors.email}
                        />
                        {errors.email && <Text>{errors.email}</Text>}
                    <TextInput
                        style={styles.inputFields}
                        mode="outlined"
                        label="Password"
                        secureTextEntry={!isPasswordVisible}
                        right={
                            <TextInput.Icon
                            icon={isPasswordVisible ? 'eye' : 'eye-off'}
                            onPress={togglePasswordVisibility}
                            />
                        }
                        value={password}
                        onChangeText={(text) => handleInputChange('password', text)}
                        error={!!errors.password}
                        />
                        {errors.password && <Text>{errors.password}</Text>}

                    <TextInput
                        style={styles.inputFields}
                        mode="outlined"
                        label="Confirm Password"
                        secureTextEntry={!isPasswordVisible}
                        right={
                            <TextInput.Icon
                            icon={isPasswordVisible ? 'eye' : 'eye-off'}
                            onPress={togglePasswordVisibility}
                            />
                        }
                        value={confirmPassword}
                        onChangeText={(text) => handleInputChange('confirmPassword', text)}
                        error={!!errors.confirmPassword}
                        />
                        {errors.confirmPassword && <Text>{errors.confirmPassword}</Text>}

                    <TextInput style={styles.inputFields}
                        mode="outlined"
                        label="Easypaisa Account Number"
                        value={easypaisaAccountNumber}
                        onChangeText={(text) => handleInputChange('easypaisaAccountNo', text)}
                        error={!!errors.easypaisaAccountNo}
                        />
                        {errors.easypaisaAccountNo && <Text>{errors.easypaisaAccountNo}</Text>}

                    <TouchableOpacity style={styles.row}
                    onPress={()=>{
                        
                    }}>
                        <Text variant="bodySmall"
                            style={{fontWeight:"bold"}}>
                            Click to verify
                        </Text>
                    </TouchableOpacity>

                    <TextInput style={styles.inputFields}
                        mode="outlined"
                        label="CNIC"
                        value={cnic}
                        onChangeText={(text) => handleInputChange('cnic', text)}
                        error={!!errors.cnic}
                        />
                        {errors.cnic && <Text>{errors.cnic}</Text>}
                </ScrollView>

                <Button 
                        mode="contained"
                        buttonColor="#655959"
                        style={{marginTop:30}}
                        onPress={handleSubmit}>
                        Register
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        display: "flex",
        justifyContent: "flex-start"
    },

    innerContainer:{
        display: "flex",
        justifyContent: "center",
        alignContent: "flex-end",
        backgroundColor: "#D9D9D9",
        height: screen.height*0.825,
        margin: 25, 
        padding: 20,
        borderRadius:25
    },
    inputFields:{
        marginTop:18,
        height: 42,
        backgroundColor:'#F4F1F1',
        fontSize:17
    },

    row:{
        padding:2,
        marginTop:8,
        alignSelf:"flex-end", 
        borderWidth:1, 
        width:110, 
        alignItems:"center",
        borderRadius:5
    },
})

export default Register;