import React from "react";

const SocialIcons = ({ links }) => {
  return (
    <div className="flex justify-center gap-4 mb-8">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <i className={`fab fa-${link.platform} text-2xl`}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;