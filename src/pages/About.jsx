import React from "react";
import nosotros from "../assets/nosotros.jpg"
const About = () => {
  return (
    <div className="py-5 mt-[100px] bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Sobre Nosotros</h1>

        <div className="mb-12">
          <img
            src={nosotros}
            alt="Equipo de Tours Personalizados"
            className="w-full h-104 object-cover rounded-lg shadow-lg mb-8"
          />
          <p className="text-lg text-gray-700 mb-6">
            En{" "}
            <span className="font-bold text-primary">Tours Personalizados</span>{" "}
            nos especializamos en crear experiencias turísticas únicas en la
            hermosa región de junin. Con años de experiencia en el sector,
            nuestro equipo de guías locales expertos está comprometido con
            ofrecerte los mejores recorridos y aventuras.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Nuestra misión es conectar a los viajeros con la riqueza natural y
            cultural de huancayo, promoviendo un turismo responsable y
            sostenible que beneficie a las comunidades locales.
          </p>
          <p className="text-lg text-gray-700">
            Desde excursiones de un día hasta paquetes completos de varios días,
            nos adaptamos a tus necesidades para garantizarte una experiencia
            inolvidable en el corazón del valle del mantaro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center bg-gray-100 rounded-2xl">
            <div className="bg-secondary mt-2 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl">
              🎯
            </div>
            <h3 className="text-xl font-bold mb-2">Misión</h3>
            <p className="text-gray-700">
              Ofrecer experiencias turísticas auténticas y memorables que
              respeten el medio ambiente y enriquezcan a las comunidades
              locales.
            </p>
          </div>

          <div className="text-center bg-gray-100 rounded-2xl">
            <div className="bg-secondary text-white rounded-full w-16 h-16 flex items-center justify-center mt-2 mx-auto mb-4 text-2xl">
              👁️
            </div>
            <h3 className="text-xl font-bold mb-2">Visión</h3>
            <p className="text-gray-700">
              Ser la empresa líder en turismo sostenible en Oxapampa, reconocida
              por nuestra calidad, innovación y compromiso social.
            </p>
          </div>

          <div className="text-center bg-gray-100 rounded-2xl">
            <div className="bg-secondary text-white rounded-full w-16 h-16 flex items-center justify-center mt-2 mx-auto mb-4 text-2xl">
              💎
            </div>
            <h3 className="text-xl font-bold mb-2">Valores</h3>
            <p className="text-gray-700">
              Sostenibilidad, calidad, autenticidad, respeto por la cultura
              local y pasión por el servicio al cliente.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">
            ¿Por qué elegirnos?
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <span className="text-secondary mr-2">✓</span>
              <span>Guías locales certificados y experimentados</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-2">✓</span>
              <span>Compromiso con el turismo sostenible</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-2">✓</span>
              <span>Experiencias personalizadas según tus intereses</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-2">✓</span>
              <span>Atención al cliente 24/7 durante tu viaje</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-2">✓</span>
              <span>Precios competitivos y transparentes</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-2">✓</span>
              <span>Convenios con los mejores proveedores locales</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
