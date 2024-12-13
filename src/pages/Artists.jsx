import React, { useState } from "react";

const Artists = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const artists = [
    {
      name: "ANE DOE",
      image: "https://rayoflightthemes.com/WordPressThemes/Ink_Tattoo_Studio_WordPress_Theme/wp-content/uploads/2014/01/artist2.jpg",
    },
    {
      name: "JOHN DOE",
      image: "https://rayoflightthemes.com/WordPressThemes/Ink_Tattoo_Studio_WordPress_Theme/wp-content/uploads/2014/01/artist2.jpg",
    },
    {
      name: "ANE DOE",
      image: "https://rayoflightthemes.com/WordPressThemes/Ink_Tattoo_Studio_WordPress_Theme/wp-content/uploads/2014/01/artist2.jpg",
    },
  ];

  const openModal = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage("");
  };

  return (
    <div className="bg-[#111111] text-gray-200 py-10">
      {/* Section Title */}
      <h2 className="text-4xl font-semibold text-center mb-8 text-[#C8C8C8]">
        ARTISTS
      </h2>

      {/* Artists Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {artists.map((artist, index) => (
          <div key={index} className="relative group">
            {/* Image */}
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full h-auto object-cover border border-gray-600"
              onClick={() => openModal(artist.image)}
            />
            {/* Name Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white font-semibold text-lg">{artist.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Description Section */}
      <div className="bg-[#d2d9c7] text-[#111111] p-6 mt-12 max-w-6xl mx-auto rounded-md shadow-md">
        <p className="text-center leading-relaxed">
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum. Nam liber tempor cum soluta nobis eleifend option congue
          nihil imperdiet doming id quod mazim placerat facer possim assum.
        </p>
      </div>

      {/* Modal for Fullscreen Image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold"
            onClick={closeModal}
          >
            &times;
          </button>
          <img
            src={currentImage}
            alt="Fullscreen Artist"
            className="max-w-full max-h-full rounded-md shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Artists;