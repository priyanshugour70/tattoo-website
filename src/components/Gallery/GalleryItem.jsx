import React from "react";

const GalleryItem = ({ image, onClick }) => {
  return (
    <div
      className="relative group overflow-hidden border border-gray-600 cursor-pointer"
      onClick={onClick}
    >
      {/* Image */}
      <img
        src={image.imageUrl}
        alt={image.imageName}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />

      {/* Overlay with image name */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className="text-white text-lg font-bold translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300"
        >
          {image.imageName}
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;