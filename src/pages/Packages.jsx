import React from "react";
import { Link } from "react-router-dom";
import { packages } from "../data/data";

const Packages = () => {
  return (
    <div className="py-5 mt-[100px] bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">
          Nuestros Paquetes Turísticos
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Descubre nuestras ofertas especiales para vivir experiencias únicas en
          el valle del mantaro
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>

                <div className="flex justify-between items-center mb-4">
                  <span className="text-primary font-bold text-lg">
                    S/{pkg.price}
                  </span>
                  <span className="bg-green-200 text-green-800 text-sm font-medium px-2 py-1 rounded">
                    {pkg.duration}
                  </span>
                </div>
                <Link
                  to={`/paquetes/${pkg.id}`}
                  className="block w-full mx-auto bg-secondary hover:bg-yellow-600 text-white text-center font-medium py-3 px-4 rounded transition-colors duration-300"
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

export default Packages;
