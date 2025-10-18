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
    title: "City Tour Huancayo",
    description: "Descubre lo mejor de la ciudad de Huancayo",
    fullDescription:
      "Este paquete completo te permite explorar los principales atractivos de la ciudad de Huancayo y sus alrededores.",
    price: 60,
    duration: "3 a 4 horas",
    category: "Cultura y tradicion",
    image: huancayo,
    includes: [
      "Transporte durante el tour",
      "Guía turístico bilingüe",
      "Entradas a los atractivos",
    ],
    itinerary: [
      {
        title: "Parque constitucion",
        description:
          "Recepción en el terminal, traslado al hotel y recorrido por el centro histórico de huancayo.",
        image: constitucion,
      },
      {
        title: "Cerrito de la libertad",
        description:
          "Visita el cerrito de la liberdad y el Zoologico municipal de Huancayo",
        image: cerrito,
      },
      {
        title: "Torre Torre",
        description:
          "Recorre las formaciones naturales con forma de torres con mas 30 metros de altura",
        image: torres,
      },
      {
        title: "Parque de la Identidad Huanca",
        description:
          "Este parque fue construido para rendir homenaje conservar en la memoria a aquellos personajes mas representativos del arte popular huanca, al ingreso del parque resalta el enorme mate burilado representando en el la vivencia del hombre huanca, se encuentra un castillo que representa a la corona de la Virgen de Cocharcas donde los pequeños pueden subir y tomarse las fotos para el recuerdo.",
        image: identidad1,
      },
      {
        title: "Parque de los Sombreros",
        description:
          "en este parque se resalta los distintos sombreros que han sido realizados al estilo que utilizan las mujeres campesinas de Sicaya, Orcotuna, Chongos, etc.",
        image: sombreros,
      },
    ],
  },
  {
    id: 2,
    title: "Tour Arqueologico",
    description:
      "exploramos los sitios arqueologicos con las que cuenta el valle del mantaro",
    fullDescription:
      "full day de aventura cultura y tradicion recorriendo los centros arqueologicos del valle del mantaro",
    price: 60,
    duration: "1 dia",
    category: "arqueológico",
    image: arqueologico,
    includes: [
      "Transporte durante el tour",
      "Guía turístico bilingüe",
      "Seguro de viaje",
    ],
    itinerary: [
      {
        title: "Chupaca – Mirador de los Shapis",
        description:
          "Se apreciara el rostro de un Shapis, siendo este un personaje de la danza típica de esta localidad “danza de los shapis”, con toda su indumentaria, que incluye un penacho de plumas, y en sus manos sosteniendo un loro y un par de flechas.",
        image: shapis,
      },
      {
        title: "Arwaturo",
        description:
          "construcciones en piedra de forma rectangular que sirvieron de almacenes o graneros, este es un centro arqueológico que tiene más de 1200 años de antigüedad, su nombre proviene de dos vocablos quechua que traducidas dan el significado a “hueso quemado o amarillento”, desde esta zona se aprecia la extencion del valle, la laguna, los sembrios",
        image: arwaturo,
      },
      {
        title: "Laguna de Ñahuimpuquio",
        description:
          "su nombre significa “ojo de agua”, en esta laguna se realiza el paseo en bote donde se aprecia al ave de la huallata y patito zambullidor..",
        image: ñawinpuquio,
      },
      {
        title: "Chongos Bajo – Cani Cruz",
        description:
          "su nombre siginifica “cruz que muerde”, este es uno de los poblados mas antiguos del valle del Mantaro, en esta zona se implanto la santa inquisición, los pobladores y visitantes mas fieles van a prender sus velas alrededor de esta cruz pidiendo que les vaya bien en el amor, dinero, salud, estudios.",
        image: canicruz,
      },
      {
        title: "Warivilca",
        description:
          "este santuario es considerado como lapacarina o lugar de origen de los primeros huancas, su estructura arquitectónica principal se denomina santuario o adoratorio, dentro podremos encontrar dos molles uno hembra el otro macho.",
        image: warivilca,
      },
    ],
  },
  {
    id: 3,
    title: "Tour Artesanal",
    description: "Conoce las artesanias del valle del mantaro",
    fullDescription:
      "Descubre el fascinante mundo de las artesanias y textiles, vive todo el proceso en persona y con gente profesional",
    price: 80,
    duration: "1 día",
    category: "Artesania",
    image: portadaarte,
    includes: [
      "Transporte ida y vuelta",
      "Visita a todos los lugares mensionados",
      "Guía especializado",
    ],
    itinerary: [
      {
        title: "Cochas Mates Burilados",
        description:
          "Este distrito es cuna de artesanos, se ingresará a un taller donde apreciaremos trabajos elaborados a mano a base de una calabaza o mate y un buril. En el mate se realizan distintos dibujos de la vivencia del hombre huanca desde épocas de antaño",
        image: artesanomates,
      },
      {
        title: "Cochas parque de los Mates Burilados",
        description:
          "Este distrito es cuna de artesanos, se ingresará a un taller donde apreciaremos trabajos elaborados a mano a base de una calabaza o mate y un buril. En el mate se realizan distintos dibujos de la vivencia del hombre huanca desde épocas de antaño",
        image: parque,
      },
      {
        title: "Hualhuas",
        description:
          "Este distrito es reconocido por sus trabajos textiles ingresaremos a un taller donde nos nostrara y explicara como hacen: chompas, alfombras, ponchos, gorras, chalinas a base de lana de oveja, alpaca, llama, además hacen uso de insectos tales como la cochinilla y plantas tales como: retama, chilca, nogal, eucalipto; para poder teñir la lana de forma natural.",
        image: hualhuas,
      },
      {
        title: "Ingenio",
        description:
          "Ingresaremos al criadero de truchas para observar el ciclo biológico de la trucha y el tipo de trucha que se tiene en el valle del Mantaro. En este lugar también se realizará el almuerzo.",
        image: ingenio,
      },
      {
        title: "Convento Santa Rosa de Ocopa",
        description:
          "Se ingresará a este distrito para conocer el convento de los franciscanos, en su interior guarda un museo de historia natural de la selva, la segunda biblioteca mas grande de toda Sudamérica con más de 25000 volúmenes, una pinacoteca con cuadros de la escuela cusqueña .",
        image: ocopa,
      },
      {
        title: "Estatua de la Virgen Inmaculada de Concepción",
        description:
          "Esta estatua de la virgen mide alrededor de 28 metros de altura, se llega hasta la corona, sirviendo esta como mirador, desde esta altura se aprecia el valle del Mantaro y el nevado Huaytapallana, esta es la estatua más alta del Perú.",
        image: virgen,
      },
      {
        title: "San Jerónimo de Tunan",
        description:
          "Los artesanos de este distrito son reconocidos por la habilidad que tienen para trabajar la plata empleando la técnica de la filigrana en aretes, medallas, cofres, otras técnicas que también utilizan es de la cera perdida, técnica de vaciado en caja y técnica del enchape.",
        image: sanjero,
      },
    ],
  },
  {
    id: 4,
    title: "Tour Monumental",
    description: "Escapada perfecta para parejas",
    fullDescription:
      "Disfruta de una experiencia romántica en el encantador entorno del valle del mantaro. ",
    price: 100,
    duration: "1 dia",
    category: "aventura",
    image: mantaro,
    includes: [
      "Transporte ida y vuelta",
      "Visita a todos los lugares mensionados",
      "Guía especializado",
    ],
    itinerary: [
      {
        title: "Orcotuna",
        description:
          "En este punto visitaremos el santuario de la virgen de Cocharcas, el guía nos relatara la leyenda de la virgen de Cocharcas y podremos apreciar parte del valle del Mantaro.",
      },
      {
        title: "Mito – Casa del Huacon",
        description:
          "Apreciaremos la danza de la Huaconada considerada patrimonio cultural inmaterial de la humanidad, ingresaremos a la casa del huacon donde nos mostraran las vestimentas típicas que utiliza el huacon.",
      },
      {
        title: "Fontana de Trevi",
        description:
          "La fuente de trevi que se encuentra en este distrito es una replica a la que se encuentra en Italia, en esta fuente se podrá apreciar al dios griego poseidon, también se apreciara pegasos y ninfas.",
      },
      {
        title: "Wawi Wawi",
        description:
          "Son formaciones geológicas producto de la erosión hídrica y eólica, dando como origen a la formación de torres de arcilla, se realizará una caminata de 15 minutos, la tradición cuenta de que quien visite este lugar tendrá mellizos o gemelos",
      },
      {
        title: "Laguna de Paca",
        description:
          "En este punto se realizará el paseo en bote, donde observara la silueta del indio dormido, la isla del amor (donde van dos y regresan 3), flora y fauna; también se realizará el almuerzo típico (carnero al palo, pachamanca, cuy colorado, ceviche de trucha, papa a la huancaína, caldo de gallina)",
      },
      {
        title: "Capilla Cristo Pobre",
        description:
          "Esta es una réplica de la gran catedral Notre Dam de parís de estilo gótico y ojival, en el interior se encuentra el altar mayor presidio por la imagen de la virgen de la medalla milagrosa.",
      },
      {
        title: "Plaza de Armas Jauja",
        description:
          "Desde este punto pondrán observar la imponente catedral y la municipalidad, la estatua de juanita Pizarro, hija de francisco Pizarro.",
      },
    ],
  },
  {
    id: 5,
    title: "Tour Cañon de Shutjo",
    description: "Diversión para toda la familia",
    fullDescription:
      "Paquete diseñado especialmente para amantes de la aventura",
    price: 100,
    duration: "1 dia",
    category: "Familiar",
    image: shujtooo,
    includes: [
      "Transporte ida y vuelta",
      "Visita a todos los lugares mensionados",
      "Guía especializado",
    ],
    itinerary: [
      {
        title: "Baños Termalesn",
        description:
          "Visitaremos los baños termales de acaya, las aguas de estos baños termales son tibias, estas aguas contienen minerales que ayudan a disminuir las dolencias de enfermedades reumáticas, o a tratar problemas gastrointestinales e incluso enfermedades nerviosas.",
      },
      {
        title: "Iglesia Colonial Canchayllo",
        description:
          "La construcción de esta iglesia es de piedra con una torre a la izquierda que sirve de campanario. Esta iglesia esta restaurada, pero se ha tenido mucho cuidado en mantener el formato original el cual es muy antiguo. Cada 30 y 31 de mayo se congrega gran cantidad de creyentes para participar de la celebración de la festividad de la Cruz de Mayo.",
      },
      {
        title: "Puya de Raimondi",
        description:
          "Esta planta es endémica de nuestros andes donde se ha quedado solo 27 rodales (bosques) en Perú. El rodal mas majestuoso de Puyas de Raymondi se encuentra en el distrito de Canchayllo 2 Km, estos cactus gigantes alcanzan una altura de 12 a 18 mts, la de mayor inflorescencia en los vegetales con mas de 8 millones de semillas aproximadamente, teniendo su floración a los 50 años y terminando su siclo de vida hasta lo 80 años y otros alcanzan los 100 años.",
      },
      {
        title: "Cañon de Shutjo",
        description:
          "El Cañon de Shutjo es una formación rocosa producto de la erosión del río Piñascocha, el cual se privilegia por contar con gigantescas paredes que logran medir hasta 60 metros de altura. El Cañón de Shutjo se encuentra dentro del área de la Reserva Paisajística Nor Yauyos-Cochas.",
      },
      {
        title: "Restos Arqueológicos de Corivinchos",
        description:
          "Los restos arqueológicos de Corivinchos es un complejo habitacional que data de la época pre inca, abarca una extensión aproximada de 10 ha. y en la actualidad se pueden observar una veintena de viviendas de forma circular construidas con piedras y barro. Las puertas tienen forma trapezoidal. Es uhna vista espectacular.",
      },
      {
        title: "Puente Colgante",
        description:
          "Puente colgante que nos muestra la corriente proveniente de la oroya de la cual se puede apreciar el hermoso rio Mantaro.",
      },
    ],
  },
  {
    id: 6,
    title: "Tour Nevado de Huaytapallna",
    description: "Para los amantes de la adrenalina",
    fullDescription:
      "Si buscas emociones fuertes, este paquete es para ti. Incluye actividades de aventura como caminata",
    price: 200,
    duration: "1 dia",
    category: "Aventura Extrema",
    image: neva2,
    includes: [
      "Transporte ida y vuelta",
      "Visita a todos los lugares mensionados",
      "Guía especializado",
    ],
    itinerary: [
      {
        title: "Paraje Virgen de las Nieves",
        description:
          "esta es una capilla que alberga a la Virgen de las nieves en el Huaytapallana, esta es una parada obligada para los miles de fieles que tiene, frente a ella se encuentra el imponente Nevado Huaytapallana.",
      },
      {
        title: "Trekking",
        description:
          "Al ser este un tour de aventura se hace una caminata de 3 horas de ida y 2 horas de retorno, haciendo paradas para poder descansar y continuar con el recorrido",
      },
      {
        title: "Laguna Yanahucsha",
        description:
          "laguna de color esmeralda que nos muestra la belleza del paisaje que vamos a recorrer.",
      },
      {
        title: "Laguna Hatun Cocha",
        description:
          "laguna de color turquesa de impresionante atractivo en la cual se puede apreciar el reflejo del glaciar. ",
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
