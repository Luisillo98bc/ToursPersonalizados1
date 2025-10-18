import React from "react";
import { useParams, Link } from "react-router-dom";
import { packages } from "../data/data";

const PackageDetail = () => {
  const { id } = useParams();
  const pkg = packages.find((p) => p.id === parseInt(id));

  if (!pkg) {
    return (
      <div className="py-15 text-center">
        <h1 className="text-2xl font-bold">Paquete no encontrado</h1>
        <Link
          to="/paquetes"
          className="text-primary hover:underline mt-4 inline-block"
        >
          Volver a paquetes
        </Link>
      </div>
    );
  }

  return (
    <div className="py-5 mt-[100px] bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          to="/paquetes"
          className="text-primary hover:underline mb-4 inline-block"
        >
          &larr; Volver a paquetes
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-96 object-cover"
          />

          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{pkg.title}</h1>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                {pkg.duration}
              </span>
              <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm">
                S/{pkg.price}
              </span>
              {pkg.category && (
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                  {pkg.category}
                </span>
              )}
            </div>

            <p className="text-gray-700 text-lg mb-6">{pkg.fullDescription}</p>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Incluye</h2>
              <ul className="list-disc pl-5 space-y-2">
                {pkg.includes.map((item, index) => (
                  <li key={index} className="text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {pkg.itinerary && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Itinerario</h2>
                <div className="space-y-4">
                  {pkg.itinerary.map((day, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-primary pl-4 py-2"
                    >
                      <h3 className="font-bold text-lg">{day.title}</h3>
                      <p className="text-gray-700">{day.description}</p>
                      <img src={day.image} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">
                ¿Te interesa este paquete?
              </h3>
              <p className="mb-4">
                Contáctanos para más información o para reservar este paquete.
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

export default PackageDetail;
