import React from 'react';
import '../styles/user.css';

/**
 * A component for displaying the News section with a highlighted news item and smaller news items
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the section
 * @param {Array} props.newsItems - Array of news items to display
 * @param {React.RefObject} [props.sectionRef] - Optional ref for scrolling to this section
 * @returns {JSX.Element} - Rendered component
 */
const NewsSection = ({ title, newsItems, sectionRef }) => {
  if (!newsItems || newsItems.length === 0) {
    return (
      <div className="whats-new-container" ref={sectionRef}>
        <h2>{title}</h2>
        <div className="whats-new-content">
          <p>No news items to display</p>
        </div>
      </div>
    );
  }

  const highlightedNews = newsItems[0];
  const smallerNewsItems = newsItems.slice(1);

  return (
    <div className="whats-new-container" ref={sectionRef}>
      <h2>{title}</h2>
      <div className="whats-new-content">
        {highlightedNews && (
          <div className="highlighted-news-item">
            <img src={highlightedNews.image} alt={highlightedNews.title} className="highlighted-news-image" />
            <div className="highlighted-news-text">
              <h3>{highlightedNews.title}</h3>
              <p>{highlightedNews.content.split(' ').slice(0, 20).join(' ')}...</p>
              <span><a href={highlightedNews.pdfLink} target='blank'>Read More</a></span>
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
                <span><a href={news.pdfLink} target='blank'>Read More</a></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
