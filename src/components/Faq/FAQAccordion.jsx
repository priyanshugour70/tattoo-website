import React, { useState } from "react";
import FAQItem from "./FAQItem";

const FAQAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null); // Track which item is open

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the open item
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index} // Pass if the current item is open
          onClick={() => toggleItem(index)} // Pass the toggle function
        />
      ))}
    </div>
  );
};

export default FAQAccordion;