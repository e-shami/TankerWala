import { View, Text } from 'react-native'
import React from 'react'

import Map from '../Components/Map';
import { Button } from 'react-native-paper';

export default function PlaceOrder({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{textAlign: 'center', marginBottom: 20}}>let's assume you have placed order to the vendor</Text>
        {/* <Map /> */}
        <Button mode='outlined'
        buttonColor='#655959'
        labelStyle={{color: 'white', fontSize: 20}}
        onPress={() => navigation.navigate('Payment')}>
          Place Order
        </Button>
    </View>
  )
}