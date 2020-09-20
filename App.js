import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {getFCMToken} from './components/services/FirebaseController';
import PNController, {showNotification} from './components/services/PNController';

const App = () => {
  const handleButtonPress = async () => {
    showNotification(
      'Local Notification',
      'This is a local notification message sent via react-native-push-notification.',
    );
    let fcmToken = await getFCMToken();
    console.log(fcmToken);
  };

  return (
    <View style={styles.container}>
      <Text>Press a button to trigger the notification</Text>
      <View style={{marginTop: 20}}>
        <Button title={'Local Push Notification'} onPress={handleButtonPress} />
      </View>
      <PNController />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default App;
