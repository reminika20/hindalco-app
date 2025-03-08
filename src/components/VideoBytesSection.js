import React from 'react';
import '../styles/user.css';

/**
 * A component for displaying the Video Bytes section
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the section
 * @param {Array} props.videos - Array of video items to display
 * @param {number} props.current - Current video index
 * @param {Function} props.setCurrent - Function to update current video index
 * @param {React.RefObject} [props.sectionRef] - Optional ref for scrolling to this section
 * @returns {JSX.Element} - Rendered component
 */
const VideoBytesSection = ({ title, videos, current, setCurrent, sectionRef }) => {
  return (
    <div className="video-bytes-container" ref={sectionRef}>
      <h2>{title}</h2>
      <div className="video-bytes-content">
        {videos.length > 0 && (
          <>
            <div className="video-item">
              <div className="video-item-content">
                <div className="video-thumbnail-container">
                  <img src={videos[current].image} alt={videos[current].title} className="video-thumbnail" />
                  <a href={videos[current].video} target="_blank" rel="noopener noreferrer" className="video-play-icon">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/play-button-circled.png" alt="Play" />
                  </a>
                </div>
                <h3>{videos[current].title}</h3>
                <p className="video-url">
                  <a href={videos[current].video} target="_blank" rel="noopener noreferrer">
                    Watch Video
                  </a>
                </p>
              </div>
            </div>
            <button 
              className="video-nav prev" 
              onClick={() => setCurrent(current === 0 ? videos.length - 1 : current - 1)}
            >
              &#10094;
            </button>
            <button 
              className="video-nav next" 
              onClick={() => setCurrent((current + 1) % videos.length)}
            >
              &#10095;
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default VideoBytesSection;
