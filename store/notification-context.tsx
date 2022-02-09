import React, { createContext, useEffect, useState } from 'react';
import { Notification } from '../models';

let timer: NodeJS.Timeout;

const defaulNotificationState = {
  title: null,
  message: null,
  status: null,
};

interface ContextState {
  notification: Notification;
  sendNotification: (notification: Notification) => void;
  clearNotification: () => void;
}

const NotificationContext = createContext({
  notification: {
    title: null,
    message: null,
    status: null,
  }, // message, status, error
  sendNotification: (notification: Notification) => {},
  clearNotification: () => {},
} as ContextState);

export const NotificationContextProvider: React.FC = (props) => {
  const [notification, setNotification] = useState<Notification>(
    defaulNotificationState
  );

  const sendNotification = (notification: Notification) => {
    setNotification(notification);
  };

  const clearNotification = () => {
    setNotification(defaulNotificationState);
  };

  const context = {
    notification: { ...notification },
    sendNotification,
    clearNotification,
  };

  useEffect(() => {
    if (notification) {
      timer = setTimeout(() => {
        setNotification(defaulNotificationState);
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
