import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../CSS/Navbar.module.css";
import logo from "../assets/logo.png";
import search_w from "../assets/search-b.png";
import lightToggle from "../assets/day.png";
import darkToggle from "../assets/night.png";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const goToLoginPage = () => {
    navigate("/login");
  };

  const goToSignUpPage = () => {
    navigate("/signup");
  };

  return (
    <div className={styles["navbar-container"]}>
      <div className={darkMode ? styles["navbar-dark"] : styles["navbar-light"]}>
        <img src={logo} alt="logo" className={styles["navbar-logo"]} />
        <p className={styles["navbar-tagline"]}>Empowering the Next Gen of Coders</p>

        <div className={styles["navbar-search-box"]}>
          <select>
            <option value="all">All Categories</option>
            <option value="courses">Courses</option>
            <option value="events">Events</option>
            <option value="shop">Shop</option>
          </select>
          <input type="text" placeholder="Search" />
          <img src={search_w} alt="search-icon" />
        </div>

        <ul className={styles["navbar-list"]}>
          <li className={styles["navbar-list-item"]}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles["navbar-list-item"]}>
            <Link to="/courses">Courses</Link>
          </li>
          <li className={styles["navbar-list-item"]}>
            <Link to="/events">Events</Link>
          </li>
          <li className={styles["navbar-list-item"]}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={styles["navbar-list-item"]}>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <div className={styles["navbar-right-actions"]}>
          <button className={`${styles["navbar-btn"]} ${styles["navbar-btn-login"]}`} onClick={goToLoginPage}>
            Login
          </button>
          <button className={`${styles["navbar-btn"]} ${styles["navbar-btn-signup"]}`} onClick={goToSignUpPage}>
            Sign Up
          </button>
          <div className={styles["navbar-toggle-icon"]} onClick={toggleMode}>
            <img src={darkMode ? lightToggle : darkToggle} alt="toggle-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
