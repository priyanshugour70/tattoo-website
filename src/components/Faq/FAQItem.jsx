import React from "react";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="faq-item border-b border-gray-700 pb-4">
      <div
        className="cursor-pointer flex justify-between items-center"
        onClick={onClick} // Handle click
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <span className="text-gray-400">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <p className="text-gray-400 mt-2">{answer}</p>}
    </div>
  );
};

export default FAQItem;