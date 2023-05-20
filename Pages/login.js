import React from "react";
import {
    View,
    TouchableOpacity
} from "react-native";

import {
    Text,
    TextInput,
    Checkbox,
    Button,
} from "react-native-paper";


 export function Login(){

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [checked, setChecked] = React.useState(false);

    return(
        <View>
            <View>
                <Text varient="displayMedium">
                    Welcome Back!
                </Text>

                <TextInput 
                    lable="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    />
                <TextInput 
                    lable="Password"
                    secureTextEntry
                    right={<TextInput.Icon icon="eye" />}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    />

                <View>
                    <Checkbox status={checked ? 'checked': 'unchecked'}
                        onPress={()=>{
                            setChecked(!checked)
                        }}
                        />
                    <Text  varient="bodyMedium">
                        Remember me!
                    </Text>

                    <TouchableOpacity>
                        <Text>
                            Forget password?
                        </Text>
                    </TouchableOpacity>
                </View>

                <Button>
                    Login
                </Button>

                
            </View>
        </View>
    );
};