import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const VideoEdits = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('ALL')
  const [selectedService, setSelectedService] = useState('ALL')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const categories = ['ALL', 'Music Videos', 'Commercials', 'Social Media', 'Documentaries', 'Event Coverage']
  const services = ['ALL', 'Basic Edit', 'Premium Edit', 'Professional Edit', 'Custom Package']

  const videoProjects = [
    {
      id: 1,
      title: 'Tattoo Studio Promo',
      category: 'Commercials',
      service: 'Premium Edit',
      duration: '2:30',
      price: '₹15,999',
      originalPrice: '₹19,999',
      thumbnail: '/images/all/video1.jpg',
      description: 'Professional promotional video showcasing tattoo artistry and studio ambiance',
      features: ['4K Resolution', 'Color Grading', 'Motion Graphics', 'Sound Design'],
      deliveryTime: '5-7 days',
      rating: 4.9
    },
    {
      id: 2,
      title: 'Artist Portfolio Reel',
      category: 'Social Media',
      service: 'Basic Edit',
      duration: '1:00',
      price: '₹8,999',
      originalPrice: '₹11,999',
      thumbnail: '/images/all/video2.jpg',
      description: 'Dynamic social media reel highlighting artistic skills and creativity',
      features: ['HD Quality', 'Trendy Transitions', 'Music Sync', 'Text Overlays'],
      deliveryTime: '2-3 days',
      rating: 4.7
    },
    {
      id: 3,
      title: 'Music Video Production',
      category: 'Music Videos',
      service: 'Professional Edit',
      duration: '4:15',
      price: '₹35,999',
      originalPrice: '₹45,999',
      thumbnail: '/images/all/video3.jpg',
      description: 'Complete music video with cinematic editing and visual effects',
      features: ['Cinematic Grade', 'VFX Integration', 'Multi-Cam Edit', 'Audio Mastering'],
      deliveryTime: '10-14 days',
      rating: 5.0
    },
    {
      id: 4,
      title: 'Event Highlight Reel',
      category: 'Event Coverage',
      service: 'Premium Edit',
      duration: '3:45',
      price: '₹18,999',
      originalPrice: '₹24,999',
      thumbnail: '/images/all/video4.jpg',
      description: 'Capturing the best moments of special events with emotional storytelling',
      features: ['Multi-Angle Coverage', 'Slow Motion', 'Color Correction', 'Background Music'],
      deliveryTime: '7-10 days',
      rating: 4.8
    },
    {
      id: 5,
      title: 'Brand Documentary',
      category: 'Documentaries',
      service: 'Professional Edit',
      duration: '8:20',
      price: '₹42,999',
      originalPrice: '₹55,999',
      thumbnail: '/images/all/video5.jpg',
      description: 'In-depth documentary showcasing brand story and values',
      features: ['Interview Editing', 'B-Roll Integration', 'Graphics Package', 'Narrative Structure'],
      deliveryTime: '14-21 days',
      rating: 4.9
    },
    {
      id: 6,
      title: 'Instagram Stories Pack',
      category: 'Social Media',
      service: 'Basic Edit',
      duration: '0:15 each',
      price: '₹5,999',
      originalPrice: '₹7,999',
      thumbnail: '/images/all/video6.jpg',
      description: 'Set of 10 engaging Instagram stories with animations and effects',
      features: ['Vertical Format', 'Animated Text', 'Stickers & GIFs', 'Brand Colors'],
      deliveryTime: '1-2 days',
      rating: 4.6
    }
  ]

  const filteredProjects = videoProjects.filter(project => {
    const categoryMatch = selectedCategory === 'ALL' || project.category === selectedCategory
    const serviceMatch = selectedService === 'ALL' || project.service === selectedService
    return categoryMatch && serviceMatch
  })

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-600'}>
        ★
      </span>
    ))
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Video Editing
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your raw footage into cinematic masterpieces. 
              Professional video editing services for all your creative needs.
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
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Video Categories</h3>
              <div className="flex flex-wrap gap-3">
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

            {/* Service Filter */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Service Packages</h3>
              <div className="flex flex-wrap gap-3">
                {services.map((service, index) => (
                  <button
                    key={service}
                    onClick={() => setSelectedService(service)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                      selectedService === service
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700 hover:border-blue-500'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {service}
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
              Showing <span className="text-purple-400 font-semibold">{filteredProjects.length}</span> video projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`group bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-700/50 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-4xl">▶️</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.duration}
                  </div>
                  
                  {/* Service Badge */}
                  <div className="absolute top-4 right-4 bg-purple-600/80 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-semibold">
                    {project.service}
                  </div>
                  
                  {/* Discount Badge */}
                  <div className="absolute bottom-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {Math.round(((parseInt(project.originalPrice.slice(1).replace(',', '')) - parseInt(project.price.slice(1).replace(',', ''))) / parseInt(project.originalPrice.slice(1).replace(',', ''))) * 100)}% OFF
                  </div>
                  
                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors duration-200">
                      Watch Preview
                    </button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 text-xs rounded-full font-semibold border border-purple-500/30">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-1">
                      {renderStars(project.rating)}
                      <span className="text-xs text-gray-400 ml-1">({project.rating})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Price */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-purple-400">{project.price}</span>
                    <span className="text-gray-500 line-through">{project.originalPrice}</span>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-400 mb-2">Included Features:</p>
                    <div className="flex gap-1 flex-wrap">
                      {project.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded border border-gray-600"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Delivery Time */}
                  <div className="mb-6">
                    <p className="text-xs text-gray-400 mb-1">Delivery Time:</p>
                    <span className="text-sm text-green-400 font-semibold">{project.deliveryTime}</span>
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
                      onClick={() => navigate('/book-now')}
                      className="px-4 py-3 border-2 border-purple-500 text-purple-400 rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300"
                    >
                      💬
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Service Packages */}
          <div className={`mb-20 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Service Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Basic Edit',
                  price: '₹5,999',
                  originalPrice: '₹7,999',
                  features: ['HD Quality', 'Basic Color Correction', 'Simple Transitions', 'Background Music', '2-3 Day Delivery'],
                  popular: false
                },
                {
                  name: 'Premium Edit',
                  price: '₹15,999',
                  originalPrice: '₹19,999',
                  features: ['4K Quality', 'Advanced Color Grading', 'Motion Graphics', 'Sound Design', 'Custom Animations', '5-7 Day Delivery'],
                  popular: true
                },
                {
                  name: 'Professional Edit',
                  price: '₹35,999',
                  originalPrice: '₹45,999',
                  features: ['Cinema Quality', 'VFX Integration', 'Multi-Cam Editing', 'Audio Mastering', 'Custom Graphics Package', '10-14 Day Delivery'],
                  popular: false
                }
              ].map((pkg, index) => (
                <div key={index} className={`relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  pkg.popular ? 'border-purple-500 shadow-lg shadow-purple-500/25' : 'border-gray-700/50'
                }`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-4 text-center text-purple-300">{pkg.name}</h3>
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-white">{pkg.price}</span>
                    <span className="text-gray-500 line-through ml-2">{pkg.originalPrice}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <span className="text-green-400 mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => navigate('/book-now')}
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white'
                  }`}>
                    Choose Package
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 mb-20 transform transition-all duration-1000 delay-900 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {[
              {
                icon: '🎬',
                title: 'Professional Editing',
                description: 'Industry-standard editing software and techniques'
              },
              {
                icon: '🎨',
                title: 'Creative Vision',
                description: 'Unique storytelling and artistic direction'
              },
              {
                icon: '⚡',
                title: 'Fast Turnaround',
                description: 'Quick delivery without compromising quality'
              },
              {
                icon: '🔄',
                title: 'Unlimited Revisions',
                description: 'We work until you\'re completely satisfied'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-purple-300">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`text-center transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Ready to Create Something Amazing?
              </h3>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Let's bring your vision to life with professional video editing. 
                From concept to final cut, we'll make your content stand out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => navigate('/book-now')}
                  className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                >
                  Start Your Project
                </button>
                <button 
                  onClick={() => navigate('/gallery')}
                  className="px-10 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoEdits