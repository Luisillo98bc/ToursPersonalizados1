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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="
        relative 
        w-[94%] 
        mx-auto 
        rounded-3xl 
        mt-[100px] 
        overflow-hidden 
        h-[60vh] 
        sm:h-[70vh] 
        md:h-[75vh]
      "
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1
          className="
            text-3xl 
            sm:text-4xl 
            md:text-5xl 
            font-bold 
            mb-4 
            leading-tight
          "
        >
          Descubre el valle del Mantaro
        </h1>

        <p
          className="
            text-base 
            sm:text-lg 
            md:text-xl 
            max-w-xl 
            mb-8 
            text-gray-100
          "
        >
          Experiencias únicas en Junín y a nivel
        </p>

        <Link
          to="/paquetes"
          className="
            bg-primary 
            hover:bg-secondary 
            text-white 
            font-bold 
            py-3 
            px-6 
            rounded-lg 
            text-base 
            sm:text-lg 
            transition-all 
            duration-300
          "
        >
          Ver Paquetes
        </Link>
      </div>
    </div>
  );
};

export default Hero;
