import React from "react";

const Recommendations = () => {
  const recommendations = [
    {
      title: "Mejor época para visitar",
      description:
        "La mejor época para visitar el valle del mantaro es durante la temporada seca, de abril a octubre, cuando hay menos lluvias y el clima es más favorable para actividades al aire libre.",
      icon: "☀️",
    },
    {
      title: "Qué llevar",
      description:
        "Ropa cómoda, impermeable, zapatos para caminar, repelente de insectos, protector solar, cámara fotográfica y efectivo para compras en lugares locales.",
      icon: "🎒",
    },
    {
      title: "Transporte",
      description:
        "Se recomienda llegar en bus desde Lima (aproximadamente 7 horas) o volar a la ciudad de jauja y luego tomar transporte terrestre a huancayo (1 horas).",
      icon: "🚌",
    },
    {
      title: "Alojamiento",
      description:
        "Huancayo ofrece diversas opciones de alojamiento, desde hostales económicos hasta lodges ecológicos y hoteles boutique con encanto colonial.",
      icon: "🏨",
    },
    {
      title: "Gastronomía",
      description:
        "No te pierdas los platos típicos como el cuy frito, la trucha fresca, los productos lácteos locales.",
      icon: "🍽️",
    },
    {
      title: "Actividades recomendadas",
      description:
        "visita a todos los lugares turisticos arqueologica y de artesanias y degustación de productos locales.",
      icon: "🚶‍♂️",
    },
  ];

  return (
    <div className="py-5 mt-[100px] bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">
          Recomendaciones para tu Viaje
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Consejos útiles para que disfrutes al máximo tu experiencia en el
          valle del mantaro
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{rec.icon}</div>
              <h3 className="text-xl font-bold mb-3">{rec.title}</h3>
              <p className="text-gray-700">{rec.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-secondary text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-center">
            ¿Necesitas más información?
          </h2>
          <p className="text-center mb-6">
            Nuestro equipo está listo para ayudarte a planificar el viaje
            perfecto a Oxapampa.
          </p>
          <div className="text-center">
            <a
              href="/contacto"
              className="bg-primary hover:border-black hover:border-2 text-white font-bold py-3 px-6 rounded-lg inline-block"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
