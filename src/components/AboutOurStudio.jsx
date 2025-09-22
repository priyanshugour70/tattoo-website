import React from "react";
import { useNavigate } from "react-router-dom";

const AboutOurStudio = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-gray-900 text-white">
      {/* About Our Studio Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center">
        {/* Left Section */}
        <div className="lg:w-1/2 p-8">
          <h1 className="text-5xl font-bold mb-8">About Our Studio.</h1>
          <div className="text-white text-gray-900 p-6 rounded-lg shadow-lg">
            <p className="text-lg leading-7 mb-4">
              Welcome to <strong>"The House of Tattoos,"</strong> a space born
              from passion, dedication, and years of hard work. Our founder has
              poured his heart and soul into creating a tattoo studio that is
              more than just a place to get inked; it’s a sanctuary for
              self-expression and creativity.
            </p>
            <p className="text-lg leading-7">
              From the very beginning, the vision for "The House of Tattoos" was
              to design a studio that reflects the beauty of tattoo art while
              ensuring comfort and relaxation for every customer.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            <img
              src="/images/about/founder.png"
              alt="Modern Studio Setup"
              className="object-cover w-full h-64 rounded-lg shadow-lg"
            />
            <img
              src="/images/about/studio.png"
              alt="Artistic Workspace"
              className="object-cover w-full h-64 rounded-lg shadow-lg"
            />
          </div>
          <button 
            onClick={() => navigate('/gallery')}
            className="absolute bottom-8 right-8 bg-white text-black py-3 px-6 text-sm font-medium flex items-center gap-2 rounded-lg shadow-lg hover:bg-gray-200"
          >
            See More
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutOurStudio;