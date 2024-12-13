import React, { useState } from "react";

const imagesData = [
  {
    name: "Dragon Koi",
    type: "TAG1",
    url: "https://rukminim2.flixcart.com/image/850/1000/xif0q/tattoo/w/l/u/5-1-hb-22-temporary-tattoowala-10-original-imaghpqkxq8wjghw.jpeg?q=20&crop=false",
    description: "A beautiful koi fish design with a dragon element.",
  },
  {
    name: "Wolf Art",
    type: "TAG2",
    url: "https://rukminim2.flixcart.com/image/850/1000/xif0q/tattoo/w/l/u/5-1-hb-22-temporary-tattoowala-10-original-imaghpqkxq8wjghw.jpeg?q=20&crop=false",
    description: "A bold wolf illustration.",
  },
  {
    name: "Bald Warrior",
    type: "TAG3",
    url: "https://rukminim2.flixcart.com/image/850/1000/xif0q/tattoo/w/l/u/5-1-hb-22-temporary-tattoowala-10-original-imaghpqkxq8wjghw.jpeg?q=20&crop=false",
    description: "A mysterious bald warrior tattoo design.",
  },
  {
    name: "Phoenix Fire",
    type: "TAG1",
    url: "https://rukminim2.flixcart.com/image/850/1000/xif0q/tattoo/w/l/u/5-1-hb-22-temporary-tattoowala-10-original-imaghpqkxq8wjghw.jpeg?q=20&crop=false",
    description: "A majestic phoenix engulfed in flames.",
  },
  {
    name: "Geometric Wolf",
    type: "TAG2",
    url: "https://rukminim2.flixcart.com/image/850/1000/xif0q/tattoo/w/l/u/5-1-hb-22-temporary-tattoowala-10-original-imaghpqkxq8wjghw.jpeg?q=20&crop=false",
    description: "A modern take on the classic wolf design.",
  },
  {
    name: "Lotus Mandala",
    type: "TAG3",
    url: "https://rukminim2.flixcart.com/image/850/1000/xif0q/tattoo/w/l/u/5-1-hb-22-temporary-tattoowala-10-original-imaghpqkxq8wjghw.jpeg?q=20&crop=false",
    description: "A peaceful mandala with a lotus centerpiece.",
  },
  {
    name: "Tribal Dragon",
    type: "TAG1",
    url: "https://rukminim2.flixcart.com/image/850/1000/xif0q/tattoo/w/l/u/5-1-hb-22-temporary-tattoowala-10-original-imaghpqkxq8wjghw.jpeg?q=20&crop=false",
    description: "A fierce tribal dragon tattoo.",
  },
  {
    name: "Butterfly Ink",
    type: "TAG2",
    url: "https://rukminim2.flixcart.com/image/850/1000/xif0q/tattoo/w/l/u/5-1-hb-22-temporary-tattoowala-10-original-imaghpqkxq8wjghw.jpeg?q=20&crop=false",
    description: "A delicate butterfly tattoo with intricate details.",
  },
];

const SelectiveGallery = () => {
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
        <h2 className="text-4xl font-bold mb-4">GALLERY</h2>
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
            className="relative group cursor-pointer"
            onClick={() => handleImageClick(img)}
          >
            <img
              src={img.url}
              alt={img.description}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-lg">{img.name}</p>
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
            <p className="text-gray-300">{currentImage.description}</p>
            <div className="flex justify-between mt-4">
              <button
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
                onClick={() => {
                  const index = filteredImages.indexOf(currentImage);
                  setCurrentImage(
                    filteredImages[(index + filteredImages.length - 1) % filteredImages.length]
                  );
                }}
              >
                Previous
              </button>
              <button
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
                onClick={() => {
                  const index = filteredImages.indexOf(currentImage);
                  setCurrentImage(filteredImages[(index + 1) % filteredImages.length]);
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectiveGallery;