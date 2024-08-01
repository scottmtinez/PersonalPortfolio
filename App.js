import './App.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import  Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import emailjs from 'emailjs-com';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    sendNotification();
  }, []);

  const sendNotification = () => {
    const serviceID = 'HIDDEN';
    const templateID = 'HIDDEN';
    const userID = 'HIDDEN';

    const templateParams = {
      visit_time: new Date().toLocaleString(),
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
    .then((response) => {
      console.log('Email successfully sent!', response.status, response.text);
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
    });
  };

  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.5.0/font/bootstrap-icons.min.css" />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <footer className='footer'>Scott Martinez | Portfolio | 2024</footer>
    </div>
  );
}

export default App;
