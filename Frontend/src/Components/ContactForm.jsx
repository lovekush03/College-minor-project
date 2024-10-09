import React, { useState } from 'react';
import '../CSS/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to an API or email service)
    console.log(formData);
    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <form className="contact-form-container" onSubmit={handleSubmit}>
      <h2 className="contact-form-title">Get in Touch</h2>
      <label className="contact-form-label">
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="contact-form-input"
        />
      </label>
      <label className="contact-form-label">
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="contact-form-input"
        />
      </label>
      <label className="contact-form-label">
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="contact-form-textarea"
        />
      </label>
      <button type="submit" className="contact-form-button">Send</button>
    </form>
  );
};

export default ContactForm;