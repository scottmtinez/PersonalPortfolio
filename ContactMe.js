import React from 'react';
import './ContactMe.css';

function ContactMe() {
  return (
    <div className='contactMe' id='contactMe'>
      <h1 className='contactMe-title'>Contact Me</h1>
      <form className='contactMe-form'>

        <div className='form-group'>
          <input type='text' className='name' id='name' placeholder='Name' required></input>
        </div>

        <div className='form-group'>
          <input type='text' className='company' id='company' placeholder='Company'></input>
        </div>

        <div className='form-group'>
          <input type='email' className='email' id='email' placeholder='Email' required></input>
        </div>

        <div className='form-group'>
          <textarea className='message' id='message' placeholder='Message' required></textarea>
        </div>

        <input type='submit' className='message' value='Send Message'></input>
      
      </form>
    </div>
  );
}

export default ContactMe;
