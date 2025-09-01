import React, { useState, useEffect } from 'react'
import TattooHero from '../components/TattooHero'

const Tattoo = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL')
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  const tattooImages = [
    {
      name: "Dragon Koi Japanese Sleeve",
      category: "Japanese",
      url: "/images/tattoo/dragon-koi-japanese-sleeve.jpg",
      description: "Traditional Japanese sleeve featuring dragon and koi fish with intricate details",
      price: "₹15,000 - ₹25,000",
      duration: "6-8 hours"
    },
    {
      name: "Wolf Realistic Design",
      category: "Realistic",
      url: "/images/tattoo/wolf-tattoo-realistic-designs.jpg",
      description: "Hyper-realistic wolf portrait with stunning detail and lifelike features",
      price: "₹12,000 - ₹20,000",
      duration: "5-7 hours"
    },
    {
      name: "Mandala Design Ideas",
      category: "Mandala",
      url: "/images/tattoo/mandala-tattoo-design-ideas.jpg",
      description: "Intricate mandala patterns with spiritual significance and geometric precision",
      price: "₹8,000 - ₹15,000",
      duration: "4-6 hours"
    },
    {
      name: "Butterfly Women Designs",
      category: "Butterfly",
      url: "/images/tattoo/butterfly-tattoo-women-designs.jpg",
      description: "Elegant butterfly designs perfect for women with delicate details",
      price: "₹5,000 - ₹10,000",
      duration: "2-4 hours"
    },
    {
      name: "Geometric Lotus Flower",
      category: "Geometric",
      url: "/images/tattoo/geometric-lotus-flower-design.jpg",
      description: "Modern geometric interpretation of lotus flower combining nature and mathematics",
      price: "₹10,000 - ₹18,000",
      duration: "4-6 hours"
    },
    {
      name: "Butterfly Hand Tattoo",
      category: "Butterfly",
      url: "/images/tattoo/butterfly-hand-tattoo.jpg",
      description: "Delicate butterfly design for hand placement with fine line work",
      price: "₹3,000 - ₹6,000",
      duration: "1-2 hours"
    },
    {
      name: "Phoenix Rising Design",
      category: "Mythical",
      url: "/images/tattoo/phoenix-drawing-design.jpg",
      description: "Majestic phoenix rising from ashes with detailed feathers and flames",
      price: "₹18,000 - ₹30,000",
      duration: "8-10 hours"
    },
    {
      name: "Samurai Warrior",
      category: "Japanese",
      url: "/images/tattoo/samurai-sakura-japanese-tattoo.jpg",
      description: "Traditional Japanese samurai with cherry blossoms in authentic style",
      price: "₹20,000 - ₹35,000",
      duration: "10-12 hours"
    }
  ]
  
  const categories = ['ALL', 'Japanese', 'Realistic', 'Mandala', 'Butterfly', 'Geometric', 'Mythical']
  
  const filteredImages = selectedCategory === 'ALL' 
    ? tattooImages 
    : tattooImages.filter(img => img.category === selectedCategory)

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen">
      <TattooHero />
      
      {/* Gallery Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Our Tattoo Gallery
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Explore our diverse collection of tattoo artworks, from traditional Japanese designs 
              to modern geometric patterns. Each piece tells a unique story and represents hours of 
              meticulous craftsmanship by our master artists.
            </p>
          </div>
          
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
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg shadow-red-500/25'
                    : 'bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700 hover:border-red-500'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredImages.map((image, index) => (
              <div 
                key={index} 
                className={`group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm shadow-2xl hover:shadow-red-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold mb-2 text-white">{image.name}</h3>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">{image.description}</p>
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-red-600 to-orange-600 text-white text-xs rounded-full font-semibold">
                        {image.category}
                      </span>
                      <span className="text-yellow-400 text-sm font-semibold">{image.price}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>⏱️ {image.duration}</span>
                      <button className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full hover:bg-white/30 transition-colors duration-200">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Stats Section */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 mb-16 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {[
              { number: '500+', label: 'Happy Clients' },
              { number: '1000+', label: 'Tattoos Done' },
              { number: '5+', label: 'Years Experience' },
              { number: '50+', label: 'Custom Designs' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className={`text-center mt-20 transform transition-all duration-1000 delay-900 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Ready to Get Your Dream Tattoo?
              </h3>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Book a consultation with our expert artists and let's bring your vision to life. 
                We specialize in custom designs tailored to your unique style and story.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-xl hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25">
                  Book Consultation Now
                </button>
                <button className="px-10 py-4 border-2 border-red-500 text-red-400 font-semibold rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                  View Pricing Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tattoo