import React from "react";
import PortfolioHeader from "../components/Portfolio/PortfolioHeader";
import PortfolioGrid from "../components/Portfolio/PortfolioGrid";

const Portfolio = () => {
  return (
    <div className="portfolio-page bg-black text-white min-h-screen p-8">
      {/* Portfolio Header */}
      <PortfolioHeader title="Portfolio" />

      {/* Portfolio Grid */}
      <PortfolioGrid />

      {/* Read More Button */}
      <div className="text-center mt-12">
        <button className="bg-[#d2d9c7] text-black px-8 py-3 font-semibold rounded-md hover:bg-[#c2cbb4] transition">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Portfolio;