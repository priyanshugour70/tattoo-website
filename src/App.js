import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tattoo from "./pages/Tattoo";
import Gallery from "./pages/Gallery";
import ArtTshirt from "./pages/ArtTshirt";
import PrintedTshirt from "./pages/PrintedTshirt";
import Shoes from "./pages/Shoes";
import VideoEdits from "./pages/VideoEdits";
import BookNow from "./pages/BookNow";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="flex-1 pt-16 md:pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tattoo" element={<Tattoo />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/art-tshirt" element={<ArtTshirt />} />
            <Route path="/printed-tshirt" element={<PrintedTshirt />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/video-edits" element={<VideoEdits />} />
            <Route path="/book-now" element={<BookNow />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />

        {/* Floating Contact */}
        <FloatingContact />
      </div>
    </Router>
  );
};

export default App;