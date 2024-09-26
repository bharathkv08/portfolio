import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import custom CSS for styling

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-container">
        <div className="hero-content">
          <h1>Hello, I'm <span className="highlight">[Bharath KV]</span></h1>
          <p className="hero-subtitle">
            A <span className="highlight">[Student]</span> passionate about crafting beautiful & functional web experiences.
          </p>
          <p>
            With expertise in <span className="highlight">React.js</span>, <span className="highlight">JavaScript</span>, and <span className="highlight">web development</span>, I build responsive and scalable web applications that deliver excellent user experiences.
          </p>
          <Link to="/projects" className="cta-btn">
            View My Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
