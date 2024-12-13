import React from "react";

const Button = ({ text, onClick, className }) => {
  return (
    <button
      className={`bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-600 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;