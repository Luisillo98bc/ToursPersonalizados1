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
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para tu próxima aventura?
          </h2>
          <p className="text-xl mb-8">
            Contáctanos y planifica el viaje de tus sueños
          </p>
          <Link
            to="/contacto"
            className=" hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg text-lg bg-primary"
          >
            Contáctanos
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
