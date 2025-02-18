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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [current, slides.length]);

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
      <button className="autoslider-button prev" onClick={prevSlide}>Previous</button>
      <button className="autoslider-button next" onClick={nextSlide}>Next</button>
    </div>
  );
}

export default AutoSlider;