import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const artTshirtsData = [
  {
    id: 1,
    name: "Abstract Waves",
    category: "Abstract",
    price: "₹899",
    originalPrice: "₹1299",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Flowing abstract waves design in vibrant colors",
    rating: 4.7,
    colors: ["Black", "White", "Navy"]
  },
  {
    id: 2,
    name: "Minimal Geometry",
    category: "Minimalist",
    price: "₹799",
    originalPrice: "₹1199",
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400",
    description: "Clean geometric patterns for modern style",
    rating: 4.5,
    colors: ["Black", "White", "Gray"]
  },
  {
    id: 3,
    name: "Retro Vibes",
    category: "Vintage",
    price: "₹999",
    originalPrice: "₹1399",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400",
    description: "Nostalgic 80s inspired artwork",
    rating: 4.8,
    colors: ["Black", "Maroon", "Navy"]
  },
  {
    id: 4,
    name: "Bold Typography",
    category: "Typography",
    price: "₹849",
    originalPrice: "₹1249",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400",
    description: "Striking typography with artistic flair",
    rating: 4.6,
    colors: ["Black", "White", "Red"]
  },
  {
    id: 5,
    name: "Nature Art",
    category: "Nature",
    price: "₹929",
    originalPrice: "₹1329",
    image: "https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=400",
    description: "Beautiful nature-inspired artistic designs",
    rating: 4.9,
    colors: ["Green", "Brown", "White"]
  },
  {
    id: 6,
    name: "Pop Art Style",
    category: "Pop Art",
    price: "₹1099",
    originalPrice: "₹1499",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400",
    description: "Vibrant pop art inspired designs",
    rating: 4.8,
    colors: ["Multi", "Bright", "Neon"]
  }
];

const ArtTshirtGallery = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ["ALL", "Abstract", "Minimalist", "Vintage", "Typography", "Nature", "Pop Art"];

  const filteredTshirts = selectedCategory === "ALL" 
    ? artTshirtsData 
    : artTshirtsData.filter(tshirt => tshirt.category === selectedCategory);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-600'}>
        ★
      </span>
    ));
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Art T-Shirts
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Express your creativity with our exclusive collection of artistic t-shirts. Each design is carefully crafted to make a statement.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`mb-12 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-xl font-semibold mb-4 text-purple-300">Categories</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700 hover:border-purple-500'
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
            Showing <span className="text-purple-400 font-semibold">{filteredTshirts.length}</span> artistic designs
          </p>
        </div>

        {/* T-shirts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredTshirts.map((tshirt, index) => (
            <div 
              key={tshirt.id} 
              className={`group bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-700/50 ${
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
                <div className="absolute top-4 left-4 bg-purple-600/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {tshirt.category}
                </div>
                
                {/* Discount Badge */}
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 text-xs rounded-full font-semibold border border-purple-500/30">
                    {tshirt.category}
                  </span>
                  <div className="flex items-center gap-1">
                    {renderStars(tshirt.rating)}
                    <span className="text-xs text-gray-400 ml-1">({tshirt.rating})</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">
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
                  <span className="text-2xl font-bold text-purple-400">{tshirt.price}</span>
                  <span className="text-gray-500 line-through">{tshirt.originalPrice}</span>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button 
                    onClick={() => navigate('/book-now')}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Order Now
                  </button>
                  <button 
                    onClick={() => navigate('/gallery')}
                    className="px-4 py-3 border-2 border-purple-500 text-purple-400 rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300"
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
            <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Wear Your Art?
            </h3>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Transform your wardrobe with our unique artistic designs. Each t-shirt is a canvas for creative expression.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/book-now')}
                className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Start Designing
              </button>
              <button 
                onClick={() => navigate('/art-tshirt')}
                className="px-10 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
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

export default ArtTshirtGallery;
