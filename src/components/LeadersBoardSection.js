import React from 'react';
import '../styles/user.css';

/**
 * A component for displaying the Leaders Board section
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the section
 * @param {string} [props.description] - Optional description text
 * @param {Array} props.items - Array of leader items to display
 * @param {React.RefObject} [props.sectionRef] - Optional ref for scrolling to this section
 * @returns {JSX.Element} - Rendered component
 */
const LeadersBoardSection = ({ title, description, items, sectionRef }) => {
  return (
    <div className="leaders-board-container" ref={sectionRef}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      <div className="leaders-board-content">
        {items.length > 0 ? (
          items.map(item => (
            <div className="leaders-board-item" key={item.id}>
              <img src={item.image} alt={item.name} className="leaders-board-image" />
              <div className="leaders-board-text">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="no-leaders">
            <p>No leaders to display</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadersBoardSection;
