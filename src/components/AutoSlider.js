import React, { useState, useEffect } from 'react';
import './autoslider.css';

const AutoSlider = ({ slides: propSlides }) => {
  const [current, setCurrent] = useState(0);
  const defaultSlides = [
    { id: 1, image: '/images/image1.jpg', title: 'Slide 1' },
    { id: 2, image: '/images/image2.jpg', title: 'Slide 2' },
    { id: 3, image: '/images/image3.jpg', title: 'Slide 3' },
    { id: 4, image: '/images/image4.jpg', title: 'Slide 4' },
  ];

  const slides = propSlides.length === 0 ? defaultSlides : propSlides;

  // Reset current slide when slides change
  useEffect(() => {
    setCurrent(0);
  }, [propSlides]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [current, slides.length, slides]);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  return (
    <div className="autoslider-container">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`autoslider-slide ${
            index === current ? 'active' : 'inactive'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="autoslider-image"
          />
        </div>
      ))}
      <button className="autoslider-button prev" onClick={prevSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      </button>
      <button className="autoslider-button next" onClick={nextSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>
      </button>
    </div>
  );
}

export default AutoSlider;
