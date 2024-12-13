import React from "react";
import Header from "./components/Header";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Portfolio from "./pages/Portfolio";
import Gallery from "./pages/Gallery";
import Artists from "./pages/Artists";
import Home from "./pages/Home";
import CarouselComponent from "./components/CarouselComponent";
import Headline from "./components/Headline";
import SelectiveGallery from "./pages/SelectiveGallery";

import AboutOurStudio from "./components/AboutOurStudio";

const App = () => {
  return (
    <div
      className="bg-fixed bg-cover bg-center transition duration-500 ease-in-out"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/2183131/pexels-photo-2183131.jpeg?cs=srgb&dl=pexels-kevinbidwell-2183131.jpg&fm=jpg')`,
      }}
    >
      <Header />
      <main >
        <section id="home">
          <Home />
        </section>
        <section id="artists" className="py-20">
          <Artists />
        </section>
        <section id="aboutOurStuido" className="py-20">
          <AboutOurStudio />
        </section>
        <section id="carousel" className="py-20">
          <CarouselComponent/>
        </section>
        <section id="carousel" className="py-20">
          <SelectiveGallery />
        </section>
        <section id="headline-1">
          <Headline heading="Headline One" desc="Description for Headline One"/>
        </section>
        <section id="gallery" className="py-20">
          <Gallery />
        </section>
        <section id="headline-2">
          <Headline heading="Headline Two" desc="Description for Headline Two"/>
        </section>
        <section id="portfolio" className="py-20">
          <Portfolio />
        </section>
        <section id="FAQ" className="py-20">
          <FAQ />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;