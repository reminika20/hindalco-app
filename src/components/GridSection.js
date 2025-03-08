import React from 'react';
import '../styles/user.css';

/**
 * A generic grid section component that can be reused for similar sections like Policies, Quick Links, etc.
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the section
 * @param {Array} props.items - Array of items to display in the grid
 * @param {string} props.containerClassName - Additional class name for styling specific instances
 * @param {string} props.contentClassName - Class name for the content container
 * @param {string} props.itemClassName - Class name for each item in the grid
 * @param {Function} props.renderItem - Function to render each item
 * @param {React.RefObject} [props.sectionRef] - Optional ref for scrolling to this section
 * @returns {JSX.Element} - Rendered component
 */
const GridSection = ({ 
  title, 
  items, 
  containerClassName, 
  contentClassName, 
  itemClassName,
  renderItem,
  sectionRef 
}) => {
  return (
    <div className={containerClassName} ref={sectionRef}>
      {title && <h2>{title}</h2>}
      <div className={contentClassName}>
        {items.map((item) => renderItem(item, itemClassName))}
      </div>
    </div>
  );
};

export default GridSection;
