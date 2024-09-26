import React from "react";
import "./About.css"; // Import custom CSS for styling
import profileImage from "./profileImage.jpg"; // Optional profile image

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h1>About Me</h1>
          <p>
            Hello! I'm <span className="highlight">[Your Name]</span>, a passionate <span className="highlight">Frontend Developer</span> with a knack for creating
            beautiful and functional web applications. I specialize in <span className="highlight">React.js</span> and have a deep interest in responsive design,
            performance optimization, and user experience.
          </p>
          <p>
            Over the past few years, I’ve developed various projects, both professionally and personally. I am continuously learning new technologies and love
            experimenting with modern tools like <span className="highlight">JavaScript (ES6+)</span>, <span className="highlight">CSS3</span>, <span className="highlight">Node.js</span>, and <span className="highlight">REST APIs</span>. When I'm not coding, you'll find me exploring design trends or working on open-source projects.
          </p>
          <div className="skills-section">
            <h2>Skills</h2>
            <ul className="skills-list">
              <li>React.js & Redux</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5 & CSS3</li>
              <li>Node.js & Express</li>
              <li>Responsive Web Design</li>
              <li>Git & GitHub</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
        </div>
        <div className="about-image-container">
          {/* Optional Profile Image */}
          <img src={profileImage} alt="Profile" className="about-image" />
        </div>
      </div>
    </section>
  );
};

export default About;
