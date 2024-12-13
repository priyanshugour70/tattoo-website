import React, { useState, useRef } from "react";

const Header = () => {
  const images = [
    "https://w0.peakpx.com/wallpaper/758/290/HD-wallpaper-back-tattoos-f1-graphy-body-art-tattoo-wide-screen-portrait.jpg",
    "https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-the-body-builder-with-tattoos-posing-for-a-picture-image_2954450.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const startX = useRef(0); // Track the starting mouse position
  const isDragging = useRef(false); // Track whether the user is currently dragging

  // Handle mouse down (start of drag)
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX; // Store the starting X position of the mouse
  };

  // Handle mouse move (dragging)
  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    // Determine the direction of the drag
    const diffX = e.clientX - startX.current;

    if (diffX > 50) {
      // Dragged to the right, move to the next slide
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      isDragging.current = false; // End the drag
    } else if (diffX < -50) {
      // Dragged to the left, move to the previous slide
      setCurrentSlide(
        (prevSlide) => (prevSlide - 1 + images.length) % images.length
      );
      isDragging.current = false; // End the drag
    }
  };

  // Handle mouse up (end of drag)
  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div
      className="relative w-full h-[90vh] overflow-hidden"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Ensure drag ends if mouse leaves the element
    >
      {/* Carousel Image */}
      <img
        src={images[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        className="w-full h-full object-cover"
      />

      {/* Fixed Text in Center */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
        <p>Your Fixed Text Here</p>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-gray-900" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;