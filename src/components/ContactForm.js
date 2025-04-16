// src/components/ContactForm.jsx
import React, { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
  // Initialize EmailJS with Public Key from .env
  useEffect(() => {
    emailjs.init({
      publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY, // From .env
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    // Send form data via EmailJS
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,   // From .env
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,  // From .env
      form
    )
    .then(() => {
      console.log('SUCCESS!');
      alert('Message sent! SherPepe’s got your back 🐸');
      form.reset(); // Clear form on success
    }, (error) => {
      console.log('FAILED...', error.text);
      alert('Oops! Something went wrong. Try again later.');
    });
  };

  return (
    <div className="contact-form">
      <h2>Hit Up SherPepe! 📩</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name, Fam"
          required
          className="input-field"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email, No Cap"
          required
          className="input-field"
        />
        <textarea
          name="message"
          placeholder="Spill the Tea..."
          required
          className="textarea-field"
        ></textarea>
        <button type="submit" className="submit-btn">Send It! 🚀</button>
      </form>
    </div>
  );
};

export default ContactForm;