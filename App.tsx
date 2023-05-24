import React, {useState, useEffect}from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import SplashScreen from './Screens/splash';
import LoginScreen from './Screens/login';
import RegisterScreen  from './Screens/register';
import DashboardScreen from './Screens/dashboard';
import HomeScreen from './Screens/Drawer/Home';
import auth from "@react-native-firebase/auth"

const Stack = createStackNavigator();

function App() {

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

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn?
        <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown:false}}/>
        : (
          <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen}/>
          </>
        )
        }
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
