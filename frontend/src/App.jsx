import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingSocials from "./components/FloatingSocials";


import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div style={{ backgroundColor: "#000000", color: "white", minHeight: "100vh" }}>
      <BrowserRouter>
        
        {/* NAVBAR */}
        <Navbar />
        <FloatingSocials />

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
        </Routes>

        {/* FOOTER */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}







