import React from "react";
import Header from "../components/Header";
import AboutOurStudio from "../components/AboutOurStudio";
import AboutTheArtist from "../components/AboutTheArtist";
import TattooGallery from "../components/TattooGallery";
import ArtTshirtGallery from "../components/ArtTshirtsGallery";
import PrintedTshirtGallery from "../components/PrintedTshirtGallery";
import ShoesGallery from "../components/ShoesGallery";
import VideoEditsGallery from "../components/VideoEditsGallery";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <div
      className="bg-fixed bg-cover bg-center transition duration-500 ease-in-out"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/2183131/pexels-photo-2183131.jpeg?cs=srgb&dl=pexels-kevinbidwell-2183131.jpg&fm=jpg')`,
      }}
    >
      <section id="Header">
        <Header />
      </section>

      <section id="AboutStudio" className="py-20">
        <AboutOurStudio />
      </section>

      <section id="AboutArtist" className="py-20">
        <AboutTheArtist />
      </section>

      <section id="TattooGallery" className="py-20">
        <TattooGallery />
      </section>

      <section id="ArtTshirts" className="py-20">
        <ArtTshirtGallery />
      </section>

      <section id="PrintedTshirts" className="py-20">
        <PrintedTshirtGallery />
      </section>

      <section id="ShoesGallery" className="py-20">
        <ShoesGallery />
      </section>

      <section id="VideoEdits" className="py-20">
        <VideoEditsGallery />
      </section>

      <section id="ContactUs" className="py-20">
        <ContactUs />
      </section>
    </div>
  );
};

export default Home;
