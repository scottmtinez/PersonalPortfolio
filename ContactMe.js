import React from 'react';
import './ContactMe.css';

function ContactMe() {
  return (
    <div className='contactMe' id='contactMe'>
      <h1 className='contactMe-title'>Contact Me</h1>
      <form className='contactMe-form'>
        <input type='text'></input>
        <input type='text'></input>
        <input type='text'></input>
        <input type='submit'></input> 
      </form>
    </div>
  );
}

export default ContactMe;
