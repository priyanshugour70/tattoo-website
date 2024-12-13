import React from "react";

const AboutTheArtist = () => {
  return (
    <div className="bg-gray-900 text-white">
    {/* About the Artist Section */}
    <div className="flex flex-col lg:flex-row items-center justify-center bg-gray-900 py-16">
      {/* Left Section */}
      <div className="lg:w-1/2 relative">
        <img
          src="/logo.png"
          alt="Tattoo Artist"
          className="object-cover w-50"
        />
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 p-8">
        <h1 className="text-5xl font-bold mb-6">About the Artist</h1>
        <div className=" text-white p-6 rounded-lg shadow-lg">
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

export default AboutTheArtist;