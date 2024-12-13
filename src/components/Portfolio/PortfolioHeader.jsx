import React from "react";

const PortfolioHeader = ({ title }) => {
  return (
    <div className="text-center mb-16">
      <div className="bg-[#d2d9c7] text-black inline-block px-8 py-2 rounded-full">
        <h1 className="text-3xl font-semibold uppercase tracking-wide">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default PortfolioHeader;