import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from 'emailjs-com';
import apiKeys from '../../constants/apikeys';

import './style.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('');
  const [date, setDate] = useState(new Date());
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('gmail', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
      .then(result => {
        alert('Message Sent.', result.text);
      },
      error => {
        alert('An error occured. Please try again.', error.text);
      });
  }

  return (
    <section className="contact-us">
      <h2>Contact Us</h2>
      <form className="contact-us-form" onSubmit={handleSubmit}>
        <label for="name">Name</label>
        <input 
          name="name" 
          id="name"
          type="text" 
          value={name} 
          onChange={e => setName(e.target.value)} 
        />

        <label for="email">Email</label>
        <input 
          name="email" 
          id="email"
          type="text" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
        />

        <label for="email">Interest</label>
        <input 
          name="interest" 
          type="text" 
          value={interest} 
          onChange={e => setInterest(e.target.value)} 
        />

        <label for="date">Date</label>
        <DatePicker 
          name="date" 
          id="date"
          selected={date} 
          onChange={date => setDate(date)} 
        />

        <label for="message">Message</label>
        <textarea 
          name="message" 
          id="message"
          type="text" 
          value={message} 
          onChange={e => setMessage(e.target.value)} 
          rows="5"
        />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactUs; 