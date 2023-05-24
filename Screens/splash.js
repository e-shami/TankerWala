import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

const SplashScreen = () => {
  useEffect(() => {
    setTimeout(() => {
    }, 2000); // Wait for 2 seconds
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default SplashScreen;
