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
      create: 'Created with HTML, CSS, JavaScript & PHP',
      info: 'This portfolio website serves as a showcase for my personal front-end development endeavors. Explore a curated collection of projects that highlight my skills in HTML, CSS, JavaScript, and PHP. Discover the intersection of creativity and functionality through my work, each project crafted with passion and a commitment to delivering an engaging user experience.',
      demoLink: 'https://scottmartinezportfolio.com/',
      codeLink: 'https://github.com/scottmtinez/Portfolio',
    },
    {
      id: 'projects-MovieInsider-image',
      title: 'MOVIE INSIDER',
      create: 'Created with HTML, CSS, React.js, Node.js, Firebase, MySQL, & API',
      info: 'Engineered to offer users seamless access to a vast movie database, this platform empowers users to effortlessly search for any movie through an intuitive search bar. Leveraging the power of APIs, the platform dynamically populates results based on user queries. Developed using cutting-edge technologies including React.js, Node.js, HTML, CSS, and integrated with MySQL, Firebase, and additional APIs, this project showcases my proficiency in creating interactive and data-driven web applications.',
      demoLink: 'https://example.com/demo2',
      codeLink: 'https://example.com/code2',
    },
    {
      id: 'projects-RecipeWebsite-image',
      title: 'MY RECIPES',
      create: 'Created with HTML, CSS, JavaScript, PHP, & MySQL',
      info: 'Crafted as a dynamic fusion of a social media platform and a recipe-sharing hub, this web-based application empowers users to create personalized accounts, fostering a vibrant community of culinary enthusiasts. The platform facilitates seamless exploration and discovery of a diverse array of recipes through an interactive Discover page. Developed with a tech stack encompassing HTML, CSS, Node.js, JavaScript, and MySQL, this project showcases my proficiency in building engaging and interactive web experiences.',
      demoLink: 'https://example.com/demo3',
      codeLink: 'https://example.com/code3',
    },
    {
      id: 'projects-Project4-image',
      title: 'COMING SOON...',
      create: 'Created with HTML, CSS, Node.js, React.js, Firebase, MySQL, & API',
      info: 'Packed AI',
      demoLink: 'https://example.com/demo4',
      codeLink: 'https://example.com/code4',
    },
    {
      id: 'projects-Project5-image',
      title: 'COMING SOON...',
      create: '',
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
                <p className='project-info-style'>{project.create}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;


