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
import MenuDrawer from "../Components/menuDrawer";

export function Dashboard(props){

    const [waterRemaining, SetWaterRemaining] = React.useState();
    const [estimatedTime, SetEstimatedTime] = React.useState();
    const [threshold, SetThreshold] = React.useState();
    

    return(
        <View>
            <MenuDrawer />
            <View style={[styles.outerContainer, {height:props.height}]}>
                <View style={styles.innerContainer}>
                    
                    <View style={[styles.status, {width:"85%"}]}>
                        <Text variant="titleLarge"
                            style={{textAlign:"center", padding:20, fontWeight:"bold"}}>
                            Water Status
                        </Text>

                        <View style={{margin:15, alignItems: "flex-start",}}> 
                            <Text variant="titleMedium"
                                style={{textAlign:"center", fontWeight:"bold", marginBottom:25}}>
                                Remaining:      {waterRemaining}%
                            </Text>

                            <Text variant="titleMedium"
                                style={{textAlign:"center",fontWeight:"bold", marginBottom:25}}>
                                Estimated Time:      {estimatedTime}hrs
                            </Text>

                            <Text variant="titleMedium"
                                style={{textAlign:"center", fontWeight:"bold"}}>
                                Threshold:      {threshold}%
                            </Text>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <Text variant="bodyMedium"
                            style={{textAlign:"center", flexWrap:"wrap", width:175, marginRight:10}}>
                            Request is auto-generated when below threshold
                        </Text>

                        <Button 
                            mode="contained"
                            buttonColor="#655959"
                            style={{height:50, justifyContent:"center"}}
                            labelStyle={{fontSize:15}}
                            disabled={true}>
                            Confirm?
                        </Button>

                    </View>

                    <View style={[styles.row, {marginTop:15}]}>
                        <Button 
                            mode="contained"
                            buttonColor="#B6B6B6"
                            style={{height:60, width:155, justifyContent:"center", marginRight:10}}
                            labelStyle={{fontSize:15}}>
                            Request order
                        </Button>

                        <Button 
                            mode="contained"
                            buttonColor="#B6B6B6"
                            style={{height:60, width:155, justifyContent:"center"}}
                            labelStyle={{fontSize:15}}>
                            Current order
                        </Button>
                    </View>

                    <View style={[styles.row]}>
                        <Button 
                            mode="contained"
                            buttonColor="#B6B6B6"
                            style={{height:80, width:155, justifyContent:"center", marginRight:10}}
                            labelStyle={{fontSize:15}}>
                            Chats
                        </Button>

                        <Button 
                            mode="contained"
                            buttonColor="#B6B6B6"
                            style={{height:80, width:155, justifyContent:"center"}}
                            labelStyle={{fontSize:15}}>
                            Schedule order
                        </Button>
                    </View>
                </View> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    outerContainer: {
        display: "flex",
        justifyContent: "center"
    },

    innerContainer:{
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: "#D9D9D9",
        height: "70%",
        margin: 20, 
        padding: 20,
        borderRadius:25
    },
    status:{
        borderWidth:1,
        borderColor: "gray",
        borderRadius: 25,
        padding:10
    },

    row:{
        padding:0,
        display: "flex",
        margin:15,
        flexDirection:"row"
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
        borderRadius:25,
    }
})