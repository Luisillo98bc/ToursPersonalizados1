import nevado from "../assets/nevado.jpg"
import cerrito from "../assets/cerrito.jpg"
import constitucion from "../assets/constitucion.jpg"
import identidad1 from "../assets/identidad1.jpg"
import sombreros from "../assets/sombreros2.jpg"
import torres from "../assets/torre torre.jpg"
import huancayo from "../assets/Huancayo.jpeg"
import shapis from "../assets/Shapis.jpg";
import arwaturo from "../assets/arwaturo.jpg";
import ñawinpuquio from "../assets/ñahuimpuquio.jpg";
import canicruz from "../assets/canicruz.jpg";
import warivilca from "../assets/warivilca1.jpg";
import arqueologico from "../assets/arqueologico.jpg";
import artesanomates from "../assets/artesano-de-mates.jpg";
import portadaarte from "../assets/portada artesania.jpg";
import parque from "../assets/parque cochas.jpg";
import hualhuas from "../assets/hualwas.jpg";
import ingenio from "../assets/ingenio1.jpg";
import ocopa from "../assets/ocopa.jpg";
import virgen from "../assets/virgen.jpg";
import sanjero from "../assets/jeronimo.JPG";

import bosque from "../assets/bosque.jpg"
import huamanhuata from "../assets/huamanhuata.jpg"

import comida from "../assets/comida.jpg"
import sapalla from "../assets/sapalla.jpg"
import conce from "../assets/conce.jpg"
import neva2 from "../assets/neva2.avif"
import shujtooo from "../assets/shujtoo.jpg"
import mantaro from "../assets/mantaro.jpg"


