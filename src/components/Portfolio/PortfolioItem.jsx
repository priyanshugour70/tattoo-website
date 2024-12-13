import React from "react";

const PortfolioItem = ({ image, headline, description }) => {
  return (
    <div className="max-w-lg mx-auto">
      {/* Image Section */}
      <div className="border border-gray-300 p-2 bg-gray-900">
        <img
          src={image}
          alt={headline}
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="bg-[#d2d9c7] text-black p-6 mt-4 border border-gray-300">
        <h3 className="text-xl font-bold mb-2 uppercase">{headline}</h3>
        <p className="text-sm text-gray-700 mb-4">{description}</p>
        <button className="px-6 py-2 border border-gray-600 text-sm font-medium uppercase hover:bg-gray-800 hover:text-white transition">
          Read More
        </button>
      </div>
    </div>
  );
};

export default PortfolioItem;