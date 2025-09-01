import React from 'react'

const TattooHero = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/tattoo/dragon-koi-japanese-sleeve.jpg"
          alt="Tattoo Art Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Express Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                Story
              </span>
              Through Ink
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
              Transform your vision into stunning body art with our master tattoo artists. 
              From intricate mandalas to realistic portraits, we bring your dreams to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                Book Consultation
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/images/tattoo/butterfly-hand-tattoo.jpg"
            alt="Butterfly Tattoo"
            className="w-24 h-24 object-cover rounded-lg shadow-lg opacity-80 hover:opacity-100 transition-opacity"
          />
          <img
            src="/images/tattoo/geometric-lotus-flower-design.jpg"
            alt="Geometric Design"
            className="w-24 h-24 object-cover rounded-lg shadow-lg opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </div>
  )
}

export default TattooHero