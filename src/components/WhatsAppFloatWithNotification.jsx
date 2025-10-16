import React, { useState, useEffect } from "react";

const WhatsAppFloatWithNotification = () => {
 const phoneNumber = "51914067799";
  const message =
    "Hola, me interesa obtener más información sobre sus tours y paquetes turísticos en el valle del mantaro y a nivel nacional.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="flex gap-2">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-orange-600 hover:bg-orange-400 text-white p-4 rounded-full shadow-lg transition-all duration-00 transform hover:scale-110 hover:shadow-xl flex items-center justify-center cursor-pointer"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-white"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.93 6.93l1.27-1.27a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>
      <div>
        <p>Llamenos</p>
        <span className="hover:text-primary">914067799</span>
      </div>

      {/* Efecto de pulso */}
      <div className="  bg-green-500 rounded-full  pointer-events-none"></div>
    </div>
  );
};

export default WhatsAppFloatWithNotification;
