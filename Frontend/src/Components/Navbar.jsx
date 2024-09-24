import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import styles from "../CSS/Navbar.module.css";
import logo from "../assets/logo.png";
import search_w from "../assets/search-b.png";
import lightToggle from "../assets/day.png"; // Light mode toggle image
import darkToggle from "../assets/night.png"; // Dark mode toggle image

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const goToLoginPage = () => {
    navigate("/login");
  };

  const gotToSignUpPage = () => {
    navigate("/signup");
  };

  return (
    <div className={styles.navbar}>
      <div className={`navbar ${darkMode ? "dark" : "light"}`}>
        <img src={logo} alt="logo" className="logo" />
        <p className="tagline">Empowering the Next Gen of Coders</p>

        <div className="search-box">
          <select>
            <option value="all">All Categories</option>
            <option value="courses">Courses</option>
            <option value="events">Events</option>
            <option value="shop">Shop</option>
          </select>
          <input type="text" placeholder="Search" />
          <img src={search_w} alt="search-icon" />
        </div>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <div className="right-actions">
          <button className="btn btn-login" onClick={goToLoginPage}>
            Login
          </button>
          <button className="btn btn-signup" onClick={gotToSignUpPage}>
            Sign Up
          </button>
          <div className="toggle-icon" onClick={toggleMode}>
            <img src={darkMode ? lightToggle : darkToggle} alt="toggle-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
