import React from 'react';
import './UserPageNavbar.css';

const UserPageNavbar = ({ scrollToSection }) => {
  const sections = [
    { name: 'What\'s New', ref: 'whats-new-container' },
    { name: 'Birthdays', ref: 'birthday-container' },
    { name: 'Policies', ref: 'policies-container' },
    { name: 'Quick Links', ref: 'quick-links-container' },
    { name: 'Safety Corner', ref: 'safety-corner' },
    { name: 'Video Bytes', ref: 'video-bytes-container' },
    { name: 'Leaders Board', ref: 'leaders-board-container' }
  ];

  return (
    <nav 
      className="user-page-navbar" 
      aria-label="Navigate to Page Sections"
    >
      <span className="navbar-navigate-text">Navigate:</span>
      {sections.map((section, index) => (
        <button 
          key={index} 
          onClick={() => scrollToSection(section.ref)}
          className="navbar-section-link"
          aria-label={`Go to ${section.name} section`}
        >
          {section.name}
        </button>
      ))}
    </nav>
  );
};

export default UserPageNavbar;