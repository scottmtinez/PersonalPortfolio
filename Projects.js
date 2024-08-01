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
      id: 'projects-newPortfolio-image',
      title: 'MY PORTFOLIO',
      create: 'Created with React.js, Email.js, HTML, CSS & Bootstraps',
      info: 'This is my updated personal portfolio. It showcases my full-stack development skills, including expertise in front-end and back-end technologies, and highlights my ability to create seamless, user-friendly web applications.',
      demoLink: 'https://scottmartinezportfolio.com/',
      codeLink: 'https://github.com/scottmtinez/PersonalPortfolio',
      figma: '',
    },
    {
      id: 'projects-portfolio-image',
      title: 'OLD PORTFOLIO',
      create: 'Created with HTML, CSS, JavaScript & PHP',
      info: 'This my old portfolio website that serves as a showcase for my personal front-end development endeavors. Explore a curated collection of projects that highlight my skills in HTML, CSS, JavaScript, and PHP. Discover the intersection of creativity and functionality through my work, each project crafted with passion and a commitment to delivering an engaging user experience.',
      demoLink: 'http://oldportfolio.scottmartinezportfolio.com/',
      codeLink: 'https://github.com/scottmtinez/Portfolio',
      figma: '',
    },
    {
      id: 'projects-MovieInsider-image',
      title: 'MOVIE INSIDER',
      create: 'Created with HTML, CSS, React.js, Node.js, Firebase, MySQL, & API',
      info: 'Engineered to offer users seamless access to a vast movie database, this platform empowers users to effortlessly search for any movie through an intuitive search bar. Leveraging the power of APIs, the platform dynamically populates results based on user queries. Developed using cutting-edge technologies including React.js, Node.js, HTML, CSS, and integrated with MySQL, Firebase, and additional APIs, this project showcases my proficiency in creating interactive and data-driven web applications.',
      demoLink: 'https://movieinsider.scottmartinezportfolio.com/',
      codeLink: 'https://github.com/scottmtinez/Movie-Search-Web-Application',
      figma: '',
    },
    {
      id: 'projects-RecipeWebsite-image',
      title: 'MY RECIPES',
      create: 'Created with HTML, CSS, JavaScript, PHP, & MySQL',
      info: 'Crafted as a dynamic fusion of a social media platform and a recipe-sharing hub, this web-based application empowers users to create personalized accounts, fostering a vibrant community of culinary enthusiasts. The platform facilitates seamless exploration and discovery of a diverse array of recipes through an interactive Discover page. Developed with a tech stack encompassing HTML, CSS, Node.js, JavaScript, and MySQL, this project showcases my proficiency in building engaging and interactive web experiences.',
      demoLink: 'https://uwwrecipewebsite.scottmartinezportfolio.com/',
      codeLink: 'https://github.com/scottmtinez/recipeapp',
      figma: '',
    },
    {
      id: 'projects-Workout-image',
      title: 'WORKOUT TRACKER',
      create: 'Created with React.js, HTML, CSS, MySQL, & MongoDB',
      info: 'Workout Website',
      demoLink: 'http://workouttracker.scottmartinezportfolio.com/',
      codeLink: 'https://github.com/scottmtinez/WorkoutTracker',
      figma: '',
    },
    {
      id: 'projects-RestroomFinder-image',
      title: 'RESTROOM FINDER',
      create: 'Created with React.js, HTML, CSS, MySQL, & MongoDB',
      info: 'Restroom Finder',
      demoLink: 'http://restroomfinder.scottmartinezportfolio.com/',
      codeLink: 'https://github.com/scottmtinez/RestroomFinder',
      figma: '',
    },

    
  ];


  return (
    <div className='projects' id='projects'>
      <h1 className='projects-title'>Projects</h1>
      <div className='projects-container'>

        {projects.map((project, index) => (

          <div className='projects-box' id={project.id} key={project.id}>
            <div className='project-box-title'>{project.title}</div>
            <button className='project-btn-Demo' onClick={() => portfolioDemo(project.demoLink)}>DEMO</button>
            <button className='project-btn-Code' onClick={() => portfolioCode(project.codeLink)}>CODE</button>
            <button className='project-btn-Info' onClick={() => toggleDropdown(index)}><i className="bi bi-info-square"></i></button>

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
