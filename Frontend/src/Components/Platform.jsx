import React from 'react';
import '../CSS/Platform.css'; // Ensure this CSS file is in the same directory or adjust the path as needed

const Platform = ({ name, description }) => {
  return (
    <div className="platform-card">
      <h2 className="platform-name">{name}</h2>
      <p className="platform-description">{description}</p>
    </div>
  );
};

const Platforms = () => {
  return (
    <div className="platforms-container">
      <h1 className="platforms-heading">Integrated with Famous Coding Platforms</h1>
      <div className="platform-container">
        <Platform
          name="LeetCode"
          description="Enhance your coding skills with LeetCode challenges."
        />
        <Platform
          name="HackerRank"
          description="Solve coding problems and prepare for interviews on HackerRank."
        />
        <Platform
          name="GeeksforGeeks"
          description="Learn and practice coding with GeeksforGeeks tutorials and exercises."
        />
        <Platform
          name="Codeforces"
          description="Participate in competitive programming contests on Codeforces."
        />
      </div>
    </div>
  );
};

export default Platforms;
