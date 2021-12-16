import { useState } from 'react';
import SFormContact from './style';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    firstname: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    const newForm = { ...form };
    newForm[e.target.name] = e.target.value;
    setForm(newForm);
  };

  return (
    <SFormContact id="myForm">
      <label htmlFor="name">
        Nom :
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <label htmlFor="firstname">
        Prénom :
        <input type="text" name="firstname" onChange={handleChange} />
      </label>
      <label htmlFor="email">
        Email :
        <input type="text" name="email" onChange={handleChange} />
      </label>
      <label htmlFor="message">
        Message :
        <textarea id="msg" name="message" onChange={handleChange} />
      </label>
      <input className="button" type="submit" value="Envoyer !" />
    </SFormContact>
  );
}
