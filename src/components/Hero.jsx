import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import img2 from "../assets/nevado.jpg";
import img3 from "../assets/portadas/contiportada.jpg";
import img4 from "../assets/portadas/neva2.avif";
import img5 from "../assets/valleportada.jpg";
import img6 from "../assets/portadas/ocopa t2.jpg";
import img7 from "../assets/portadas/paca t2.jpeg";
import img8 from "../assets/portadas/portada 15.avif";
import img9 from "../assets/portadas/portada 16.jpg";

const Hero = () => {
  const images = [img2, img3, img4, img5, img6, img7, img8, img9];
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Cambiar imagen cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="">
      <div
        className="
          relative overflow-hidden  
          w-auto sm:w-[96%] md:w-[94%] xs:w-[94%]
            mx-2 xs:mx-4 sm:mx-auto /* <- Usamos margin lateral en móviles */
          mt-20 sm:mt-24
          rounded-2xl sm:rounded-3xl
        "
        style={{
          height: "calc(100vh - 80px)",
          maxHeight: "700px",
          minHeight: "400px",
        }}
      >
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
          }}
        />

        {/* Capa oscura */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />

        {/* Contenido */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight drop-shadow-2xl">
            Descubre el Valle del Mantaro
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mb-6 sm:mb-10 text-gray-100 drop-shadow-lg">
            Experiencias únicas en Junín y a nivel nacional
          </p>
          <Link
            to="/paquetes"
            className="bg-[#ff5522] hover:bg-[#26547c] text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
          >
            Ver Paquetes
          </Link>
        </div>

        {/* Indicadores */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20 overflow-hidden">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white w-8 sm:w-10"
                  : "bg-white/50 hover:bg-white/80 w-2"
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