export const packages = [
  {
    id: 1,
    title: "Tour Nro. 01 -Tour Valle del Mantaro",
    description: "Descubre lo mejor de la ciudad de Huancayo",
    fullDescription:
      "Este paquete completo te permite explorar los principales atractivos de la ciudad de Huancayo y sus alrededores.",
    price: 60,
    duration: "Duración: 8:00 AM a 5:30 PM",
    category: "Cultura y tradicion",
    image: huancayo,
    includes: [
      "Punto de encuentro: centro de Huancayo.",
      "Transporte durante el tour",
      "Guía turístico",
      "fotos a disposición",
    ],
    itinerary: [
      {
        title: "Parque constitucion",
        description:
          "punto de inicio del tour es en la plaza constitucion en el centro de la ciudad de huancayo",
        image: constitucion,
      },
      {
        title: "Orcotuna - La Tierra de los Lechones",
        description:
          "Ubicado en el Valle del Mantaro, Orcotuna es reconocido por su exquisito lechón al horno, símbolo de su tradición gastronómica. Rodeado de hermosos paisajes andinos, este encantador destino combina sabor, cultura y hospitalidad, ofreciendo una experiencia auténtica en el corazón del campo huancaíno.",
        image: cerrito,
      },
      {
        title: "Cañón de shutjo",
        description:
          "El Cañón de Shutjo, situado en el distrito de Canchayllo, provincia de Jauja, es una maravilla natural formada por la erosión del río Tanta. Destaca por sus imponentes paredes rocosas, aguas turquesas y formaciones únicas, siendo un destino ideal para el ecoturismo, la aventura y la fotografía paisajística.",
        image: torres,
      },
      {
        title: "Los Corivinchos ( último pueblo inca en ser conquistado)",
        description:
          "Ubicado en la provincia de Jauja, Los Corivinchos es un histórico poblado andino reconocido como el último bastión inca en ser conquistado por los españoles. Conserva vestigios arqueológicos, tradiciones ancestrales y una profunda identidad cultural que reflejan el legado del Tahuantinsuyo en el corazón del Valle del Mantaro.",
        image: identidad1,
      },
      {
        title: "Puyas de Raimondi – Canchayllo, Jauja",
        description:
          "En las alturas de Canchayllo se encuentra un impresionante bosque de Puyas de Raimondi, la planta más alta de los Andes y símbolo de la biodiversidad peruana. Este paraje ofrece un paisaje majestuoso donde miles de puyas florecen entre montañas y cielos azules, creando un espectáculo natural único.",
        image: sombreros,
      },
      {
        title: "Baños termales de acaya",
        description:
          "Los Baños Termales de Acaya, ubicados en el distrito de Canchaillo, provincia de Jauja, son conocidos por sus aguas cálidas de origen natural, ricas en minerales con propiedades medicinales. Este atractivo turístico ofrece un entorno tranquilo, ideal para relajarse, disfrutar del paisaje andino y renovar energías.",
        image: sombreros,
      },
      {
        title: "Laguna de paca",
        description:
          "La Laguna de Paca, ubicada a pocos minutos de la ciudad de Jauja, es uno de los atractivos naturales más emblemáticos del Valle del Mantaro. Rodeada de verdes colinas y leyendas locales, ofrece paseos en bote, gastronomía típica y una vista panorámica ideal para la relajación y el turismo ecológico.",
        image: sombreros,
      },
    ],
  },
  
  {
    id: 2,
    title: "Tour Nro. 02 - Fe, Historia y Delicias Artesanales",
    description:
      "Ruta que combina devoción, paisajes de laguna, helados artesanales y el histórico Convento de Ocopa.",
    fullDescription:
      "Un recorrido cultural y gastronómico que explora Orcotuna, Jauja y Concepción, destacando el Convento de Santa Rosa de Ocopa y el mirador de Piedra Parada.",
    price: 65,
    duration: "Duración: 8:30 AM a 6:00 PM",
    category: "Cultura y Gastronomía",
    image: virgen,
    includes: [
      "Punto de encuentro: centro de Huancayo.",
      "Transporte durante el tour",
      "Guía turístico",
      "fotos a disposición",
    ],
    itinerary: [
      {
        title: "Gruta de Virgen de Cocharcas - Orcotuna",
        description: "Lugar de devoción y peregrinación en Orcotuna.",
        image: "gruta_cocharcas",
      },
      {
        title: "Laguna de Paca - Jauja",
        description: "Emblemático cuerpo de agua con leyendas locales.",
        image: "laguna_paca_jauja",
      },
      {
        title: "Apata - Helados Artesanales",
        description:
          "Parada para degustar helados elaborados de forma tradicional.",
        image: "helados_artesanales_apata",
      },
      {
        title: "Convento de Santa Rosa de Ocopa - Concepción",
        description:
          "Histórico convento franciscano con biblioteca y museo de la selva.",
        image: "convento_ocopa",
      },
      {
        title: "El Valle Azul - Criadero de truchas - Ingenio",
        description: "Visita a un criadero de truchas en el fértil Valle Azul.",
        image: "criadero_truchas_ingenio",
      },
      {
        title: "Bosque de entrada a Piedra Parada - Huaychulo - Concepción",
        description: "Punto de acceso al área natural de Piedra Parada.",
        image: "bosque_piedra_parada",
      },
      {
        title: "Mirador de Piedra Parada 'Virgen Inmaculada Concepción'",
        description: "Vista panorámica espectacular del valle.",
        image: "mirador_piedra_parada",
      },
    ],
  },
  {
    id: 3,
    title: "Tour Nro. 03 - Tradición y Leyendas del Sur del Valle",
    description:
      "Un viaje por el sur del valle, visitando castillos, miradores, lagunas y capillas históricas.",
    fullDescription:
      "Recorrido enfocado en los atractivos culturales y paisajísticos del sur, incluyendo el Castillo del Temple, la Laguna de Ñahuinpuquio y la Casa de Flor Pucarina.",
    price: 60,
    duration: "Duración: 9:00 AM a 6:00 PM",
    category: "Cultura y Tradición",
    image: "valle_mantaro_tour_03",
    includes: [
      "Punto de encuentro: centro de Huancayo.",
      "Transporte durante el tour",
      "Guía turístico",
      "fotos a disposición",
    ],
    itinerary: [
      {
        title: "El Castillo del Temple - Pilcomayo",
        description: "Estructura peculiar que simula un castillo medieval.",
        image: "castillo_temple",
      },
      {
        title: "Mirador de Chupaca",
        description: "Vista panorámica del paisaje andino y sus pueblos.",
        image: "mirador_chupaca",
      },
      {
        title: "Laguna de Ñahuinpuquio - Ahuac",
        description:
          "Laguna con paisajes tranquilos y actividades recreativas.",
        image: "laguna_nahuinpuquio",
      },
      {
        title: "La Cruz de Canicruz - Chongos Bajo",
        description: "Sitio de interés cultural y religioso.",
        image: "cruz_canicruz",
      },
      {
        title: "La Capilla de Copón - Chongos Bajo",
        description: "Antigua capilla con valor histórico y arquitectónico.",
        image: "capilla_copon",
      },
      {
        title: "Puente Ferroviario - Huancan",
        description: "Estructura ferroviaria con vistas del río Mantaro.",
        image: "puente_ferroviario_huancan",
      },
      {
        title: "Miraflores - Sapallanga",
        description: "Sitio pintoresco del distrito de Sapallanga.",
        image: "miraflores_sapallanga",
      },
      {
        title: "Casa de Flor Pucarina - Pucará",
        description:
          "Homenaje a la célebre cantante folklórica 'Flor Pucarina'.",
        image: "casa_flor_pucarina",
      },
    ],
  },
  {
    id: 4,
    title: "Tour Nro. 04 - Identidad Wanka y Artesanías",
    description:
      "Recorrido por los parques temáticos, la artesanía de Cochas y el sabor del chocolate local.",
    fullDescription:
      "Este tour se centra en la identidad cultural Wanka, visitando talleres de mates burilados, el Parque de la Identidad, Torre Torre y el Cerrito de la Libertad.",
    price: 55,
    duration: "Duración: 9:00 AM a 6:00 PM",
    category: "Artesanía y Cultura",
    image: "valle_mantaro_tour_04",
    includes: [
      "Punto de encuentro: centro de Huancayo.",
      "Transporte durante el tour",
      "Guía turístico",
      "fotos a disposición",
    ],
    itinerary: [
      {
        title: "El Bosque Dorado - Paccha",
        description: "Área natural de interés en Paccha.",
        image: "bosque_dorado_paccha",
      },
      {
        title: "Parque Ecológico de los Pinos - Cochas Chico",
        description: "Espacio natural y recreativo.",
        image: "parque_pinos_cochas",
      },
      {
        title: "Parque de los Mates Burilados - Cochas Chico",
        description:
          "Exhibición y venta de la artesanía tradicional de mates burilados.",
        image: "mates_burilados_cochas",
      },
      {
        title: "Parque de la Identidad Wanka",
        description:
          "Parque temático que representa la cultura y el arte wanka.",
        image: "parque_identidad_wanka",
      },
      {
        title: "Amyra el Tours del Chocolate",
        description:
          "Experiencia de degustación y proceso de elaboración de chocolate artesanal.",
        image: "amyra_tours_chocolate",
      },
      {
        title: "Cerrito de la Libertad",
        description:
          "Mirador de Huancayo con una vista panorámica de la ciudad.",
        image: "cerrito_libertad",
      },
      {
        title: "Complejo Arqueológico de Torre Torre",
        description:
          "Impresionantes formaciones geológicas de arcilla y arena.",
        image: "torre_torre",
      },
      {
        title: "Parque de los Sombreros",
        description:
          "Parque temático con grandes esculturas de sombreros típicos.",
        image: "parque_sombreros",
      },
    ],
  },
  {
    id: 5,
    title: "Tour Nro. 05 - Tradiciones y Complejos Arqueológicos",
    description:
      "Descubre artesanía, sitios arqueológicos y miradores únicos en la zona de Concepción y Chupaca.",
    fullDescription:
      "Un tour que combina el arte textil, leyendas de fertilidad y el Complejo Arqueológico de Warivilca, fundamental para entender la historia regional.",
    price: 60,
    duration: "Duración: 9:00 AM a 6:00 PM",
    category: "Arqueología y Leyendas",
    image: "valle_mantaro_tour_05",
    includes: [
      "Punto de encuentro: centro de Huancayo.",
      "Transporte durante el tour",
      "Guía turístico",
      "fotos a disposición",
    ],
    itinerary: [
      {
        title: "Casa Artesanal 'Lapi Chuco' - San Agustín de Cajas",
        description: "Taller de sombreros y vestimenta tradicional.",
        image: "casa_lapi_chuco",
      },
      {
        title: "Puente Balsas - Concepción",
        description:
          "Puente sobre el río Mantaro en la provincia de Concepción.",
        image: "puente_balsas",
      },
      {
        title: "La Huycha - Concepción",
        description: "Sitio de interés local en Concepción.",
        image: "la_huycha_concepcion",
      },
      {
        title: "Hacienda Marro - Iscos - Chupaca",
        description: "Visita a una antigua hacienda con historia.",
        image: "hacienda_marro",
      },
      {
        title: "Mirador de Huama Huata - 3 de Diciembre - Chupaca",
        description: "Mirador natural con vistas al valle.",
        image: "mirador_huama_huata",
      },
      {
        title: "El Manantial de la Fertilidad - 3 de Diciembre - Chupaca",
        description: "Manantial asociado a antiguas leyendas locales.",
        image: "manantial_fertilidad",
      },
      {
        title: "Complejo Arqueológico de Warivilca",
        description:
          "Importante centro ceremonial y administrativo de la cultura Wari.",
        image: "complejo_warivilca",
      },
    ],
  },
  {
    id: 6,
    title: "Tour Nro. 06 - Aventura al Nevado",
    description:
      "Viaje de aventura para contemplar el impresionante Nevado de Huaytapallana.",
    fullDescription:
      "Una excursión a gran altura para apreciar el majestuoso nevado, fuente de vida y elemento icónico del paisaje huancaíno.",
    price: 80,
    duration: "Duración: 8:00 AM a 6:00 PM",
    category: "Aventura y Alta Montaña",
    image: "valle_mantaro_tour_06",
    includes: [
      "Punto de encuentro: centro de Huancayo.",
      "Transporte durante el tour",
      "Guía turístico especializado",
      "fotos a disposición",
    ],
    itinerary: [
      {
        title: "El Nevado de Huaytapallana",
        description:
          "Trekking ligero o vista panorámica del nevado (dependiendo de las condiciones y ruta).",
        image: "nevado_huaytapallana",
      },
    ],
  },
  {
    id: 7,
    title: "Tour Nro. 07 - Fósiles y Aguas Curativas",
    description:
      "Combina la historia prehistórica con un viaje a los beneficios de las aguas termales.",
    fullDescription:
      "Una ruta corta que incluye la visita al museo de Huacrapuquio con fósiles, seguido de un descanso en las aguas termales de Huancavelica.",
    price: 70,
    duration: "Duración: 9:00 AM a 5:30 PM",
    category: "Paleontología y Bienestar",
    image: "valle_mantaro_tour_07",
    includes: [
      "Punto de encuentro: centro de Huancayo.",
      "Transporte durante el tour",
      "Guía turístico",
      "fotos a disposición",
    ],
    itinerary: [
      {
        title: "El Museo de Huacrapuquio - Fósiles",
        description:
          "Visita al museo que alberga, entre otros, fósiles del León Dientes de Sable.",
        image: "museo_huacrapuquio",
      },
      {
        title: "Aguas Calientes - Huancavelica",
        description: "Disfrute de los baños termales de la zona.",
        image: "aguas_calientes_huancavelica",
      },
    ],
  },
  {
    id: 8,
    title: "Tour Nro. 08 - Tarma, La Perla de los Andes",
    description:
      "Día completo para explorar los atractivos naturales, religiosos y culturales de Tarma.",
    fullDescription:
      "Tour hacia la 'Perla de los Andes', visitando su plaza principal, el Santuario de Muruhuay, las Grutas de Huagapo y los telares de San Pedro de Cajas.",
    price: 85,
    duration: "Duración: 7:00 AM a 7:00 PM",
    category: "Religión y Naturaleza",
    image: "valle_mantaro_tour_08",
    includes: [
      "Punto de encuentro: centro de Huancayo.",
      "Transporte durante el tour",
      "Guía turístico",
      "fotos a disposición",
    ],
    itinerary: [
      {
        title: "Iglesia Matriz Santa Ana - Plaza de Tarma",
        description: "Visita a la iglesia principal y plaza de la ciudad.",
        image: "iglesia_matriz_tarma",
      },
      {
        title: "Santuario del Sr. de Muruhuay",
        description: "Importante lugar de peregrinación religiosa.",
        image: "santuario_muruhuay",
      },
      {
        title: "Grutas de Huagapo",
        description:
          "Exploración de impresionantes cuevas con formaciones rocosas.",
        image: "grutas_huagapo",
      },
      {
        title: "Santuario y Mirador de Patamarca - San Pedro de Cajas",
        description: "Vista panorámica y sitio religioso.",
        image: "mirador_patamarca",
      },
      {
        title: "Manantial de Cachi Pozo",
        description: "Manantial de agua salada con propiedades naturales.",
        image: "manantial_cachi_pozo",
      },
      {
        title: "Plaza y Telares - San Pedro de Cajas",
        description: "Conocida por su artesanía de tapices y tejidos.",
        image: "telares_san_pedro_cajas",
      },
      {
        title: "Palcamayo",
        description: "Pueblo pintoresco en la ruta.",
        image: "palcamayo_tarma",
      },
    ],
  },
  {
    id: 9,
    title: "Tour Nro. 09 - Selva Central: Chanchamayo",
    description:
      "Aventura de un día en la ceja de selva, con cataratas, comunidad nativa y café.",
    fullDescription:
      "Excursión a la Selva Central (Junín), visitando San Ramón y La Merced, con la imponente Catarata de Tirol y la inmersión cultural en la Comunidad Nativa de Pampa Michi.",
    price: 100,
    duration: "Duración: 4:00 AM a 10:00 PM",
    category: "Aventura y Selva",
    image: "valle_mantaro_tour_09",
    includes: [
      "Punto de encuentro: centro de Huancayo.",
      "Transporte durante el tour",
      "Guía turístico",
      "fotos a disposición",
    ],
    itinerary: [
      {
        title: "San Ramón (Catarata de Tirol)",
        description: "Caminata y baño en la hermosa catarata.",
        image: "catarata_tirol",
      },
      {
        title:
          "La Merced Chanchamayo (Puente Kimiri - El Mariposario - Comunidad Nativa de Pampa Michi - Cafetario)",
        description:
          "Visita a la ciudad, el puente, el mariposario, la comunidad nativa y experiencia cafetera.",
        image: "la_merced_chanchamayo",
      },
    ],
  },
  {
    id: 10,
    title: "Tour Nro. 10 - Ruta de las Colonias: Villa Rica, Oxapampa y Pozuzo",
    description:
      "Paquete de varios días para descubrir la cultura austro-alemana de la selva central.",
    fullDescription:
      "Un viaje extenso a las ciudades con herencia europea en la selva, visitando las zonas cafeteras de Villa Rica, la arquitectura de Oxapampa y la histórica Pozuzo.",
    price: 300,
    duration: "Mínimo 3 Días",
    category: "Selva y Cultura",
    image: "valle_mantaro_tour_10",
    includes: [
      "Alojamiento",
      "Transporte durante el tour",
      "Guía turístico",
      "Alimentación (según paquete)",
    ],
    itinerary: [
      {
        title: "Villa Rica",
        description: "Capital del café peruano, con catas y visitas a fincas.",
        image: "villa_rica_cafe",
      },
      {
        title: "Oxapampa",
        description:
          "Ciudad de arquitectura colonial con influencias germano-austriacas.",
        image: "oxapampa_arquitectura",
      },
      {
        title: "Pozuzo",
        description:
          "Colonia austro-alemana, única en su cultura y tradiciones.",
        image: "pozuzo_colonia",
      },
    ],
  },
  {
    id: 11,
    title: "Tour Nro. 11 - Reserva Paisajística Nor-Yauyos Cochas",
    description:
      "Excursión de día completo a la impresionante reserva natural de Huancaya.",
    fullDescription:
      "Viaje a una de las áreas naturales más bellas del Perú, conocida por sus lagunas esmeralda, cascadas y andenerías, como las de Huancaya.",
    price: 120,
    duration: "Duración: 4:30 AM a 8:00 PM",
    category: "Naturaleza y Paisajismo",
    image: "valle_mantaro_tour_11",
    includes: [
      "Punto de encuentro: centro de Huancayo.",
      "Transporte 4x4 o van durante el tour",
      "Guía turístico",
      "fotos a disposición",
    ],
    itinerary: [
      {
        title: "Huancaya y Reserva Paisajística Nor - Yauyos - Cochas",
        description:
          "Visita a los principales atractivos de la reserva, incluyendo sus lagunas y cascadas.",
        image: "huancaya_reserva",
      },
    ],
  },
  {
    id: 12,
    title: "Tour Nro. 12 - City Tours Wanka",
    description:
      "Medio día para conocer lo esencial de la ciudad de Huancayo: parques, chocolate y miradores.",
    fullDescription:
      "Un recorrido concentrado en los puntos más representativos dentro de la ciudad, ideal para una mañana o tarde libre.",
    price: 45,
    duration: "Duración: 10:00 AM a 4:00 PM",
    category: "Urbano y Cultura",
    image: "valle_mantaro_tour_12",
    includes: [
      "Punto de encuentro: centro de Huancayo.",
      "Transporte durante el tour (parcial o caminata)",
      "Guía turístico",
      "fotos a disposición",
    ],
    itinerary: [
      {
        title: "Parque de los Mates Burilados - Cochas Chico",
        description: "Artesanía local.",
        image: "city_mates_burilados",
      },
      {
        title: "Parque de la Identidad Wanka",
        description: "Símbolo cultural de la región.",
        image: "city_identidad_wanka",
      },
      {
        title: "Amyra - El Mejor Tours del Chocolate en Huancayo",
        description: "Experiencia con el chocolate artesanal.",
        image: "city_tours_chocolate",
      },
      {
        title: "Helados Artesanales",
        description: "Parada de degustación.",
        image: "city_helados_artesanales",
      },
      {
        title: "Parque Tupac - San Carlos",
        description: "Espacio recreativo.",
        image: "city_parque_tupac",
      },
      {
        title: "Cerrito de la Libertad - Huancayo",
        description: "Mirador de la ciudad.",
        image: "city_cerrito_libertad",
      },
      {
        title: "Parque de los Sombreros",
        description: "Parque temático.",
        image: "city_parque_sombreros",
      },
      {
        title: "El Castillo del Temple - Pilcomayo",
        description: "Peculiar estructura.",
        image: "city_castillo_temple",
      },
      {
        title: "Parque de la Constitución - Huancayo",
        description: "Punto central de la ciudad.",
        image: "city_parque_constitucion",
      },
    ],
  },
];

