import React, { useState, useEffect } from 'react'

const PrintedTshirt = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL')
  const [selectedSize, setSelectedSize] = useState('ALL')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const categories = ['ALL', 'Floral', 'Geometric', 'Animal Print', 'Stripes', 'Polka Dots', 'Tie-Dye']
  const sizes = ['ALL', 'S', 'M', 'L', 'XL', 'XXL']

  const printedTshirts = [
    {
      id: 1,
      name: 'Tropical Paradise',
      category: 'Floral',
      price: '₹749',
      originalPrice: '₹1099',
      image: '/images/all/printed1.jpg',
      description: 'Vibrant tropical floral print perfect for summer vibes',
      colors: ['White', 'Light Blue', 'Coral'],
      sizes: ['S', 'M', 'L', 'XL'],
      material: '100% Cotton',
      care: 'Machine wash cold'
    },
    {
      id: 2,
      name: 'Geometric Fusion',
      category: 'Geometric',
      price: '₹699',
      originalPrice: '₹999',
      image: '/images/all/printed2.jpg',
      description: 'Modern geometric patterns in bold contrasting colors',
      colors: ['Black', 'White', 'Navy'],
      sizes: ['M', 'L', 'XL', 'XXL'],
      material: 'Cotton Blend',
      care: 'Machine wash warm'
    },
    {
      id: 3,
      name: 'Wild Safari',
      category: 'Animal Print',
      price: '₹849',
      originalPrice: '₹1199',
      image: '/images/all/printed3.jpg',
      description: 'Bold animal print design for the adventurous spirit',
      colors: ['Brown', 'Black', 'Tan'],
      sizes: ['S', 'M', 'L', 'XL'],
      material: '100% Cotton',
      care: 'Hand wash recommended'
    },
    {
      id: 4,
      name: 'Classic Stripes',
      category: 'Stripes',
      price: '₹649',
      originalPrice: '₹899',
      image: '/images/all/printed4.jpg',
      description: 'Timeless striped pattern that never goes out of style',
      colors: ['Navy/White', 'Black/White', 'Red/White'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      material: 'Cotton Blend',
      care: 'Machine wash cold'
    },
    {
      id: 5,
      name: 'Retro Dots',
      category: 'Polka Dots',
      price: '₹699',
      originalPrice: '₹999',
      image: '/images/all/printed5.jpg',
      description: 'Playful polka dot design with a vintage twist',
      colors: ['Black/White', 'Navy/White', 'Red/White'],
      sizes: ['S', 'M', 'L', 'XL'],
      material: '100% Cotton',
      care: 'Machine wash cold'
    },
    {
      id: 6,
      name: 'Rainbow Tie-Dye',
      category: 'Tie-Dye',
      price: '₹799',
      originalPrice: '₹1149',
      image: '/images/all/printed6.jpg',
      description: 'Vibrant tie-dye pattern with rainbow colors',
      colors: ['Rainbow', 'Blue Gradient', 'Purple Gradient'],
      sizes: ['M', 'L', 'XL', 'XXL'],
      material: '100% Cotton',
      care: 'Hand wash cold'
    },
    {
      id: 7,
      name: 'Botanical Garden',
      category: 'Floral',
      price: '₹749',
      originalPrice: '₹1099',
      image: '/images/all/printed7.jpg',
      description: 'Elegant botanical print with detailed leaf patterns',
      colors: ['Green', 'White', 'Beige'],
      sizes: ['S', 'M', 'L', 'XL'],
      material: 'Organic Cotton',
      care: 'Machine wash cold'
    },
    {
      id: 8,
      name: 'Hexagon Matrix',
      category: 'Geometric',
      price: '₹729',
      originalPrice: '₹1049',
      image: '/images/all/printed8.jpg',
      description: 'Futuristic hexagonal pattern in metallic tones',
      colors: ['Silver/Black', 'Gold/Black', 'Blue/Black'],
      sizes: ['M', 'L', 'XL', 'XXL'],
      material: 'Cotton Blend',
      care: 'Machine wash warm'
    }
  ]

  const filteredTshirts = printedTshirts.filter(tshirt => {
    const categoryMatch = selectedCategory === 'ALL' || tshirt.category === selectedCategory
    const sizeMatch = selectedSize === 'ALL' || tshirt.sizes.includes(selectedSize)
    return categoryMatch && sizeMatch
  })

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-teal-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Printed T-Shirts
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover our vibrant collection of printed t-shirts featuring unique patterns, 
              bold designs, and eye-catching prints that make every outfit extraordinary.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className={`mb-16 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-green-300">Categories</h3>
              <div className="flex flex-wrap gap-3">
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

            {/* Size Filter */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-300">Sizes</h3>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size, index) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                      selectedSize === size
                        ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg shadow-teal-500/25'
                        : 'bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700 hover:border-teal-500'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className={`mb-8 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="text-gray-400">
              Showing <span className="text-green-400 font-semibold">{filteredTshirts.length}</span> products
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
            {filteredTshirts.map((tshirt, index) => (
              <div 
                key={tshirt.id} 
                className={`group bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-green-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-700/50 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-gray-400">👕</span>
                    </div>
                  </div>
                  
                  {/* Discount Badge */}
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {Math.round(((parseInt(tshirt.originalPrice.slice(1)) - parseInt(tshirt.price.slice(1))) / parseInt(tshirt.originalPrice.slice(1))) * 100)}% OFF
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-200 mb-2 block">
                      ❤️
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-200">
                      👁️
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <div className="mb-2">
                    <span className="inline-block px-2 py-1 bg-gradient-to-r from-green-600/20 to-teal-600/20 text-green-300 text-xs rounded-full font-semibold border border-green-500/30">
                      {tshirt.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-green-300 transition-colors duration-300">
                    {tshirt.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {tshirt.description}
                  </p>
                  
                  {/* Price */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl font-bold text-green-400">{tshirt.price}</span>
                    <span className="text-gray-500 line-through text-sm">{tshirt.originalPrice}</span>
                  </div>
                  
                  {/* Material & Care */}
                  <div className="mb-3">
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span>🧵 {tshirt.material}</span>
                      <span>🧼 {tshirt.care}</span>
                    </div>
                  </div>
                  
                  {/* Colors */}
                  <div className="mb-3">
                    <p className="text-xs text-gray-400 mb-1">Colors:</p>
                    <div className="flex gap-1 flex-wrap">
                      {tshirt.colors.map((color, colorIndex) => (
                        <span 
                          key={colorIndex}
                          className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded border border-gray-600"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Sizes */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-400 mb-1">Sizes:</p>
                    <div className="flex gap-1 flex-wrap">
                      {tshirt.sizes.map((size, sizeIndex) => (
                        <span 
                          key={sizeIndex}
                          className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded border border-gray-600 hover:border-green-400 transition-colors duration-200"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-green-600 to-teal-600 text-white py-2 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 text-sm">
                      Add to Cart
                    </button>
                    <button className="px-3 py-2 border-2 border-green-500 text-green-400 rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300 text-sm">
                      🛒
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 mb-20 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {[
              {
                icon: '🎨',
                title: 'Unique Prints',
                description: 'Exclusive patterns and designs you won\'t find anywhere else'
              },
              {
                icon: '🌿',
                title: 'Eco-Friendly',
                description: 'Sustainable printing methods and organic cotton options'
              },
              {
                icon: '💧',
                title: 'Fade Resistant',
                description: 'High-quality inks that maintain vibrant colors wash after wash'
              },
              {
                icon: '✨',
                title: 'Comfort Fit',
                description: 'Soft, breathable fabrics designed for all-day comfort'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-green-300">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`text-center transform transition-all duration-1000 delay-900 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                Love Custom Prints?
              </h3>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                We can create custom printed t-shirts with your own designs, logos, or patterns. 
                Perfect for events, teams, or personal expression.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">
                  Order Custom Print
                </button>
                <button className="px-10 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-xl hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                  View Print Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrintedTshirt