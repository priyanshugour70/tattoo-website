import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TshirtCarousel = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const tshirtCategories = [
    {
      url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
      title: 'Art T-Shirts',
      description: 'Custom artistic designs on premium quality tees',
      route: '/art-tshirt',
      buttonText: 'Design Now'
    },
    {
      url: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop',
      title: 'Printed T-Shirts',
      description: 'High-quality prints with vibrant colors',
      route: '/printed-tshirt',
      buttonText: 'Order Now'
    },
    {
      url: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&h=600&fit=crop',
      title: 'Custom Graphics',
      description: 'Personalized designs tailored to your style',
      route: '/book-now',
      buttonText: 'Customize'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % tshirtCategories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + tshirtCategories.length) % tshirtCategories.length);
  };

  return (
    <div className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">T-SHIRT COLLECTION</h2>
          <p className="text-gray-400 text-lg">Express yourself with our custom designs</p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {tshirtCategories.map((category, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="relative h-96 bg-gradient-to-br from-orange-900 to-red-900">
                    <img
                      src={category.url}
                      alt={category.title}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <h3 className="text-3xl font-bold mb-2">{category.title}</h3>
                      <p className="text-gray-300 text-lg mb-4">{category.description}</p>
                      <button
                        onClick={() => navigate(category.route)}
                        className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors duration-200"
                      >
                        {category.buttonText}
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
            {tshirtCategories.map((_, index) => (
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
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-3 px-8 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Start Designing
            </button>
            <button
              onClick={() => navigate('/art-tshirt')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 py-3 px-8 rounded-lg font-semibold transition-all duration-200"
            >
              Browse Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TshirtCarousel;