import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const images = [
    "/images/tattoo/dragon-koi-japanese-sleeve.jpg",
    "/images/tattoo/wolf-tattoo-realistic-designs.jpg",
    "/images/tattoo/mandala-upper-leg-woman-tattoo.jpg",
    "/images/tattoo/butterfly-tattoo-women-designs.jpg",
  ];
  
  const slideTexts = [
    "Master the Art of Japanese Tattoos",
    "Realistic Designs That Tell Your Story",
    "Sacred Geometry & Mandala Artistry",
    "Elegant Designs for Every Style"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const isDragging = useRef(false);
  const threshold = 50;

  // Handle drag/touch start
  const handleStart = (clientX, clientY) => {
    isDragging.current = true;
    startX.current = clientX;
    startY.current = clientY;
  };

  // Handle drag/touch move
  const handleMove = (clientX, clientY) => {
    if (!isDragging.current) return;

    const diffX = clientX - startX.current;
    const diffY = clientY - startY.current;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > threshold) {
        prevSlide();
        isDragging.current = false;
      } else if (diffX < -threshold) {
        nextSlide();
        isDragging.current = false;
      }
    }
  };

  // Move to next slide
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      setIsAnimating(false);
    }, 300);
  };

  // Move to previous slide
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div
      className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[90vh] overflow-hidden select-none"
      onMouseDown={(e) => handleStart(e.clientX, e.clientY)}
      onMouseMove={(e) => isDragging.current && handleMove(e.clientX, e.clientY)}
      onMouseUp={() => (isDragging.current = false)}
      onMouseLeave={() => (isDragging.current = false)}
      onTouchStart={(e) => {
        e.preventDefault();
        handleStart(e.touches[0].clientX, e.touches[0].clientY);
      }}
      onTouchMove={(e) => {
        e.preventDefault();
        isDragging.current && handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }}
      onTouchEnd={() => (isDragging.current = false)}
    >
      {/* Carousel Image */}
      <div
        className={`w-full h-full transition-opacity duration-300 ease-in-out ${
          isAnimating ? "opacity-0" : "opacity-100"
        }`}
      >
        <img
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Dynamic Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-black bg-opacity-70 px-4 py-3 sm:px-8 sm:py-6 rounded-lg mb-4 leading-tight">
            The House of Tattoos
          </h1>
          <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-red-600 to-orange-600 bg-opacity-90 px-3 py-2 sm:px-6 sm:py-3 rounded-full max-w-3xl mx-auto">
            {slideTexts[currentSlide]}
          </p>
          <div className="mt-6">
            <button 
              onClick={() => navigate('/book-now')}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 mr-4"
            >
              Book Now
            </button>
            <button 
              onClick={() => navigate('/gallery')}
              className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Hidden on Mobile */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-70 transition-all focus:outline-none focus:ring-2 focus:ring-white hidden sm:block"
        aria-label="Previous slide"
      >
        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-70 transition-all focus:outline-none focus:ring-2 focus:ring-white hidden sm:block"
        aria-label="Next slide"
      >
        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white ${
              currentSlide === index
                ? "bg-white scale-125"
                : "bg-gray-400 hover:bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Swipe Indicator for Mobile */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 sm:hidden">
        <p className="text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded">
          Swipe to navigate
        </p>
      </div>
    </div>
  );
};

export default Header;