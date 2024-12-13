import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from "react-icons/fa";
import footerData from "../data/footer.json";

const Footer = () => {


  return (
    <footer className="bg-gray-900 text-gray-100 py-8 px-4">
      <div className="max-w-screen-lg mx-auto text-center">
        {/* Logo Section */}
        <div className="mb-6">
          <img src={footerData.logo} alt="Logo" className="w-16 mx-auto mb-4" />
          <h1 className="text-2xl font-semibold">{footerData.title}</h1>
        </div>

        {/* Contact Information */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-lg" />
            <span>{footerData.contactInfo.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-lg" />
            <span>{footerData.contactInfo.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-lg" />
            <span>{footerData.contactInfo.address}</span>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6">
          <a
            href={footerData.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400"
          >
            <FaFacebook />
          </a>
          <a
            href={footerData.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;