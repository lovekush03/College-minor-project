import React from "react";

const BlogNav = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid container">
        {/* Logo CodeNest */}
        <div className="logo-container">
          <h1 className="logo text-light">CodeNest</h1>
          <p className="logo-text text-center text-light">CN</p>
        </div>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
      </div>
    </nav>
  );
};

export default BlogNav;
