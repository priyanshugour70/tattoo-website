import React from "react";

const CustomButton = ({ text, onClick }) => {
  return (
    <button
      className="relative inline-flex items-center justify-center bg-[#d3d6bd] text-black font-bold uppercase border-2 border-black py-2 px-8 text-lg 
                 transition-all duration-300 ease-in-out hover:bg-[#c1c4a9] active:scale-95"
      onClick={onClick}
      style={{
        clipPath: "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)", // Hexagonal shape
      }}
    >
      {/* Outer hexagonal border */}
      <div
        className="absolute inset-0 border-2 border-black -z-10"
        style={{
          clipPath: "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)", // Matching hexagonal shape
        }}
        aria-hidden="true"
      ></div>
      {text}
    </button>
  );
};

export default CustomButton;