import React, { useState } from 'react';
import axios from 'axios';
import "../CSS/Login.css";

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [emailStatus, setEmailStatus] = useState('');

  const validateEmail = (email) => {
    // Basic regex for email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let valid = true;

    // Basic validations
    if (!validateEmail(email)) {
      setEmailError('Invalid email format');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      valid = false;
    } else {
      setConfirmPasswordError('');
    }

    if (valid) {
      try {
        // Example login request
        const response = await axios.post('/api/login', { email, password });
        if (response.data.success) {
          setEmailStatus(response.data.message);
          // Redirect or update UI after successful login
        } else {
          setEmailStatus(response.data.message);
        }
      } catch (error) {
        console.error('Login Error:', error);
        setEmailStatus('Error during login');
      }
    }
  };

  return (
    <div className="login-page">
      <div className="main-container container">
        <div className="left">
          <div className="logo-container animate__animated animate__fadeInDown m-auto mb-3">
            <h1 className="logo text-light">CodeNest</h1>
            <p className="logo-text text-center text-light">CN</p>
          </div>
          <h2 className="animate__animated animate__fadeInUp text-center">
            Empowering The Next Generation of Coders
          </h2>
        </div>
        <div className="right">
          <div className="form-container animate__animated animate__fadeInUp">
            <h1 className="pb-1 font-heading">Sign Up</h1>
            <p className="font-text">Hi, Welcome </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label font-text">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <div className="text-danger">{emailError}</div>}
                <div id="emailHelp" className="form-text font-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label font-text">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && <div className="text-danger">{passwordError}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label font-text">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {confirmPasswordError && <div className="text-danger">{confirmPasswordError}</div>}
              </div>
              <div className="txt">Already Have an account?</div>
              <button type="submit" className="btn btn-primary text-light w-100 mt-2 font-text">
                Sign Up
              </button>
            </form>
            {emailStatus && <div className="mt-3">{emailStatus}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
