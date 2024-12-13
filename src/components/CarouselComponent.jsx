import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    image: "https://rayoflightthemes.com/WordPressThemes/Ink_Tattoo_Studio_WordPress_Theme/wp-content/uploads/2014/01/additional2-300x300.jpg",
    text: "Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me.",
    name: "Jane Doe",
  },
  {
    image: "https://rayoflightthemes.com/WordPressThemes/Ink_Tattoo_Studio_WordPress_Theme/wp-content/uploads/2014/01/additional2-300x300.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque eros non ipsum gravida, non molestie purus faucibus.",
    name: "John Smith",
  },
  {
    image: "https://rayoflightthemes.com/WordPressThemes/Ink_Tattoo_Studio_WordPress_Theme/wp-content/uploads/2014/01/additional2-300x300.jpg",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    name: "Alex Johnson",
  },
];

const CarouselComponent = () => {
  return (
    <div className="relative text-white py-10">
      {/* Dark Overlay */}
      <div className="absolute inset-0  opacity-50"></div>

      {/* Swiper Carousel */}
      <div className="relative z-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center h-full"
            >
              <div className="text-center max-w-2xl mx-auto flex flex-col items-center">
                {/* Profile Image */}
                <div className="mb-4">
                  <img
                    src={testimonial.image}
                    alt={`Testimonial ${index}`}
                    className="w-24 h-24 border-2 border-gray-300 shadow-lg"
                  />
                </div>
                {/* Testimonial Content */}
                <div className="bg-black bg-opacity-60 p-6 rounded-md">
                  <p className="text-gray-300 italic text-lg mb-4">
                    {testimonial.text}
                  </p>
                  <h4 className="text-white font-bold text-xl">
                    {testimonial.name}
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselComponent;