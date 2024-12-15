import React, { useState } from "react";

const imagesData = [
  {
    name: "Dragon Koi",
    type: "TAG1",
    url: "https://artoramashop.com/cdn/shop/products/pablo-picasso-the-kiss-1979-artwork-t-shirt-art-o-rama-style-couple-cubism-famous_807.png?v=1582883129&width=300",
  },
  {
    name: "Wolf Art",
    type: "TAG2",
    url: "https://artoramashop.com/cdn/shop/products/pablo-picasso-the-kiss-1979-artwork-t-shirt-art-o-rama-style-couple-cubism-famous_807.png?v=1582883129&width=300",
  },
  {
    name: "Bald Warrior",
    type: "TAG2",
    url: "https://artoramashop.com/cdn/shop/products/pablo-picasso-the-kiss-1979-artwork-t-shirt-art-o-rama-style-couple-cubism-famous_807.png?v=1582883129&width=300",
  }
];

const ArtTshirtGallery = () => {
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

  return (
    <div className="p-6 bg-gray-900 text-white">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">ART TSHIRT</h2>
        <div className="flex justify-center space-x-4 mb-6">
          {["ALL", "TAG1", "TAG2", "TAG3"].map((type) => (
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
            <img src={img.url} alt={img.description} className="w-full h-48" />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
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
              alt={currentImage.description}
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
        <a
          className="py-2 px-4 bg-[#d2d9c7] text-black rounded hover:bg-gray-600 transition-all"
          href="/art-tshirt"
        >
          View More
        </a>
      </div>
    </div>
  );
};

export default ArtTshirtGallery;
