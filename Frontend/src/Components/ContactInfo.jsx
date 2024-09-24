// src/ContactInfo.js
import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';  // Importing icons
import '../CSS/ContactPage.css';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2>Contact Information</h2>
      <div className="info-item">
        <FaEnvelope className="info-icon" />
        <p>Codenest04@gmail.com</p>
      </div>
      <div className="info-item">
        <FaPhone className="info-icon" />
        <p>Phone: +1234567890</p>
      </div>
      <div className="info-item">
        <FaMapMarkerAlt className="info-icon" />
        <p>Las Vegas</p>
      </div>
    </div>
  );
};

export default ContactInfo;
