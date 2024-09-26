import React from 'react';
import Projects from '../components/Projects';
import './ProjectsPage.css'; // Importing custom CSS for styling

const ProjectsPage = () => {
  return (
    <section className="projects-page">
      <div className="container">
        <h2 className="projects-heading">My Projects</h2>
        <p className="projects-description">
          Here are some of the projects I have worked on, showcasing my skills in web development, design, and other technologies.
        </p>
        <Projects />
      </div>
    </section>
  );
};

export default ProjectsPage;
