import React, {useEffect} from 'react';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

const PNController = (props) => {
  useEffect(() => {
    console.log('PushController props:', props);
  }, [props]);

  useEffect(() => {
    console.log('PushController mount');

    let pnConfig = {
      onRegister: (token) => {
        console.log('TOKEN:', token);
      },
      onNotification: (notification) => {
        notification.finish(PushNotificationIOS.FetchResult.NoData);
        console.log('NOTIFICATION:', notification);
      },
      onAction: (notification) => {
        console.log('ACTION:', notification.action);
      },
      onRegistrationError: (err) => {
        console.log(err);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      senderID: '576128616067',
      popInitialNotification: true,
      requestPermissions: true,
    };

    PushNotification.configure(pnConfig);
  }, []);

  return null;
};

export const showNotification = (title = 'Notification Title', message = 'Notification Message') => {
  title = title.toString();
  message = message.toString();
  PushNotification.localNotification({
    title: title,
    message: message,
    autoCancel: true,
    vibrate: true,
    vibration: 300,
    playSound: true,
    soundName: 'default',
  });
};

export default PNController;
