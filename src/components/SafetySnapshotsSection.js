import React from 'react';
import AutoSlider from './AutoSlider';
import '../styles/user.css';

/**
 * A component for displaying the Safety Snapshots section
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the section
 * @param {Array} props.slides - Array of slide objects for the AutoSlider
 * @returns {JSX.Element} - Rendered component
 */
const SafetySnapshotsSection = ({ title, slides }) => {
  return (
    <div className="safety-snapshots-container">
      <h3>{title}</h3>
      <div className="carousel-images">
        <AutoSlider slides={slides} />
      </div>
    </div>
  );
};

export default SafetySnapshotsSection;
