import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import '../CSS/ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-page-heading">Contact Us</h1>
      <div className="contact-section">
        <div className="contact-left">
          <ContactInfo />
        </div>
        <div className="contact-right">
          <ContactForm />
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.011989964682!2d-122.4194181846812!3d37.77492927975828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581c7f0a0a73d%3A0x5fa69d73d5a7b220!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1633797283155!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                title="Map"
              ></iframe>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-info">
              <h2>CodeNest</h2>
              <p>Empowering the next generation of coders.</p>
              <div className="footer-links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/events">Events</a>
                <a href="/contact">Contact</a>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Contact Details</h3>
              <p>Email: info@codenest.com</p>
              <p>Phone: +123 456 7890</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
