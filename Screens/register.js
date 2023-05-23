import React from "react";
import {
    View,
    TouchableOpacity,
    StyleSheet
} from "react-native";

import {
    Text,
    TextInput,
    Button,
} from "react-native-paper";

export function Register({props}){
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [isPasswordVisible, setPasswordVisible] = React.useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };
    
    return(
        <View style={[styles.outerContainer, {height:props.height}]}>
            <View style={styles.innerContainer}>
                <Text variant="displaySmall"
                style={{textAlign:"center", marginBottom:25}}>
                    Register
                </Text>

                <TextInput style={styles.inputFields}
                    mode="outlined"
                    label="Name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                    />

                <TextInput style={styles.inputFields}
                    mode="outlined"
                    label="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    />
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
                    onChangeText={text => setPassword(text)}
                    />

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
                    onChangeText={text => setConfirmPassword(text)}
                    />

                <TextInput style={styles.inputFields}
                    mode="outlined"
                    label="Easypaisa Account Number"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    />

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
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    />
                <Button 
                    mode="contained"
                    buttonColor="#655959"
                    style={{marginTop:30}}>
                    Register
                </Button>
             </View>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        display: "flex",
        justifyContent: "center"
    },

    innerContainer:{
        display: "flex",
        justifyContent: "center",
        alignContent: "flex-end",
        backgroundColor: "#D9D9D9",
        height: "85%",
        margin: 25, 
        padding: 20,
        borderRadius:25
    },
    inputFields:{
        marginTop:20,
        height: 42,
        backgroundColor:'#F4F1F1',
        fontSize:18
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