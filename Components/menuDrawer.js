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
    IconButton
} from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialIcons"
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function MenuDrawer() {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  
    const toggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen);
    };
  
    return (
      <NavigationContainer>
        <TouchableOpacity style={{marginLeft:25, marginTop:35}}
          onPress={toggleDrawer}
        >
          <Icon name="menu" size={50}/>
        </TouchableOpacity>
        <View style={{backgroundColor:"pink"}}>

        </View>

        
      </NavigationContainer>
    );
  };
  
  const styles = StyleSheet.create({
    
  });
  
  export default MenuDrawer;