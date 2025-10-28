import React from 'react'
import { Link } from "react-router-dom";

const Bienvenida = () => {
  return (
    <section className="bg-gray-50 py-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-7xl mx-auto px-4">
        {/* Imagen con botón de reproducción */}
        <div className="relative w-full md:w-1/2 aspect-video rounded-3xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full "
            src="https://www.youtube.com/embed/rraGZt1zTOw?rel=0&showinfo=0"
            title="Paisajes del Valle del Mantaro | Drone 4K"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Texto descriptivo */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <p className="text-[#ff5522] font-[Reey_Regular] text-2xl">
            Tours Personalizados
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Bienvenidos al{" "}
            <span className="text-[#ff5522]">Valle del Mantaro</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Es un placer darles la bienvenida al majestuoso Valle del Mantaro,
            un destino que combina tradición, naturaleza y hospitalidad andina.
            Nuestra misión es ofrecerles una experiencia auténtica y memorable,
            ya sea que viajen en pareja, con amigos o en familia —¡incluso junto
            a sus mascotas!
          </p>
          <p className="text-gray-600 leading-relaxed">
            Con base en el corazón del Valle del Mantaro, formamos parte del
            corredor turístico más representativo de la sierra central del Perú.
            Este territorio, rodeado de montañas, campos fértiles y un legado
            cultural vibrante, invita a cada visitante a descubrir la esencia
            viva de nuestros pueblos y la calidez de su gente.
          </p>

          <Link
            to="/nosotros"
            className="bg-[#ff5522] hover:bg-secondary hover:border-2 border-primary text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-200"
          >
            Más sobre nosotros
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Bienvenida
