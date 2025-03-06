import React from 'react';
import './UserPageNavbar.css';

const UserPageNavbar = ({ scrollToSection }) => {
  const sections = [
    { name: 'Victory Vault', ref: 'victory-vault-container' },
    { name: 'Crown Collection', ref: 'crown-collection-container' },
    { name: 'What\'s New', ref: 'whats-new-container' },
    { name: 'Birthdays', ref: 'birthday-container' },
    { name: 'Policies', ref: 'policies-container' },
    { name: 'Quick Links', ref: 'quick-links-container' },
    { name: 'Safety Corner', ref: 'safety-corner' },
    { name: 'Video Bytes', ref: 'video-bytes-container' },
    { name: 'Leaders Board', ref: 'leaders-board-container' },
    { name: 'Wellness Wave', ref: 'wellness-wave-container' },
    { name: 'Wellness Tips', ref: 'wellness-tips-container' },
    { name: 'Welcome Onboard', ref: 'welcome-onboard-container' },
    { name: 'Best Kaizens', ref: 'best-kaizens-container' },
    { name: 'Main Hi Hoon Zimedaar', ref: 'main-hoon-zimedaar-container' },
    { name: 'CSR Initiatives', ref: 'csr-initiatives-container' },
    { name: 'Bosstomer', ref: 'bosstomer-container' },
    { name: 'Elevate IQ', ref: 'elevate-iq-container' }
  ];

  return (
    <nav 
      className="user-page-navbar" 
      aria-label="Navigate to Page Sections"
    >
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
