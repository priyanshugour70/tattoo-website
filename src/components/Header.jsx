import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; // Import from react-scroll
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger and close icons

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust the value as needed
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 text-white bg-gray-700 ${
        isScrolled ? "py-6 shadow-lg" : "py-8"
      } transition-all duration-300`}
    >
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center px-6">
        {/* Navigation Links */}
        <nav
          className={`absolute lg:relative top-16 lg:top-auto left-0 w-full lg:w-auto bg-gray-700 lg:bg-transparent flex justify-center items-center transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden lg:block"
          }`}
        >
          <ul className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center p-4 lg:p-0">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="hover:text-gray-400 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="artists"
                smooth={true}
                duration={500}
                className="hover:text-gray-400 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Artists
              </Link>
            </li>
            <li>
              <Link
                to="gallery"
                smooth={true}
                duration={500}
                className="hover:text-gray-400 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                className="hover:text-gray-400 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="FAQ"
                smooth={true}
                duration={500}
                className="hover:text-gray-400 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="hover:text-gray-400 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden absolute top-1 right-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
