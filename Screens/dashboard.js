import React from "react";
import {
    View,
    StyleSheet,
    Dimensions
} from "react-native";

import {
    Text,
    Button,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const window = Dimensions.get('window');
const screen = {
    height: window.height,
    width: window.width
}

// pop up for confirmation





function Dashboard({navigation}){

    const [waterRemaining, SetWaterRemaining] = React.useState();
    const [estimatedTime, SetEstimatedTime] = React.useState();
    const [threshold, SetThreshold] = React.useState();
    const [confirmation, SetConfirmation] = React.useState(false);

    const Confirmation = () => {
        return(
            <View style={{borderRadius:25, alignItems: 'center', justifyContent: 'center'}}>
                <Text variant="titleMedium"
                    style={{textAlign:"center", padding:20, fontWeight:"700", color: "white", paddingBottom: 50, fontSize: 24, marginTop: 50 }}>
                    Confirm IoT Device Request
                </Text>
    
                <View style={{margin:5, alignItems: "flex-start", padding: 5}}>
                    <Text variant="titleMedium"
                        style={{textAlign:"center", color: "#000000", fontWeight:"500", fontSize: 18, marginBottom:25, backgroundColor: "#D9D9D9", padding: 35, borderRadius: 20}}>
                        IoT device initiated a request. Confirm tanker order?
                    </Text>
                    
                </View>
    
                <View style={[styles.row, {marginTop:15}]}>
                    <Button
                        mode="contained"
                        buttonColor="#635A5A"                    
                        style={{height:60, width:150, justifyContent:"center", marginRight:15, borderColor: '#AEAEAE', borderWidth: 1, fontWeight: 600, fontSize: 16}}
                        labelStyle={{fontSize:15}}
                        onPress={() => SetConfirmation(false)}
                        >
                        Cancel
                    </Button>
    
                    <Button
                        mode="contained"
                        buttonColor="#635A5A"       
                        style={{height:60, width:150, justifyContent:"center", borderColor: '#AEAEAE', borderWidth: 1, fontWeight: 600, fontSize: 16}}
                        labelStyle={{fontSize:15}}>
                        Yes
                    </Button>
                </View>
            </View>
        )
    }

    return(
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <View style={[styles.outerContainer, {alignItems: 'center', justifyContent: 'center'}]}>
                <View style={[styles.innerContainer, {height: screen.height*0.75}]}>
                    
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

                    <View style={[styles.row]}>
                        <View style={[styles.row, {backgroundColor:"#efefef", borderRadius:10, padding:3}]}>
                            <Icon name="alert-decagram" size={35} color="#b6b6b6" />
                            <Text variant="bodyMedium"
                                style={{textAlign:"center", flexWrap:"wrap", width:175}}>
                                Request is auto-generated when below threshold
                            </Text>
                        </View>

                        <Button 
                            mode="contained"
                            buttonColor="#655959"
                            style={{height:50, minWidth: 107, justifyContent:"center", marginLeft:5}}
                            labelStyle={{fontSize:14}}
                            // disabled={true}
                            onPress={() => SetConfirmation(true)}
                            >
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
                <View style={{position: "absolute", borderRadius:25, alignSelf: 'center', height: '70%', backgroundColor: '#7D7D7D', opacity: 0.8}}>
                    {confirmation && <Confirmation />}
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    outerContainer: {
        display: "flex",
        justifyContent: "center",
        marginTop:25
    },

    innerContainer:{
        display: "flex",
        justifyContent: "center",
        position: "relative",
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
        marginTop:10,
        marginBottom:10,
        alignItems: "center",
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

export default Dashboard;