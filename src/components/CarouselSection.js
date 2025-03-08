import React from 'react';
import AutoSlider from './AutoSlider';
import '../styles/user.css';

/**
 * A generic carousel section component that can be reused for multiple similar sections
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the section
 * @param {string} [props.description] - Optional description text
 * @param {Array} props.slides - Array of slide objects for the AutoSlider
 * @param {string} props.containerClassName - Additional class name for styling specific instances
 * @returns {JSX.Element} - Rendered component
 */
const CarouselSection = ({ title, description, slides, containerClassName }) => {
  return (
    <div className={`carousel-container ${containerClassName}`}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      <AutoSlider slides={slides} />
    </div>
  );
};

export default CarouselSection;
