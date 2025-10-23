import React, { useState } from "react";
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
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert("¡Mensaje enviado! Te contactaremos pronto.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="py-5 mt-[100px] bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Contáctanos</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Estamos aquí para ayudarte a planificar tu viaje perfecto
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Asunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="consulta">Consulta general</option>
                    <option value="reserva">Reserva de tour/paquete</option>
                    <option value="personalizado">Tour personalizado</option>
                    <option value="grupo">Viaje en grupo</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary hover: border-2 hover:border-black text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-secondary text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                  📍
                </div>
                <div>
                  <h3 className="font-bold text-lg">Dirección</h3>
                  <p className="text-gray-700">
                    Av. Principal 123, Huancayo, Junin, Perú
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-secondary text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                  📞
                </div>
                <div>
                  <h3 className="font-bold text-lg">Teléfono</h3>
                  <p className="text-gray-700">+51 963 852 741</p>
                  <p className="text-gray-700">+51 987 654 321</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-secondary text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                  ✉️
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-gray-700">info@ToursPersonalizados.com</p>
                  <p className="text-gray-700">
                    reservas@ToursPersonalizados.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-secondary text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                  🕒
                </div>
                <div>
                  <h3 className="font-bold text-lg">Horario de atención</h3>
                  <p className="text-gray-700">
                    Lunes a Viernes: 8:00 am - 6:00 pm
                  </p>
                  <p className="text-gray-700">
                    Sábados y domingos: 07:00 am - 07:00 pm
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-bold text-lg mb-4">
                Síguenos en redes sociales
              </h3>
              <div className="flex space-x-4">
                <a
                                    href="https://www.facebook.com/profile.php?id=61550193575077"
                                    className="text-[#1877F2] hover:scale-110 transition-transform"
                                  >
                                    <FaFacebookF size={28} />
                                  </a>
                                  <a
                                    href="https://www.tiktok.com/@ricardo_perez_l"
                                    className="text-[#000000] hover:scale-110 transition-transform"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
