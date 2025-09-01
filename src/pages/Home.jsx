import React from "react";
import Header from "../components/Header";
import AboutOurStudio from "../components/AboutOurStudio";
import AboutTheArtist from "../components/AboutTheArtist";
import TattooGallery from "../components/TattooGallery";
import TshirtCarousel from "../components/TshirtCarousel";
import ServicesCarousel from "../components/ServicesCarousel";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <div
      className="bg-fixed bg-cover bg-center transition duration-500 ease-in-out relative"
      style={{
        backgroundImage: `url('/images/tattoo/mandala-tattoo-design-ideas.jpg')`,
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div className="relative z-10">
      <section id="Header">
        <Header />
      </section>

      <section id="AboutStudio" className="py-10">
        <AboutOurStudio />
      </section>

      <section id="AboutArtist" className="py-10">
        <AboutTheArtist />
      </section>

      <section id="TattooGallery" className="py-10">
        <TattooGallery />
      </section>

      <section id="TshirtCollection" className="py-10">
        <TshirtCarousel />
      </section>

      <section id="Services" className="py-10">
        <ServicesCarousel />
      </section>

      <section id="ContactUs" className="py-10">
        <ContactUs />
      </section>
      </div>
    </div>
  );
};

export default Home;
