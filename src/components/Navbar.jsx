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
import logo from "../assets/logo.png";

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

  // Efecto blur al hacer scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR SUPERIOR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-white/80 shadow-md"
            : "bg-white/95 backdrop-blur-sm"
        }`}
        style={{ height: "80px" }} // altura definida
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-19 w-auto object-contain" />
          </Link>

          {/* Menu Desktop */}
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
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Menú Móvil */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
              />

              <motion.div
                className="fixed top-[80px] left-0 w-full bg-white/95 backdrop-blur-md shadow-lg md:hidden z-50"
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="px-4 py-4 space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
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
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* BARRA INFERIOR MÓVIL */}
      <motion.div
        className={`md:hidden fixed bottom-0 left-0 w-full border-t z-40 ${
          scrolled
            ? "bg-white/70 backdrop-blur-md shadow-lg"
            : "bg-white/90 backdrop-blur-sm shadow-md"
        }`}
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          borderTopLeftRadius: "1rem",
          borderTopRightRadius: "1rem",
        }}
      >
        <div className="flex justify-around items-center h-16 text-gray-700">
          {[
            { to: "/", icon: Home, label: "Inicio" },
            { to: "/tours", icon: Map, label: "Tours" },
            {
              href: "https://wa.me/51914067799",
              icon: MessageCircle,
              label: "WhatsApp",
              external: true,
            },
            { to: "/paquetes", icon: Package, label: "Paquetes" },
            { to: "/contacto", icon: Phone, label: "Contacto" },
          ].map((item, i) => {
            const isWhatsapp = item.label === "WhatsApp";
            const active = isActive(item.to ?? "");

            const Icon = item.icon;

            const linkProps = item.external
              ? {
                  href: item.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : { to: item.to };

            return (
              <motion.div
                key={i}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.external ? (
                  <a
                    {...linkProps}
                    className={`flex flex-col items-center text-sm ${
                      isWhatsapp
                        ? "text-green-600 hover:text-green-700"
                        : active
                        ? "text-primary"
                        : "hover:text-primary"
                    }`}
                  >
                    <motion.div
                      animate={active ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 0.4 }}
                      className={`p-2 rounded-full ${
                        active ? "bg-primary/10 shadow-md" : ""
                      }`}
                    >
                      <Icon size={22} />
                    </motion.div>
                    <span className="text-[11px] font-medium">
                      {item.label}
                    </span>
                  </a>
                ) : (
                  <Link
                    {...linkProps}
                    className={`flex flex-col items-center text-sm ${
                      active ? "text-primary" : "hover:text-primary"
                    }`}
                  >
                    <motion.div
                      animate={active ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 0.4 }}
                      className={`p-2 rounded-full ${
                        active ? "bg-primary/10 shadow-md" : ""
                      }`}
                    >
                      <Icon size={22} />
                    </motion.div>
                    <span className="text-[11px] font-medium">
                      {item.label}
                    </span>
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
