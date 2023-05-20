import React from 'react';
import {
  SafeAreaView, StyleSheet, Dimensions
} from "react-native";
import {Login} from './Pages/login';


const window = Dimensions.get('window');
const screen = {
    height: window.height,
    width: window.width
}

function App() {

  return (
    <SafeAreaView style={styles.background}>
      <Login />
    </SafeAreaView>
    

  );
}

const styles = StyleSheet.create({
    background:{
        display: "flex",
        backgroundColor: "#BFBBBB",
        height: screen.height,
        width: screen.width
    }
})

export default App;
