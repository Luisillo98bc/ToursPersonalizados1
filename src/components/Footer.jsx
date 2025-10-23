import React from "react";
import { Link } from "react-router-dom";

import { FaTiktok, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import safe from "../assets/safetravel.png";
import peru from "../assets/marca_peru.png";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0f1a3c] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* 🔹 Secciones principales */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Columna 1 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <img src={logo} alt="logo" width={130} className="mb-2" />
            <h3 className="text-xl font-bold text-white">
              Tours Personalizados
            </h3>
            <p className="text-gray-300 text-sm">
              Tu mejor opción para descubrir el Valle del Mantaro.
            </p>
            <div className="flex gap-3 mt-4">
              <img src={safe} alt="safe travel" width={80} />
              <img src={peru} alt="marca peru" width={80} />
            </div>
          </div>

          {/* Columna 2 */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-4 text-white">
              Enlaces rápidos
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-[#ff5522]">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/paquetes" className="hover:text-[#ff5522]">
                  Paquetes
                </Link>
              </li>
              <li>
                <Link to="/tours" className="hover:text-[#ff5522]">
                  Tours
                </Link>
              </li>
              <li>
                <Link to="/recomendaciones" className="hover:text-[#ff5522]">
                  Recomendaciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3 */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-4 text-white">
              Más información
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/nosotros" className="hover:text-[#ff5522]">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-[#ff5522]">
                  Contacto
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-[#ff5522]">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ff5522]">
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4 - Contacto */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-4 text-white">Contacto</h4>
            <ul className="space-y-2 text-gray-300 text-md mb-6">
              <li>📍 Av. Principal 123, Huancayo</li>
              <li>📞 +51 963 852 741</li>
              <li>📧 info@toursPersonalizados.com</li>
            </ul>

            {/* 🔸 Redes sociales y métodos de pago debajo */}
            <div className="flex flex-col items-center md:items-start space-y-6">
              {/* Redes sociales */}
              <div>
                <h4 className="text-lg font-semibold mb-3 text-white text-center md:text-left">
                  Síguenos
                </h4>
                <div className="flex justify-center md:justify-start gap-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=61550193575077"
                    className="text-[#1877F2] hover:scale-110 transition-transform"
                  >
                    <FaFacebookF size={28} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@ricardo_perez_l"
                    className="text-[#f3f3f3] hover:scale-110 transition-transform"
                  >
                    <FaTiktok size={28} />
                  </a>
                  <a
                    href="https://www.youtube.com/@richyperez7505/featured"
                    className="text-[#FF0000] hover:scale-110 transition-transform"
                  >
                    <FaYoutube size={28} />
                  </a>
                  <a
                    href="https://www.instagram.com/ricardoivanperezlaureano/"
                    className="text-[#E4405F] hover:scale-110 transition-transform"
                  >
                    <FaInstagram size={28} />
                  </a>
                </div>
              </div>

              {/* Métodos de pago */}
              <div className="text-center md:text-left">
                <h4 className="text-lg font-semibold mb-3 text-white">
                  Canales de pago
                </h4>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                    alt="Visa"
                    className="h-10 w-auto bg-white p-1 rounded-md"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                    alt="MasterCard"
                    className="h-10 w-auto bg-white p-1 rounded-md"
                  />
                  <img
                    src="https://images.seeklogo.com/logo-png/50/1/yape-logo-png_seeklogo-504685.png"
                    alt="Yape"
                    className="h-10 w-auto bg-white p-1 rounded-md"
                  />
                  <img
                    src="https://images.seeklogo.com/logo-png/38/1/plin-logo-png_seeklogo-386806.png"
                    alt="Plin"
                    className="h-10 w-auto bg-white p-1 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 Derechos reservados */}
        <div className="mt-8 text-center text-gray-400 text-md border-t border-gray-700 pt-4">
          <p>
            &copy; {new Date().getFullYear()} Tours Personalizados. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
