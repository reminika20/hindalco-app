import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AutoSlider from '../components/AutoSlider';
import Ticker from '../components/Ticker';
import hindalcoLogo from '../assets/hindalco-logo.png';
import "../styles/user.css";
import confetti from 'canvas-confetti';

const createConfetti = (canvas) => {
  const myConfetti = confetti.create(canvas, {
    resize: true,
    useWorker: true
  });
  return myConfetti;
};

const Home = () => {
  const newsItems = useSelector((state) => state.newsItems || []);
  const tickerMessages = useSelector((state) => state.tickerMessages || []);
  const policies = useSelector((state) => state.policies || []);
  const quickLinks = useSelector((state) => state.quickLinks || []);
  const safetySOPs = useSelector((state) => state.safetySOPs || []);
  const carouselImages1 = useSelector((state) => state.carouselImages1 || []);
  const carouselImages2 = useSelector((state) => state.carouselImages2 || []);
  const safetySnapshots = useSelector((state) => state.safetySnapshots || []);
  const birthdays = useSelector((state) => {
    const today = new Date();
    const todayMonth = today.getMonth() + 1; // getMonth() returns 0-11
    const todayDay = today.getDate();
    
    return (state.birthdays || []).filter(birthday => {
      const bDate = new Date(birthday.date);
      return bDate.getMonth() + 1 === todayMonth && bDate.getDate() === todayDay;
    });
  });
  const videoBytes = useSelector((state) => state.videoBytes || []);
  const leadersBoard = useSelector((state) => state.leadersBoard || []);
  const [current, setCurrent] = useState(0);

  const canvasRef = useRef(null);
  const confettiInstanceRef = useRef(null);
  const birthdayContainerRef = useRef(null);
  const confettiIntervalRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current && !confettiInstanceRef.current) {
      confettiInstanceRef.current = createConfetti(canvasRef.current);
    }
  }, []);

  const startConfetti = useCallback(() => {
    if (!confettiInstanceRef.current || !birthdays.length) return;
    
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    // Clear any existing interval
    if (confettiIntervalRef.current) {
      clearInterval(confettiIntervalRef.current);
    }

    // Start new continuous confetti
    confettiIntervalRef.current = setInterval(() => {
      confettiInstanceRef.current({
        ...defaults,
        particleCount: 15,
        origin: { x: randomInRange(0.1, 0.9), y: 0 },
        gravity: 0.8,
        scalar: 0.8
      });
    }, 100); // Reduced interval for smoother effect
  }, [birthdays]);

  const stopConfetti = () => {
    if (confettiIntervalRef.current) {
      clearInterval(confettiIntervalRef.current);
      confettiIntervalRef.current = null;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startConfetti();
          } else {
            stopConfetti();
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    const currentRef = birthdayContainerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      stopConfetti(); // Cleanup on unmount
    };
  }, [birthdays, startConfetti]);

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
              // Handle special cases
              if (key === 'leadersBoard') {
                dispatch({ type: 'SYNC_LEADERSBOARD', payload: stateValue });
              } else if (key === 'videoBytes') {
                dispatch({ type: 'SYNC_VIDEOBYTES', payload: stateValue });
              } else if (key === 'safetySnapshots') {
                dispatch({ type: 'SYNC_SAFETYSNAPSHOTS', payload: stateValue });
              } else {
                dispatch({ type: `SYNC_${key.toUpperCase()}`, payload: stateValue });
              }
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
      newsItems, tickerMessages, policies, quickLinks, carouselImages1, carouselImages2, safetySnapshots, leadersBoard, videoBytes
    });
  }, [newsItems, tickerMessages, policies, quickLinks, carouselImages1, carouselImages2, safetySnapshots, leadersBoard, videoBytes]);

  const highlightedNews = newsItems[0];
  const smallerNewsItems = newsItems.slice(1);

  return (
    <div className="flex flex-col p-4 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="header-container">
        <div className="header-bar"></div>
        <div className="header flex items-center mb-4">
          <img src={hindalcoLogo} alt="Hindalco Logo" className="logo mr-4" />
          <div className="header-title">
            <h1>Pratidhwani</h1>
          </div>
          <div className="header-text">
            <h2>Hindalco Industries</h2>
            <h3>Belagavi Works</h3>
          </div>
        </div>
      </div>

      {/* Row 1: Buzz and Snapshots */}
      <div className="grid grid-cols-2 gap-4">
        <div className="carousel-container">
          <h2>Buzz</h2>
          <AutoSlider slides={carouselImages1} />
        </div>
        <div className="carousel-container">
          <h2>Snapshots</h2>
          <AutoSlider slides={carouselImages2} />
        </div>
      </div>

      {/* Row 2: What's New and Quick Links */}
      <div className="grid grid-cols-2 gap-4">
        <div className="whats-new-container">
          <h2>What's New !!</h2>
          <div className="whats-new-content">
            {highlightedNews && (
              <div className="highlighted-news-item">
                <img src={highlightedNews.image} alt={highlightedNews.title} className="highlighted-news-image" />
                <div className="highlighted-news-text">
                  <h3>{highlightedNews.title}</h3>
                  <p>{highlightedNews.content.split(' ').slice(0, 20).join(' ')}...</p>
                </div>
              </div>
            )}
            <div className="smaller-news-items">
              {smallerNewsItems.map((news, index) => (
                <div key={index} className="smaller-news-item">
                  <img src={news.image} alt={news.title} className="smaller-news-image" />
                  <div className="smaller-news-text">
                    <h4>{news.title}</h4>
                    <p>{news.content.split(' ').slice(0, 10).join(' ')}...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="quick-links-container">
          <h2>Quick Links</h2>
          <div className="quick-links-content">
            {quickLinks.map(link => (
              <div key={link.id} className="quick-links-item">
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <img src="https://img.icons8.com/ios-filled/50/000000/link.png" alt="Link Icon" />
                  <span>{link.text}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 3: Policies and Birthday List */}
      <div className="grid grid-cols-2 gap-4">
        <div className="policies-container">
          <h2>Policies</h2>
          <div className="policies-content">
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
        <div className="birthday-container" ref={birthdayContainerRef}>
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
          <h2>Birthday List</h2>
          <div className="birthday-content" style={{ position: 'relative', zIndex: 2 }}>
            {birthdays.length > 0 ? (
              <>
                <div className="birthday-message">
                  <h3>🎉 Happy Birthday! 🎂</h3>
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
      </div>

      {/* Row 4: Safety Corner */}
      <div className="safety-corner">
        <h2>Safety Corner</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="safety-snapshots-container">
            <h3>Safety Snapshots</h3>
            <div className="carousel-images">
              <AutoSlider slides={safetySnapshots} />
            </div>
          </div>
          <div className="safety-sop-container">
            <h3>Safety SOP</h3>
            <div className="safety-sop-content">
              {safetySOPs.map(sop => (
                <div key={sop.id} className="policy-item">
                  <h3>{sop.title}</h3>
                  <a href={sop.url} target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-filled/50/000000/pdf.png" alt="PDF Icon" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Row 5: Video Bytes and Leaders Board */}
      <div className="grid grid-cols-2 gap-4">
        <div className="video-bytes-container">
          <h2>Video Bytes</h2>
          <div className="video-bytes-content">
            {videoBytes.length > 0 && (
              <>
                <div className="video-item">
                  <div className="video-item-content">
                    <div className="video-thumbnail-container">
                      <img src={videoBytes[current].image} alt={videoBytes[current].title} className="video-thumbnail" />
                      <a href={videoBytes[current].video} target="_blank" rel="noopener noreferrer" className="video-play-icon">
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/play-button-circled.png" alt="Play" />
                      </a>
                    </div>
                    <h3>{videoBytes[current].title}</h3>
                    <p className="video-url">
                      <a href={videoBytes[current].video} target="_blank" rel="noopener noreferrer">
                        Watch Video
                      </a>
                    </p>
                  </div>
                </div>
                <button className="video-nav prev" onClick={() => setCurrent(current === 0 ? videoBytes.length - 1 : current - 1)}>
                  &#10094;
                </button>
                <button className="video-nav next" onClick={() => setCurrent((current + 1) % videoBytes.length)}>
                  &#10095;
                </button>
              </>
            )}
          </div>
        </div>
        <div className="leaders-board-container">
          <h2>Leaders Board</h2>
          <p>Recognizing excellence and achievements</p>
          <div className="leaders-board-content">
            {leadersBoard.length > 0 ? (
              leadersBoard.map(item => (
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
      </div>

      {/* Ticker Section */}
      <div className="mt-4">
        <Ticker announcements={tickerMessages} speed={20} /> {/* Adjust the speed value as needed */}
      </div>
    </div>
  );
};

export default Home;
