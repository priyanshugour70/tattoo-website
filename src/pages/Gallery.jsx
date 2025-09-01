import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [randomizedImages, setRandomizedImages] = useState([]);

  // All available images from different categories
  const allImages = [
    // Tattoo images
    {
      id: 1,
      name: "Dragon Koi Japanese Sleeve",
      category: "Tattoo",
      url: "/images/tattoo/dragon-koi-japanese-sleeve.jpg",
      description: "Traditional Japanese sleeve featuring dragon and koi fish with intricate details and vibrant colors.",
      artist: "Master Tattoo Artist",
      style: "Japanese Traditional"
    },
    {
      id: 2,
      name: "Wolf Realistic Design",
      category: "Tattoo",
      url: "/images/tattoo/wolf-tattoo-realistic-designs.jpg",
      description: "Hyper-realistic wolf portrait with stunning detail and lifelike features.",
      artist: "Realism Specialist",
      style: "Photorealistic"
    },
    {
      id: 3,
      name: "Mandala Design Ideas",
      category: "Tattoo",
      url: "/images/tattoo/mandala-tattoo-design-ideas.jpg",
      description: "Intricate mandala patterns with spiritual significance and geometric precision.",
      artist: "Sacred Geometry Expert",
      style: "Mandala"
    },
    {
      id: 4,
      name: "Butterfly Women Designs",
      category: "Tattoo",
      url: "/images/tattoo/butterfly-tattoo-women-designs.jpg",
      description: "Elegant butterfly designs perfect for women with delicate details.",
      artist: "Feminine Design Specialist",
      style: "Delicate Art"
    },
    {
      id: 5,
      name: "Geometric Lotus Flower",
      category: "Tattoo",
      url: "/images/tattoo/geometric-lotus-flower-design.jpg",
      description: "Modern geometric interpretation of lotus flower combining nature and mathematics.",
      artist: "Geometric Artist",
      style: "Geometric"
    },
    {
      id: 6,
      name: "Phoenix Drawing Design",
      category: "Tattoo",
      url: "/images/tattoo/phoenix-drawing-design.jpg",
      description: "Majestic phoenix rising from ashes with detailed feathers and flames.",
      artist: "Mythical Creatures Specialist",
      style: "Neo-Traditional"
    },
    {
      id: 7,
      name: "Samurai Sakura Japanese",
      category: "Tattoo",
      url: "/images/tattoo/samurai-sakura-japanese-tattoo.jpg",
      description: "Traditional Japanese samurai with cherry blossoms in authentic style.",
      artist: "Japanese Traditional Master",
      style: "Japanese Traditional"
    },
    {
      id: 8,
      name: "Spine Tattoo Beautiful Designs",
      category: "Tattoo",
      url: "/images/tattoo/spine-tattoo-beautiful-designs.jpg",
      description: "Elegant spine tattoo design that follows the natural curve of the back.",
      artist: "Anatomical Specialist",
      style: "Ornamental"
    },
    {
      id: 9,
      name: "Studio Interior 1",
      category: "Studio",
      url: "/images/ambience/studio-interior-1.jpg",
      description: "Professional tattoo studio setup with modern equipment and sterile environment.",
      artist: "Studio Design",
      style: "Professional Setup"
    },
    {
      id: 10,
      name: "Studio Interior 2",
      category: "Studio",
      url: "/images/ambience/studio-interior-2.jpg",
      description: "Comfortable client area with artistic decorations and welcoming atmosphere.",
      artist: "Interior Design",
      style: "Ambience"
    },
    {
      id: 11,
      name: "Geometric Mandala Sleeve",
      category: "Tattoo",
      url: "/images/tattoo/geometric-mandala-sleeve-tattoo.jpg",
      description: "Full sleeve mandala with geometric patterns and sacred symbols.",
      artist: "Sacred Geometry Master",
      style: "Geometric Mandala"
    },
    {
      id: 12,
      name: "Nature Human Earth Bond",
      category: "Tattoo",
      url: "/images/tattoo/nature-tattoo-human-earth-bond.jpg",
      description: "Artistic representation of human connection with nature and earth.",
      artist: "Nature Artist",
      style: "Symbolic Art"
    }
  ];

  // Randomize images on component mount
  useEffect(() => {
    const shuffled = [...allImages].sort(() => Math.random() - 0.5);
    setRandomizedImages(shuffled);
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            GALLERY
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our collection of stunning tattoo designs, studio ambience, and artistic creations
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {randomizedImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg bg-gray-800 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/25 cursor-pointer"
              onClick={() => openModal(image)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg mb-1">{image.name}</h3>
                  <p className="text-purple-300 text-sm">{image.category}</p>
                  <p className="text-gray-300 text-xs mt-1">{image.style}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-gray-900 rounded-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-red-600 hover:bg-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200"
            >
              ✕
            </button>

            <div className="flex flex-col lg:flex-row">
              {/* Image */}
              <div className="lg:w-2/3">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.name}
                  className="w-full h-64 lg:h-96 object-cover"
                />
              </div>

              {/* Details */}
              <div className="lg:w-1/3 p-6 text-white">
                <h2 className="text-2xl font-bold mb-3 text-purple-400">{selectedImage.name}</h2>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-400 font-semibold">Category:</span>
                    <span className="ml-2 text-purple-300">{selectedImage.category}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 font-semibold">Style:</span>
                    <span className="ml-2 text-purple-300">{selectedImage.style}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 font-semibold">Artist:</span>
                    <span className="ml-2 text-purple-300">{selectedImage.artist}</span>
                  </div>
                  <div className="pt-3">
                    <span className="text-gray-400 font-semibold">Description:</span>
                    <p className="mt-2 text-gray-300 leading-relaxed">{selectedImage.description}</p>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-6 space-y-3">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
                    Book Consultation
                  </button>
                  <button className="w-full border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;