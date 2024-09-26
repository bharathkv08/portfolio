import React, { useEffect, useState } from 'react';
import './Projects.css'; // Import custom CSS for styling
import axios from 'axios';

// Sample project data (excluding "Smart Grocery Store" and "Smart Library Management System")
const projects = [
    {
        _id: '2',
        title: 'Grocery Inventory Management',
        description: 'A system to manage grocery inventory with features for tracking stock and sales.',
        technologies: ['Java', 'MySQL'],
        link: 'https://yourinventorymanagement.com',
        github: 'https://github.com/yourusername/grocery-inventory-management',
    },
    {
        _id: '4',
        title: 'Library Book Recommendation System',
        description: 'A machine learning-based system to recommend books to users based on their preferences.',
        technologies: ['Python', 'Machine Learning', 'HTML', 'CSS'],
        link: 'https://yourbookrecommendations.com',
        github: 'https://github.com/yourusername/book-recommendation-system',
    },
];

const Projects = () => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    // Simulating fetching data with sample projects
    setProjectList(projects);
  }, []);

  return (
    <div className="projects-grid">
      {projectList.length > 0 ? (
        projectList.map(project => (
          <div key={project._id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            <div className="project-links">
              {project.link && (
                <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer">Live</a>
              )}
              {project.github && (
                <a href={project.github} className="btn" target="_blank" rel="noopener noreferrer">GitHub</a>
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="no-projects">No projects available.</div>
      )}
    </div>
  );
};

export default Projects;
