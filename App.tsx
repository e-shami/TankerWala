import React from 'react';
import {
  SafeAreaView, StyleSheet, Dimensions
} from "react-native";
import {Login} from './Pages/login';
import {Register} from "./Pages/register"


const window = Dimensions.get('window');
const screen = {
    height: window.height,
    width: window.width
}

function App() {

  return (
    <SafeAreaView style={styles.background}>
      <Login screen={screen}
     />

      {/* <Register height={screen.height} /> */}
    </SafeAreaView>
    

  );
}

const styles = StyleSheet.create({
    background:{
        display: "flex",
        backgroundColor: "#BFBBBB",
    }
})

export default App;
