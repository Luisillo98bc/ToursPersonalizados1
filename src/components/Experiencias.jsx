import { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png"

const Experiencias = () => {
  // ✅ Cargar script de TikTok solo una vez
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // ✨ Variantes para animación (Framer Motion)
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-5 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* 🌍 Título principal */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-16 text-gray-800"
        >
          🌍 Nuestras Experiencias compartidas en redes sociales
        </motion.h2>

        {/* 🟦 FACEBOOK */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-6 mb-10"
        >
          <h3 className="text-3xl font-semibold text-gray-700 text-center mb-12">
            siguenos en Facebook como{" "}
            <span className="text-primary">Tours Personalizados</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8 place-items-center">
            {/* Facebook Embed */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition w-full max-w-[400px]">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsmvoficial&tabs=timeline&width=400&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
                title="Facebook Page SMV"
                className="w-full h-[500px] border-none"
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>

            {/* Card Facebook */}
            <motion.a
              href="https://www.facebook.com/profile.php?id=61550193575077"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl w-full max-w-[400px]"
            >
              <img
                src={logo}
                alt="Publicación destacada en Facebook"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 bg-amber-400 "
              />
              <div className="p-5">
                <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary transition">
                  Ver más en Facebook →
                </h4>
                <p className="text-gray-600 text-sm">
                  Descubre nuestras últimas aventuras y publicaciones.
                </p>
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* 🎵 TIKTOK */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-semibold text-gray-700 mb-10">
            siguenos en <span className="text-primary">TikTok</span> y comparte
            nuestras experiencias
          </h3>

          <div className="grid md:grid-cols-3 gap-6 place-items-center">
            {/* TikTok 1 */}
            <motion.blockquote
              className="tiktok-embed w-full max-w-[326px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
              cite="https://www.tiktok.com/@ricardo_perez_l/video/7492521973461961990"
              data-video-id="7492521973461961990"
              whileHover={{ scale: 1.03 }}
            >
              <section></section>
            </motion.blockquote>

            {/* TikTok 2 */}
            <motion.blockquote
              className="tiktok-embed w-full max-w-[326px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
              cite="https://www.tiktok.com/@ricardo_perez_l/video/7556759837426666759"
              data-video-id="7556759837426666759"
              whileHover={{ scale: 1.03 }}
            >
              <section></section>
            </motion.blockquote>

            {/* Card TikTok perfil */}
            <motion.a
              href="https://www.tiktok.com/@ricardo_perez_l"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl w-full max-w-[350px] cursor-pointer"
            >
              <img
                src={logo}
                alt="Video destacado en TikTok"
                className="w-full h-64 object-cover group-hover:scale-105 bg-amber-400 transition-transform duration-500"
              />
              <div className="p-5">
                <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary transition">
                  Ver más en TikTok →
                </h4>
                <p className="text-gray-600">
                  Mira nuestros momentos más divertidos y virales.
                </p>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experiencias;