export const tours = [
  {
    id: 1,
    title: "Bosque dorado",
    description: "Visita una de las lugares con impresionantes vistas",
    fullDescription: "descubre el bosque dorado y sus encantos.",
    price: 45,
    duration: "Medio día",
    difficulty: "Moderada",
    image: bosque,
    includes: [
      "Transporte ida y vuelta",
      "Guía especializado",
      "Botiquín de primeros auxilios",
    ],
    highlights: [
      "Caminata por el bosque ",
      "Avistamiento de aves",
      "Fotografía panorámica",
    ],
  },
  {
    id: 2,
    title: "Mirador de Huamanhuata",
    description: "Visita una de las lugares con impresionantes vistas",
    fullDescription:
      "Conoce la historia y cultura de huancayo a través de un recorrido por su centro histórico.",
    price: 40,
    duration: "2 horas",
    difficulty: "Fácil",
    image: huamanhuata,
    includes: ["Guía turístico", "Recorrido a pie"],
    highlights: [
      "paseo por el centro turistico",
      "Caminar por el puente de cristal",
      "juegos extremos",
    ],
  },
  {
    id: 3,
    title: "Tour virgen inmaculada Concepcion",
    description: "Para los amantes de las alturas",
    fullDescription:
      "Viaja en el tiempo visitando Pozuzo, la primera colonia austro-alemana establecida en el Perú. Conoce su historia, arquitectura única y tradiciones que se mantienen vivas hasta hoy.",
    price: 60,
    duration: "Medio dia",
    difficulty: "Fácil",
    image: virgen,
    includes: [
      "Transporte ida y vuelta",
      "Guía especializado en historia",
      "Visita al museo",
    ],
    highlights: [
      "paseo por el centro turistico",
      "Caminar por el puente de cristal",
      "juegos extremos",
    ],
  },
  {
    id: 4,
    title: "Tour virgen inmaculada Concepcion",
    description: "Para los amantes de las alturas",
    fullDescription:
      "Viaja en el tiempo visitando Pozuzo, la primera colonia austro-alemana establecida en el Perú. Conoce su historia, arquitectura única y tradiciones que se mantienen vivas hasta hoy.",
    price: 60,
    duration: "Medio dia",
    difficulty: "Fácil",
    image: conce,
    includes: [
      "Transporte ida y vuelta",
      "Guía especializado en historia",
      "Visita al museo",
    ],
    highlights: [
      "paseo por el centro turistico",
      "Caminar por el puente de cristal",
      "juegos extremos",
    ],
  },
  {
    id: 5,
    title: "Mirador de sapallanga",
    description: "Visita una de las lugares con impresionantes vistas",
    fullDescription:
      "Conoce la historia y cultura de huancayo a través de un recorrido por su centro histórico.",
    price: 40,
    duration: "2 horas",
    difficulty: "Fácil",
    image: sapalla,
    includes: ["Guía turístico", "Recorrido a pie"],
    highlights: [
      "paseo por el centro turistico",
      "Caminar por el puente de cristal",
      "juegos extremos",
    ],
  },
  {
    id: 6,
    title: "Tour Gastronómico",
    description: "Descubre los sabores de huancayo",
    fullDescription:
      "Sumérgete en la rica gastronomía de huancayo, que combina influencias andinas. Visita mercados locales, restaurantes tradicionales y participa en preparaciones típicas.",
    price: 70,
    duration: "4 horas",
    difficulty: "Fácil",
    image: comida,
    includes: [
      "Guía gastronómico",
      "Degustaciones en 5 lugares",
      "Recetario tradicional",
      "Transporte entre locaciones",
    ],
    highlights: [
      "Mercado local",
      "Quesería tradicional",
      "Restaurante típico",
      "Preparación de plato local",
    ],
  },
];
