import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const shoesData = [
  {
    id: 1,
    name: "Custom Air Force 1",
    category: "Sneakers",
    price: "₹8,999",
    originalPrice: "₹12,999",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
    description: "Hand-painted custom design on premium Air Force 1",
    rating: 4.8,
    customizable: true
  },
  {
    id: 2,
    name: "Graffiti Style Vans",
    category: "Casual",
    price: "₹6,999",
    originalPrice: "₹9,999",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400",
    description: "Street art inspired custom Vans with vibrant colors",
    rating: 4.6,
    customizable: true
  },
  {
    id: 3,
    name: "Minimalist Converse",
    category: "Classic",
    price: "₹5,499",
    originalPrice: "₹7,999",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400",
    description: "Clean, minimalist design with subtle artistic touches",
    rating: 4.7,
    customizable: true
  },
  {
    id: 4,
    name: "Galaxy Theme Jordans",
    category: "Premium",
    price: "₹15,999",
    originalPrice: "₹19,999",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400",
    description: "Space-themed custom Jordans with galaxy patterns",
    rating: 4.9,
    customizable: true
  },
  {
    id: 5,
    name: "Floral Doc Martens",
    category: "Boots",
    price: "₹11,999",
    originalPrice: "₹15,999",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
    description: "Hand-painted floral designs on classic Doc Martens",
    rating: 4.5,
    customizable: true
  },
  {
    id: 6,
    name: "Anime Character Shoes",
    category: "Themed",
    price: "₹9,999",
    originalPrice: "₹13,999",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400",
    description: "Custom anime character artwork on canvas shoes",
    rating: 4.8,
    customizable: true
  }
];

const ShoesGallery = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ["ALL", "Sneakers", "Casual", "Classic", "Premium", "Boots", "Themed"];

  const filteredShoes = selectedCategory === "ALL" 
    ? shoesData 
    : shoesData.filter(shoe => shoe.category === selectedCategory);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-600'}>
        ★
      </span>
    ));
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-orange-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
            Custom Shoes
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Step into art with our custom-designed shoes. From sneakers to boots, we transform your footwear into wearable masterpieces.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`mb-12 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-xl font-semibold mb-4 text-orange-300">Categories</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg shadow-orange-500/25'
                    : 'bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700 hover:border-orange-500'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className={`mb-8 text-center transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <p className="text-gray-400">
            Showing <span className="text-orange-400 font-semibold">{filteredShoes.length}</span> custom shoe designs
          </p>
        </div>

        {/* Shoes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredShoes.map((shoe, index) => (
            <div 
              key={shoe.id} 
              className={`group bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-700/50 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Shoe Image */}
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={shoe.image} 
                  alt={shoe.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-orange-600/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {shoe.category}
                </div>
                
                {/* Customizable Badge */}
                {shoe.customizable && (
                  <div className="absolute top-4 right-4 bg-green-600/80 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-semibold">
                    Customizable
                  </div>
                )}
                
                {/* Discount Badge */}
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {Math.round(((parseInt(shoe.originalPrice.slice(1).replace(',', '')) - parseInt(shoe.price.slice(1).replace(',', ''))) / parseInt(shoe.originalPrice.slice(1).replace(',', ''))) * 100)}% OFF
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button 
                    onClick={() => navigate('/book-now')}
                    className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors duration-200"
                  >
                    Customize Now
                  </button>
                </div>
              </div>

              {/* Shoe Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-orange-600/20 to-red-600/20 text-orange-300 text-xs rounded-full font-semibold border border-orange-500/30">
                    {shoe.category}
                  </span>
                  <div className="flex items-center gap-1">
                    {renderStars(shoe.rating)}
                    <span className="text-xs text-gray-400 ml-1">({shoe.rating})</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-orange-300 transition-colors duration-300">
                  {shoe.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {shoe.description}
                </p>
                
                {/* Price */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl font-bold text-orange-400">{shoe.price}</span>
                  <span className="text-gray-500 line-through">{shoe.originalPrice}</span>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button 
                    onClick={() => navigate('/book-now')}
                    className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-xl font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Order Now
                  </button>
                  <button 
                    onClick={() => navigate('/gallery')}
                    className="px-4 py-3 border-2 border-orange-500 text-orange-400 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300"
                  >
                    👁️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Ready to Step Up Your Style?
            </h3>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Transform your ordinary shoes into extraordinary art pieces. Let's create something unique together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/book-now')}
                className="px-10 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
              >
                Start Customizing
              </button>
              <button 
                onClick={() => navigate('/shoes')}
                className="px-10 py-4 border-2 border-orange-500 text-orange-400 font-semibold rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                View All Designs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoesGallery;
