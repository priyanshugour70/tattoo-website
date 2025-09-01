import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ServicesCarousel = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      url: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=600&fit=crop',
      title: 'Custom Shoes',
      description: 'Personalized footwear with unique artistic designs',
      route: '/shoes',
      buttonText: 'Customize Shoes',
      gradient: 'from-blue-900 to-purple-900'
    },
    {
      url: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&h=600&fit=crop',
      title: 'Video Editing',
      description: 'Professional video editing and motion graphics',
      route: '/video-edits',
      buttonText: 'Start Project',
      gradient: 'from-green-900 to-teal-900'
    },
    {
      url: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=600&fit=crop',
      title: 'Custom Art',
      description: 'Bespoke artwork and design services',
      route: '/book-now',
      buttonText: 'Commission Art',
      gradient: 'from-pink-900 to-red-900'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <div className="bg-gray-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">OUR SERVICES</h2>
          <p className="text-gray-400 text-lg">Explore our creative offerings beyond tattoos</p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`relative h-96 bg-gradient-to-br ${service.gradient}`}>
                    <img
                      src={service.url}
                      alt={service.title}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
                      <p className="text-gray-300 text-lg mb-4">{service.description}</p>
                      <button
                        onClick={() => navigate(service.route)}
                        className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors duration-200"
                      >
                        {service.buttonText}
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
            {services.map((_, index) => (
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
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-3 px-8 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Get Quote
            </button>
            <button
              onClick={() => navigate('/gallery')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 py-3 px-8 rounded-lg font-semibold transition-all duration-200"
            >
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;