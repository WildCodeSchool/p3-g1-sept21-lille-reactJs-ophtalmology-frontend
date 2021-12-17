import { useState } from 'react';
import SFormContact from './style';

export default function ContactForm() {
  const [form, setForm] = useState({
    lastname: '',
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
      <label htmlFor="lastname">
        Nom :
        <input type="text" name="lastname" onChange={handleChange} />
      </label>
      <label htmlFor="firstname">
        Prénom :
        <input type="text" name="firstname" onChange={handleChange} />
      </label>
      <label htmlFor="email">
        Email :
        <input type="email" name="email" onChange={handleChange} />
      </label>
      <label htmlFor="message">
        Message :
        <textarea name="message" onChange={handleChange} />
      </label>
      <input className="button" type="submit" value="Envoyer !" />
    </SFormContact>
  );
}
