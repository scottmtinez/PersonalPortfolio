import React, { useState } from 'react';
import './Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Projects() {
  const [dropdownStates, setDropdownStates] = useState([false, false, false, false, false]);

  const portfolioDemo = (url) => {
    window.location.href = url;
  };

  const portfolioCode = (url) => {
    window.location.href = url;
  };

  const toggleDropdown = (index) => {
    setDropdownStates(dropdownStates.map((state, i) => (i === index ? !state : state)));
  };

  const projects = [
    {
      id: 'projects-portfolio-image',
      title: 'OLD PORTFOLIO',
      info: 'HTML, CSS, JavaScript & PHP',
      demoLink: 'https://scottmartinezportfolio.com/',
      codeLink: 'https://github.com/scottmtinez/Portfolio',
    },
    {
      id: 'projects-MovieInsider-image',
      title: 'MOVIE INSIDER',
      info: 'Test',
      demoLink: 'https://example.com/demo2',
      codeLink: 'https://example.com/code2',
    },
    {
      id: 'projects-RecipeWebsite-image',
      title: 'MY RECIPES',
      info: 'Test',
      demoLink: 'https://example.com/demo3',
      codeLink: 'https://example.com/code3',
    },
    {
      id: 'projects-Project4-image',
      title: 'COMING SOON...',
      info: 'Test',
      demoLink: 'https://example.com/demo4',
      codeLink: 'https://example.com/code4',
    },
    {
      id: 'projects-Project5-image',
      title: 'COMING SOON...',
      info: 'Test',
      demoLink: 'https://example.com/demo5',
      codeLink: 'https://example.com/code5',
    },
  ];

  return (
    <div className='projects' id='projects'>
      <h1 className='projects-title'>Projects</h1>
      <div className='projects-container'>
        {projects.map((project, index) => (
          <div className='projects-box' id={project.id} key={project.id}>
            <div className='project-picture-container'>{project.title}</div>
            <button className='project-btn-Demo' onClick={() => portfolioDemo(project.demoLink)}>DEMO</button>
            <button className='project-btn-Code' onClick={() => portfolioCode(project.codeLink)}>CODE</button>
            <button className='project-btn-Info' onClick={() => toggleDropdown(index)}>
              <i className="bi bi-info-square"></i>
            </button>
            {dropdownStates[index] && (
              <div className='dropdown-content'>
                <p className='project-info-style'>{project.info}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

