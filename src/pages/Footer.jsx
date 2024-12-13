import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#d2d9c7] text-gray-400 py-6">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Tattoo Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;