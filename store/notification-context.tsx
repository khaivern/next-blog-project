import React, { createContext, useEffect, useState } from 'react';
import { Notification } from '../models';

let timer: NodeJS.Timeout;

const NotificationContext = createContext({
  notification: {}, // message, status, error
  sendNotification: (notification: Notification) => {},
  clearNotification: () => {},
});

export const NotificationContextProvider: React.FC = (props) => {
  const [notification, setNotification] = useState<Notification | null>(null);

  const sendNotification = (notification: Notification) => {
    setNotification(notification);
  };

  const clearNotification = () => {
    setNotification(null);
  };

  const context = {
    notification: { notification },
    sendNotification,
    clearNotification,
  };

  useEffect(() => {
    if (notification) {
      timer = setTimeout(() => {
        setNotification(null);
      }, 5000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [notification]);

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
