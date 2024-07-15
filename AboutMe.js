import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <div>
      <div className='aboutMe-container' id='aboutMe'>
        <div className='aboutMe-box'>
          <h1 className='aboutMe-title fade-in'>About Me</h1>
          <p className='aboutMe-desc'>
            I am Scott Martinez, a recent graduate with a Bachelor of Science in Computer Science from the University of Wisconsin - 
            Whitewater, specializing in Full-Stack Development, Database Manangement & AI Development. I posses a strong foundate in
            Html, CSS, PHP, Node.js, React.js, MySQL & I am consistently staying up to date with the lastest frameworks and technologies 
            to improve my programming skills. <br/><br/>

            Throughout my time at Whitewater, I have led a small team of developers to design and build a social media like web
            application and present it in front of our client. I built differet websites and web applications that use softwares like MySQL, 
            Firebase, and MongoDB. I created a security system using Linux and Python, to check to see if a file has been tampered with.
            <br/><br/>

            After graduating from Whitewater, I self taught myself how to create an AI system that uses React.js to recommend 
            clothing and items for a vacation that user may be going on in the future. The AI system then collects the users
            vacation information that gets the weather data of that location and then the system is able to recommend the correct
            clothing and items for the vacation. 
            <br/><br/>

            These experiences have honed my technical skills and enhanced my ability to communicate complex ideas effectively to 
            stakeholders.
            <br/><br/>

            I am highly motivated to leverage my expertise in front-end development, Full-Stack Development, Database Management, 
            and AI Development to create innovative, user-centric solutions that enhance the digital experience for end-users. 
            I am eager to embark on a career where I can combine my technical proficiency and creativity to deliver compelling and 
            immersive web experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
