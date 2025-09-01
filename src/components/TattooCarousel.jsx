import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TattooCarousel = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const tattooImages = [
    {
      url: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=500&h=600&fit=crop',
      title: 'Traditional Tattoos',
      description: 'Classic bold designs with timeless appeal'
    },
    {
      url: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=500&h=600&fit=crop',
      title: 'Realistic Portraits',
      description: 'Lifelike artwork that captures every detail'
    },
    {
      url: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=600&fit=crop',
      title: 'Geometric Designs',
      description: 'Modern patterns with precise symmetry'
    },
    {
      url: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=600&fit=crop',
      title: 'Mandala Art',
      description: 'Spiritual symbols with intricate details'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % tattooImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + tattooImages.length) % tattooImages.length);
  };

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">TATTOO GALLERY</h2>
          <p className="text-gray-400 text-lg">Explore our stunning tattoo artwork</p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {tattooImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="relative h-96 bg-gradient-to-br from-purple-900 to-blue-900">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <h3 className="text-3xl font-bold mb-2">{image.title}</h3>
                      <p className="text-gray-300 text-lg mb-4">{image.description}</p>
                      <button
                        onClick={() => navigate('/tattoo')}
                        className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors duration-200"
                      >
                        View Gallery
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200"
          >
            →
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {tattooImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  currentSlide === index ? 'bg-white' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/book-now')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-8 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Book Consultation
            </button>
            <button
              onClick={() => navigate('/tattoo')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 py-3 px-8 rounded-lg font-semibold transition-all duration-200"
            >
              View All Designs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TattooCarousel;