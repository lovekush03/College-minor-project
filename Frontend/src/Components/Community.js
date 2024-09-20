import React, { useEffect, useRef, useState } from "react";
import "../CSS/Community.css";
import CommunityImage from "../Images/Community.jpg";
function Community() {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Optionally stop observing after the first intersection
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className="red">
      {/* Hero Section */}
      <section className="hero-section py-5">
        <div className="container">
          <div className="row gx-5 gy-3">
            {/* Left: Text Section */}
            <div
              ref={textRef}
              className={`col d-flex flex-column justify-content-center animate__animated ${
                isVisible ? "animate__fadeInLeft" : ""
              }`}
              style={{ opacity: 0 }} // Initial opacity to ensure fade effect works
            >
              <h1 className="font-heading">
                Let's Join Us & Spread Your Knowledge
              </h1>
              <p className="font-text">
                Welcome to CodeNest, where innovation meets collaboration! Our
                community is a thriving hub for passionate coders and tech
                enthusiasts. Whether you're a newbie or a seasoned pro, CodeNest
                is the perfect place to elevate your coding journey and turn
                your tech dreams into reality. Dive in and discover a world of
                endless possibilities with the support of a vibrant and dynamic
                community!
              </p>
              <button className="btn btn-primary btn-lg comm-btn font-text">
                Join Our Community &rarr;
              </button>
            </div>

            {/* Right: Image Section */}
            <div
              ref={imageRef}
              className={`col animate__animated ${
                isVisible ? "animate__fadeInRight" : ""
              }`}
              style={{ opacity: 0 }} // Initial opacity to ensure fade effect works
            >
              <img
                src={CommunityImage}
                alt="Illustration"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Community;
