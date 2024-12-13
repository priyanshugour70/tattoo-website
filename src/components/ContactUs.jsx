/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import contactData from "../data/contact.json";

const ContactUs = () => {
  const [isMapVisible, setIsMapVisible] = useState(false);

  const toggleMapVisibility = () => {
    setIsMapVisible((prev) => !prev);
  };

  return (
    <div className="contact-page bg-black text-white p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold uppercase mb-4">
          <h1 className="text-5xl font-semibold uppercase tracking-wide">
            CONTACT
          </h1>
        </h1>
        <p className="mb-8">Visit us or send us an email</p>
      </div>

      <div className="text-center mb-8">
        <span className="mb-2">
          <strong>Address:</strong> {contactData.address}
        </span>
        <span className="mb-2">
          <strong>Phone:</strong> {contactData.phone}
        </span>
        <span className="mb-2">
          <strong>Website:</strong>{" "}
          <a
            href={`https://${contactData.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            {contactData.website}
          </a>
        </span>
        <span className="mb-4">
          <strong>More Info:</strong> {contactData.info}
        </span>
      </div>

      {/* Contact Form */}
      <div className="max-w-md mx-auto mb-8">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 bg-gray-800 text-white rounded focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email Address"
            className="p-3 bg-gray-800 text-white rounded focus:outline-none"
          />
          <textarea
            placeholder="Please leave us a message."
            rows="4"
            className="p-3 bg-gray-800 text-white rounded focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="py-2 px-4 bg-gray-700 text-white rounded hover:bg-gray-600 transition-all"
          >
            Send
          </button>
        </form>
      </div>

      {/* Social Links */}
      <div className="text-center mb-8">
        <h3 className="text-lg font-bold mb-4">Connect with us:</h3>
        <div className="flex justify-center gap-4">
          {contactData.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className={`fab fa-${link.platform.toLowerCase()} fa-lg`}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="text-center">
        <h3 className="text-lg font-bold mb-4">Map</h3>
        <button
          onClick={toggleMapVisibility}
          className="py-2 px-4 bg-[#d2d9c7] text-black rounded hover:bg-gray-600 transition-all"
        >
          {isMapVisible ? "Hide Map" : "Show Map"}
        </button>

        {isMapVisible && (
          <div className="mt-4">
            <iframe
              src={contactData.mapEmbedUrl}
              width="80%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded mx-auto"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
