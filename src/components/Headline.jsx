import React from "react";

const Headline = ({ heading, desc }) => {
  return (
    <div className="relative bg-cover bg-center h-48 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative text-center text-white px-4 max-w-4xl mx-auto">
        {/* Horizontal line above */}
        <div className="flex justify-center items-center">
          <hr className="w-full border-gray-500" />
        </div>

        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-bold mt-2 uppercase tracking-wide">
          {heading}
        </h2>
        {/* Horizontal line above */}
        <div className="flex justify-center items-center">
          <hr className="w-full border-gray-500" />
        </div>

        {/* Horizontal line below */}
        <div className="flex justify-center items-center mt-2">
          <hr className="w border-gray-500" />
        </div>

        {/* Description */}
        <p className="text-sm md:text-base mt-2">{desc}</p>
      </div>
    </div>
  );
};

export default Headline;
