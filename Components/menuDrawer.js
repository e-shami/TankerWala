import React from "react";
import {
    View,
    
} from "react-native";

import {
    Text,
} from "react-native-paper";

import { createDrawerNavigator, DrawerActions} from '@react-navigation/drawer';
import Dashboard from "../Screens/dashboard";

const Drawer = createDrawerNavigator();

//temp screens
const Settings = () => {
  return(
    <View>
      <Text>Settings screen</Text>
    </View>
  )
}

const OrdersHistory = () => {
  return(
    <View>
      <Text>Orders History screen</Text>
    </View>
  )
}

const BecomeADriver = () => {
  return(
    <View>
      <Text>Become a driver screen</Text>
    </View>
  )
}

const CustomerSupport = () => {
  return(
    <View>
      <Text>CustomerSupport screen</Text>
    </View>
  )
}

const About = () => {
  return(
    <View>
      <Text>About application screen</Text>
    </View>
  )
}

function MenuDrawer({navigation}) {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    
    const toggleDrawer = () => {
      navigation.toggleDrawer();
    };



    return (
      <Drawer.Navigator initialRouteName="Dashboard">
        <Drawer.Screen name="Dashboard" component={Dashboard} options={{headerShown:true}} />
        <Drawer.Screen name="Oders History" component={OrdersHistory}  />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Become A Driver" component={BecomeADriver} />
        <Drawer.Screen name="Customer Support" component={CustomerSupport} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    );    
  };

  
  
  export default MenuDrawer;