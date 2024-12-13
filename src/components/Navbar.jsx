import React, { useState } from "react";
import { Link } from "react-router-dom"; // Using Link from react-router-dom
import navItems from "../data/navbar.json";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="lg:px-32 container px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          <img src="/logo.png" alt="Logo" className="w-12 mx-auto mb-2" />
        </a>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path} // Use Link to navigate without reloading
              className="hover:text-gray-400 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 py-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block px-4 py-2 hover:bg-gray-700 transition"
              onClick={() => setIsOpen(false)} // Close the menu when an item is clicked
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;