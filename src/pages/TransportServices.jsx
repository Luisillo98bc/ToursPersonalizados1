import React from "react";
import { motion } from "framer-motion";

const TransportServices = () => {
  const WHATSAPP_NUMBER = "51914067799";

  const COLORS = {
    primary: "#ff5522",
    primaryHover: "#e04b1e",
    secondary: "#26547c",
    secondaryEnd: "#1f4362",
    title: "#0f172a",
    whatsapp: "#25D366",
  };

  // ✅ Servicios con emojis
  const services = [
    {
      title: "Autos para 4 Pasajeros",
      description:
        "Ideal para viajes cómodos y privados, movilidad ejecutiva o familiar de pequeño grupo. Perfecto para traslados locales con estilo y confort.",
      emoji: "🚗",
    },
    {
      title: "Vans para 11 Pasajeros",
      description:
        "Perfectas para excursiones o grupos medianos. Más espacio para equipaje y comodidad sin perder agilidad en carretera.",
      emoji: "🚐",
    },
    {
      title: "Vans para 15 Pasajeros",
      description:
        "La mejor opción para delegaciones, eventos o viajes familiares. Seguridad, espacio y confort garantizados para todos.",
      emoji: "🚌",
    },
    {
      title: "Traslados al Aeropuerto de Jauja",
      description:
        "Puntualidad y asistencia garantizada para tus conexiones aéreas desde o hacia el Aeropuerto Francisco Carlé (JAU).",
      emoji: "✈️",
    },
    {
      title: "Movilidad Ejecutiva y Privada",
      description:
        "Transporte exclusivo con chofer profesional. Discreción, confort y puntualidad para tus reuniones o eventos.",
      emoji: "💼",
    },
    {
      title: "Ruta Huancayo - Lima y Viceversa",
      description:
        "Viaja de forma privada, cómoda y segura entre Huancayo y Lima. Servicio interprovincial premium adaptado a ti.",
      emoji: "🛣️",
    },
  ];

  const generateWhatsAppLink = (title, desc) => {
    const msg = `¡Hola! Estoy interesado en el servicio de *${title}*.\n${desc}\n¿Podrían enviarme una cotización, por favor?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-6 h-6"
    >
      <path
        d="M12.04 2C6.52 2 2 6.53 2 12.08c0 1.95.52 3.86 1.5 5.54L2 22l4.54-1.46A10.06 10.06 0 0 0 12.05 22C17.58 22 22 17.47 22 11.93 22 6.4 17.56 2 12.04 2Z"
        fill={COLORS.whatsapp}
      />
      <path
        d="M16.75 14.18c-.26-.13-1.54-.76-1.78-.84-.24-.09-.42-.13-.6.13-.17.26-.68.83-.83 1-.15.17-.3.19-.56.06-.26-.13-1.1-.4-2.1-1.28-.78-.69-1.3-1.54-1.45-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.32.39-.48.13-.17.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.6-1.44-.82-1.97-.21-.5-.42-.43-.6-.43h-.52c-.17 0-.45.06-.68.32-.23.26-.89.86-.89 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.76 2.7 4.27 3.79.6.26 1.06.42 1.43.54.6.19 1.14.16 1.57.1.48-.07 1.54-.63 1.76-1.25.22-.62.22-1.16.15-1.25-.06-.1-.24-.16-.5-.29Z"
        fill="#fff"
      />
    </svg>
  );

  const WhatsAppButton = ({ title, desc, text = "Contactar por WhatsApp" }) => (
    <a
      href={
        title
          ? generateWhatsAppLink(title, desc)
          : `https://wa.me/${WHATSAPP_NUMBER}`
      }
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 font-semibold text-white py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
      style={{ backgroundColor: COLORS.primary }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = COLORS.primaryHover)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = COLORS.primary)
      }
    >
      <WhatsAppIcon />
      {text}
    </a>
  );

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-center mb-5"
          style={{ color: COLORS.title }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Servicios de Transporte{" "}
          <span style={{ color: COLORS.primary }}>Privado</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Transporte seguro, ejecutivo y personalizado en Huancayo y la región
          central. Tu comodidad y seguridad son nuestra prioridad.
        </motion.p>

        {/* Cards con emojis */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between items-center text-center"
              style={{
                background: `linear-gradient(145deg, rgba(255,85,34,0.12), rgba(38,84,124,0.12))`,
                backdropFilter: "blur(8px)",
              }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="text-6xl mb-4">{s.emoji}</div>
              <h3
                className="text-2xl font-bold mb-3 border-b border-gray-200 pb-2"
                style={{ color: COLORS.title }}
              >
                {s.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {s.description}
              </p>
              <WhatsAppButton title={s.title} desc={s.description} />
            </motion.div>
          ))}
        </div>

        {/* CTA Final */}
        <motion.div className="mt-24 p-10 md:p-14 rounded-3xl  text-center md:text-left bg-gradient-to-r from-[#1E4976] to-[#958bc0] text-white">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Tu traslado personalizado ¡garantizado! 🚀
              </h2>
              <p className="text-lg opacity-90 max-w-2xl">
                Indícanos tu destino y número de pasajeros para recibir una
                cotización al instante. Confort y puntualidad en cada viaje.
              </p>
            </div>
            <div>
              <WhatsAppButton text="Reservar Ahora" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TransportServices;
