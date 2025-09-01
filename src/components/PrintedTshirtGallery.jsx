import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const printedTshirtsData = [
  {
    id: 1,
    name: "Tropical Paradise",
    category: "Floral",
    price: "₹749",
    originalPrice: "₹1099",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Vibrant tropical floral print perfect for summer vibes",
    rating: 4.6,
    colors: ["White", "Light Blue", "Coral"]
  },
  {
    id: 2,
    name: "Geometric Fusion",
    category: "Geometric",
    price: "₹699",
    originalPrice: "₹999",
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400",
    description: "Modern geometric patterns in bold contrasting colors",
    rating: 4.4,
    colors: ["Black", "White", "Navy"]
  },
  {
    id: 3,
    name: "Wild Safari",
    category: "Animal Print",
    price: "₹849",
    originalPrice: "₹1199",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400",
    description: "Bold animal print design for the adventurous spirit",
    rating: 4.7,
    colors: ["Brown", "Black", "Tan"]
  },
  {
    id: 4,
    name: "Classic Stripes",
    category: "Stripes",
    price: "₹649",
    originalPrice: "₹899",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400",
    description: "Timeless striped pattern that never goes out of style",
    rating: 4.5,
    colors: ["Navy/White", "Black/White", "Red/White"]
  },
  {
    id: 5,
    name: "Retro Dots",
    category: "Polka Dots",
    price: "₹699",
    originalPrice: "₹999",
    image: "https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=400",
    description: "Playful polka dot design with a vintage twist",
    rating: 4.3,
    colors: ["Black/White", "Navy/White", "Red/White"]
  },
  {
    id: 6,
    name: "Rainbow Tie-Dye",
    category: "Tie-Dye",
    price: "₹799",
    originalPrice: "₹1149",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400",
    description: "Vibrant tie-dye pattern with rainbow colors",
    rating: 4.8,
    colors: ["Rainbow", "Blue Gradient", "Purple Gradient"]
  }
];

const PrintedTshirtGallery = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ["ALL", "Floral", "Geometric", "Animal Print", "Stripes", "Polka Dots", "Tie-Dye"];

  const filteredTshirts = selectedCategory === "ALL" 
    ? printedTshirtsData 
    : printedTshirtsData.filter(tshirt => tshirt.category === selectedCategory);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-600'}>
        ★
      </span>
    ));
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-green-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Printed T-Shirts
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our vibrant collection of printed t-shirts featuring unique patterns, bold designs, and eye-catching prints.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`mb-12 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-xl font-semibold mb-4 text-green-300">Categories</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg shadow-green-500/25'
                    : 'bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700 hover:border-green-500'
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
            Showing <span className="text-green-400 font-semibold">{filteredTshirts.length}</span> printed designs
          </p>
        </div>

        {/* T-shirts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredTshirts.map((tshirt, index) => (
            <div 
              key={tshirt.id} 
              className={`group bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-green-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-700/50 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* T-shirt Image */}
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={tshirt.image} 
                  alt={tshirt.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-green-600/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {tshirt.category}
                </div>
                
                {/* Discount Badge */}
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-teal-500 to-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {Math.round(((parseInt(tshirt.originalPrice.slice(1).replace(',', '')) - parseInt(tshirt.price.slice(1).replace(',', ''))) / parseInt(tshirt.originalPrice.slice(1).replace(',', ''))) * 100)}% OFF
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button 
                    onClick={() => navigate('/book-now')}
                    className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors duration-200"
                  >
                    Order Now
                  </button>
                </div>
              </div>

              {/* T-shirt Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-600/20 to-teal-600/20 text-green-300 text-xs rounded-full font-semibold border border-green-500/30">
                    {tshirt.category}
                  </span>
                  <div className="flex items-center gap-1">
                    {renderStars(tshirt.rating)}
                    <span className="text-xs text-gray-400 ml-1">({tshirt.rating})</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-green-300 transition-colors duration-300">
                  {tshirt.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {tshirt.description}
                </p>
                
                {/* Colors */}
                <div className="mb-4">
                  <p className="text-xs text-gray-400 mb-2">Available Colors:</p>
                  <div className="flex gap-2 flex-wrap">
                    {tshirt.colors.map((color, colorIndex) => (
                      <span 
                        key={colorIndex}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded border border-gray-600"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Price */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl font-bold text-green-400">{tshirt.price}</span>
                  <span className="text-gray-500 line-through">{tshirt.originalPrice}</span>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button 
                    onClick={() => navigate('/book-now')}
                    className="flex-1 bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 rounded-xl font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Order Now
                  </button>
                  <button 
                    onClick={() => navigate('/gallery')}
                    className="px-4 py-3 border-2 border-green-500 text-green-400 rounded-xl hover:bg-green-500 hover:text-white transition-all duration-300"
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
            <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Love Custom Prints?
            </h3>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              We can create custom printed t-shirts with your own designs, logos, or patterns. Perfect for events, teams, or personal expression.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/book-now')}
                className="px-10 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                Order Custom Print
              </button>
              <button 
                onClick={() => navigate('/printed-tshirt')}
                className="px-10 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-xl hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-105"
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

export default PrintedTshirtGallery;
