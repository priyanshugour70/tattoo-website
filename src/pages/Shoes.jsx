import React, { useState, useEffect } from 'react'

const Shoes = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL')
  const [selectedBrand, setSelectedBrand] = useState('ALL')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const categories = ['ALL', 'Sneakers', 'Boots', 'Casual', 'Sports', 'Limited Edition']
  const brands = ['ALL', 'Nike', 'Adidas', 'Converse', 'Vans', 'Custom']

  const shoes = [
    {
      id: 1,
      name: 'Urban Street Runner',
      category: 'Sneakers',
      brand: 'Nike',
      price: '₹8,999',
      originalPrice: '₹12,999',
      image: '/images/all/shoe1.jpg',
      description: 'Premium street-style sneakers with custom tattoo-inspired designs',
      colors: ['Black/Red', 'White/Blue', 'Gray/Orange'],
      sizes: ['7', '8', '9', '10', '11', '12'],
      features: ['Air Cushioning', 'Custom Design', 'Premium Leather'],
      rating: 4.8
    },
    {
      id: 2,
      name: 'Artistic High-Tops',
      category: 'Sneakers',
      brand: 'Converse',
      price: '₹6,499',
      originalPrice: '₹8,999',
      image: '/images/all/shoe2.jpg',
      description: 'Hand-painted artistic designs on classic high-top silhouette',
      colors: ['Black Canvas', 'White Canvas', 'Denim Blue'],
      sizes: ['6', '7', '8', '9', '10', '11'],
      features: ['Hand-Painted', 'Canvas Material', 'Rubber Sole'],
      rating: 4.6
    },
    {
      id: 3,
      name: 'Rebel Combat Boots',
      category: 'Boots',
      brand: 'Custom',
      price: '₹11,999',
      originalPrice: '₹15,999',
      image: '/images/all/shoe3.jpg',
      description: 'Edgy combat boots with metal studs and custom artwork',
      colors: ['Matte Black', 'Brown Leather', 'Distressed Gray'],
      sizes: ['7', '8', '9', '10', '11', '12'],
      features: ['Metal Studs', 'Genuine Leather', 'Anti-Slip Sole'],
      rating: 4.9
    },
    {
      id: 4,
      name: 'Skate Culture Vans',
      category: 'Casual',
      brand: 'Vans',
      price: '₹5,999',
      originalPrice: '₹7,999',
      image: '/images/all/shoe4.jpg',
      description: 'Classic skate shoes with graffiti-style custom prints',
      colors: ['Black/White', 'Navy/Red', 'Green/Yellow'],
      sizes: ['6', '7', '8', '9', '10', '11', '12'],
      features: ['Waffle Sole', 'Custom Print', 'Durable Canvas'],
      rating: 4.7
    },
    {
      id: 5,
      name: 'Athletic Performance',
      category: 'Sports',
      brand: 'Adidas',
      price: '₹9,499',
      originalPrice: '₹13,499',
      image: '/images/all/shoe5.jpg',
      description: 'High-performance sports shoes with custom colorways',
      colors: ['Black/Gold', 'White/Silver', 'Blue/Orange'],
      sizes: ['7', '8', '9', '10', '11', '12'],
      features: ['Boost Technology', 'Breathable Mesh', 'Custom Colors'],
      rating: 4.8
    },
    {
      id: 6,
      name: 'Limited Artist Edition',
      category: 'Limited Edition',
      brand: 'Custom',
      price: '₹19,999',
      originalPrice: '₹24,999',
      image: '/images/all/shoe6.jpg',
      description: 'Exclusive artist collaboration with hand-drawn designs',
      colors: ['Unique Artwork'],
      sizes: ['8', '9', '10', '11'],
      features: ['Artist Signed', 'Limited Edition', 'Premium Materials'],
      rating: 5.0
    }
  ]

  const filteredShoes = shoes.filter(shoe => {
    const categoryMatch = selectedCategory === 'ALL' || shoe.category === selectedCategory
    const brandMatch = selectedBrand === 'ALL' || shoe.brand === selectedBrand
    return categoryMatch && brandMatch
  })

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-600'}>
        ★
      </span>
    ))
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 to-yellow-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">
              Custom Shoes
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Step into style with our exclusive collection of custom-designed shoes. 
              From street-ready sneakers to artistic masterpieces, express your personality from the ground up.
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
              <h3 className="text-xl font-semibold mb-4 text-orange-300">Categories</h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-orange-600 to-yellow-600 text-white shadow-lg shadow-orange-500/25'
                        : 'bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700 hover:border-orange-500'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Brand Filter */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-orange-300">Brands</h3>
              <div className="flex flex-wrap gap-3">
                {brands.map((brand, index) => (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                      selectedBrand === brand
                        ? 'bg-gradient-to-r from-yellow-600 to-red-600 text-white shadow-lg shadow-yellow-500/25'
                        : 'bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700 hover:border-yellow-500'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {brand}
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
              Showing <span className="text-orange-400 font-semibold">{filteredShoes.length}</span> shoes
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredShoes.map((shoe, index) => (
              <div 
                key={shoe.id} 
                className={`group bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-700/50 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-32 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-xl flex items-center justify-center transform -rotate-12">
                      <span className="text-4xl font-bold text-gray-400">👟</span>
                    </div>
                  </div>
                  
                  {/* Discount Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {Math.round(((parseInt(shoe.originalPrice.slice(1).replace(',', '')) - parseInt(shoe.price.slice(1).replace(',', ''))) / parseInt(shoe.originalPrice.slice(1).replace(',', ''))) * 100)}% OFF
                  </div>
                  
                  {/* Brand Badge */}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-semibold">
                    {shoe.brand}
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-orange-600/20 to-yellow-600/20 text-orange-300 text-xs rounded-full font-semibold border border-orange-500/30">
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
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-orange-400">{shoe.price}</span>
                    <span className="text-gray-500 line-through">{shoe.originalPrice}</span>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-400 mb-2">Key Features:</p>
                    <div className="flex gap-1 flex-wrap">
                      {shoe.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded border border-gray-600"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Colors */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-400 mb-2">Available Colors:</p>
                    <div className="flex gap-1 flex-wrap">
                      {shoe.colors.map((color, colorIndex) => (
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
                  <div className="mb-6">
                    <p className="text-xs text-gray-400 mb-2">Available Sizes:</p>
                    <div className="flex gap-2 flex-wrap">
                      {shoe.sizes.map((size, sizeIndex) => (
                        <span 
                          key={sizeIndex}
                          className="w-8 h-8 bg-gray-700/50 text-gray-300 text-xs rounded border border-gray-600 hover:border-orange-400 transition-colors duration-200 flex items-center justify-center"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-orange-600 to-yellow-600 text-white py-3 rounded-xl font-semibold hover:from-orange-700 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105">
                      Add to Cart
                    </button>
                    <button className="px-4 py-3 border-2 border-orange-500 text-orange-400 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300">
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
                title: 'Custom Designs',
                description: 'Unique artwork and personalized designs for every pair'
              },
              {
                icon: '👟',
                title: 'Premium Quality',
                description: 'High-quality materials and expert craftsmanship'
              },
              {
                icon: '🚀',
                title: 'Comfort Tech',
                description: 'Advanced cushioning and ergonomic design for all-day comfort'
              },
              {
                icon: '⚡',
                title: 'Fast Delivery',
                description: 'Quick processing and secure shipping worldwide'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-orange-300">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`text-center transform transition-all duration-1000 delay-900 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Design Your Dream Shoes
              </h3>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Can't find the perfect pair? Let our artists create custom shoes just for you. 
                From concept to creation, we'll bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-4 bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-semibold rounded-xl hover:from-orange-700 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                  Start Custom Design
                </button>
                <button className="px-10 py-4 border-2 border-orange-500 text-orange-400 font-semibold rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                  View Size Chart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shoes