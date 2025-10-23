import React from "react";

const TransportServices = () => {
  // REEMPLAZA ESTE NÚMERO CON TU NÚMERO DE WHATSAPP COMPLETO
  const WHATSAPP_NUMBER = "519XXXXXXXX";

  // Paleta de Colores de Marca
  const PRIMARY_COLOR = "#ff5522"; // Naranja-Rojo (Acción)
  const PRIMARY_HOVER = "#e04b1e"; // Tono más oscuro para hover
  const SECONDARY_COLOR = "#26547c"; // Azul Oscuro (Fondo de CTA)
  const SECONDARY_GRADIENT_END = "#1f4362"; // Tono más oscuro para gradiente

  // NUEVO COLOR PARA TÍTULOS DE ALTO CONTRASTE
  const TITLE_COLOR = "#000000"; // Negro Puro

  // Color original de WhatsApp para el ícono estilizado
  const WHATSAPP_GREEN = "#25D366";

  const services = [
    {
      title: "Autos para 4 Pasajeros",
      description:
        "Ideal para viajes cómodos y privados, movilidad ejecutiva o familiar de pequeño grupo. Ofrecemos la flexibilidad que necesitas para tus traslados locales.",
      icon: "🚗",
    },
    {
      title: "Vans para 11 Pasajeros",
      description:
        "Perfectas para grupos medianos, excursiones y traslados con más equipaje. Disfruta de un viaje grupal sin sacrificar la comodidad ni la seguridad.",
      icon: "🚐",
    },
    {
      title: "Vans para 15 Pasajeros",
      description:
        "La mejor opción para grupos grandes que necesitan un traslado conjunto y confortable. Solución ideal para eventos, delegaciones o viajes familiares extensos.",
      icon: "🚌",
    },
    {
      title: "Traslados al Aeropuerto de Jauja",
      description:
        "Servicio de recojo y traslado privado desde o hacia el Aeropuerto Francisco Carlé de Jauja (JAU). Puntualidad y asistencia garantizada para tu conexión aérea.",
      icon: "✈️",
    },
    {
      title: "Movilidad Ejecutiva y Privada",
      description:
        "Servicios de transporte con chofer para reuniones, eventos o traslados exclusivos y discretos. Máxima profesionalidad y confort para tus compromisos.",
      icon: "💼",
    },
    {
      title: "Ruta Huancayo - Lima y Viceversa",
      description:
        "Viajes interprovinciales cómodos y seguros entre Huancayo y Lima, disponibles en ambas direcciones. Olvídate del bus y viaja con la privacidad de un servicio personalizado.",
      icon: "🛣️",
    },
  ];

  // Función para generar el enlace de WhatsApp
  const generateWhatsAppLink = (serviceTitle, serviceDescription) => {
    const message = `¡Hola! Estoy interesado en el servicio de *${serviceTitle}*. 
Características: ${serviceDescription}. 
Me gustaría solicitar una cotización. Gracias.`;

    const encodedMessage = encodeURIComponent(message.trim());

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  };

  // ÍCONO DE WHATSAPP MEJORADO (con el color verde de WhatsApp)
  const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-6 h-6"
    >
      {/* Contorno (Azul) para simular el ícono de WhatsApp sobre tu fondo */}
      <path
        d="M12.04 2C6.52 2 2 6.53 2 12.08c0 1.95.52 3.86 1.5 5.54L2 22l4.54-1.46A10.06 10.06 0 0 0 12.05 22C17.58 22 22 17.47 22 11.93 22 6.4 17.56 2 12.04 2Z"
        fill={WHATSAPP_GREEN}
      />
      {/* Mensaje/burbuja (Blanco) */}
      <path
        d="M16.75 14.18c-.26-.13-1.54-.76-1.78-.84-.24-.09-.42-.13-.6.13-.17.26-.68.83-.83 1-.15.17-.3.19-.56.06-.26-.13-1.1-.4-2.1-1.28-.78-.69-1.3-1.54-1.45-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.32.39-.48.13-.17.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.6-1.44-.82-1.97-.21-.5-.42-.43-.6-.43h-.52c-.17 0-.45.06-.68.32-.23.26-.89.86-.89 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.76 2.7 4.27 3.79.6.26 1.06.42 1.43.54.6.19 1.14.16 1.57.1.48-.07 1.54-.63 1.76-1.25.22-.62.22-1.16.15-1.25-.06-.1-.24-.16-.5-.29Z"
        fill="#FFFFFF"
      />
    </svg>
  );

  // Componente de Botón de WhatsApp reutilizable
  const WhatsAppButton = ({ serviceTitle, serviceDescription, children }) => {
    const isMainButton = !serviceTitle;
    const link = isMainButton
      ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          "¡Hola! Me gustaría cotizar un servicio de transporte. Por favor, ayúdenme a elegir la mejor opción."
        )}`
      : generateWhatsAppLink(serviceTitle, serviceDescription);

    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ${
          isMainButton ? "text-lg" : "w-full"
        }`}
        style={{
          backgroundColor: PRIMARY_COLOR,
          "--tw-bg-opacity": 1,
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = PRIMARY_HOVER)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = PRIMARY_COLOR)
        }
      >
        <WhatsAppIcon />
        {children || "Contactar por WhatsApp"}
      </a>
    );
  };

  return (
    // Ya tiene el pt-24 para compensar la Navbar
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* ENCABEZADO: Color principal del h1 cambiado a NEGRO PURO */}
        <h1
          className={`text-4xl lg:text-5xl font-extrabold text-center mb-4`}
          style={{ color: TITLE_COLOR }} // Aplicamos el color negro (#000000)
        >
          Servicios de Transporte{" "}
          <span style={{ color: PRIMARY_COLOR }}>Privado</span>
        </h1>

        <p className="text-xl text-center text-gray-600 mb-20 max-w-3xl mx-auto">
          Soluciones de movilidad ejecutiva y familiar con la máxima seguridad y
          confort en Huancayo y la región central.
        </p>

        {/* SECCIÓN DE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {services.map((rec, index) => (
            <div
              key={index}
              className={`
                bg-white rounded-xl shadow-xl p-6 md:p-8 
                border-t-4 border-white
                hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.15)] 
                transition-all duration-300 transform hover:translate-y-[-5px] 
                flex flex-col justify-between
              `}
            >
              <div>
                <div className="text-5xl mb-4 text-gray-700">{rec.icon}</div>

                {/* TÍTULOS DE CARD CAMBIADOS A NEGRO PURO */}
                <h3
                  className={`text-2xl font-extrabold mb-3 border-b pb-2`}
                  style={{ color: TITLE_COLOR, borderColor: "#e5e7eb" }}
                >
                  {rec.title}
                </h3>

                <p className="text-gray-600 mb-6 mt-3">{rec.description}</p>
              </div>

              {/* BOTÓN DE WHATSAPP */}
              <WhatsAppButton
                serviceTitle={rec.title}
                serviceDescription={rec.description}
              >
                Contactar por WhatsApp
              </WhatsAppButton>
            </div>
          ))}
        </div>

        {/* SECCIÓN DE COTIZACIÓN - Sin cambios, mantiene color blanco para el texto sobre fondo azul oscuro */}
        <div
          className="mt-24 p-10 md:p-12 text-white rounded-2xl shadow-2xl"
          style={{
            background: `linear-gradient(to right, ${SECONDARY_COLOR}, ${SECONDARY_GRADIENT_END})`,
          }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="lg:w-3/4 text-center lg:text-left mb-6 lg:mb-0">
              <h2 className="text-4xl font-extrabold mb-3">
                Tu Traslado Personalizado ¡Garantizado! 🚀
              </h2>
              <p className="text-lg opacity-90">
                Reserva tu unidad ahora. Indícanos tu ruta y el número de
                pasajeros para recibir una cotización inmediata.
              </p>
            </div>
            <div className="lg:w-1/4 text-center">
              {/* BOTÓN PRINCIPAL */}
              <WhatsAppButton>Reservar Servicio</WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportServices;
