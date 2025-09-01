import React, { useState, useEffect } from 'react';

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    tattooType: '',
    size: '',
    placement: '',
    description: '',
    budget: '',
    preferredDate: '',
    hasAllergies: false,
    allergyDetails: '',
    previousTattoos: false,
    referenceImages: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Load EmailJS script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.onload = () => {
      window.emailjs.init('YOUR_PUBLIC_KEY'); // Replace with actual EmailJS public key
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const services = [
    'Tattoo Design & Application',
    'Tattoo Consultation',
    'Cover-up Tattoo',
    'Tattoo Touch-up',
    'Custom Art Design',
    'Video Editing Services',
    'Art T-shirt Design',
    'Printed T-shirt',
    'Custom Shoes Design'
  ];

  const tattooTypes = [
    'Traditional',
    'Realistic',
    'Japanese',
    'Geometric',
    'Mandala',
    'Watercolor',
    'Minimalist',
    'Tribal',
    'Portrait',
    'Abstract'
  ];

  const sizes = [
    'Small (2-4 inches)',
    'Medium (4-8 inches)',
    'Large (8-12 inches)',
    'Extra Large (12+ inches)',
    'Full Sleeve',
    'Half Sleeve',
    'Back Piece',
    'Chest Piece'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        tattoo_type: formData.tattooType,
        size: formData.size,
        placement: formData.placement,
        description: formData.description,
        budget: formData.budget,
        preferred_date: formData.preferredDate,
        has_allergies: formData.hasAllergies ? 'Yes' : 'No',
        allergy_details: formData.allergyDetails,
        previous_tattoos: formData.previousTattoos ? 'Yes' : 'No',
        message: `New booking request from ${formData.name}\n\nService: ${formData.service}\nTattoo Type: ${formData.tattooType}\nSize: ${formData.size}\nPlacement: ${formData.placement}\nBudget: ${formData.budget}\nPreferred Date: ${formData.preferredDate}\n\nDescription: ${formData.description}\n\nAllergies: ${formData.hasAllergies ? 'Yes - ' + formData.allergyDetails : 'No'}\nPrevious Tattoos: ${formData.previousTattoos ? 'Yes' : 'No'}`
      };

      // For demo purposes, we'll simulate email sending
      // In production, replace with actual EmailJS service
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Uncomment and configure when EmailJS is set up:
      // await window.emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        tattooType: '',
        size: '',
        placement: '',
        description: '',
        budget: '',
        preferredDate: '',
        hasAllergies: false,
        allergyDetails: '',
        previousTattoos: false,
        referenceImages: null
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Book Now
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to bring your vision to life? Book your consultation today and let's create something amazing together.
            </p>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className={`bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700/50 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            
            {/* Personal Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-purple-300">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Service Type *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Tattoo Details (shown only for tattoo services) */}
            {formData.service.toLowerCase().includes('tattoo') && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8 text-purple-300">Tattoo Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Tattoo Style</label>
                    <select
                      name="tattooType"
                      value={formData.tattooType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    >
                      <option value="">Select tattoo style</option>
                      {tattooTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Size</label>
                    <select
                      name="size"
                      value={formData.size}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    >
                      <option value="">Select size</option>
                      {sizes.map((size, index) => (
                        <option key={index} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Placement on Body</label>
                    <input
                      type="text"
                      name="placement"
                      value={formData.placement}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="e.g., Upper arm, Back, Leg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    >
                      <option value="">Select budget range</option>
                      <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
                      <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                      <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                      <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                      <option value="₹1,00,000+">₹1,00,000+</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Project Details */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-purple-300">Project Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Preferred Date</label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Reference Images</label>
                  <input
                    type="file"
                    name="referenceImages"
                    onChange={handleInputChange}
                    accept="image/*"
                    multiple
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">Project Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                  placeholder="Describe your vision, style preferences, and any specific details..."
                />
              </div>
            </div>

            {/* Health Information (for tattoo services) */}
            {formData.service.toLowerCase().includes('tattoo') && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8 text-purple-300">Health Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="hasAllergies"
                      checked={formData.hasAllergies}
                      onChange={handleInputChange}
                      className="mt-1 w-5 h-5 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
                    />
                    <div className="flex-1">
                      <label className="text-sm font-semibold text-gray-300">I have allergies or skin sensitivities</label>
                      {formData.hasAllergies && (
                        <textarea
                          name="allergyDetails"
                          value={formData.allergyDetails}
                          onChange={handleInputChange}
                          rows={3}
                          className="mt-2 w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                          placeholder="Please describe your allergies or sensitivities..."
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="previousTattoos"
                      checked={formData.previousTattoos}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
                    />
                    <label className="text-sm font-semibold text-gray-300">I have previous tattoos</label>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-12 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                  isSubmitting ? 'animate-pulse' : ''
                }`}
              >
                {isSubmitting ? 'Sending Request...' : 'Book Consultation'}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mt-8 p-6 bg-green-600/20 border border-green-500 rounded-xl text-center">
                <h3 className="text-xl font-bold text-green-400 mb-2">Booking Request Sent!</h3>
                <p className="text-green-300">Thank you for your interest! We'll get back to you within 24 hours to confirm your consultation.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-8 p-6 bg-red-600/20 border border-red-500 rounded-xl text-center">
                <h3 className="text-xl font-bold text-red-400 mb-2">Something went wrong</h3>
                <p className="text-red-300">Please try again or contact us directly. We apologize for the inconvenience.</p>
              </div>
            )}
          </form>

          {/* Contact Information */}
          <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="text-lg font-bold mb-2 text-purple-300">Call Us</h3>
              <p className="text-gray-400">+91 98765 43210</p>
            </div>
            <div className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="text-lg font-bold mb-2 text-purple-300">Email Us</h3>
              <p className="text-gray-400">info@houseoftattoos.com</p>
            </div>
            <div className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="text-lg font-bold mb-2 text-purple-300">Visit Us</h3>
              <p className="text-gray-400">123 Art Street, Creative District</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;