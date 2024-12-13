import React from "react";

const FAQHeader = ({ title }) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold uppercase">{title}</h1>
    </div>
  );
};

export default FAQHeader;