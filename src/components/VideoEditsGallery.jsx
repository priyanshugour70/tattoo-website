import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const imagesData = [
  {
    name: "Cinematic Wedding Edit",
    type: "Wedding",
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&h=300&fit=crop",
    isAvailable: true,
  },
  {
    name: "Corporate Promo Video",
    type: "Corporate",
    url: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&h=300&fit=crop",
    isAvailable: true,
  },
  {
    name: "Music Video Production",
    type: "Music",
    url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop",
    isAvailable: true,
  },
  {
    name: "Travel Documentary",
    type: "Travel",
    url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500&h=300&fit=crop",
    isAvailable: true,
  },
  {
    name: "Product Showcase",
    type: "Commercial",
    url: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=500&h=300&fit=crop",
    isAvailable: true,
  },
  {
    name: "Event Highlights",
    type: "Event",
    url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop",
    isAvailable: false,
  },
];

const VideoEditsGallery = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("ALL");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const filteredImages =
    selectedType === "ALL"
      ? imagesData
      : imagesData.filter((img) => img.type === selectedType);

  const handleImageClick = (img) => {
    if (img.isAvailable) {
      setCurrentImage(img);
      setModalOpen(true);
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-white">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">VIDEO EDITS</h2>
        <div className="flex justify-center space-x-4 mb-6">
          {["ALL", "Wedding", "Corporate", "Music", "Travel", "Commercial", "Event"].map((type) => (
            <button
              key={type}
              className={`px-4 py-2 rounded ${
                selectedType === type
                  ? "bg-gray-700 text-white"
                  : "bg-gray-600 text-gray-300"
              } hover:bg-gray-500`}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-8 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl">
        {filteredImages.map((img) => (
          <div
            key={img.name}
            className="relative group cursor-pointer border border-gray-300 p-2 bg-gray-900"
            onClick={() => handleImageClick(img)}
          >
            <img
              src={img.url}
              alt={img.name}
              className="w-full h-48 object-cover opacity-50"
            />
            {!img.isAvailable && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
                <p className="text-4xl text-white font-bold">Upcoming</p>
              </div>
            )}
            <div
              className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ${
                img.isAvailable ? "bg-black bg-opacity-60" : "hidden"
              }`}
            >
              <p className="text-white text-lg font-bold border border-gray-300 px-4 py-2">
                {img.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && currentImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative bg-gray-800 rounded-lg p-6 max-w-xl w-full text-center">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-3 text-white text-2xl"
            >
              &times;
            </button>
            <img
              src={currentImage.url}
              alt={currentImage.name}
              className="w-full h-64 object-contain mb-4 rounded"
            />
            <h3 className="text-2xl text-white mb-2">{currentImage.name}</h3>
            <div className="flex justify-between mt-4">
              <button
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
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
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
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
      )}

      <div className="text-center my-6">
        <button
          onClick={() => navigate('/video-edits')}
          className="py-2 px-4 bg-[#d2d9c7] text-black rounded hover:bg-gray-600 transition-all"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default VideoEditsGallery;