import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {View, Text, Button, TouchableOpacity, Alert, TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
const Payment = ({navigation}) => {  

  const [captchaWord, setCaptchaWord] = useState('');
  const generateCaptcha = () => {

    const randomWord = getRandomWord(); 
    setCaptchaWord(randomWord);
  };
   const [text, setText] = useState('');

  const handleReset = () => {
    setText('');
  };

  return (

    
    <View style={styles.main}>
    
      {/* <View style={styles.header}>
        <Icon name="bars" size={40} color="#000000" />
        <Icon name="circle" size={40} color="#000000" />
      </View> */}
      <View style={styles.payButtonContainer}>
       <TouchableOpacity style={styles.paybutton}>
              <Text style={styles.payText}>Pay Order</Text>
      </TouchableOpacity>
      </View>
     
      <View style={styles.container} >
    <View style={styles.labelAndInpputs} >
      
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Order ID:</Text>

          <Text style={styles.label}>Company Name:</Text>

          <Text style={styles.label}>Amount:</Text>

          <Text style={styles.label}>Payment method:</Text>

          <Text style={styles.label}>Mobile Number:</Text>

          <Text style={styles.label}>Email Address:</Text>
          
        </View>
    
  
      </View>
      <Text style={styles.reCapchaText}>Type the Charachter you see in the picture below</Text>
      <View style={styles.recapchaInput}>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.reCapinput}
          value={text}
          onChangeText={setText}
          placeholder='Enter Text'
        />
        {text !== '' && (
          <TouchableOpacity onPress={handleReset}>
           <Icon name="undo" size={20} color="grey" />
          
          </TouchableOpacity>
        )}
      </View>
      
      </View>
    

   
      

      <View style={styles.buttonContainer}>
           <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Proceed</Text>
            </TouchableOpacity>
      </View>
      </View>
      
      <View style={styles.footer}>

      </View>
    </View>
    
    
  );
};

export default Payment;

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:'grey',
    padding:32,
  },
  header:{
  
    flexDirection:'row',
    justifyContent:'space-between',
  
  },
  container:{
   
    height:540,
    backgroundColor: '#CCCCCC',
    borderRadius: 15, 
    padding:10


  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 25,

  },
  
  labelAndInpputs:{
    flexDirection:'row',
    justifyContent:'flex-start',
    marginLeft:10,
  
  },
  paybutton:{
    borderRadius: 15, 
    backgroundColor: '#CCCCCC', 
    padding: 10, 
    width:300,
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent:'space-evenly',
   

  },
    inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    width:230,
    color:"black",
    backgroundColor:"white",
    marginTop:70
  },
  reCapinput: {
    flex: 1,
    height: 30,
  

  },
  reCapchaText:{
    margin:10,
  },
  recapchaInput:{
    flex: 1,
    alignItems: 'center',
    
  },
  payButtonContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        margin:30,
   
  },
    button: {
    borderRadius: 15, 
    backgroundColor: 'black', 
    padding: 10, 
    width:140,
   
  },
  buttonText: {
    color: 'white', 
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize:15,
  },
  payText:{
    color: 'black', 
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize:20,
  },
  footer:{

  },
  

  
});
