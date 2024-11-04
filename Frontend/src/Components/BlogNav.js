import React, { useState } from "react";
import LightLogo from "../assets/day.png";
import DarkLogo from "../assets/night.png";

const BlogNav = ({toggleTheme}) => {
  const [mode, setMode] = useState("light");
  const [themeIcon , setThemeIcon] = useState(`${DarkLogo}`);
  const toggleMode = () => {
    if(mode === "dark"){
      setMode("light");
      toggleTheme("light");
      setThemeIcon(`${DarkLogo}`);
    }
    else{
      setMode("dark");
      toggleTheme("dark");
      setThemeIcon(`${LightLogo}`);
    }
  }
  return (
    <nav className="navbar bg-body-tertiary" data-bs-theme={`${mode}`}>
      <div className="container-fluid container">
        {/* Logo CodeNest */}
        <div className="blog-logo-container">
          <h1 className="blog-logo text-light">CodeNest</h1>
          <p className="blog-logo-text text-center text-light">CN</p>
        </div>
        {/* Theme Logo */}
        <button className="btn blog-theme-container" onClick={() => toggleMode()}>
          <img src={themeIcon} alt="Theme Change" className="blog-theme"/>
        </button>
      </div>
    </nav>
  );
};

export default BlogNav;
