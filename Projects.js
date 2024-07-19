import React from 'react';
import './Projects.css';

function Projects() {
  const portfolioDemo = () => {
    window.location.href = 'https://scottmartinezportfolio.com/'; 
  };

  const portfolioCode = () => {
    window.location.href = 'https://github.com/scottmtinez/Portfolio'; 
  };

  return (
    <div className='projects' id='projects'>
      <h1 className='projects-title'>Projects</h1>
      <div className='projects-container'>
        <div className='projects-box' id='projects-portfolio-image'>
          <div className='project-picture-container'>OLD PORTFOLIO</div>
          <button className='project-btn-Demo' onClick={portfolioDemo}>DEMO</button>
          <button className='project-btn-Code' onClick={portfolioCode}>CODE</button>
        </div>
        <div className='projects-box'>
          <div className='project-picture-container'></div> 
          <button className='project-btn-Demo'>DEMO</button>
          <button className='project-btn-Code'>CODE</button>
        </div>
        <div className='projects-box'>
          <div className='project-picture-container'></div>
          <button className='project-btn-Demo'>DEMO</button>
          <button className='project-btn-Code'>CODE</button>
        </div>
        <div className='projects-box'>
          <div className='project-picture-container'></div>
          <button className='project-btn-Demo'>DEMO</button>
          <button className='project-btn-Code'>CODE</button>
        </div>
        <div className='projects-box'>
          <div className='project-picture-container'></div>
          <button className='project-btn-Demo'>DEMO</button>
          <button className='project-btn-Code'>CODE</button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
