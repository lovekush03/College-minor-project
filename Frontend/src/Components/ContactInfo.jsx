import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';  // Importing icons
import '../CSS/ContactPage.css';

const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      <h2 className="contact-info-title">Contact Information</h2>
      <div className="contact-info-item">
        <FaEnvelope className="contact-info-icon" />
        <p className="contact-info-text">Email: Codenest04@gmail.com</p>
      </div>
      <div className="contact-info-item">
        <FaPhone className="contact-info-icon" />
        <p className="contact-info-text">Phone: +1234567890</p>
      </div>
      <div className="contact-info-item">
        <FaMapMarkerAlt className="contact-info-icon" />
        <p className="contact-info-text">Location: Las Vegas</p>
      </div>
    </div>
  );
};

export default ContactInfo;