import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tattoo from "./pages/Tattoo";
import ArtTshirt from "./pages/ArtTshirt";
import PrintedTshirt from "./pages/PrintedTshirt";
import Shoes from "./pages/Shoes";
import VideoEdits from "./pages/VideoEdits";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tattoo" element={<Tattoo />} />
          <Route path="/art-tshirt" element={<ArtTshirt />} />
          <Route path="/printed-tshirt" element={<PrintedTshirt />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/video-edits" element={<VideoEdits />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;