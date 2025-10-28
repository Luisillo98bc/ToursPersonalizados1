import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { tours } from "../data/data";
import { Star, MapPin, Clock, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Tours = () => {
  // 1. Estados iniciales y DURACIONES
  // Extrae las duraciones únicas de los tours para usarlas como opciones de filtro.
  const durations = ["Todas", ...new Set(tours.map((tour) => tour.duration))];

  // Cambiamos 'selectedCategory' por 'selectedDuration'
  const [selectedDuration, setSelectedDuration] = useState("Todas");
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Estados para Debouncing
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  // ⏳ 2. useEffect para DEBOUNCING del searchTerm (300ms) - Sin cambios
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  // 🔍 3. useEffect para GENERAR SUGERENCIAS (basado en el término con debounce) - Sin cambios
  useEffect(() => {
    if (debouncedSearchTerm.trim() === "") {
      setSuggestions([]);
      return;
    }

    const lowerTerm = debouncedSearchTerm.toLowerCase();

    const allTitles = tours.flatMap((tour) => [
      tour.title,
      ...(tour.itinerary?.map((i) => i.title) || []),
    ]);

    const filtered = allTitles
      .filter((title) => title.toLowerCase().includes(lowerTerm))
      .slice(0, 6);

    setSuggestions(filtered);
  }, [debouncedSearchTerm]);

  // 🔎 4. Filtrado principal (Ajustado para usar Duración)
  const filteredTours = tours.filter((tour) => {
    // 💡 FILTRO POR DURACIÓN
    const matchesDuration =
      selectedDuration === "Todas" || tour.duration === selectedDuration;

    // FILTRO POR BÚSQUEDA
    const matchesSearch =
      tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.itinerary?.some((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return matchesDuration && matchesSearch;
  });

  // --- Renderizado del Componente ---
  return (
    <section className="pt-5 pb-16 mt-[100px] bg-gradient-to-b from-gray-50 to-white min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Encabezado - Sin cambios */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-3 text-black drop-shadow-sm">
          Nuestros Tours
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Explora los mejores destinos y actividades en el Valle del Mantaro y
          sus alrededores con nuestros tours personalizados.
        </p>

        {/* Filtros y buscador */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-10 relative">
          {/* ⏱️ FILTROS POR DURACIÓN */}
          <div className="flex flex-wrap justify-center gap-2">
            {durations.map((dur) => (
              <button
                key={dur}
                onClick={() => setSelectedDuration(dur)} // Usamos setSelectedDuration
                className={`px-3 py-1.5 rounded-full border text-sm font-medium transition-all duration-300
                  ${
                    selectedDuration === dur // Compara con selectedDuration
                      ? "bg-[var(--color-primary)] text-white shadow-md scale-105"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {dur}
              </button>
            ))}
          </div>

          {/* Buscador con autocompletado - Sin cambios */}
          <div className="relative w-full md:w-[480px] lg:w-[600px]">
            <Search className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar itinerario o destino..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none text-gray-700"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            />

            {/* Lista de sugerencias */}
            {showSuggestions && suggestions.length > 0 && (
              <ul className="absolute z-20 bg-white border border-gray-200 rounded-xl shadow-lg mt-1 w-full max-h-60 overflow-y-auto animate-fadeIn">
                {suggestions.map((sug, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setSearchTerm(sug);
                      setShowSuggestions(false);
                    }}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-gray-700"
                  >
                    {sug}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Cards con Animación */}
        <AnimatePresence>
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {filteredTours.length > 0 ? (
              filteredTours.map((tour) => (
                <motion.div
                  key={tour.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden 
                  transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(255,85,34,0.3)]"
                >
                  {/* Imagen */}
                  <div className="relative overflow-hidden">
                    <img
                      src={tour.image}
                      alt={`Imagen de ${tour.title}`}
                      className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {/* El tag de la tarjeta puede ser la duración */}
                    <span className="absolute top-3 left-3 bg-[var(--color-primary)] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                      {tour.duration}
                    </span>
                  </div>

                  {/* Contenido - Sin cambios */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin className="w-4 h-4 mr-1 text-[var(--color-secondary)]" />
                      <span>{tour.location || "Valle del Mantaro"}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-800 leading-snug group-hover:text-[var(--color-primary)] transition-colors duration-300 line-clamp-2">
                      {tour.title}
                    </h3>

                    <div className="flex items-center text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          fill="currentColor"
                          stroke="none"
                          className="drop-shadow-[0_0_3px_rgba(255,215,0,0.7)]"
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-500">
                        (5.0 reseñas)
                      </span>
                    </div>

                    <div className="flex justify-between items-center border-t border-gray-100 pt-3">
                      <div className="flex items-center text-gray-600 text-sm">
                        <Clock className="w-4 h-4 mr-1 text-[var(--color-secondary)]" />
                        <span>{tour.duration}</span>
                      </div>
                      <span className="text-[var(--color-primary)] font-bold text-lg">
                        Desde S/{tour.price}
                      </span>
                    </div>

                    <Link
                      to={`/tours/${tour.id}`}
                      className="block w-full mt-4 bg-[var(--color-secondary)] hover:bg-[var(--color-primary)] 
                      text-white text-center font-medium py-3 rounded-xl transition-all duration-300 
                      shadow-md hover:shadow-[0_4px_15px_rgba(38,84,124,0.4)]"
                    >
                      Ver Detalles
                    </Link>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500 text-lg mt-10">
                No se encontraron tours que coincidan con tu búsqueda.
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Tours;
