import React, { useRef, useEffect } from 'react';
import '../CSS/MainPage.css';

function MainPage() {
  const ballRef = useRef(null);

  const handleMouseMove = (event) => {
    const ball = ballRef.current;
    if (!ball) return;

    const { clientX: mouseX, clientY: mouseY } = event;
    const { left, top, width, height } = ball.getBoundingClientRect();

    const ballRadius = width / 2;
    const centerX = left + ballRadius;
    const centerY = top + ballRadius;

    const angle = Math.atan2(mouseY - centerY, mouseX - centerX);
    const distance = Math.min(Math.hypot(mouseX - centerX, mouseY - centerY), 100); // Limit distance to prevent excessive movement

    const newX = centerX + distance * Math.cos(angle) - ballRadius;
    const newY = centerY + distance * Math.sin(angle) - ballRadius;

    ball.style.transform = `translate(${newX}px, ${newY}px)`;
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='main-page-container'>
      <div className='text-and-buttons'>
        <h1>Empowering the next gen of coders</h1>
        <div className='buttons-container'>
          <button className='explore-button'>Explore All Courses</button>
          <button className='jobs-button'>Jobs</button>
        </div>
      </div>
      <div className='partition-container'>
        <div className='ball' ref={ballRef}>
          <div className='face'></div>
        </div>
      </div>
      <iframe
        src="https://giphy.com/embed/bGgsc5mWoryfgKBx1u"
        className="giphy-iframe"
        frameBorder="0"
        allowFullScreen
        title="animated-gif"
      ></iframe>
    </div>
  );
}

export default MainPage;
