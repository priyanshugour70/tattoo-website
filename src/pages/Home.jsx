import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsArrowDown } from "react-icons/bs";

// Import modules like this:
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Home = () => {
  const slides = [
    {
      image:
        "https://images.pexels.com/photos/2183131/pexels-photo-2183131.jpeg?cs=srgb&dl=pexels-kevinbidwell-2183131.jpg&fm=jpg",
      title: "Welcome to Our World",
      subtitle: "Discover the beauty of creativity",
    },
    {
      image:
        "https://t4.ftcdn.net/jpg/07/71/43/49/360_F_771434967_SF93zFA0sbmylJUWg6HmT6BqrAk8sO5q.jpg",
      title: "Unleash Your Potential",
      subtitle: "Your journey begins here",
    },
    {
      image:
        "https://images.pexels.com/photos/2126124/pexels-photo-2126124.jpeg?cs=srgb&dl=pexels-brett-sayles-2126124.jpg&fm=jpg",
      title: "Transform Your Vision",
      subtitle: "Creating memories that last forever",
    },
  ];

  return (
    <div className="h-screen w-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-screen w-screen flex justify-center items-center bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Overlay for better readability */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              {/* Fixed Text */}
              <div className="absolute z-10 text-white text-center flex flex-col items-center space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold italic">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-3xl">{slide.subtitle}</p>

                {/* Down Arrow */}
                <div className="mt-6 flex flex-col items-center">
                  <span className="text-lg">Scroll Down</span>
                  <BsArrowDown className="mt-2 text-3xl animate-bounce" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;