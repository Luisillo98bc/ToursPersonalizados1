import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTiktok, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ ¡Mensaje enviado! Te contactaremos pronto.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="pb-16 pt-4 mt-[100px] bg-gradient-to-b from-gray-50 via-white to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
            Contáctanos
          </h1>
          <p className="text-lg text-gray-600">
            Estamos aquí para ayudarte a planificar tu próxima aventura ✈️
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 bg-white shadow-2xl rounded-2xl p-8 border border-gray-100"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
               Envíanos un mensaje
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    placeholder="tucorreo@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    placeholder="+51 999 999 999"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Asunto
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="consulta">Consulta general</option>
                    <option value="reserva">Reserva de tour</option>
                    <option value="personalizado">Tour personalizado</option>
                    <option value="grupo">Viaje en grupo</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Enviar mensaje
              </button>
            </form>
          </motion.div>

          {/* Información */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-2xl rounded-2xl p-8 border border-gray-100"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              📍 Información de contacto
            </h2>

            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg">Dirección</h3>
                <p>Av. Principal 123, Huancayo, Junín, Perú</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Teléfonos</h3>
                <p>+51 963 852 741</p>
                <p>+51 987 654 321</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Correo electrónico</h3>
                <p>info@ToursPersonalizados.com</p>
                <p>reservas@ToursPersonalizados.com</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Horario de atención</h3>
                <p>Lunes a Viernes: 8:00 am - 6:00 pm</p>
                <p>Sábados y Domingos: 7:00 am - 7:00 pm</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="font-semibold text-lg mb-4">
                Síguenos en redes sociales
              </h3>
              <div className="flex space-x-5">
                <a
                  href="https://www.facebook.com/profile.php?id=61550193575077"
                  className="text-[#1877F2] hover:scale-110 transition-transform"
                >
                  <FaFacebookF size={28} />
                </a>
                <a
                  href="https://www.tiktok.com/@ricardo_perez_l"
                  className="text-black hover:scale-110 transition-transform"
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
