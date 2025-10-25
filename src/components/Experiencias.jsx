import { useEffect } from "react";
import { motion } from "framer-motion";

const Experiencias = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-4xl font-extrabold mb-16 text-gray-800"
        >
          🌍 Nuestras Experiencias en Redes Sociales
        </motion.h2>

        {/* 🔶 Contenedor general con Facebook y TikTok */}
        <div className="grid lg:grid-cols-2 gap-10 place-items-center">
          {/* 🟦 FACEBOOK */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-2xl font-semibold text-gray-700 text-center mb-6">
              Síguenos en{" "}
              <span className="text-primary font-bold">Facebook</span>
            </h3>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-[400px] h-[500px] hover:shadow-2xl transition">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmunhuancayo&tabs=timeline&width=400&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1216215169295052"
                title="Facebook Page"
                className="w-[400px] h-[500px] border-none"
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>

            <motion.a
              href="https://www.facebook.com/profile.php?id=61550193575077"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-full shadow-md transition mt-6"
            >
              Ver más en Facebook →
            </motion.a>
          </motion.div>

          {/* 🎵 TIKTOK */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-2xl font-semibold text-gray-700 text-center mb-6">
              También en <span className="text-primary font-bold">TikTok</span>{" "}
              🎵
            </h3>

            {/* Contenedor con tamaño igual que Facebook */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-[400px] h-[500px] flex items-center justify-center hover:shadow-2xl transition">
              <div className="grid grid-cols-1 gap-2 place-items-center">
                {/* TikTok 1 */}
                <motion.blockquote
                  className="tiktok-embed w-[326px] h-[460px] overflow-hidden"
                  cite="https://www.tiktok.com/@ricardo_perez_l/video/7492521973461961990"
                  data-video-id="7492521973461961990"
                >
                  <section></section>
                </motion.blockquote>
              </div>
            </div>

            <motion.a
              href="https://www.tiktok.com/@ricardo_perez_l"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-full shadow-md transition mt-6"
            >
              Ver más en TikTok →
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experiencias;
