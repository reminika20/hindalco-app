import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Ticker.css'; // Ensure this CSS file exists

const Ticker = ({ announcements }) => {
  const [tickerItems, setTickerItems] = useState(announcements);

  // Debugging log to track when announcements change
  useEffect(() => {
    console.log("🔥 Ticker Component Received Updated Announcements:", announcements);
    setTickerItems(announcements); // ✅ Ensures component updates with new state
  }, [announcements]);

  return (
    <div className="ticker" key={tickerItems.length}> {/* ✅ Forces re-render */}
      <div className="ticker-content">
        {tickerItems.map((announcement, index) => (
          <span key={index} className="ticker-item">
            {announcement}
          </span>
        ))}
      </div>
    </div>
  );
};

Ticker.propTypes = {
  announcements: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Ticker;
