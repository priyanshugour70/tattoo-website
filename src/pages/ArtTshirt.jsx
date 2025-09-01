import React, { useState, useEffect } from 'react'

const ArtTshirt = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const categories = ['ALL', 'Abstract', 'Minimalist', 'Vintage', 'Typography', 'Graphic']

  const artTshirts = [
    {
      id: 1,
      name: 'Abstract Waves',
      category: 'Abstract',
      price: '₹899',
      originalPrice: '₹1299',
      image: '/images/all/tshirt1.jpg',
      description: 'Flowing abstract waves design in vibrant colors',
      colors: ['Black', 'White', 'Navy'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 2,
      name: 'Minimal Geometry',
      category: 'Minimalist',
      price: '₹799',
      originalPrice: '₹1199',
      image: '/images/all/tshirt2.jpg',
      description: 'Clean geometric patterns for modern style',
      colors: ['Black', 'White', 'Gray'],
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 3,
      name: 'Retro Vibes',
      category: 'Vintage',
      price: '₹999',
      originalPrice: '₹1399',
      image: '/images/all/tshirt3.jpg',
      description: 'Nostalgic 80s inspired artwork',
      colors: ['Black', 'Maroon', 'Navy'],
      sizes: ['M', 'L', 'XL', 'XXL']
    },
    {
      id: 4,
      name: 'Bold Typography',
      category: 'Typography',
      price: '₹849',
      originalPrice: '₹1249',
      image: '/images/all/tshirt4.jpg',
      description: 'Striking typographic design with attitude',
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 5,
      name: 'Digital Art',
      category: 'Graphic',
      price: '₹949',
      originalPrice: '₹1349',
      image: '/images/all/tshirt5.jpg',
      description: 'Contemporary digital artwork print',
      colors: ['Black', 'White', 'Gray', 'Navy'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 6,
      name: 'Nature Abstract',
      category: 'Abstract',
      price: '₹899',
      originalPrice: '₹1299',
      image: '/images/all/tshirt6.jpg',
      description: 'Nature-inspired abstract composition',
      colors: ['Forest Green', 'Black', 'White'],
      sizes: ['M', 'L', 'XL']
    }
  ]

  const filteredTshirts = selectedCategory === 'ALL' 
    ? artTshirts 
    : artTshirts.filter(tshirt => tshirt.category === selectedCategory)

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Art T-Shirts
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Express your creativity with our exclusive collection of artistic t-shirts. 
              Each design is carefully crafted to make a statement and showcase your unique style.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className={`flex flex-wrap justify-center gap-4 mb-16 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
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

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredTshirts.map((tshirt, index) => (
              <div 
                key={tshirt.id} 
                className={`group bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-700/50 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-gray-400">T</span>
                    </div>
                  </div>
                  
                  {/* Discount Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {Math.round(((parseInt(tshirt.originalPrice.slice(1)) - parseInt(tshirt.price.slice(1))) / parseInt(tshirt.originalPrice.slice(1))) * 100)}% OFF
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-200 mb-2 block">
                      ❤️
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-200">
                      👁️
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 text-xs rounded-full font-semibold border border-purple-500/30">
                      {tshirt.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">
                    {tshirt.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {tshirt.description}
                  </p>
                  
                  {/* Price */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-purple-400">{tshirt.price}</span>
                    <span className="text-gray-500 line-through">{tshirt.originalPrice}</span>
                  </div>
                  
                  {/* Colors */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-400 mb-2">Available Colors:</p>
                    <div className="flex gap-2">
                      {tshirt.colors.map((color, colorIndex) => (
                        <div 
                          key={colorIndex}
                          className="w-6 h-6 rounded-full border-2 border-gray-600 hover:border-purple-400 transition-colors duration-200"
                          style={{ 
                            backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' : 
                                           color.toLowerCase() === 'black' ? '#000000' :
                                           color.toLowerCase() === 'gray' ? '#6b7280' :
                                           color.toLowerCase() === 'navy' ? '#1e3a8a' :
                                           color.toLowerCase() === 'maroon' ? '#7f1d1d' :
                                           color.toLowerCase() === 'forest green' ? '#166534' : '#6b7280'
                          }}
                          title={color}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Sizes */}
                  <div className="mb-6">
                    <p className="text-xs text-gray-400 mb-2">Available Sizes:</p>
                    <div className="flex gap-2 flex-wrap">
                      {tshirt.sizes.map((size, sizeIndex) => (
                        <span 
                          key={sizeIndex}
                          className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded border border-gray-600 hover:border-purple-400 transition-colors duration-200"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                      Add to Cart
                    </button>
                    <button className="px-4 py-3 border-2 border-purple-500 text-purple-400 rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300">
                      🛒
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {[
              {
                icon: '🎨',
                title: 'Original Artwork',
                description: 'Each design is created by talented artists exclusively for our collection'
              },
              {
                icon: '👕',
                title: 'Premium Quality',
                description: '100% cotton fabric with high-quality printing that lasts for years'
              },
              {
                icon: '🚚',
                title: 'Fast Delivery',
                description: 'Quick processing and delivery to get your art t-shirt in no time'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-8 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-purple-300">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`text-center transform transition-all duration-1000 delay-900 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Can't Find What You're Looking For?
              </h3>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                We offer custom art t-shirt designs! Share your ideas with us and we'll create 
                a unique piece that perfectly represents your style and personality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                  Request Custom Design
                </button>
                <button className="px-10 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                  View Size Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtTshirt