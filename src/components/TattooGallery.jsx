import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const imagesData = [
  {
    name: "Dragon Koi Japanese Sleeve",
    type: "Japanese",
    url: "/images/tattoo/dragon-koi-japanese-sleeve.jpg",
  },
  {
    name: "Wolf Realistic Design",
    type: "Realistic",
    url: "/images/tattoo/wolf-tattoo-realistic-designs.jpg",
  },
  {
    name: "Mandala Design Ideas",
    type: "Mandala",
    url: "/images/tattoo/mandala-tattoo-design-ideas.jpg",
  },
  {
    name: "Butterfly Women Designs",
    type: "Butterfly",
    url: "/images/tattoo/butterfly-tattoo-women-designs.jpg",
  },
  {
    name: "Geometric Lotus Flower",
    type: "Geometric",
    url: "/images/tattoo/geometric-lotus-flower-design.jpg",
  },
  {
    name: "Butterfly Hand Tattoo",
    type: "Butterfly",
    url: "/images/tattoo/butterfly-hand-tattoo.jpg",
  },
  {
    name: "Butterfly Design",
    type: "Butterfly",
    url: "/images/tattoo/butterfly-tattoo-design.jpg",
  },
];

const TattooGallery = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("ALL");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const filteredImages =
    selectedType === "ALL"
      ? imagesData
      : imagesData.filter((img) => img.type === selectedType);

  const handleImageClick = (img) => {
    setCurrentImage(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-900 text-white">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">GALLERY</h2>
        
        {/* Filter Buttons - Responsive */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
          {["ALL", "Japanese", "Realistic", "Mandala", "Butterfly", "Geometric"].map((type) => (
            <button
              key={type}
              className={`px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full transition-all ${
                selectedType === type
                  ? "bg-white text-gray-900 shadow-lg"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid - Mobile Optimized */}
      <div className="px-2 sm:px-4 py-4 sm:py-8 mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-7xl">
        {filteredImages.map((img, index) => (
          <div
            key={`${img.name}-${index}`}
            className="relative group cursor-pointer border border-gray-600 rounded-lg overflow-hidden bg-gray-800 transition-transform hover:scale-105 active:scale-95"
            onClick={() => handleImageClick(img)}
          >
            <img 
              src={img.url} 
              alt={img.name} 
              className="w-full h-32 sm:h-40 md:h-48 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity">
              <p className="text-white text-sm sm:text-lg font-bold border border-gray-300 px-2 py-1 sm:px-4 sm:py-2 rounded text-center">
                {img.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile-Optimized Modal */}
      {modalOpen && currentImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative bg-gray-800 rounded-lg p-4 sm:p-6 w-full max-w-2xl max-h-full overflow-auto">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 text-white text-2xl sm:text-3xl w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition-colors z-10"
              aria-label="Close modal"
            >
              &times;
            </button>
            
            <div className="text-center">
              <img
                src={currentImage.url}
                alt={currentImage.name}
                className="w-full h-48 sm:h-64 md:h-80 object-contain mb-4 rounded"
              />
              <h3 className="text-xl sm:text-2xl text-white mb-4 font-bold">{currentImage.name}</h3>
              
              {/* Navigation Buttons */}
              <div className="flex justify-between gap-4">
                <button
                  className="flex-1 px-3 py-2 sm:px-4 sm:py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm sm:text-base"
                  onClick={() => {
                    const index = filteredImages.indexOf(currentImage);
                    setCurrentImage(
                      filteredImages[
                        (index + filteredImages.length - 1) %
                          filteredImages.length
                      ]
                    );
                  }}
                >
                  Previous
                </button>
                <button
                  className="flex-1 px-3 py-2 sm:px-4 sm:py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm sm:text-base"
                  onClick={() => {
                    const index = filteredImages.indexOf(currentImage);
                    setCurrentImage(
                      filteredImages[(index + 1) % filteredImages.length]
                    );
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="text-center mt-6 sm:mt-8">
        <button
          onClick={() => navigate('/tattoo')}
          className="inline-block py-2 px-4 sm:py-3 sm:px-6 bg-[#d2d9c7] text-black rounded-lg hover:bg-gray-300 transition-all text-sm sm:text-base font-medium"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default TattooGallery;
