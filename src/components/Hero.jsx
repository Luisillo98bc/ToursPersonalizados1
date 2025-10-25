import React, { useState, useEffect } from "react";

import img2 from "../assets/nevado.jpg"
import img3 from "../assets/portadas/contiportada.jpg"
import img4 from "../assets/portadas/neva2.avif"
import img5 from "../assets/valleportada.jpg"
import img6 from "../assets/portadas/ocopa t2.jpg"
import img7 from "../assets/portadas/paca t2.jpeg"
import img8 from "../assets/portadas/portada 15.avif"
import img9 from "../assets/portadas/portada 16.jpg"

import { Link } from "react-router-dom";

const Hero = () => {
  const images = [img2, img3, img4, img5, img6, img7, img8, img9];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar imagen cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative  h-[64vh] overflow-hidden w-[94%] m-auto rounded-4xl mt-[100px]">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Capa de oscurecimiento */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenido del hero */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-5xl font-bold mb-4">
          Descubre el valle del Mantaro
        </h1>
        <p className="text-lg max-w-xl mb-10">
          Experiencias únicas en Junin y a nivel
        </p>
        <Link
          to="/paquetes"
          className="bg-primary  hover:bg-secondary text-white font-bold py-3 px-6 rounded-lg text-lg"
        >
          Ver Paquetes
        </Link>
      </div>
    </div>
  );
};

export default Hero;
