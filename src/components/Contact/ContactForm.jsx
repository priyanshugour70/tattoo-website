import React from "react";

const ContactForm = () => {
  return (
    <form className="flex flex-col items-center gap-4 w-full max-w-md mx-auto mb-8">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-2 border-b-2 border-gray-300 outline-none focus:border-gray-600"
      />
      <input
        type="email"
        placeholder="Your Email Address"
        className="w-full p-2 border-b-2 border-gray-300 outline-none focus:border-gray-600"
      />
      <textarea
        placeholder="Please leave us a message."
        className="w-full p-2 border-b-2 border-gray-300 outline-none focus:border-gray-600"
        rows="4"
      ></textarea>
      <button
        type="submit"
        className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-900"
      >
        SEND
      </button>
    </form>
  );
};

export default ContactForm;