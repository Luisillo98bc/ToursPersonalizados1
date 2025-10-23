import React from "react";
import { Link } from "react-router-dom";
import { tours } from "../data/data";
import { Star, MapPin, Clock } from "lucide-react";

const Tours = () => {
  return (
    <section className="pt-5 pb-16 mt-[100px] bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Encabezado */}
        <h1 className="text-4xl font-extrabold text-center mb-3 text-black drop-shadow-sm">
          Nuestros Tours
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Explora los mejores destinos y actividades en el Valle del Mantaro y
          sus alrededores con nuestros tours personalizados.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden 
              transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(255,85,34,0.3)]"
            >
              {/* Imagen con overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="absolute top-3 left-3 bg-[var(--color-primary)] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  Tour Destacado
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

                {/* Valoración */}
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

                {/* Duración y precio */}
                <div className="flex justify-between items-center border-t border-gray-100 pt-3">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="w-4 h-4 mr-1 text-[var(--color-secondary)]" />
                    <span>{tour.duration}</span>
                  </div>
                  <span className="text-[var(--color-primary)] font-bold text-lg">
                    Desde S/{tour.price}
                  </span>
                </div>

                {/* Botón */}
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
      </div>
    </section>
  );
};

export default Tours;
