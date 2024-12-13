import React from "react";

const AboutOurStudio = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* About Our Studio Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center h-screen">
        {/* Left Section */}
        <div className="lg:w-1/2 p-8">
          <h1 className="text-5xl font-bold mb-6">About Our Studio.</h1>
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
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
          <img
            src="https://img.freepik.com/free-vector/vintage-tattoo-monochrome-concept_225004-1409.jpg"
            alt="Tattoo Process"
            className="object-cover w-full h-full"
          />
          <button className="absolute bottom-8 right-8 bg-white text-black py-3 px-6 text-sm font-medium flex items-center gap-2 rounded-lg shadow-lg hover:bg-gray-200">
            See More
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>

      {/* About the Artist Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center bg-gray-900 py-16">
        {/* Left Section */}
        <div className="lg:w-1/2 relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQff9TsQmfVDWD82IJvm6_yqGpR78RqUVkiww&s"
            alt="Tattoo Artist"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 p-8">
          <h1 className="text-5xl font-bold mb-6">About the Artist</h1>
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
            <p className="text-lg leading-7 mb-4">
              Hi, I'm <strong>Prashant</strong>, the proud owner of "The House
              of Tattoos." After dedicating years of my life to building this
              studio, I can truly say that it has been a journey filled with
              passion, hard work, and perseverance.
            </p>
            <p className="text-lg leading-7">
              I believe that every tattoo should be a unique masterpiece, and I
              take pride in collaborating with my clients to turn their ideas
              into beautiful designs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOurStudio;