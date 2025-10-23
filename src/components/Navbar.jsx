import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Map,
  Package,
  Phone,
  Menu,
  X,
  MessageCircle,
} from "lucide-react";
import WhatsAppFloatWithNotification from "./WhatsAppFloatWithNotification";
import logo from "../assets/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Paquetes", path: "/paquetes" },
    { name: "Tours", path: "/tours" },
    { name: "Traslados", path: "/transporte" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Contacto", path: "/contacto" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path) =>
    location.pathname === path ||
    (path !== "/" && location.pathname.startsWith(path));

  // Detectar scroll para el efecto blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR SUPERIOR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 h-auto transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-white/70 shadow-md"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-25">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0" onClick={closeMenu}>
            <img src={logo} alt="" width={170} />
              
            </Link>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.path}
                    className={`pb-1 transition-colors duration-200 text-base font-medium ${
                      isActive(link.path)
                        ? "text-primary font-semibold"
                        : "text-gray-700 hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {/* Línea inferior animada */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ${
                      isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </div>
              ))}
              <WhatsAppFloatWithNotification />
            </div>

            {/* Botón menú móvil */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu overlay + dropdown */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Fondo oscuro */}
              <motion.div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
              />

              {/* Panel del menú */}
              <motion.div
                className="fixed top-16 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg md:hidden z-50"
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <motion.div
                  className="px-4 py-4 space-y-2"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    visible: { transition: { staggerChildren: 0.08 } },
                    hidden: {
                      transition: {
                        staggerChildren: 0.05,
                        staggerDirection: -1,
                      },
                    },
                  }}
                >
                  {navLinks.map((link) => (
                    <motion.div
                      key={link.name}
                      variants={{
                        hidden: { opacity: 0, y: -10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <Link
                        to={link.path}
                        onClick={closeMenu}
                        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                          isActive(link.path)
                            ? "text-primary font-semibold"
                            : "text-gray-700 hover:text-primary"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* BARRA INFERIOR MÓVIL */}
      <div
        className={`md:hidden fixed bottom-0 left-0 w-full border-t z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/70 backdrop-blur-md shadow-md"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="flex justify-around items-center h-14 text-gray-700">
          <Link
            to="/"
            className={`flex flex-col items-center text-sm ${
              isActive("/") ? "text-primary" : "hover:text-primary"
            }`}
          >
            <Home size={20} />
            <span className="text-[11px]">Inicio</span>
          </Link>

          <Link
            to="/tours"
            className={`flex flex-col items-center text-sm ${
              isActive("/tours") ? "text-primary" : "hover:text-primary"
            }`}
          >
            <Map size={20} />
            <span className="text-[11px]">Tours</span>
          </Link>

          <a
            href="https://wa.me/51914067799"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-sm text-green-600 hover:text-green-700"
          >
            <MessageCircle size={22} />
            <span className="text-[11px]">WhatsApp</span>
          </a>

          <Link
            to="/paquetes"
            className={`flex flex-col items-center text-sm ${
              isActive("/paquetes") ? "text-primary" : "hover:text-primary"
            }`}
          >
            <Package size={20} />
            <span className="text-[11px]">Paquetes</span>
          </Link>

          <Link
            to="/contacto"
            className={`flex flex-col items-center text-sm ${
              isActive("/contacto") ? "text-primary" : "hover:text-primary"
            }`}
          >
            <Phone size={20} />
            <span className="text-[11px]">Contacto</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
