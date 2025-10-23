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

  const phone = "51914067799";

  const message = encodeURIComponent(
    `¡Hola! 👋 Estoy interesado en el paquete "${pkg.title}" 🏞️\n\n` +
      `📅 Duración: ${pkg.duration}\n💰 Precio: S/${pkg.price}\n` +
      `📍 Categoría: ${pkg.category || "General"}\n\n` +
      `📝 Descripción: ${pkg.fullDescription}\n\n` +
      `🔗 Link del paquete: ${window.location.href}\n\n` +
      `¿Podrías darme más información o ayudarme a reservar? 🙏`
  );

  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <div className="py-5 mt-[100px] bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <Link
          to="/paquetes"
          className="text-primary hover:underline mb-4 inline-block"
        >
          &larr; Volver a paquetes
        </Link>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-96 object-cover"
          />

          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              {pkg.title}
            </h1>

            <div className="flex flex-wrap gap-3 mb-6">
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

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {pkg.fullDescription}
            </p>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                ✅ Incluye
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {pkg.includes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {pkg.itinerary && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
                  🗓️ Itinerario del viaje
                </h2>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-secondary h-full rounded-full hidden md:block"></div>

                  <div className="space-y-16">
                    {pkg.itinerary.map((day, index) => (
                      <div
                        key={index}
                        className={`md:flex items-center gap-8 ${
                          index % 2 === 0
                            ? "md:flex-row"
                            : "md:flex-row-reverse"
                        }`}
                      >
                        <div className="md:w-1/2 w-full">
                          {day.image && (
                            <img
                              src={day.image}
                              alt={`Itinerario ${index + 1}`}
                              className="w-full h-72 object-cover rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300"
                            />
                          )}
                        </div>

                        <div className="md:w-1/2 w-full bg-primary/20 p-6 border-2 border-primary rounded-2xl shadow-md relative">
                          <div
                            className={`hidden md:block absolute top-8 w-5 h-5 bg-primary rounded-full border-4 border-white shadow ${
                              index % 2 === 0 ? "-left-[42px]" : "-right-[42px]"
                            }`}
                          ></div>

                          {/* 🔢 Numeración simple sin palabra "Día" */}
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            {index + 1}. {day.title}
                          </h3>

                          <p className="text-gray-600 leading-relaxed">
                            {day.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="bg-green-50 border border-green-200 p-8 rounded-xl text-center shadow-inner">
              <h3 className="text-2xl font-bold mb-3 text-gray-800">
                ¿Te interesa este paquete?
              </h3>
              <p className="mb-6 text-gray-700">
                Contáctanos por WhatsApp para más información o para reservar tu
                experiencia.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M12.04 2C6.52 2 2 6.53 2 12.08c0 1.95.52 3.86 1.5 5.54L2 22l4.54-1.46A10.06 10.06 0 0 0 12.05 22C17.58 22 22 17.47 22 11.93 22 6.4 17.56 2 12.04 2Zm0 18.29c-1.68 0-3.32-.46-4.75-1.33l-.34-.2-2.7.87.88-2.63-.22-.34A8.2 8.2 0 0 1 3.8 12c0-4.56 3.7-8.27 8.25-8.27 4.54 0 8.24 3.7 8.24 8.27 0 4.55-3.7 8.25-8.25 8.25Zm4.71-6.21c-.26-.13-1.54-.76-1.78-.84-.24-.09-.42-.13-.6.13-.17.26-.68.83-.83 1-.15.17-.3.19-.56.06-.26-.13-1.1-.4-2.1-1.28-.78-.69-1.3-1.54-1.45-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.32.39-.48.13-.17.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.6-1.44-.82-1.97-.21-.5-.42-.43-.6-.43h-.52c-.17 0-.45.06-.68.32-.23.26-.89.86-.89 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.76 2.7 4.27 3.79.6.26 1.06.42 1.43.54.6.19 1.14.16 1.57.1.48-.07 1.54-.63 1.76-1.25.22-.62.22-1.16.15-1.25-.06-.1-.24-.16-.5-.29Z" />
                </svg>
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;
