import firebase from '@react-native-firebase/app';
import '@react-native-firebase/messaging';
import React, {useEffect} from 'react';
import {View} from 'react-native';

const FirebaseController = (props) => {
  useEffect(() => {
    console.log('FirebaseController mount');
  }, []);

  useEffect(() => {
    console.log('FirebaseController props:', props);
  }, [props]);

  return <View />;
};

const getToken = async () => {
  try {
    const token = await firebase.messaging().getToken();
    if (token) {
      return token;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getFCMToken = async () => {
  try {
    const authorized = await firebase.messaging().hasPermission();
    const fcmToken = await getToken();
    if (authorized) {
      return fcmToken;
    } else {
      await firebase.messaging().requestPermission();
      return fcmToken;
    }
  } catch (error) {
    console.log(error);
  }
};

export default FirebaseController;
