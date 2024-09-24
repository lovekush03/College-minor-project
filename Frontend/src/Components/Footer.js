import React from "react";
import "../CSS/Footer.css";

const Footer = () => {
  return (
      <div className="bg-dark">
        <div className="container text-light row m-auto pt-4 pb-4">
          <div className="col-6">
            <div className="footer-logo-container mb-3 m-auto">
              <h1 className="footer-logo text-light">CodeNest</h1>
              <p className="footer-logo-text text-center text-light">CN</p>
            </div>
            <p className="text-center fw-medium font-text fs-5">
              Empowering The Next Generation of Coders
            </p>
            <div className="icons d-flex flex-row justify-content-center gap-3">
              <span className="facebook p-2">
                <i className="fab fa-facebook-f fs-4"></i>
              </span>
              <span className="twitter p-2">
                <i className="fab fa-twitter fs-4"></i>
              </span>
              <span className="linkedin p-2">
                <i className="fab fa-linkedin-in fs-4"></i>
              </span>
            </div>
          </div>
          <div className="col-3 m-auto">
            <p className="font-heading fs-4 fw-bold">Quick Links</p>
            <ul className="font-text fw-light footer-ul">
              <li className="footer-li">
                <a href="/about" className="link footer-a">
                  About Us
                </a>
              </li>
              <li className="footer-li">
                <a href="/contact" className="link footer-a">
                  Contact Us
                </a>
              </li>
              <li className="footer-li">
                <a href="/blog" className="link footer-a">
                  Blog
                </a>
              </li>
              <li className="footer-li">
                <a href="/faq" className="link footer-a">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="col-3 m-auto">
            <p className="font-heading fs-4 fw-bold">Services</p>
            <ul className="font-text fw-light footer-ul">
              <li className="footer-li">Web Development</li>
              <li className="footer-li">Data Structures and Algorithms</li>
              <li className="footer-li">Machine Learning</li>
              <li className="footer-li">Backend Development</li>
            </ul>
          </div>
        </div>
        <hr style={{ padding: "0.5px" }} className="bg-light" />
        <div className="copyright text-center font-heading text-light pb-3">
          All rights reserved by CodeNest - 2023
        </div>
      </div>
  );
};

export default Footer;
