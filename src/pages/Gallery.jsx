import React, { useState } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80",
    name: "Forest Reflection",
  },
  {
    src: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80",
    name: "Mountain Peaks",
  },
  {
    src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80",
    name: "Sunset at Beach",
  },
  {
    src: "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80",
    name: "Winding Road",
  },
  {
    src: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
    name: "City Skyline",
  },
  {
    src: "https://docs.material-tailwind.com/img/team-3.jpg",
    name: "Portrait Photography",
  },
  {
    src: "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80",
    name: "Forest Reflection",
  },
  {
    src: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80",
    name: "Mountain Peaks",
  },
  {
    src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80",
    name: "Sunset at Beach",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="bg-black text-white my-12 ">
      <div className="text-center py-8">
        <h1 className="text-3xl font-bold uppercase">
          <div className="bg-[#d2d9c7] text-black inline-block px-8 py-2 rounded-full">
            Gallery
          </div>
        </h1>
      </div>
      <div className="px-4 py-8 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer border border-gray-600"
            onClick={() => openImage(index)}
          >
            <img
              src={image.src}
              alt={image.name}
              className="h-48 w-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-white text-lg font-bold text-center">
                {image.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-2xl font-bold"
            onClick={closeImage}
          >
            &times;
          </button>
          <button
            className="absolute left-4 text-white text-2xl font-bold"
            onClick={prevImage}
          >
            &#8592;
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.name}
            className="max-w-full max-h-full rounded-lg"
          />
          <button
            className="absolute right-4 text-white text-2xl font-bold"
            onClick={nextImage}
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
