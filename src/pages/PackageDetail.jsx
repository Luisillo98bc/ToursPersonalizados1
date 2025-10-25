import React from "react";
import { useParams, Link } from "react-router-dom";
import { packages } from "../data/data";
import { MessageCircle } from "lucide-react";

const PackageDetail = () => {
  const { id } = useParams();
  const pkg = packages.find((p) => p.id === parseInt(id));

  if (!pkg) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Paquete no encontrado
        </h1>
        <Link
          to="/paquetes"
          className="text-primary hover:underline mt-4 inline-block font-semibold"
        >
          ← Volver a paquetes
        </Link>
      </div>
    );
  }

  const phone = "51914067799";
  const message = `
¡Hola! 👋 Estoy interesado en el paquete *${pkg.title}* 🏞️

📅 Duración: ${pkg.duration}
💰 Precio: S/${pkg.price}
📍 Categoría: ${pkg.category || "General"}

📝 Descripción: ${pkg.fullDescription}

📸 Imagen del paquete:
${pkg.image}

🔗 Enlace del paquete:
${window.location.href}

¿Podrías darme más información o ayudarme a reservar? 🙏
  `;

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="py-10 mt-[100px] bg-gradient-to-b from-white to-gray-50 min-h-screen pb-32">
      <div className="max-w-7xl mx-auto px-4">
        <Link
          to="/paquetes"
          className="text-primary hover:underline mb-6 inline-block font-semibold"
        >
          ← Volver a paquetes
        </Link>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* Imagen principal */}
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-[450px] object-cover"
          />

          <div className="p-8 md:p-10">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
              {pkg.title}
            </h1>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-primary text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
                {pkg.duration}
              </span>
              <span className="bg-secondary text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
                S/{pkg.price}
              </span>
              {pkg.category && (
                <span className="bg-gray-200 text-gray-800 px-4 py-1.5 rounded-full text-sm font-medium">
                  {pkg.category}
                </span>
              )}
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              {pkg.fullDescription}
            </p>

            {/* Incluye */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary">
                ✅ Incluye
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {pkg.includes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Itinerario */}
            {pkg.itinerary && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-10 text-center text-primary">
                  🗓️ Itinerario del viaje
                </h2>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary to-secondary h-full rounded-full hidden md:block"></div>

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
                        {/* Imagen */}
                        <div className="md:w-1/2 w-full">
                          {day.image && (
                            <img
                              src={day.image}
                              alt={`Itinerario ${index + 1}`}
                              className="w-full h-72 object-cover rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300"
                            />
                          )}
                        </div>

                        {/* Descripción */}
                        <div className="md:w-1/2 w-full bg-gradient-to-br from-primary/10 to-secondary/10 p-6 border border-primary/30 rounded-2xl shadow-sm relative">
                          <div
                            className={`hidden md:block absolute top-8 w-5 h-5 bg-primary rounded-full border-4 border-white shadow-md ${
                              index % 2 === 0 ? "-left-[42px]" : "-right-[42px]"
                            }`}
                          ></div>

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
          </div>
        </div>
      </div>

      {/* Botón flotante */}
      <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-xl z-50">
        <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between flex-wrap gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span className="text-gray-600 text-md">Desde</span>
            <span className="text-3xl font-bold text-primary">
              S/{pkg.price}
            </span>
            <span className="text-gray-600 text-md">por persona</span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.03]"
          >
            <MessageCircle className="w-6 h-6" />
            Reservar Ahora
          </a>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;
