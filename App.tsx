import React, {useState, useEffect}from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

import ScheduleScreen from './Screens/schedule';
import SplashScreen from './Screens/splash';
import WelcomeScreen from './Screens/welcome';
import LoginScreen from './Screens/login';
import RegisterScreen  from './Screens/register';
import HomeScreen from './Screens/Drawer/Home';
import PlaceOrderScreen from './Screens/placeOrder';
import PaymentScreen from './Screens/payment';

import auth from "@react-native-firebase/auth"

const Stack = createStackNavigator();

function App() {

  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      // Check if the user is signed in on app launch
      const user = auth().currentUser;

      setIsLoggedIn(!!user);
      setIsLoading(false);
    };

    checkLoginStatus();

    // Set up the authentication state observer
    const unsubscribe = auth().onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });

    // Clean up the observer when the component is unmounted
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setIsSplashVisible(false);
      }, 2000); // Wait for 2 seconds
    } 
  }, [isLoading]);  

  if (isSplashVisible) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn?
        <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown:false}}/>
        : (
          <>
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen}/>          
          </>
        )
        }
        <Stack.Screen name="Schedule" component={ScheduleScreen}/>
        <Stack.Screen name="PlaceOrder" component={PlaceOrderScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    display: 'flex',
    backgroundColor: '#BFBBBB',
  },
});

export default App;
