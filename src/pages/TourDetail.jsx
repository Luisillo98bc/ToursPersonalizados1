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

  // 💬 Número de WhatsApp (reemplázalo por el tuyo con código de país)
  const phoneNumber = "519"; // Ejemplo Perú: 51 + número

  // 🧾 Mensaje con la información del tour
  const message = `
Hola, estoy interesado en reservar el tour *${tour.title}* 🌄

📅 Duración: ${tour.duration}
💰 Precio: S/${tour.price.toFixed(2)} por persona
📋 Descripción: ${tour.fullDescription}

Imagen principal: ${tour.image}

¿Podrían darme más información, por favor?
  `;

  // ✅ Crear el enlace de WhatsApp (codificando el texto)
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="py-5 mt-[100px] bg-white min-h-screen pb-20">
      <div className="max-w-6xl mx-auto px-4">
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
                S/{tour.price}
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
          </div>
        </div>
      </div>

      {/* ✅ Barra flotante inferior con botón de WhatsApp */}
      <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t shadow-lg z-50">
        <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span className="text-gray-500 text-md">Desde</span>
            <span className="text-3xl font-bold text-gray-900">
              S/{tour.price.toFixed(2)}
            </span>
            <span className="text-gray-500 text-md">por persona</span>
          </div>

          {/* 🔗 Enlace directo a WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary/70 text-xl hover:bg-primary text-white font-bold py-2 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
          >
            Reservar Ahora
          </a>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;
