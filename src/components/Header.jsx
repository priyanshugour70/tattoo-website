import React, { useState, useRef } from "react";

const Header = () => {
  const images = [
    "https://w0.peakpx.com/wallpaper/758/290/HD-wallpaper-back-tattoos-f1-graphy-body-art-tattoo-wide-screen-portrait.jpg",
    "https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-the-body-builder-with-tattoos-posing-for-a-picture-image_2954450.jpg",
    "https://w0.peakpx.com/wallpaper/758/290/HD-wallpaper-back-tattoos-f1-graphy-body-art-tattoo-wide-screen-portrait.jpg",
    "https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-the-body-builder-with-tattoos-posing-for-a-picture-image_2954450.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // Track animation state
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
    setIsAnimating(true); // Trigger animation
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      setIsAnimating(false); // Reset animation
    }, 500); // Match CSS animation duration
  };

  // Move to previous slide
  const prevSlide = () => {
    setIsAnimating(true); // Trigger animation
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
      setIsAnimating(false); // Reset animation
    }, 500); // Match CSS animation duration
  };

  return (
    <div
      className="relative w-full h-[90vh] overflow-hidden select-none"
      onMouseDown={(e) => handleStart(e.clientX, e.clientY)}
      onMouseMove={(e) => isDragging.current && handleMove(e.clientX, e.clientY)}
      onMouseUp={() => (isDragging.current = false)}
      onMouseLeave={() => (isDragging.current = false)}
      onTouchStart={(e) =>
        handleStart(e.touches[0].clientX, e.touches[0].clientY)
      }
      onTouchMove={(e) =>
        isDragging.current && handleMove(e.touches[0].clientX, e.touches[0].clientY)
      }
      onTouchEnd={() => (isDragging.current = false)}
    >
      {/* Carousel Image */}
      <div
        className={`w-full h-full transition-opacity duration-500 ease-in-out ${
          isAnimating ? "opacity-0" : "opacity-100"
        }`}
      >
        <img
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Fixed Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-3xl sm:text-4xl md:text-6xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded">
          Your Fixed Text Here
        </p>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-4 h-4 rounded-full transition ${
              currentSlide === index
                ? "bg-gray-900 scale-125"
                : "bg-gray-400 hover:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;