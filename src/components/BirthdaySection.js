import React from 'react';
import '../styles/user.css';

/**
 * A component for displaying the Birthday section with confetti animation
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the section
 * @param {Array} props.birthdays - Array of birthday items to display
 * @param {React.RefObject} props.containerRef - Ref for the container element (for confetti animation)
 * @param {React.RefObject} props.canvasRef - Ref for the canvas element (for confetti animation)
 * @returns {JSX.Element} - Rendered component
 */
const BirthdaySection = ({ title, birthdays, containerRef, canvasRef }) => {
  return (
    <div className="birthday-container" ref={containerRef}>
      <canvas 
        ref={canvasRef}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
      <h2>{title}</h2>
      <div className="birthday-content" style={{ position: 'relative', zIndex: 2 }}>
        {birthdays.length > 0 ? (
          <>
            <div className="birthday-message">
              <h3>Happy Birthday!</h3>
              <p>Wishing you a fantastic day filled with joy and celebration!</p>
            </div>
            <div className="birthday-list">
              {birthdays.map((person, index) => (
                <div key={index} className="birthday-item">
                  <span>🎈 {person.name}</span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="no-birthday">
            <img src="/images/image1.jpg" alt="No birthdays today" className="no-birthday-image" />
            <p>No birthdays today</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BirthdaySection;
