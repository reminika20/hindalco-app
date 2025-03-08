import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Ticker from '../components/Ticker';
import UserPageNavbar from '../components/UserPageNavbar';
import CarouselSection from '../components/CarouselSection';
import GridSection from '../components/GridSection';
import NewsSection from '../components/NewsSection';
import BirthdaySection from '../components/BirthdaySection';
import VideoBytesSection from '../components/VideoBytesSection';
import LeadersBoardSection from '../components/LeadersBoardSection';
import SafetySnapshotsSection from '../components/SafetySnapshotsSection';
import hindalcoLogo from '../assets/hindalco-logo.png';
import "../styles/user.css";
import "../styles/icons.css";
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
  const wellnessWave = useSelector((state) => state.wellnessWave || []);
  const wellnessTips = useSelector((state) => state.wellnessTips || []);
  const victoryVault = useSelector((state) => state.victoryVault || []);
  const csrInitiatives = useSelector((state) => state.csrInitiatives || []);
  const welcomeOnboard = useSelector((state) => state.welcomeOnboard || []);
  const bestKaizens = useSelector((state) => state.bestKaizens || []);
  const mainHoonZimedaar = useSelector((state) => state.mainHoonZimedaar || []);
  const crownCollection = useSelector((state) => state.crownCollection || []);
  const bosstomer = useSelector((state) => state.bosstomer || []);
  const elevateIQ = useSelector((state) => state.elevateIQ || []);
  const happyRetirement = useSelector((state) => state.happyRetirement || []);
  const anniversaries = useSelector((state) => state.anniversaries || []);
  const festiveMode = useSelector((state) => state.festiveMode || []);
  const employeeMoments = useSelector((state) => state.employeeMoments || []);
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
  const celebrationsCanvasRef = useRef(null);
  const confettiInstanceRef = useRef(null);
  const celebrationsConfettiInstanceRef = useRef(null);
  const birthdayContainerRef = useRef(null);
  const celebrationsSectionRef = useRef(null);
  const confettiIntervalRef = useRef(null);
  const celebrationsConfettiIntervalRef = useRef(null);
  const whatsNewRef = useRef(null);
  const policiesRef = useRef(null);
  const safetySectionRef = useRef(null);
  const videoBytesRef = useRef(null);

  const scrollToSection = (ref) => {
    const element = document.getElementsByClassName(ref)[0];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (canvasRef.current && !confettiInstanceRef.current) {
      confettiInstanceRef.current = createConfetti(canvasRef.current);
    }
    if (celebrationsCanvasRef.current && !celebrationsConfettiInstanceRef.current) {
      celebrationsConfettiInstanceRef.current = createConfetti(celebrationsCanvasRef.current);
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

    // Start new continuous confetti with higher density
    confettiIntervalRef.current = setInterval(() => {
      confettiInstanceRef.current({
        ...defaults,
        particleCount: 40, // Increased from 15 for higher density
        origin: { x: randomInRange(0.1, 0.9), y: 0 },
        gravity: 0.8,
        scalar: 0.8
      });
      
      // Add a second burst for even more density
      setTimeout(() => {
        confettiInstanceRef.current({
          ...defaults,
          particleCount: 30,
          origin: { x: randomInRange(0.1, 0.9), y: 0.1 },
          gravity: 0.7,
          scalar: 1.0
        });
      }, 50);
    }, 150); // Adjusted interval for performance
  }, [birthdays]);

  const startCelebrationsConfetti = useCallback(() => {
    if (!celebrationsConfettiInstanceRef.current) return;
    
    const defaults = { startVelocity: 40, spread: 360, ticks: 60, zIndex: 0 };
    const randomInRange = (min, max) => Math.random() * (max - min) + min;
    const colors = ['#ff9a9e', '#a18cd1', '#fbc2eb', '#fad0c4'];

    // Clear any existing interval
    if (celebrationsConfettiIntervalRef.current) {
      clearInterval(celebrationsConfettiIntervalRef.current);
    }

    // Start new continuous confetti with colorful particles
    celebrationsConfettiIntervalRef.current = setInterval(() => {
      celebrationsConfettiInstanceRef.current({
        ...defaults,
        particleCount: 60,
        origin: { x: randomInRange(0.1, 0.9), y: randomInRange(0, 0.2) },
        gravity: 0.7,
        scalar: 0.8, // Smaller particles
        colors: [colors[Math.floor(Math.random() * colors.length)]]
      });
      
      // Add a second burst for even more density
      setTimeout(() => {
        celebrationsConfettiInstanceRef.current({
          ...defaults,
          particleCount: 15,
          origin: { x: randomInRange(0.1, 0.9), y: randomInRange(0, 0.2) },
          gravity: 0.6,
          scalar: 0.4, // Even smaller particles
          colors: [colors[Math.floor(Math.random() * colors.length)]]
        });
      }, 150);
    }, 400); // Slightly slower interval for celebrations
  }, []);

  const stopConfetti = () => {
    if (confettiIntervalRef.current) {
      clearInterval(confettiIntervalRef.current);
      confettiIntervalRef.current = null;
    }
  };

  const stopCelebrationsConfetti = () => {
    if (celebrationsConfettiIntervalRef.current) {
      clearInterval(celebrationsConfettiIntervalRef.current);
      celebrationsConfettiIntervalRef.current = null;
    }
  };

  useEffect(() => {
    const birthdayObserver = new IntersectionObserver(
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

    const celebrationsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCelebrationsConfetti();
          } else {
            stopCelebrationsConfetti();
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    const birthdayRef = birthdayContainerRef.current;
    const celebrationsRef = celebrationsSectionRef.current;
    
    if (birthdayRef) {
      birthdayObserver.observe(birthdayRef);
    }
    
    if (celebrationsRef) {
      celebrationsObserver.observe(celebrationsRef);
    }

    return () => {
      if (birthdayRef) {
        birthdayObserver.unobserve(birthdayRef);
      }
      if (celebrationsRef) {
        celebrationsObserver.unobserve(celebrationsRef);
      }
      stopConfetti(); // Cleanup on unmount
      stopCelebrationsConfetti(); // Cleanup on unmount
    };
  }, [birthdays, startConfetti, startCelebrationsConfetti]);

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


  return (
    <div className="flex flex-col p-4 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="header-container">
        <div className="header-bar"></div>
        <div className="header flex items-center mb-4">
          <img src={hindalcoLogo} alt="Hindalco Logo" className="logo mr-4" />
          <div className="header-title">
            <h1>Belagavi Pulse</h1>
          </div>
          <div className="header-text">
            <h2>Hindalco Industries</h2>
            <h3>Belagavi Works</h3>
          </div>
        </div>
        <UserPageNavbar scrollToSection={scrollToSection} />
      </div>

      {/* Row 1: Buzz and Snapshots */}
      <div className="grid grid-cols-2 gap-4">
        <CarouselSection 
          title="Buzz" 
          slides={carouselImages1} 
          containerClassName="" 
        />
        <CarouselSection 
          title="Snapshots" 
          slides={carouselImages2} 
          containerClassName="" 
        />
      </div>

      {/* Row 2: Victory Vault and Crown Collection */}
      <div className="grid grid-cols-2 gap-4">
        <CarouselSection 
          title="Victory Vault" 
          description="Showcasing our prestigious awards and recognitions" 
          slides={victoryVault} 
          containerClassName="victory-vault-container" 
        />
        <CarouselSection 
          title="Crown Collection" 
          description="Honoring achievements with our prestigious certificates and awards" 
          slides={crownCollection} 
          containerClassName="crown-collection-container" 
        />
      </div>

      {/* Row 3: What's New and Birthday List */}
      <div className="grid grid-cols-2 gap-4">
        <NewsSection 
          title="What's New !!" 
          newsItems={newsItems} 
          sectionRef={whatsNewRef} 
        />
        <BirthdaySection 
          title="Cheers to Years" 
          birthdays={birthdays} 
          containerRef={birthdayContainerRef} 
          canvasRef={canvasRef} 
        />
      </div>

      {/* Row 4: Policies and Quick Links */}
      <div className="grid grid-cols-2 gap-4">
        <GridSection 
          title="Policies"
          items={policies}
          containerClassName="policies-container"
          contentClassName="policies-content"
          itemClassName="policy-item"
          sectionRef={policiesRef}
          renderItem={(policy, className) => (
            <div key={policy.id} className={className}>
              <h3>{policy.title}</h3>
              <a href={policy.url} target="_blank" rel="noopener noreferrer">
                {policy.icon ? (
                  <img src={policy.icon} alt="Custom Icon" />
                ) : (
                  <img src="https://img.icons8.com/ios-filled/50/000000/pdf.png" alt="PDF Icon" />
                )}
              </a>
            </div>
          )}
        />
        <GridSection 
          title="Quick Links"
          items={quickLinks}
          containerClassName="quick-links-container"
          contentClassName="quick-links-content"
          itemClassName="quick-links-item"
          renderItem={(link, className) => (
            <div key={link.id} className={className}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.icon ? (
                  <img src={link.icon} alt="Custom Icon" />
                ) : (
                  <img src="https://img.icons8.com/ios-filled/50/000000/link.png" alt="Link Icon" />
                )}
                <span>{link.text}</span>
              </a>
            </div>
          )}
        />
      </div>

      {/* Row 5: Safety Corner */}
      <div className="safety-corner" ref={safetySectionRef}>
        <h2>Safety Corner</h2>
        <div className="grid grid-cols-2 gap-4">
          <SafetySnapshotsSection 
            title="Safety Snapshots" 
            slides={safetySnapshots} 
          />
          <div className="safety-sop-container">
            <h3>Safety SOP</h3>
            <GridSection 
              items={safetySOPs}
              containerClassName=""
              contentClassName="safety-sop-content"
              itemClassName="policy-item"
              renderItem={(sop, className) => (
                <div key={sop.id} className={className}>
                  <h3>{sop.title}</h3>
                  <a href={sop.url} target="_blank" rel="noopener noreferrer">
                    {sop.icon ? (
                      <img src={sop.icon} alt="Custom Icon" />
                    ) : (
                      <img src="https://img.icons8.com/ios-filled/50/000000/pdf.png" alt="PDF Icon" />
                    )}
                  </a>
                </div>
              )}
            />
          </div>
        </div>
      </div>

      {/* Row 6: Video Bytes and Leaders Board */}
      <div className="grid grid-cols-2 gap-4">
        <VideoBytesSection 
          title="Video Bytes" 
          videos={videoBytes} 
          current={current} 
          setCurrent={setCurrent} 
          sectionRef={videoBytesRef} 
        />
        <LeadersBoardSection 
          title="Leaders Board" 
          description="Recognizing excellence and achievements" 
          items={leadersBoard} 
        />
      </div>

      {/* Row 7: Wellness Wave and Wellness Tips */}
      <div className="grid grid-cols-2 gap-4">
        <CarouselSection 
          title="Wellness Wave" 
          description="Celebrating health and wellness initiatives across our organization" 
          slides={wellnessWave} 
          containerClassName="wellness-wave-container" 
        />
        <CarouselSection 
          title="Wellness Tips !!" 
          description="Expert advice for maintaining physical and mental well-being" 
          slides={wellnessTips} 
          containerClassName="wellness-tips-container" 
        />
      </div>


      {/* Row 8: Welcome Onboard and Best Kaizens */}
      <div className="grid grid-cols-2 gap-4">
        <CarouselSection 
          title="Welcome Onboard !!" 
          description="Introducing our newest team members to the Hindalco family" 
          slides={welcomeOnboard} 
          containerClassName="welcome-onboard-container" 
        />
        <CarouselSection 
          title="Best Kaizens !!" 
          description="Highlighting continuous improvement projects that drive excellence" 
          slides={bestKaizens} 
          containerClassName="best-kaizens-container" 
        />
      </div>

      {/* Row 9: Main Hoon Zimedaar and CSR Initiatives */}
      <div className="grid grid-cols-2 gap-4">
        <CarouselSection 
          title="Main Hi Hoon Zimedaar !!" 
          description="Celebrating employees who take ownership and responsibility" 
          slides={mainHoonZimedaar} 
          containerClassName="main-hoon-zimedaar-container" 
        />
        <CarouselSection 
          title="CSR Initiatives !!" 
          description="Making a positive impact in our communities through social responsibility" 
          slides={csrInitiatives} 
          containerClassName="csr-initiatives-container" 
        />
      </div>

      {/* Row 10: Bosstomer and Elevate IQ */}
      <div className="grid grid-cols-2 gap-4">
        <CarouselSection 
          title="Bosstomer" 
          description="Recognizing exceptional customer service and satisfaction" 
          slides={bosstomer} 
          containerClassName="bosstomer-container" 
        />
        <CarouselSection 
          title="Elevate IQ" 
          description="Enhancing skills through innovative training and development programs" 
          slides={elevateIQ} 
          containerClassName="elevate-iq-container" 
        />
      </div>

      {/* Row 11: Celebrations Section */}
      <div className="celebrations-section" ref={celebrationsSectionRef}>
        <canvas ref={celebrationsCanvasRef} className="celebrations-canvas"></canvas>
        <h2>Celebrations</h2>
        <div className="grid grid-cols-4 gap-4">
          <CarouselSection 
            title="Happy Retirement" 
            description="Celebrating our colleagues as they embark on their next chapter" 
            slides={happyRetirement} 
            containerClassName="happy-retirement-container" 
          />
          <CarouselSection 
            title="Anniversaries" 
            description="Honoring years of dedication and service" 
            slides={anniversaries} 
            containerClassName="anniversaries-container" 
          />
          <CarouselSection 
            title="Festive Mode" 
            description="Sharing the joy of festivals and celebrations" 
            slides={festiveMode} 
            containerClassName="festive-mode-container" 
          />
          <CarouselSection 
            title="Employee Moments" 
            description="Capturing special moments in our employees' lives" 
            slides={employeeMoments} 
            containerClassName="employee-moments-container" 
          />
        </div>
      </div>

      {/* Ticker Section */}
        <Ticker announcements={tickerMessages} speed={20} /> {/* Adjust the speed value as needed */}
    </div>
  );
};

export default Home;
