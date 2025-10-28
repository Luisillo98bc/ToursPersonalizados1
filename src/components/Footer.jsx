import React from "react";
import { Link } from "react-router-dom";

import {
  FaTiktok,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
// Importa íconos adicionales para una mejor presentación del contacto
import safe from "../assets/safetravel.png";
import peru from "../assets/marca_peru.png";
import logo from "../assets/logo.png";

// Define un color de acento para la interactividad
const ACCENT_COLOR = "text-[#ff5522]";
const HOVER_CLASS = `hover:${ACCENT_COLOR} transition duration-300`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // Usa un color de fondo más profundo y oscuro para el footer profesional
    <footer className="bg-[#0f1a3c] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* -------------------- 🔹 Secciones principales -------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Columna 1: Logo y Eslogan */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <Link to="/">
              <img
                src={logo}
                alt="Logo de Tours Personalizados"
                width={300}
                
                className="mb-2"
              />
            </Link>

            <h3 className="text-xl font-extrabold text-white leading-tight ">
              Tours Personalizados
            </h3>

            <p className="text-gray-400 text-sm">
              Tu mejor opción para descubrir el Valle del Mantaro. Vive la
              auténtica experiencia andina.
            </p>

            {/* Insignias de Acreditación */}
            <div className="flex gap-4 mt-4 pt-4 border-t border-gray-700/50">
              <img
                src={safe}
                alt="Safe Travel Stamp"
                width={100}
                className="opacity-80"
              />
              <img
                src={peru}
                alt="Marca Perú Oficial"
                width={100}
                className="opacity-80"
              />
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-5 text-white uppercase tracking-wider border-b-2 border-[#ff5522]/50 pb-2 inline-block">
              Enlaces rápidos
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/" className={HOVER_CLASS}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/paquetes" className={HOVER_CLASS}>
                  Paquetes
                </Link>
              </li>
              <li>
                <Link to="/tours" className={HOVER_CLASS}>
                  Tours Diarios
                </Link>
              </li>
              <li>
                <Link to="/recomendaciones" className={HOVER_CLASS}>
                  Consejos de Viaje
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Información y Legales */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-5 text-white uppercase tracking-wider border-b-2 border-[#ff5522]/50 pb-2 inline-block">
              Información Legal
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/nosotros" className={HOVER_CLASS}>
                  Nuestra Agencia
                </Link>
              </li>
              <li>
                <Link to="/contacto" className={HOVER_CLASS}>
                  Contáctanos
                </Link>
              </li>
              <li className="pt-2 border-t border-gray-700/50">
                <a href="#" className={HOVER_CLASS}>
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className={HOVER_CLASS}>
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto, Redes y Pagos */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-5 text-white uppercase tracking-wider border-b-2 border-[#ff5522]/50 pb-2 inline-block">
              Contáctanos
            </h4>

            <ul className="space-y-3 text-gray-400 text-base mb-8">
              <li className="flex items-center justify-center md:justify-start">
                <FaMapMarkerAlt className={`mr-3 ${ACCENT_COLOR}`} size={16} />{" "}
                Av. Principal 123, Huancayo
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaPhone className={`mr-3 ${ACCENT_COLOR}`} size={16} />{" "}
                <a href="tel:+51963852741" className={HOVER_CLASS}>
                  +51 963 852 741
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaEnvelope className={`mr-3 ${ACCENT_COLOR}`} size={16} />{" "}
                <a
                  href="mailto:info@toursPersonalizados.com"
                  className={HOVER_CLASS}
                >
                  info@toursPersonalizados.com
                </a>
              </li>
            </ul>

            {/* Redes sociales */}
            <h4 className="text-lg font-semibold mb-3 text-white">
              Síguenos en
            </h4>
            <div className="flex justify-center md:justify-start gap-4 mb-8">
              <a
                href="https://www.facebook.com/profile.php?id=61550193575077"
                aria-label="Facebook"
                className={`text-[#1877F2] ${HOVER_CLASS}`}
              >
                <FaFacebookF size={28} />
              </a>
              <a
                href="https://www.tiktok.com/@ricardo_perez_l"
                aria-label="TikTok"
                className={`text-white ${HOVER_CLASS}`}
              >
                <FaTiktok size={28} />
              </a>
              <a
                href="https://www.youtube.com/@richyperez7505/featured"
                aria-label="YouTube"
                className={`text-[#FF0000] ${HOVER_CLASS}`}
              >
                <FaYoutube size={28} />
              </a>
              <a
                href="https://www.instagram.com/ricardoivanperezlaureano/"
                aria-label="Instagram"
                className={`text-[#E4405F] ${HOVER_CLASS}`}
              >
                <FaInstagram size={28} />
              </a>
            </div>

            {/* Canales de pago */}
            <h4 className="text-lg font-semibold mb-3 text-white">Aceptamos</h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                alt="Logo Visa"
                className="h-8 w-auto bg-white p-1 rounded-sm shadow-lg"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                alt="Logo MasterCard"
                className="h-8 w-auto bg-white p-1 rounded-sm shadow-lg"
              />
              <img
                src="https://images.seeklogo.com/logo-png/50/1/yape-logo-png_seeklogo-504685.png"
                alt="Logo Yape"
                className="h-8 w-auto bg-white p-1 rounded-sm shadow-lg"
              />
              <img
                src="https://images.seeklogo.com/logo-png/38/1/plin-logo-png_seeklogo-386806.png"
                alt="Logo Plin"
                className="h-8 w-auto bg-white p-1 rounded-sm shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* -------------------- 🔹 Derechos reservados -------------------- */}
        <div className="mt-12 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
          <p>
            &copy; {currentYear}
            <span className="text-primary"> Tours Personalizados</span> .
            Todos los derechos reservados.
            <span className="block md:inline-block md:ml-4 mt-2 md:mt-0">
              {" "}
              | Diseñado por Luis E Bautista Coz 914067799.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
