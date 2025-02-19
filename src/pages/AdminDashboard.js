import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import hindalcoLogo from '../assets/hindalco-logo.png';
import {
  addNewsItem,
  deleteNewsItem,
  addTickerMessage,
  deleteTickerMessage,
  addQuickLink,
  deleteQuickLink,
  addPolicy,
  deletePolicy,
  addSafetyPolicyCarouselImage,
  deleteSafetyPolicyCarouselImage,
  addCarouselImage1,
  deleteCarouselImage1,
  addCarouselImage2,
  deleteCarouselImage2,
  addBirthday,
  deleteBirthday,
  addVideo,
  deleteVideo,
  addLeader,
  deleteLeader
} from '../store/actions';
import "../styles/admin.css";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const policies = useSelector((state) => state.policies) || [];
  const quickLinks = useSelector((state) => state.quickLinks) || [];
  const newsItems = useSelector((state) => state.newsItems) || [];
  const tickerMessages = useSelector((state) => state.tickerMessages) || [];
  const carouselImages1 = useSelector((state) => state.carouselImages1) || [];
  const carouselImages2 = useSelector((state) => state.carouselImages2) || [];
  const safetyPoliciesCarouselImages = useSelector((state) => state.safetyPoliciesCarouselImages) || [];
  const birthdays = useSelector((state) => state.birthdays) || [];
  const videoBytes = useSelector((state) => state.videoBytes) || [];
  const leadersBoard = useSelector((state) => state.leadersBoard) || [];

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

  // Debugging effect to monitor state updates
  useEffect(() => {
    console.log("Admin Dashboard State Updated!", { newsItems, tickerMessages, quickLinks });
  }, [newsItems, tickerMessages, quickLinks]);

  const [policyTitle, setPolicyTitle] = useState('');
  const [policyFile, setPolicyFile] = useState(null);
  const [quickLinkText, setQuickLinkText] = useState('');
  const [quickLinkFile, setQuickLinkFile] = useState(null);
  const [newsTitle, setNewsTitle] = useState('');
  const [newsContent, setNewsContent] = useState('');
  const [newsImage, setNewsImage] = useState(null);
  const [newsPdfLink, setNewsPdfLink] = useState(null);
  const [tickerMessage, setTickerMessage] = useState('');
  const [carouselImage1, setCarouselImage1] = useState(null);
  const [carouselImage2, setCarouselImage2] = useState(null);
  const [safetyPolicyImage, setSafetyPolicyImage] = useState(null);
  const [birthdayName, setBirthdayName] = useState('');
  const [birthdayDate, setBirthdayDate] = useState('');
  const [birthdayImage, setBirthdayImage] = useState(null);
  const [videoTitle, setVideoTitle] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [videoPreviewImage, setVideoPreviewImage] = useState(null);
  const [leaderName, setLeaderName] = useState('');
  const [leaderImage, setLeaderImage] = useState(null);
  const [leaderDescription, setLeaderDescription] = useState('');

  // Action handlers
  const handleAddPolicy = () => {
    if (policyFile) {
      const policy = {
        id: uuidv4(),
        title: policyTitle,
        url: URL.createObjectURL(policyFile)
      };
      dispatch(addPolicy(policy));
      setPolicyTitle('');
      setPolicyFile(null);
    }
  };

  const handleAddQuickLink = () => {
    if (quickLinkFile) {
      const link = {
        id: uuidv4(),
        text: quickLinkText,
        url: URL.createObjectURL(quickLinkFile)
      };
      dispatch(addQuickLink(link));
      setQuickLinkText('');
      setQuickLinkFile(null);
    }
  };

  const handleAddNewsItem = () => {
    if (newsImage && newsPdfLink) {
      const news = {
        id: uuidv4(),
        title: newsTitle,
        content: newsContent,
        image: URL.createObjectURL(newsImage),
        pdfLink: URL.createObjectURL(newsPdfLink)
      };
      dispatch(addNewsItem(news));
      setNewsTitle('');
      setNewsContent('');
      setNewsImage(null);
      setNewsPdfLink(null);
    }
  };

  const handleAddTickerMessage = () => {
    dispatch(addTickerMessage(tickerMessage));
    setTickerMessage('');
  };

  const handleAddCarouselImage1 = () => {
    if (carouselImage1) {
      const image = {
        id: uuidv4(),
        image: URL.createObjectURL(carouselImage1),
        title: `Carousel 1 Image ${carouselImages1.length + 1}`
      };
      dispatch(addCarouselImage1(image));
      setCarouselImage1(null);
    }
  };

  const handleAddCarouselImage2 = () => {
    if (carouselImage2) {
      const image = {
        id: uuidv4(),
        image: URL.createObjectURL(carouselImage2),
        title: `Carousel 2 Image ${carouselImages2.length + 1}`
      };
      dispatch(addCarouselImage2(image));
      setCarouselImage2(null);
    }
  };

  const handleAddSafetyPolicyImage = () => {
    if (safetyPolicyImage) {
      const image = {
        id: uuidv4(),
        image: URL.createObjectURL(safetyPolicyImage),
        title: `Safety Policy Image ${safetyPoliciesCarouselImages.length + 1}`
      };
      dispatch(addSafetyPolicyCarouselImage(image));
      setSafetyPolicyImage(null);
    }
  };

  const handleAddBirthday = () => {
    if (birthdayImage) {
      const birthday = {
        id: uuidv4(),
        name: birthdayName,
        date: birthdayDate,
        image: URL.createObjectURL(birthdayImage)
      };
      dispatch(addBirthday(birthday));
      setBirthdayName('');
      setBirthdayDate('');
      setBirthdayImage(null);
    }
  };

  const handleAddVideo = () => {
    if (videoPreviewImage && videoUrl) {
      const video = {
        id: uuidv4(),
        title: videoTitle,
        video: videoUrl,
        image: URL.createObjectURL(videoPreviewImage)
      };
      dispatch(addVideo(video));
      setVideoTitle('');
      setVideoUrl('');
      setVideoPreviewImage(null);
    }
  };

  const handleAddLeader = () => {
    if (leaderImage) {
      const leader = {
        id: uuidv4(),
        name: leaderName,
        description: leaderDescription,
        image: URL.createObjectURL(leaderImage)
      };
      dispatch(addLeader(leader));
      setLeaderName('');
      setLeaderDescription('');
      setLeaderImage(null);
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="header-container">
        <div className="header-bar"></div>
        <div className="header">
          <img src={hindalcoLogo} alt="Hindalco Logo" />
          <h1>Admin Dashboard</h1>
        </div>
      </div>

      {/* Manage Policies Section */}
      <div className="section">
        <h3>Manage Policies</h3>
        <input
          type="text"
          placeholder="Policy Title"
          value={policyTitle}
          onChange={(e) => setPolicyTitle(e.target.value)}
        />
        <input
          type="file"
          onChange={(e) => setPolicyFile(e.target.files[0])}
        />
        <button onClick={handleAddPolicy}>Add Policy</button>
        <ul>
          {policies.map(policy => (
            <li key={policy.id}>
              {policy.title}
              <button onClick={() => dispatch(deletePolicy(policy.id))}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Manage Quick Links Section */}
      <div className="section">
        <h3>Manage Quick Links</h3>
        <input
          type="text"
          placeholder="Quick Link Text"
          value={quickLinkText}
          onChange={(e) => setQuickLinkText(e.target.value)}
        />
        <input
          type="file"
          onChange={(e) => setQuickLinkFile(e.target.files[0])}
        />
        <button onClick={handleAddQuickLink}>Add Quick Link</button>
        <ul>
          {quickLinks.map(link => (
            <li key={link.id}>
              {link.text}
              <button onClick={() => dispatch(deleteQuickLink(link.id))}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Manage News Items Section */}
      <div className="section">
        <h3>Manage News Items</h3>
        <input
          type="text"
          placeholder="News Title"
          value={newsTitle}
          onChange={(e) => setNewsTitle(e.target.value)}
        />
        <textarea
          placeholder="News Content"
          value={newsContent}
          onChange={(e) => setNewsContent(e.target.value)}
        />
        <input
          type="file"
          onChange={(e) => setNewsImage(e.target.files[0])}
        />
        <input
          type="file"
          onChange={(e) => setNewsPdfLink(e.target.files[0])}
        />
        <button onClick={handleAddNewsItem}>Add News Item</button>
        <ul>
          {newsItems.map(news => (
            <li key={news.id}>
              {news.title}
              <button onClick={() => dispatch(deleteNewsItem(news.id))}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Manage Ticker Messages Section */}
      <div className="section">
        <h3>Manage Ticker Messages</h3>
        <input
          type="text"
          placeholder="Ticker Message"
          value={tickerMessage}
          onChange={(e) => setTickerMessage(e.target.value)}
        />
        <button onClick={handleAddTickerMessage}>Add Ticker Message</button>
        <ul>
          {tickerMessages.map((message, index) => (
            <li key={index}>
              {message}
              <button onClick={() => dispatch(deleteTickerMessage(index))}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Manage Carousel Images 1 Section */}
      <div className="section">
        <h3>Manage Carousel Images 1</h3>
        <input
          type="file"
          onChange={(e) => setCarouselImage1(e.target.files[0])}
        />
        <button onClick={handleAddCarouselImage1}>Add Carousel Image 1</button>
        <ul>
          {carouselImages1.map(image => (
            <li key={image.id}>
              <img src={image.image} alt="Carousel 1" width="100" />
              <button onClick={() => dispatch(deleteCarouselImage1(image.id))}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Manage Carousel Images 2 Section */}
      <div className="section">
        <h3>Manage Carousel Images 2</h3>
        <input
          type="file"
          onChange={(e) => setCarouselImage2(e.target.files[0])}
        />
        <button onClick={handleAddCarouselImage2}>Add Carousel Image 2</button>
        <ul>
          {carouselImages2.map(image => (
            <li key={image.id}>
              <img src={image.image} alt="Carousel 2" width="100" />
              <button onClick={() => dispatch(deleteCarouselImage2(image.id))}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Manage Safety Policies Carousel Images Section */}
      <div className="section">
        <h3>Manage Safety Policies Carousel Images</h3>
        <input
          type="file"
          onChange={(e) => setSafetyPolicyImage(e.target.files[0])}
        />
        <button onClick={handleAddSafetyPolicyImage}>Add Safety Policy Image</button>
        <ul>
          {safetyPoliciesCarouselImages.map(image => (
            <li key={image.id}>
              <img src={image.image} alt="Safety Policy" width="100" />
              <button onClick={() => dispatch(deleteSafetyPolicyCarouselImage(image.id))}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Manage Birthdays Section */}
      <div className="section">
        <h3>Manage Birthdays</h3>
        <input
          type="text"
          placeholder="Name"
          value={birthdayName}
          onChange={(e) => setBirthdayName(e.target.value)}
        />
        <input
          type="date"
          value={birthdayDate}
          onChange={(e) => setBirthdayDate(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setBirthdayImage(e.target.files[0])}
        />
        <button onClick={handleAddBirthday}>Add Birthday</button>
        <ul>
          {birthdays.map(birthday => (
            <li key={birthday.id}>
              {birthday.name} - {birthday.date}
              <button onClick={() => dispatch(deleteBirthday(birthday.id))}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Manage Videos Section */}
      <div className="section">
        <h3>Manage Videos</h3>
        <input
          type="text"
          placeholder="Video Title"
          value={videoTitle}
          onChange={(e) => setVideoTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Video URL (YouTube, Vimeo, etc.)"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setVideoPreviewImage(e.target.files[0])}
        />
        <button onClick={handleAddVideo}>Add Video</button>
        <ul>
          {videoBytes.map(video => (
            <li key={video.id}>
              {video.title}
              <button onClick={() => dispatch(deleteVideo(video.id))}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Manage Leaders Board Section */}
      <div className="section">
        <h3>Manage Leaders Board</h3>
        <input
          type="text"
          placeholder="Leader Name"
          value={leaderName}
          onChange={(e) => setLeaderName(e.target.value)}
        />
        <textarea
          placeholder="Leader Description"
          value={leaderDescription}
          onChange={(e) => setLeaderDescription(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setLeaderImage(e.target.files[0])}
        />
        <button onClick={handleAddLeader}>Add Leader</button>
        <ul>
          {leadersBoard.map(leader => (
            <li key={leader.id}>
              {leader.name}
              <button onClick={() => dispatch(deleteLeader(leader.id))}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
