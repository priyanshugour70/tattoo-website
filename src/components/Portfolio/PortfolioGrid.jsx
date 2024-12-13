import React from "react";
import PortfolioItem from "./PortfolioItem";

const portfolioData = [
  {
    id: 1,
    image: "https://rayoflightthemes.com/WordPressThemes/Ink_Tattoo_Studio_WordPress_Theme/wp-content/uploads/2014/01/additional2.jpg",
    headline: "Headline One",
    description:
      "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non legentis in iis qui facit eorum claritatem. Investigations...",
  },
  {
    id: 2,
    image: "https://rayoflightthemes.com/WordPressThemes/Ink_Tattoo_Studio_WordPress_Theme/wp-content/uploads/2014/01/additional2.jpg",
    headline: "Headline Two",
    description:
      "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non legentis in iis qui facit eorum claritatem. Investigations...",
  },
  {
    id: 3,
    image: "https://rayoflightthemes.com/WordPressThemes/Ink_Tattoo_Studio_WordPress_Theme/wp-content/uploads/2014/01/additional2.jpg",
    headline: "Headline Three",
    description:
      "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non legentis in iis qui facit eorum claritatem. Investigations...",
  },
  {
    id: 4,
    image: "https://rayoflightthemes.com/WordPressThemes/Ink_Tattoo_Studio_WordPress_Theme/wp-content/uploads/2014/01/additional2.jpg",
    headline: "Headline Four",
    description:
      "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non legentis in iis qui facit eorum claritatem. Investigations...",
  },
];

const PortfolioGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:mx-32 gap-12">
      {portfolioData.map((item) => (
        <PortfolioItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default PortfolioGrid;