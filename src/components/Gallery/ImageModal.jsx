import React from "react";

const ImageModal = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <button
        className="absolute top-4 right-4 text-white text-2xl"
        onClick={onClose}
      >
        &times;
      </button>
      <img
        src={image}
        alt="Full View"
        className="max-w-4xl max-h-screen object-contain"
      />
    </div>
  );
};

export default ImageModal;