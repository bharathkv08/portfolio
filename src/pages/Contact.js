import React from 'react';
import './Contact.css'; // Importing custom CSS

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Your Message" rows="5" required></textarea>
        </div>
        <button type="submit" className="btn-submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
