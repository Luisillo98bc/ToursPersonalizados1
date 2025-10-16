import React from "react";
import { Link } from "react-router-dom";
import { tours } from "../data/data";

import Virgen from "../assets/virgen.jpg"

const Tours = () => {
  return (
    <div className="py-15 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Nuestros Tours</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Explora los mejores destinos y actividades en Oxapampa y sus
          alrededores
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
                <p className="text-gray-600 mb-4">{tour.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-primary font-bold text-lg">
                    S/{tour.price}
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded">
                    {tour.duration}
                  </span>
                </div>
                <Link
                  to={`/tours/${tour.id}`}
                  className="block w-full bg-secondary hover:bg-yellow-600 text-white text-center font-medium py-2 px-4 rounded transition-colors duration-300"
                >
                  Ver Detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tours;
