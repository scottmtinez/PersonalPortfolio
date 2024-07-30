import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactMe.css';

function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('HIDDEN', 'HIDDEN', form.current, 'HIDDEN')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('An error occurred, please try again.');
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
      
      </form>
    </div>
  );
}

export default ContactMe;
