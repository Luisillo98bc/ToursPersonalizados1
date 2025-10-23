import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import Tours from "./pages/Tours";
import TransportServices from "./pages/TransportServices";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TourDetail from "./pages/TourDetail";
import PackageDetail from "./pages/PackageDetail";
//import WhatsAppFloatWithSchedule from "./components/WhatsAppFloatWithSchedule";
import WhatsAppFloat from "./components/WhatsAppFloat";
//import WhatsAppFloatWithNotification from "./components/WhatsAppFloatWithNotification";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paquetes" element={<Packages />} />
          <Route path="/paquetes/:id" element={<PackageDetail />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/:id" element={<TourDetail />} />
          <Route path="/transporte" element={<TransportServices />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
        <Footer />

        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
