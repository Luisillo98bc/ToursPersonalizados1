import React from "react";
import { Link } from "react-router-dom";
import { packages, tours } from "../data/data";
import portada from "../assets/portada.jpg";
import Hero from "../components/Hero";
import Bienvenida from "../components/Bienvenida";
import Experiencias from "../components/Experiencias";
import { MapPin, Clock, Star } from "lucide-react";
const Home = () => {
  const featuredPackages = packages.slice(0, 3);
  const featuredTours = tours.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}

      <Hero />
      {/* Featured Packages */}
      <Bienvenida />
      <Experiencias />
      <section className="py-16  bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-3 text-black drop-shadow-sm">
            Paquetes Destacados
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Vive experiencias únicas y descubre lo mejor del Valle del Mantaro
            con nuestros paquetes más populares.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden 
                transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(255,85,34,0.3)]"
              >
                {/* Imagen */}
                <div className="relative overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="absolute top-3 left-3 bg-[var(--color-primary)] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    Paquete Turístico
                  </span>
                </div>

                {/* Contenido */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 mr-1 text-[var(--color-secondary)]" />
                    <span>{pkg.location || "Valle del Mantaro"}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 leading-snug group-hover:text-[var(--color-primary)] transition-colors duration-300 line-clamp-2">
                    {pkg.title}
                  </h3>

                  <div className="flex items-center text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill="currentColor"
                        stroke="none"
                        className="drop-shadow-[0_0_3px_rgba(255,215,0,0.7)]"
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-500">
                      (5.0 reseñas)
                    </span>
                  </div>

                  <div className="flex justify-between items-center border-t border-gray-100 pt-3">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Clock className="w-4 h-4 mr-1 text-[var(--color-secondary)]" />
                      <span>{pkg.duration}</span>
                    </div>
                    <span className="text-[var(--color-primary)] font-bold text-lg">
                      Desde S/{pkg.price}
                    </span>
                  </div>

                  <Link
                    to={`/paquetes/${pkg.id}`}
                    className="block w-full mt-4 bg-[var(--color-secondary)] hover:bg-[var(--color-primary)] 
                    text-white text-center font-medium py-3 rounded-xl transition-all duration-300 
                    shadow-md hover:shadow-[0_4px_15px_rgba(38,84,124,0.4)]"
                  >
                    Ver Detalles
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/paquetes"
              className="text-[var(--color-primary)] hover:underline font-medium text-lg"
            >
              Ver todos los paquetes
            </Link>
          </div>
        </div>
      </section>

      {/* 🔷 Tours Populares */}
      <section className="pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-3 text-black drop-shadow-sm">
            Tours Populares
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Explora los destinos más visitados y vive la aventura del Valle del
            Mantaro con nuestros tours más solicitados.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredTours.map((tour) => (
              <div
                key={tour.id}
                className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden 
                transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(255,85,34,0.3)]"
              >
                {/* Imagen */}
                <div className="relative overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="absolute top-3 left-3 bg-[var(--color-primary)] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    Tour Popular
                  </span>
                </div>

                {/* Contenido */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 mr-1 text-[var(--color-secondary)]" />
                    <span>{tour.location || "Valle del Mantaro"}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 leading-snug group-hover:text-[var(--color-primary)] transition-colors duration-300 line-clamp-2">
                    {tour.title}
                  </h3>

                  <div className="flex items-center text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill="currentColor"
                        stroke="none"
                        className="drop-shadow-[0_0_3px_rgba(255,215,0,0.7)]"
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-500">
                      (5.0 reseñas)
                    </span>
                  </div>

                  <div className="flex justify-between items-center border-t border-gray-100 pt-3">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Clock className="w-4 h-4 mr-1 text-[var(--color-secondary)]" />
                      <span>{tour.duration}</span>
                    </div>
                    <span className="text-[var(--color-primary)] font-bold text-lg">
                      Desde S/{tour.price}
                    </span>
                  </div>

                  <Link
                    to={`/tours/${tour.id}`}
                    className="block w-full mt-4 bg-[var(--color-secondary)] hover:bg-[var(--color-primary)] 
                    text-white text-center font-medium py-3 rounded-xl transition-all duration-300 
                    shadow-md hover:shadow-[0_4px_15px_rgba(38,84,124,0.4)]"
                  >
                    Ver Detalles
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/tours"
              className="text-[var(--color-primary)] hover:underline font-medium text-lg"
            >
              Ver todos los tours
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#1E4976] to-[#958bc0] text-white rounded-3xl shadow-xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Texto principal */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
              Tu Aventura Personalizada{" "}
              <span className="text-yellow-300">¡Garantizada!</span> 🚀
            </h2>
            <p className="text-lg text-gray-100 max-w-2xl">
              Reserva tu experiencia ahora. Cuéntanos tu destino y número de
              viajeros para recibir una cotización inmediata y sin compromiso.
            </p>
          </div>

          {/* Botón de acción */}
          <Link
            to="https://wa.me/51914067799" // 👉 reemplaza con tu número real
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#ff5522] hover:bg-[#e04b1e] text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-green-400"
            >
              <path d="M16.6 13.9c-.3-.2-1.7-.9-1.9-1s-.4-.2-.6.1-.7 1-.9 1.2-.3.2-.6.1a7.8 7.8 0 0 1-3.7-3.2c-.3-.4 0-.5.2-.7l.5-.6c.2-.2.2-.4 0-.7L8.2 7a.6.6 0 0 0-.8 0 3.2 3.2 0 0 0-1 2.3A5.8 5.8 0 0 0 8.1 15a6.3 6.3 0 0 0 5 2.7 5.2 5.2 0 0 0 2.2-.5 2.4 2.4 0 0 0 1.6-1.5c.2-.4 0-.6-.2-.8z" />
              <path d="M12 2a10 10 0 0 0-8.5 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.8 15.7a7.7 7.7 0 0 1-10.3 1L5.3 19l.9-2.7a7.7 7.7 0 1 1 11.6 1.4z" />
            </svg>
            Reservar Servicio
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
