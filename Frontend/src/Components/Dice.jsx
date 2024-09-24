import React, { useState, useEffect } from 'react';
import '../CSS/Dice.css';

function Dice() {
  const [ballX, setBallX] = useState(0); // Horizontal position of the ball

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Constrain mouseX to the width of the window
      const mouseX = Math.max(0, Math.min(event.clientX, window.innerWidth));
      setBallX(mouseX);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const rotation = (ballX / window.innerWidth) * 360; // Calculate rotation based on horizontal position

  return (
    <div className='dice-container'>
      <div
        className='ball'
        style={{
          left: `${ballX}px`, // Move the ball horizontally
          transform: `rotate(${rotation}deg)`, // Apply rotation based on horizontal movement
        }}
      >
        <div className='face'></div>
      </div>
      <div className='line'></div> {/* Horizontal line */}
    </div>
  );
}

export default Dice;
