import React from "react";
import "../CSS/Platform.css"; // Ensure this CSS file is in the same directory or adjust the path as needed

const Platform = ({ name, description, link }) => {
  return (
    <a href={link} style={{'textDecoration':"none"}}>
      <div className="platform-card" style={{ cursor: "pointer" }}>
        <h2 className="platform-name">{name}</h2>
        <p className="platform-description">{description}</p>
        {/* Use double or single quotes around the attribute */}
      </div>
    </a>
  );
};

const Platforms = () => {
  return (
    <div className="platforms-container">
      <h1 className="platforms-heading">
        Integrated with Famous Coding Platforms
      </h1>
      <div className="platform-container">
        <Platform
          name="LeetCode"
          description="Enhance your coding skills and problem solving with LeetCode challenges."
          link="https://leetcode.com/"
        />
        <Platform
          name="HackerRank"
          description="Solve coding problems and prepare for interviews on HackerRank."
          link="https://www.hackerrank.com/"
        />
        <Platform
          name="GeeksforGeeks"
          description="Learn and practice coding with GeeksforGeeks tutorials and exercises."
          link="https://www.geeksforgeeks.org/"
        />
        <Platform
          name="Codeforces"
          description="Participate in competitive programming contests on Codeforces."
          link="https://codeforces.com/"
        />
      </div>
    </div>
  );
};

export default Platforms;
