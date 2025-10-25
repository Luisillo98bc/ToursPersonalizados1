import React from "react";
import nosotros from "../assets/nosotros.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="mt-[100px] bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-12 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Conoce más sobre{" "}
            <span className="text-[var(--color-primary)]">
              Tours Personalizados
            </span>
          </h1>
          <p className="text-lg text-gray-700">
            Somos una agencia comprometida con ofrecer experiencias auténticas
            en la hermosa región de Junín. Nuestro equipo de guías locales te
            acompaña en cada aventura para mostrarte lo mejor del{" "}
            <strong>Valle del Mantaro</strong> de forma responsable, sostenible
            y segura.
          </p>
          <Link
            to="/paquetes"
            className="bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white px-6 py-3 rounded-full font-medium shadow-md transition-all"
          >
            Descubre nuestros paquetes
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <img
            src={nosotros}
            alt="Equipo de Tours Personalizados"
            className="rounded-3xl shadow-2xl w-full object-cover h-[420px]"
          />
        </motion.div>
      </div>

      {/* Misión, Visión, Valores */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Nuestra Esencia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Misión",
                icon: "🎯",
                text: "Ofrecer experiencias turísticas auténticas y memorables que respeten el medio ambiente y beneficien a las comunidades locales.",
              },
              {
                title: "Visión",
                icon: "👁️",
                text: "Ser la empresa líder en turismo sostenible en Junín, reconocida por la innovación, la calidad y el compromiso social.",
              },
              {
                title: "Valores",
                icon: "💎",
                text: "Sostenibilidad, autenticidad, respeto por la cultura local y pasión por brindar el mejor servicio.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-b from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-[0_8px_20px_rgba(255,85,34,0.2)] transition-all"
              >
                <div className="w-16 h-16 flex items-center justify-center text-3xl rounded-full mx-auto mb-4 bg-[var(--color-secondary)] text-white shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Por qué elegirnos */}
      <div className="bg-[var(--color-secondary)] text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              "Guías locales certificados y experimentados",
              "Compromiso con el turismo sostenible",
              "Experiencias personalizadas según tus intereses",
              "Atención al cliente 24/7 durante tu viaje",
              "Precios competitivos y transparentes",
              "Convenios con los mejores proveedores locales",
            ].map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/20 transition-all"
              >
                <span className="text-[var(--color-primary)] text-xl font-bold mr-3">
                  ✓
                </span>
                <p>{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
