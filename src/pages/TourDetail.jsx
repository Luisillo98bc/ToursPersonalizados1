import React from "react";
import { useParams, Link } from "react-router-dom";
import { tours } from "../data/data";

const TourDetail = () => {
  const { id } = useParams();
  const tour = tours.find((t) => t.id === parseInt(id));

  if (!tour) {
    return (
      <div className="py-12 text-center">
        <h1 className="text-2xl font-bold">Tour no encontrado</h1>
        <Link
          to="/tours"
          className="text-primary hover:underline mt-4 inline-block"
        >
          Volver a tours
        </Link>
      </div>
    );
  }

  return (
    <div className="py-5 mt-[100px] bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          to="/tours"
          className="text-primary hover:underline mb-4 inline-block"
        >
          &larr; Volver a tours
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-96 object-cover"
          />

          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{tour.title}</h1>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                {tour.duration}
              </span>
              <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm">
                ${tour.price}
              </span>
              {tour.difficulty && (
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                  Dificultad: {tour.difficulty}
                </span>
              )}
            </div>

            <p className="text-gray-700 text-lg mb-6">{tour.fullDescription}</p>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Incluye</h2>
              <ul className="list-disc pl-5 space-y-2">
                {tour.includes.map((item, index) => (
                  <li key={index} className="text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {tour.highlights && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Puntos Destacados</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {tour.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">
                ¿Te interesa este tour?
              </h3>
              <p className="mb-4">
                Contáctanos para más información o para reservar este tour.
              </p>
              <Link
                to="/contacto"
                className="inline-block bg-primary hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg"
              >
                Contactar Ahora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;
