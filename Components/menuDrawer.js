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
        
        
      </NavigationContainer>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    mainContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      marginBottom: 20,
    },
    menuButton: {
      padding: 10,
      backgroundColor: 'lightblue',
      borderRadius: 5,
    },
    menuButtonText: {
      fontSize: 16,
      color: 'white',
    },
    drawer: {
      backgroundColor: 'white',
      padding: 20,
    },
    drawerItem: {
      marginBottom: 10,
    },
    drawerItemText: {
      fontSize: 18,
    },
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  export default MenuDrawer;