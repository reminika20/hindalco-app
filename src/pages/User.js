import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AutoSlider from '../components/AutoSlider';
import Ticker from '../components/Ticker';
import hindalcoLogo from '../assets/hindalco-logo.png';
import "../styles/user.css";

const Home = () => {
  const newsItems = useSelector((state) => state.newsItems) || [];
  const tickerMessages = useSelector((state) => state.tickerMessages) || [];
  const policies = useSelector((state) => state.policies) || [];
  const quickLinks = useSelector((state) => state.quickLinks) || [];
  const carouselImages1 = useSelector((state) => state.carouselImages1) || [];
  const carouselImages2 = useSelector((state) => state.carouselImages2) || [];
  const safetyPoliciesCarouselImages = useSelector((state) => state.safetyPoliciesCarouselImages) || [];

  const dispatch = useDispatch();

  // Listen for changes in localStorage from other tabs
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'persist:root') {
        const persistedState = JSON.parse(e.newValue);
        
        // Update each slice of the state
        Object.keys(persistedState).forEach(key => {
          if (key !== '_persist') {
            try {
              const stateValue = JSON.parse(persistedState[key]);
              dispatch({ type: `SYNC_${key.toUpperCase()}`, payload: stateValue });
            } catch (error) {
              console.error(`Error parsing ${key} state:`, error);
            }
          }
        });
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [dispatch]);

  // Debug logging
  useEffect(() => {
    console.log("🔄 State updated in Home Page:", {
      newsItems, tickerMessages, policies, quickLinks, carouselImages1, carouselImages2, safetyPoliciesCarouselImages
    });
  }, [newsItems, tickerMessages, policies, quickLinks, carouselImages1, carouselImages2, safetyPoliciesCarouselImages]);

  const highlightedNews = newsItems[0];
  const smallerNewsItems = newsItems.slice(1);

  return (
    <div className="flex flex-col p-4 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="header-container">
        <div className="header-bar"></div>
        <div className="header flex items-center mb-4">
          <img src={hindalcoLogo} alt="Hindalco Logo" className="logo mr-4" />
          <h1>Hindalco</h1>
        </div>
      </div>

      {/* First Row: Two Carousels */}
      <div className="grid grid-cols-2 min-h-[400px] bg-white rounded-lg shadow-sm mb-4 gap-4">
        <div className="p-4">
          <AutoSlider slides={carouselImages1} />
        </div>
        <div className="p-4">
          <AutoSlider slides={carouselImages2} />
        </div>
      </div>

      {/* Second Row: News Items and Quick Links */}
      <div className="grid grid-cols-2 mt-4 gap-4">
        <div>
          <div className="whats-new-container">
            <h2>What's New</h2>
            <p>Stay updated with our latest news and updates.</p>
            <div className="whats-new-content flex">
              {highlightedNews && (
                <div className="highlighted-news-item w-1/2 p-2">
                  <img src={highlightedNews.image} alt={highlightedNews.title} className="highlighted-news-image" />
                  <div className="highlighted-news-text">
                    <h3>{highlightedNews.title}</h3>
                    <p>
                      {highlightedNews.content.split(' ').slice(0, 20).join(' ')}...{' '}
                      <a href={highlightedNews.pdfLink} target="_blank" rel="noopener noreferrer">
                        Read More
                      </a>
                    </p>
                  </div>
                </div>
              )}
              <div className="smaller-news-items w-1/2 p-2">
                {smallerNewsItems.map(news => (
                  <div key={news.id} className="smaller-news-item mb-4">
                    <img src={news.image} alt={news.title} className="smaller-news-image" />
                    <div className="smaller-news-text">
                      <h3>{news.title}</h3>
                      <p>
                        {news.content.split(' ').slice(0, 20).join(' ')}...{' '}
                        <a href={news.pdfLink} target="_blank" rel="noopener noreferrer">
                          Read More
                        </a>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="quick-links-container">
            <h2>Quick Links</h2>
            <div className="quick-links-content flex flex-wrap">
              {quickLinks.map(link => (
                <div key={link.id} className="quick-links-item m-2">
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-filled/50/000000/link.png" alt="Link Icon" /> {link.text}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Third Row: Policies and Safety Policies Carousel */}
      <div className="grid grid-cols-2 mt-4 gap-4">
        <div>
          <h2>Policies</h2>
          <div className="policies-content grid grid-cols-3 gap-4">
            {policies.map(policy => (
              <div key={policy.id} className="policy-item">
                <h3>{policy.title}</h3>
                <a href={policy.url} target="_blank" rel="noopener noreferrer">
                  <img src="https://img.icons8.com/ios-filled/50/000000/pdf.png" alt="PDF Icon" />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2>Safety Policies</h2>
          <div className="carousel-container">
            <div className="carousel-images">
              <AutoSlider slides={safetyPoliciesCarouselImages} />
            </div>
          </div>
        </div>
      </div>

      {/* Ticker Section */}
      <div className="mt-4">
        <Ticker announcements={tickerMessages} speed={20} /> {/* Adjust the speed value as needed */}
      </div>
    </div>
  );
};

export default Home;
