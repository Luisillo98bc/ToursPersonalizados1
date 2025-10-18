import React from "react";
import { Link } from "react-router-dom";
import { packages, tours } from "../data/data";
import portada from "../assets/portada.jpg";
import Hero from "../components/Hero";
import Bienvenida from "../components/Bienvenida";
import Experiencias from "../components/Experiencias";
const Home = () => {
  const featuredPackages = packages.slice(0, 3);
  const featuredTours = tours.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}

      <Hero />
      {/* Featured Packages */}
      <Bienvenida />
      <Experiencias/>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Paquetes Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="group bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">S/{pkg.price}</span>
                    <Link
                      to={`/paquetes/${pkg.id}`}
                      className="bg-secondary hover:bg-yellow-600 text-white px-4 py-2 rounded"
                    >
                      Ver Detalles
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/paquetes"
              className="text-primary hover:underline font-medium"
            >
              Ver todos los paquetes
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tours Populares
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <div
                key={tour.id}
                className="group bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">
                      S/{tour.price}
                    </span>
                    <Link
                      to={`/tours/${tour.id}`}
                      className="bg-secondary hover:bg-yellow-600 text-white px-4 py-2 rounded"
                    >
                      Ver Detalles
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/tours"
              className="text-primary hover:underline font-medium"
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
