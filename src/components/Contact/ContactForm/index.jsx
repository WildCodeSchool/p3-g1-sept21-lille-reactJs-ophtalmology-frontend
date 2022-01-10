import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import form from 'emailjs-com';
import SFormContact from './style';

export default function ContactForm() {
  const [lastname, setLastname] = useState(' ');
  const [firstname, setFirstname] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [message, setMessage] = useState(' ');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        '????????????',
        'template_xs4v5rj',
        form.current,
        'user_reS7eKi4CNuk1vUkF4zw9'
      )
      .then(() => {
        setLastname('');
        setFirstname('');
        setEmail('');
        setMessage('');
      });
  };

  return (
    <SFormContact ref={form} id="myForm">
      <label htmlFor="lastname">
        Nom :
        <input
          type="text"
          id="lastname"
          name="lastname"
          onChange={(e) => setLastname(e.target.value)}
          placeholder="nom *"
          value={lastname}
          autoComplete="off"
        />
      </label>
      <label htmlFor="firstname">
        Prénom :
        <input
          type="text"
          id="firstname"
          name="firstname"
          onChange={(e) => setFirstname(e.target.value)}
          placeholder="nom *"
          value={firstname}
          autoComplete="off"
        />
      </label>
      <label htmlFor="email">
        Email :
        <input
          type="mail"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email *"
          value={email}
          autoComplete="off"
        />
      </label>
      <label htmlFor="message">
        Message :
        <textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message *"
          value={message}
        />
      </label>
      <input
        className="button"
        type="button"
        value="Envoyer"
        onClick={sendEmail}
      />
    </SFormContact>
  );
}
