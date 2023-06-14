import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {View, TouchableOpacity, Alert} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import {Text, Button} from 'react-native-paper'

import {CustomAlert} from '../Components/customAlert';

function Schedule({navigation}){
  const [selectedDate, setSelectedDate] = useState(null);
  const [saveClicked, setSaveClicked] = useState(false);
  const [message, setMessage] = useState('');

  const handleCancel = () => {
    setSelectedDate(null);
    navigation.navigate('Dashboard');
  };

  const handleSave = () => {
    if (selectedDate) {
      const extractedDate =(new Date(selectedDate))?.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
      setMessage(`Order Scheduled at ${extractedDate}`);
    } else {
      setMessage('Please select a date before saving.');
    }
    setSaveClicked(true);


    // to rerender the alert after once it has been showned.
    setTimeout(()=>{
      navigation.navigate('Dashboard');
    }, 2000)

  };
  const handleCheckAvailability = () => {
    // navigation.navigate('Avail');
    console.log('Checking availability...');
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text variant='headlineMedium'
        style={styles.title}>Schedule Order</Text>
        <CalendarPicker
          selectedStartDate={selectedDate}
          onDateChange={date => setSelectedDate(date)}
          selectedDayColor="#2ecc71"
        />
        <View style={styles.row}>
        <Button 
                        mode="contained"
                        buttonColor="#655959"
                        style={{marginTop:30}}
                        onPress={handleCancel}>
                        Cancel
                </Button>
                <Button 
                        mode="contained"
                        buttonColor="#655959"
                        style={{marginTop:30}}
                        onPress={handleSave}>
                        Save
                </Button>
        </View>

        <View>
        {saveClicked && 
          <CustomAlert message={message}/>}
        </View>

        <TouchableOpacity
          style={styles.checkAvailabilityButton}
          onPress={handleCheckAvailability}>
          <Text style={styles.checkAvailabilityButtonText}>
            Check Availability now?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  title: {
    marginTop: 30,
    fontWeight: 'bold',
    padding: 10,
    color: 'black',
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#000000',
    marginBottom: 50,
  },

  row:{
    marginTop: 30,
    padding:0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
},

  checkAvailabilityButton: {
    alignItems: 'center',
    padding: 50,
    marginTop: 20,
  },
  checkAvailabilityButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default Schedule;