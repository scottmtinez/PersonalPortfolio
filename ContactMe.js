import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactMe.css';

function ContactMe() {
  const form = useRef();
  const [notification, setNotification] = useState({ message: '', type: '' });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('HIDDEN', 'HIDDEN', form.current, 'HIDDEN')
      .then((result) => {
          console.log(result.text);
          setNotification({ message: 'Message sent successfully!', type: 'success' });
          setTimeout(() => {
            setNotification({ message: '', type: '' });
            window.location.reload(); // Refresh the page after 3 seconds
          }, 3000); // Remove notification after 3 seconds
      }, (error) => {
          console.log(error.text);
          setNotification({ message: 'An error occurred, please try again.', type: 'error' });
          setTimeout(() => {
            setNotification({ message: '', type: '' });
          }, 3000); // Remove notification after 3 seconds
      });
  };

  return (
    <div className='contactMe' id='contactMe'>
      <h1 className='contactMe-title'>Contact Me</h1>
      <form className='contactMe-form' ref={form} onSubmit={sendEmail}>

        <div className='form-group'>
          <input type='text' className='name' id='name' placeholder='Name' name='name' required></input>
        </div>

        <div className='form-group'>
          <input type='text' className='company' id='company' placeholder='Company' name='company'></input>
        </div>

        <div className='form-group'>
          <input type='email' className='email' id='email' placeholder='Email' name='email' required></input>
        </div>

        <div className='form-group'>
          <textarea className='message' id='message' placeholder='Message' name='message' required></textarea>
        </div>

        <input type='submit' className='submit-message' value='Send Message'></input>

        {notification.message && (
          <div className={`notification ${notification.type}`}>
            {notification.message}
          </div>
        )}
      
      </form>
    </div>
  );
}

export default ContactMe;
