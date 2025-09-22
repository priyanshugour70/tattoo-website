import React, { useState } from "react";
import { Phone, MessageCircle } from "lucide-react";

const FloatingContact = () => {
  const [open, setOpen] = useState(false);

  const phoneNumber = "+919009148003";
  const whatsappMessage = "Hello T2 Studio! I’d like to know more about your services.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
      {/* Action Buttons with animation */}
      <div
        className={`flex flex-col items-end space-y-3 mb-3 transform transition-all duration-500 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        {/* Call Icon */}
        <a
          href={`tel:${phoneNumber}`}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:scale-110 transition"
        >
          <Phone size={24} className="text-blue-600" />
        </a>

        {/* WhatsApp Icon */}
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:scale-110 transition"
        >
          <MessageCircle size={24} className="text-green-500" />
        </a>
      </div>

      {/* Main Floating Button (Company Logo inside circle) */}
      <button
        onClick={() => setOpen(!open)}
        className="w-16 h-16 rounded-full bg-black flex items-center justify-center shadow-lg hover:rotate-12 hover:scale-110 transition"
      >
        <img
          src="/logo.png" // replace with your logo
          alt="T2 Studio"
          className="w-12 h-12 object-cover rounded-full"
        />
      </button>
    </div>
  );
};

export default FloatingContact;

