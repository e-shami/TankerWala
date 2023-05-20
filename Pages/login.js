import React from "react";
import {
    View,
    TouchableOpacity,
    StyleSheet
} from "react-native";

import {
    Text,
    TextInput,
    Checkbox,
    Button,
} from "react-native-paper";

import {Register} from "./register";

export function Login(props){

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [checked, setChecked] = React.useState(false);
    return(
        <View style={[styles.outerContainer, {height:props.screen.height}]}>
            <View style={styles.innerContainer}>
                <Text variant="displaySmall"
                style={{textAlign:"center", marginBottom:25}}>
                    Sign in
                </Text>

                <TextInput style={styles.inputFields}
                    mode="outlined"
                    label="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    />
                <TextInput style={styles.inputFields}
                    mode="outlined"
                    label="Password"
                    secureTextEntry
                    // right={<TextInput.Icon icon="eye" />}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    />

                <View style={[styles.row, {marginTop:10, marginBottom:10}]}>
                    <Checkbox.Item label="Remember me!"
                        style={{paddingLeft:-5}}
                        labelVariant="bodySmall"
                        position="leading"
                        status={checked ? 'checked': 'unchecked'}
                        onPress={()=>{
                            setChecked(!checked)
                        }}
                        />

                    <TouchableOpacity style={[styles.boxingAround, {width:120}]}>
                        <Text variant="bodySmall"
                        style={{fontWeight:"bold"}}>
                            Forget password?
                        </Text>
                    </TouchableOpacity>
                </View>

                <Button 
                mode="contained"
                buttonColor="#655959">
                    Login
                </Button>

                <View style={[styles.row, {marginTop:35, marginBottom:35}]}>
                    <View style={styles.line}/>
                    <Text variant="bodyMedium"
                        style={{fontWeight:"bold"}}>
                            Or
                    </Text>
                    <View style={styles.line}/>
                </View>
                
                <Button 
                mode="contained"
                buttonColor="#655959">
                    Sign in with Google
                </Button>

                <View style={[styles.row, {justifyContent: "center", marginTop:35, marginBottom:20}]}>
                <Text variant="bodySmall">
                    Don't have an account? 
                </Text>

                <TouchableOpacity style={[styles.boxingAround, {marginLeft:5}]}
                onPress={()=>{
                    
                }}>
                    <Text variant="bodySmall"
                        style={{fontWeight:"bold"}}>
                        Sign up
                    </Text>
                </TouchableOpacity>
                </View>
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
        height: "80%",
        margin: 25, 
        padding: 20,
        borderRadius:25
    },
    inputFields:{
        marginTop:25,
        height: 45,
        backgroundColor:'#F4F1F1',
        fontSize:18
    },

    row:{
        padding:0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    line:{
        borderBottomColor: "black",
        borderBottomWidth: 2,
        width: "45%"
    },
    boxingAround:{
        padding:2,
        borderWidth:1, 
        alignItems:"center",
        borderRadius:5
    }
})