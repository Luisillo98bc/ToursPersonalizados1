import React from "react";
import { Link } from "react-router-dom";
import safe from "../assets/safetravel.png"
import peru from "../assets/marca_peru.png"
import logo from "../assets/logo.png"



const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-1">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center justify-center text-center">
            <img src={logo} alt="" width={120} />
            <h3 className="text-xl font-bold mb-4">Tours Personalizados</h3>
            <p className="text-gray-300">
              Tu mejor opción para descubrir el valle del mantaro
            </p>
            <div className="flex gap-2">
              <img src={safe} alt="" width={100} />
              <img src={peru} alt="" width={100} />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <h4 className="text-lg font-bold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/paquetes"
                  className="text-gray-300 hover:text-primary"
                >
                  Paquetes
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-gray-300 hover:text-primary">
                  Tours
                </Link>
              </li>
              <li>
                <Link
                  to="/recomendaciones"
                  className="text-gray-300 hover:text-primary"
                >
                  Recomendaciones
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <h4 className="text-lg font-bold mb-4">Más información</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/nosotros"
                  className="text-gray-300 hover:text-primary"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="text-gray-300 hover:text-primary"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary">
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Av. Principal 123, Huancayo</li>
              <li>+51 963 852 741</li>
              <li>info@ToursPersonalizados.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
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
