import axios from 'axios';
import React, { useContext, useRef } from 'react';
import NotificationContext from '../../store/notification-context';

import classes from './contact-form.module.css';

const ContactForm = () => {
  const notiCtx = useContext(NotificationContext);
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const submitFormHandler: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    notiCtx.sendNotification({
      title: 'Sending...',
      message: "Your message is on it's way",
      status: 'pending',
    });

    try {
      const response = await axios({
        method: 'POST',
        url: '/api/contact',
        data: {
          name: nameRef.current?.value,
          email: emailRef.current?.value,
          message: messageRef.current?.value,
        },
      });
      const data = response.data;

      if (response.status !== 201) {
        throw new Error('Failed to send your message');
      }

      notiCtx.sendNotification({
        title: 'Success !!',
        message: 'Your message has reached our collection base safely',
        status: 'success',
      });
    } catch (err: any) {
      notiCtx.sendNotification({
        title: 'Noooooo...',
        message: err.message || 'Your message landed somewhere else',
        status: 'error',
      });
    }
  };

  return (
    <section className={classes.contact}>
      <h1>How may I be of help?</h1>
      <form className={classes.form} onSubmit={submitFormHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input type='email' id='email' ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' ref={nameRef} />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>Your Message</label>
          <textarea id='message' rows={5} ref={messageRef} />
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
