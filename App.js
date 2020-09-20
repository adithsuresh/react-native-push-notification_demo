import React, {useEffect} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import FirebaseController, {getFCMToken} from './components/services/FirebaseController';
import PNController, {showNotification} from './components/services/PNController';

const App = () => {
  useEffect(() => {
    console.log(`Running on ${__DEV__ ? 'DEVELOPMENT' : 'PRODUCTION'} mode`);
  }, []);

  const handleButtonPress = async () => {
    showNotification(
      'Local Notification',
      'This is a local notification message sent via react-native-push-notification.',
    );
    let fcmToken = await getFCMToken();
    console.log(fcmToken);
  };

  return (
    <>
      <PNController />
      <FirebaseController />
      <View style={styles.container}>
        <Text>Press the button below to trigger the notification</Text>
        <View style={{marginTop: 20}}>
          <Button title="Local Push Notification" onPress={handleButtonPress} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
});

export default App;
