import Head from 'next/head';
import React, { Fragment, useContext } from 'react';
import ContactForm from '../../components/contact/contact-form';
import Notification from '../../components/ui/notification';
import NotificationContext from '../../store/notification-context';

const ContactPage = () => {
  const { message, title, status } =
    useContext(NotificationContext).notification;
  const hasNotification = message && title && status;
  return (
    <Fragment>
      <Head>
        <title>Contact the memer</title>
        <meta
          name='description'
          content='You can send a message but you shall not get a reply'
        />
      </Head>
      {hasNotification && (
        <Notification message={message} status={status} title={title} />
      )}
      <ContactForm />
    </Fragment>
  );
};

export default ContactPage;
