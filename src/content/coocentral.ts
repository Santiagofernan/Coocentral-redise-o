import {
  Bean,
  Building2,
  ClipboardCheck,
  Coffee,
  Factory,
  FlaskConical,
  GraduationCap,
  Glasses,
  HandCoins,
  HandHeart,
  HeartPulse,
  Hotel,
  Laptop,
  Leaf,
  Package,
  PartyPopper,
  PiggyBank,
  Presentation,
  Scale,
  ShieldCheck,
  Ship,
  Smartphone,
  Sprout,
  Store,
  Tractor,
  Tv,
  Users,
  Warehouse,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import ferticoolombiaLogo from "@/assets/Servicios/Ferticoolombia/Logo Ferticoolombia TRAZO BLANCO.png";
import hotelKahveImage from "@/assets/Servicios/Hotel_Kahve/Planta.webp";
import coworkingShowcaseImage from "@/assets/Servicios/Coworking/YDRAY-IMG_9436-1-scaled.webp";
import coocentralCoffeeImage from "@/assets/Servicios/Cafes_coocentral/Cafe.webp";
import farmerImage from "@/assets/coocentral-caficultor-hero.jpg";
import historyImage from "@/assets/coocentral-historia.jpg";
import qualityImage from "@/assets/coocentral-calidad.jpg";
import territoryImage from "@/assets/coocentral-territorio.jpg";
import expoCafesImage from "@/assets/noticias/expo-cafes-acron.jpg";
import specialtyFairImage from "@/assets/noticias/feria-especialidad-cafe.png";
import ficcaImage from "@/assets/noticias/ficca-2022.jpg";
import exportProgramImage from "@/assets/noticias/exporta-con-nosotros.png";
import founderStoryImage from "@/assets/noticias/historia-don-maximo.jpg";
import baristaImage from "@/assets/noticias/orgullo-barismo-sca.jpg";
import coworkingNewsImage from "@/assets/noticias/coworking-garzon.jpg";
import incasProjectImage from "@/assets/noticias/incas-global-plus.jpg";

// Todo el contenido proviene del informe institucional (docs/informe-coocentral.pdf),
// salvo teléfonos, redes y enlaces legales, tomados de www.coocentral.com.

export const links = {
  store: "https://www.cafescoocentral.com.co/",
  app: "https://play.google.com/store/apps/details?id=com.coocentral.app&hl=es_CO",
  appStore: "https://apps.apple.com/co/app/nueva-app-red-coopcentral/id6742431196",
  requirements: "https://coocentral.com/requisitos/",
  news: "/noticias",
  complaints: "https://coocentral.com/wp-content/uploads/2026/08/IMG-20260806-WA0469.jpg",
};

export const contact = {
  address: "Centro Comercial El Molino · Carrera 12 No. 2-56",
  city: "Garzón, Huila, Colombia",
  phones: ["311 538 6395", "318 612 8444"],
  email: "info@coocentral.co",
};

export const socials = [
  { label: "Facebook", href: "https://www.facebook.com/coocentral" },
  { label: "Instagram", href: "https://instagram.com/coocentral" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCNxnVcKrQ7FqL0elTPCJQuQ" },
] as const;

export const navigation = [
  { label: "Cooperativa", href: "/cooperativa" },
  { label: "Asociarme", href: "/asociarme" },
  { label: "Café", href: "/cafe" },
  { label: "Servicios", href: "/servicios" },
  { label: "Noticias", href: "/noticias" },
] as const;

export const cooperativeResources = [
  { label: "¿Quiénes somos?", href: "/cooperativa#quienes-somos", external: false },
  { label: "Reseña Histórica", href: "/historia", external: false },
  {
    label: "Acta de compromiso Fundecafé",
    href: "https://coocentral.com/wp-content/uploads/2023/05/Acta-de-Compromiso-y-proteccion-datos.pdf",
    external: true,
  },
  {
    label: "Política de privacidad",
    href: "/documentos/cooperativa/politica-de-privacidad.pdf",
    external: true,
  },
  {
    label: "Política de abastecimiento responsable y cero deforestación",
    href: "/documentos/cooperativa/Politica_de_abastecimiento_responsable_y_cero_deforestacion.pdf",
    external: true,
  },
  {
    label: "Política Anticorrupción y Antisoborno",
    href: "/documentos/cooperativa/Politica_Anticorrupcion_y_Antisoborno.pdf",
    external: true,
  },
  {
    label: "Prevención de lavado de activos",
    href: "/documentos/cooperativa/Prevencion_Lavado_Activos_COOCENTRAL.pdf",
    external: true,
  },
  { label: "Oficinas y Horarios", href: "/#oficinas-y-horarios", external: false },
  {
    label: "Artículo 364-5 del estatuto tributario",
    href: "/documentos/cooperativa/Articulo_364-5_Estatuto_Tributario_COOCENTRAL.pdf",
    external: true,
  },
  {
    label: "Reglamento interno de trabajo",
    href: "/documentos/cooperativa/REGLAMENTO_IT_COOCENTRAL.pdf",
    external: true,
  },
] as const;

export const publicOffice = {
  address: "Carrera 12 sur # 2-55, Garzón, Huila",
  hours: [
    {
      days: "Lunes a viernes",
      weekdays: [1, 2, 3, 4, 5],
      periods: ["7:30 a. m. – 12:00 m.", "2:00 – 5:00 p. m."],
      intervals: [
        [450, 720],
        [840, 1020],
      ],
    },
    {
      days: "Sábado",
      weekdays: [6],
      periods: ["7:30 a. m. – 12:00 m."],
      intervals: [[450, 720]],
    },
  ],
};

export const moreNavigation = [
  { label: "Historia", href: "/historia" },
  { label: "Ecosistema", href: "/ecosistema" },
  { label: "Sostenibilidad", href: "/sostenibilidad" },
] as const;

export const impactStats = [
  { value: 50, prefix: "+", suffix: "", label: "Años de liderazgo continuo" },
  { value: 4000, prefix: "≈", suffix: "", label: "Asociados y familias caficultoras" },
  { value: 7, prefix: "", suffix: "", label: "Municipios núcleo en el centro del Huila" },
  { value: 9000, prefix: "+", suffix: " ha", label: "Superficie productiva de café" },
  { value: 15.5, prefix: "+", suffix: " M kg", label: "Café verde comercializado al año" },
];

export const coreMunicipalities = [
  "Garzón",
  "Gigante",
  "Agrado",
  "Pital",
  "Tarqui",
  "Suaza",
  "Guadalupe",
];

export const extendedMunicipalities = ["La Plata", "Acevedo", "Pitalito", "Timaná"];

export const cooperativeOverview =
  "Somos la Cooperativa Central de Caficultores del Huila, una empresa asociativa sin ánimo de lucro y de interés social. Reunimos a cerca de 4.000 asociados en nuestra zona de influencia, que comprende 7 municipios cafeteros del centro del Huila: Garzón, Gigante, Agrado, Pital, Tarqui, Suaza y Guadalupe. Estamos comprometidos con nuestro medio ambiente y la sociedad; por esto, nos preocupamos por ser económicamente viables, ambientalmente sostenibles y socialmente responsables.";

export const mission =
  "Gracias a nuestro entusiasmo, trabajo y valores corporativos, queremos ser una Cooperativa responsable social y ambientalmente, donde nuestra prioridad siempre serán nuestros asociados, nuestros clientes, nuestros empleados y nuestra comunidad, a los cuales buscaremos generarles valor y bienestar con productos y servicios de calidad, haciendo del agro un negocio posible y rentable mediante la innovación en sus procesos de producción, transformación y consumo de café.";

export const vision =
  "En el 2027, como líderes transformamos el mercado del café y enseñamos el camino para que la actividad cafetera sea rentable y sostenible.";

export const principles = [
  "Libre Adhesión",
  "Control democrático por los asociados",
  "Participación económica de los asociados",
  "Autonomía e independencia",
  "Educación, capacitación e información",
  "Cooperación entre cooperativas",
  "Interés por la comunidad",
];

export const governance = [
  "Asamblea General de Asociados",
  "Consejo de Administración y Junta de Vigilancia",
  "Gerencia General",
  "Instancias de control y apoyo",
  "Líderes operativos por área",
];

export const quotes = {
  ceo: {
    text: "Bienvenidos todos a trabajar por una caficultura con herramientas para el productor.",
    author: "Luis Mauricio Rivera Vargas",
    role: "Gerente General · 19 años al frente de la cooperativa",
  },
  farmer: {
    text: "El café es una continua bendición de Dios, y Coocentral es la mejor opción para hacer realidad los sueños de los caficultores.",
    author: "José Ovidio Aldana",
    role: "Caficultor asociado",
  },
};

export const timeline = [
  {
    year: "1975",
    text: "54 pioneros fundan COOCENTRAL en Garzón. Nace la asistencia técnica que dará raíz a FUNDECAFÉ.",
  },
  {
    year: "1976",
    text: "Recursos del Fondo Nacional del Café para comprar café y dotar los primeros almacenes.",
  },
  {
    year: "1980–2000",
    text: "Planta de secado en Garzón, inversión en Expocafé Trillas y Casa del Café en Guadalupe.",
  },
  {
    year: "2007",
    text: "Nace el Área de Desarrollo Social y se estructura el crédito supervisado.",
  },
  { year: "2010", text: "Sede administrativa propia en el Centro Comercial El Molino." },
  { year: "2011", text: "Expansión de la red regional de Almacenes Coocentral." },
  { year: "2012", text: "Creación de Inversiones Coocentral y apertura del Hotel Kahvé." },
  { year: "2013", text: "Parque Industrial del Café y creación de Ferticoolombia." },
  { year: "2015", text: "Lanzamiento de la marca propia Café Coocentral." },
  { year: "2017", text: "Inauguración de las Tiendas Kahvé de cafés especiales." },
  { year: "2020", text: "Coocentral App y canal Coocentral TV en los fielatos." },
  { year: "2021", text: "Salas de Cooworking para capacitación e innovación." },
  { year: "2022", text: "Plataformas A-Catar (trazabilidad SCA) y Finapp (crédito)." },
  {
    year: "2023–2024",
    text: "Central de Acopio, Planta Mezcladora de Fertilizantes y conectividad Coonéctate.",
  },
  {
    year: "2025",
    text: "Medio siglo de liderazgo transformador, rentabilidad y sostenibilidad.",
  },
];

export const socialInvestment = {
  total: "USD 7,5 M",
  period: "Inversión acumulada 2007–2023",
  social: { value: 4.0, label: "Inversión social" },
  productivity: { value: 3.5, label: "Productividad agrícola" },
  yearly: "USD 0,5 M promedio anual",
};

type Benefit = { icon: LucideIcon; title: string; text: string };

export const benefits: Benefit[] = [
  {
    icon: GraduationCap,
    title: "Educación superior",
    text: "Hasta 2 SMMLV por semestre con primas de Comercio Justo: más de $2.100 millones y +350 estudiantes.",
  },
  {
    icon: HeartPulse,
    title: "Salud del asociado",
    text: "Subsidios directos para cofinanciar la afiliación al sistema de salud del asociado y su familia.",
  },
  {
    icon: Glasses,
    title: "Salud visual",
    text: "Jornadas de valoración especializada y entrega gratuita de lentes graduados.",
  },
  {
    icon: PiggyBank,
    title: "BEPS",
    text: "Acompañamiento para vincularse a esquemas de protección para la vejez con ingreso vitalicio.",
  },
  {
    icon: ShieldCheck,
    title: "Póliza exequial",
    text: "Convenio con Los Olivos-Emcofun que ampara a más de 10.000 personas en la región.",
  },
  {
    icon: HandHeart,
    title: "Fondo solidario",
    text: "Auxilios inmediatos ante calamidades domésticas, emergencias médicas y contingencias.",
  },
  {
    icon: PartyPopper,
    title: "Día del asociado",
    text: "Encuentros de integración, actualización tecnológica, cultura y recreación.",
  },
];

export const productivityPrograms = [
  "Asistencia agrícola y extensión agropecuaria con FUNDECAFÉ",
  "Programa 100% Coocentral: crédito inmediato y atención prioritaria",
  "Incentivo Rural para infraestructura post-cosecha y equipos",
  "Mantenimiento de despulpadoras y tanques de beneficio",
  "Ampliación y renovación de cafetales con variedades resistentes",
  "Levantamiento de polígonos y cumplimiento cero deforestación (EUDR)",
  "Programa Empresarios para fincas de más de 9 hectáreas",
  "Mujeres Cafeteras: equidad de género y empoderamiento técnico",
  "Jóvenes Cafeteros: liderazgo y relevo generacional",
  "Escuela de barismo, catación, tueste y transformación del grano",
];

export const membershipRequirements = [
  {
    title: "Comercialización comprometida",
    text: "Entregar como mínimo el 75% de la producción de la finca en los puntos de compra de la cooperativa.",
  },
  {
    title: "Aportes sociales al día",
    text: "Mantener los aportes sociales obligatorios y la capitalización cooperativa.",
  },
  {
    title: "Cumplimiento crediticio",
    text: "Honrar las obligaciones de crédito, servicios operacionales y contratos de entrega a futuro.",
  },
];

export const membershipEligibility = [
  {
    title: "Productores mayores de edad",
    text: "Personas naturales legalmente capaces, mayores de 18 años, que sean productores agropecuarios —en particular, productores de café— y puedan demostrar esa calidad.",
  },
  {
    title: "Menores de edad",
    text: "El sitio oficial contempla la asociación de menores desde los 14 años y de menores de esa edad por medio de su representante legal. El ingreso está sujeto a la reglamentación del Consejo de Administración.",
  },
  {
    title: "Personas jurídicas y entidades solidarias",
    text: "Pueden asociarse personas jurídicas o entidades de economía solidaria conformadas por un productor de café, cuando sus fines contribuyan al objeto social de la Cooperativa.",
  },
];

type ChainStep = { icon: LucideIcon; label: string };

export const valueChain: ChainStep[] = [
  { icon: Sprout, label: "Finca" },
  { icon: Bean, label: "Recolección" },
  { icon: Scale, label: "Compra y fielato" },
  { icon: ClipboardCheck, label: "Control de calidad" },
  { icon: Tractor, label: "Trilla" },
  { icon: Coffee, label: "Tostión" },
  { icon: Package, label: "Empaque" },
  { icon: Ship, label: "Exportación" },
  { icon: Users, label: "Consumidor final" },
];

export const specialtyCoffees = [
  {
    title: "Mujeres Cafeteras",
    profile: "Selección producida por asociadas, con perfiles balanceados y notas dulce-frutales.",
    impact: "Equidad de género y autonomía financiera femenina.",
  },
  {
    title: "Jóvenes Empresarios",
    profile: "Procesos naturales y fermentaciones controladas de la juventud cafetera.",
    impact: "Arraigo territorial y relevo generacional.",
  },
  {
    title: "Premium Excelso",
    profile: "Protocolos estrictos de recolección y secado diseñados por la cooperativa.",
    impact: "Perfiles superiores para compradores institucionales.",
  },
  {
    title: "Regional",
    profile: "Microclimas y suelos volcánicos del centro del Huila.",
    impact: "Sobreprecios por origen y primas de calidad al productor.",
  },
  {
    title: "Varietales",
    profile: "Bourbon, Geisha, Castillo y Cenicafé 1 con perfiles exóticos.",
    impact: "Nichos de alto valor y cafeterías de tercera ola.",
  },
  {
    title: "Microlotes",
    profile: "Finca única con procesos pre y post-cosecha a medida.",
    impact: "Máxima expresión sensorial y trazabilidad directa.",
  },
];

export const creditImpact = [
  { value: "5.091", label: "Créditos colocados en el último año" },
  { value: "$9.980 M", label: "Pesos en liquidez directa" },
  { value: "1.710", label: "Asociados beneficiados" },
];

export const creditLines = [
  { name: "Ferticoolombia Asociado", text: "Fertilizantes e insumos", term: "6 meses" },
  { name: "Productividad", text: "Siembra y renovación, sin intereses 2 años*", term: "2,5 años" },
  { name: "Mujeres to Market", text: "Proyectos liderados por asociadas", term: "12–24 meses" },
  { name: "Futurito", text: "Mano de obra en cosecha, sin costo financiero*", term: "1 mes" },
  { name: "Credi Guadaña", text: "Maquinaria liviana sin intereses", term: "6 meses" },
  { name: "Fondo Rotatorio", text: "Hasta el 90% de los aportes sociales", term: "6 meses" },
  { name: "Cheque a 30 días", text: "Avance de caja sin intereses corrientes", term: "1 mes" },
  { name: "Cupo General", text: "Tasa según el Ranking Coocentral", term: "6 meses" },
  { name: "Merca 100", text: "Bono de mercado para asociados 100%", term: "6 meses" },
  { name: "Empresarios", text: "Productores de escala empresarial", term: "8 meses" },
];

export const detailedCreditLines = [
  {
    name: "Fondo Rotatorio",
    description:
      "Crédito inmediato para comprar productos disponibles en los almacenes de la Cooperativa. El monto puede ser de hasta el 90% de los aportes sociales.",
    term: "6 meses",
    conditions: [
      "No requiere deudor solidario, según la ficha oficial.",
      "Los aportes sociales del asociado respaldan el crédito.",
    ],
    requirements: [
      "Fotocopia de la cédula.",
      "Solicitud de crédito diligenciada.",
      "Firma del pagaré.",
      "Firma del formato de cruce de aportes.",
      "Firma del formato de declaración de asegurabilidad.",
      "Firma del formato de protección de datos del asociado.",
    ],
  },
  {
    name: "Futurito",
    description:
      "Crédito en efectivo destinado al pago de la recolección. La ficha oficial lo describe como exclusivo para asociados que venden el 100% de su producción a Coocentral.",
    term: "30 días",
    conditions: [
      "La ficha indica que no genera intereses si se paga oportunamente y se cumple con la entrega de kilos de café comprometidos.",
      "El valor del crédito se descuenta de la venta del café entregado a Coocentral.",
      "Requiere deudor solidario.",
      "El técnico de la Cooperativa debe certificar que el asociado cuenta con café para secar y cumplir el compromiso.",
    ],
    requirements: [
      "Fotocopia de las cédulas del asociado y del deudor solidario.",
      "Solicitud de crédito diligenciada y pagaré firmado por el asociado y su deudor solidario.",
      "Formatos firmados de cruce de aportes y declaración de asegurabilidad.",
      "Formatos de protección de datos del asociado y del deudor solidario.",
      "Consulta a centrales de riesgo del asociado y del deudor solidario.",
      "Visita técnica actualizada.",
    ],
  },
  {
    name: "Anticipo secado",
    description:
      "Anticipo equivalente al 50% del café verde entregado en la planta de la Cooperativa para el servicio de secado.",
    term: "15 días",
    conditions: [
      "La ficha indica que el crédito se descuenta de la venta del café y no tiene costo financiero si se cancela oportunamente; se paga solo capital.",
    ],
    requirements: [
      "Presentar el recibo entregado en la planta de secado para liquidar el anticipo.",
    ],
  },
  {
    name: "Cupo General",
    description:
      "Cupo para compras en almacenes: insumos, herramientas agrícolas y tecnológicas, electrodomésticos, calzado, SOAT y materiales de ferretería. La ficha oficial también menciona el bono Merca 100.",
    term: "6 meses",
    conditions: [
      "La tasa depende de la calificación del asociado; la ficha no especifica una tasa única.",
      "Para asociados inscritos en el programa 100% Coocentral se describe un bono mensual de $200.000 para la remesa.",
      "La ficha indica que aplica a asociados y no asociados para compras de celulares.",
      "Para cupos superiores pueden solicitar deudor solidario.",
    ],
    requirements: [
      "Fotocopias de las cédulas del asociado y, cuando aplique, del deudor solidario.",
      "Solicitud de crédito diligenciada y pagaré firmado según corresponda.",
      "Formatos de cruce de aportes, declaración de asegurabilidad y protección de datos.",
      "Consulta a centrales de riesgo del asociado y del deudor solidario.",
      "Para fertilizantes e insumos, recomendación del técnico de la Cooperativa (récord) y visita técnica actualizada.",
    ],
  },
  {
    name: "Cheque a 30 días",
    description:
      "Crédito para adquirir fertilizantes, insumos y productos disponibles en los puntos de venta de la Cooperativa. La ficha oficial indica que aplica a asociados y no asociados.",
    term: "30 días",
    conditions: [
      "Para asociados, la ficha indica que no genera intereses corrientes si se paga oportunamente.",
      "Para no asociados, la ficha publicada indica interés corriente del 1% mensual.",
    ],
    requirements: [],
  },
  {
    name: "Crédito a particulares",
    description:
      "La ficha publicada presenta requisitos de solicitud para clientes particulares, pero no detalla allí monto, plazo ni tasa.",
    term: "Consultar condiciones",
    conditions: [
      "El solicitante y el deudor solidario deben tener buena calificación en centrales de riesgo, según la ficha.",
      "El deudor solidario debe ser propietario de un inmueble libre de gravámenes.",
    ],
    requirements: [
      "Fotocopias de cédula del cliente particular y del deudor solidario.",
      "Solicitud de crédito diligenciada, pagaré y formatos de declaración de asegurabilidad y protección de datos.",
      "Certificación de ingresos y consulta a centrales de riesgo.",
      "Asalariados: tres desprendibles de nómina y certificado laboral con cargo, antigüedad, tipo de contrato y salario.",
      "Independientes: estados financieros, documentos tributarios cuando apliquen, certificación de ingresos de contador público, certificado de Cámara de Comercio vigente y RUT.",
      "El deudor solidario debe presentar certificado de libertad y tradición con expedición no mayor a 30 días.",
    ],
  },
];

export const generalCreditRequirements = [
  "Tener como mínimo tres meses de afiliación a la Cooperativa.",
  "Contar con al menos $250.000 en aportes sociales.",
  "Demostrar capacidad de pago y solvencia económica.",
  "Demostrar buen hábito de pago.",
];

export const creditPaymentMethods = [
  "Efectivo. La ficha admite el pago de Futurito en efectivo cuando se haya cumplido la entrega de los kilos de café comprometidos.",
  "Tarjeta débito o crédito, excepto para pagar Futurito.",
  "Descuento mediante la venta del café.",
  "Consignación.",
  "Transferencia electrónica.",
];

export const creditServiceBenefits = [
  "La ficha institucional señala que una mayor fidelidad del asociado puede representar una tasa de interés menor.",
  "Crédito sin interés para repuestos de despulpadoras y productos Husqvarna, sujeto a las condiciones vigentes.",
  "Crédito sin interés para algunos productos Centrogral especificados por Coocentral: Verdadero, Amistar Ztra, Voliam Flexi y Touchdown.",
  "Convenios con entidades financieras y del sector cooperativo para créditos de sostenimiento e inversión con recursos FINAGRO.",
  "La ficha menciona posible condonación de intereses con recursos de la Prima FLO para asociados que cumplan las condiciones y paguen oportunamente.",
  "El pago oportuno puede contribuir al incremento de los aportes sociales, de acuerdo con la información institucional.",
];

export const newsArchive = [
  {
    slug: "acron-colombia-expo-cafes-2024",
    image: expoCafesImage,
    imageAlt: "Afiche de Expo Cafés de Colombia 2024 con Ferticoolombia y Acron",
    date: "2024-09-25",
    dateLabel: "25 de septiembre de 2024",
    category: "Café y mercados",
    title: "Acron Colombia y Coocentral en Expo Cafés de Colombia 2024",
    summary:
      "La publicación destaca una década de trabajo conjunto y la promoción de Ferticoolombia en el sector cafetero.",
    content: [
      "La publicación presenta Expo Cafés de Colombia 2024 como un espacio para mostrar los resultados de una década de trabajo entre Acron Colombia y Coocentral, y promover Ferticoolombia entre caficultores.",
      "El artículo destaca la cooperación para acercar soluciones de fertilización al sector cafetero y el trabajo conjunto alrededor de una agricultura sostenible.",
      "También relata una reunión del 27 de agosto en la que representantes de ambas organizaciones reafirmaron su intención de fortalecer la alianza iniciada diez años atrás.",
      "En esa publicación, Acron informó que no continuaría la cooperación logística con Calpine Colombia SAS tras la suspensión unilateral de despachos mencionada en el artículo.",
    ],
  },
  {
    slug: "feria-especialidad-cafe-tercera-edicion",
    image: specialtyFairImage,
    imageAlt: "Afiche de la tercera Feria de Especialidad con Café de Coocentral",
    date: "2023-02-06",
    dateLabel: "6 de febrero de 2023",
    category: "Ferias y cafés especiales",
    title: "Feria de Especialidad con Café: tercera edición",
    summary:
      "Anuncio de la tercera edición de la feria de Coocentral dedicada a los cafés especiales.",
    content: [
      "Coocentral anunció que la tercera edición de la Feria de Especialidad con Café se realizaría del 29 al 31 de marzo de 2023 en diferentes instalaciones de la Cooperativa.",
      "La actividad buscaba capacitar a asociados e hijos de asociados en procesos de poscosecha. La publicación esperaba reunir a 30 participantes durante tres días.",
      "El programa anunciado incluía análisis físico, tostación, catación y barismo, con charlas de expertos y la colaboración del cliente noruego TROPIQ.",
      "La convocatoria y las fechas corresponden a 2023; esta nota se conserva como parte del archivo histórico.",
    ],
  },
  {
    slug: "ficca-2022",
    image: ficcaImage,
    imageAlt: "Afiche de la segunda Feria Internacional del Café, Cacao y Agroturismo 2022",
    date: "2022-10-04",
    dateLabel: "4 de octubre de 2022",
    category: "Ferias y territorio",
    title: "Coocentral en la Feria Internacional del Café, Cacao y Agroturismo",
    summary:
      "Registro de la participación de la Cooperativa en la segunda edición de FICCA, realizada en 2022.",
    content: [
      "Coocentral participó en la segunda Feria Internacional del Café, Cacao y Agroturismo (FICCA 2022).",
      "La publicación institucional registra la realización del encuentro entre el 30 de septiembre y el 2 de octubre de 2022.",
      "Esta nota forma parte del archivo histórico de actividades de la Cooperativa.",
    ],
  },
  {
    slug: "exporta-con-nosotros",
    image: exportProgramImage,
    imageAlt: "Emblema del programa Exporta con Nosotros de Coocentral",
    date: "2022-09-12",
    dateLabel: "12 de septiembre de 2022",
    category: "Café y mercados",
    title: "Exporta con Nosotros",
    summary:
      "Presentación del programa de exportación de Coocentral para promover cafés huilenses en nuevos mercados.",
    content: [
      "Coocentral presentó Exporta con Nosotros como un programa para fomentar la calidad del café 100% Huila y conectarlo con nuevos mercados.",
      "La publicación relaciona la iniciativa con el crecimiento de la cultura exportadora en el mercado cafetero colombiano.",
      "El programa hace parte de los esfuerzos institucionales por dar visibilidad y abrir oportunidades para el café producido por las familias caficultoras del Huila.",
    ],
  },
  {
    slug: "que-hay-detras-de-nuestra-marca",
    image: founderStoryImage,
    imageAlt: "Don Máximo Vela, socio fundador de Coocentral, sosteniendo una taza de café",
    date: "2022-09-07",
    dateLabel: "7 de septiembre de 2022",
    category: "Nuestra historia",
    title: "¿Qué hay detrás de nuestra marca?",
    summary: "Una historia sobre Don Máximo Vela, socio fundador e imagen de Cafés Coocentral.",
    content: [
      "La publicación cuenta la historia de Don Máximo Vela, socio fundador de la Cooperativa e imagen de Cafés Coocentral.",
      "Coocentral recuerda que desde 1970 se producía café de calidad en la zona centro del Huila y que, en 1975, Don Máximo Vela y otros 53 caficultores se unieron para crear la Cooperativa Central de Caficultores del Huila.",
      "El artículo destaca la innovación y el desarrollo de programas y productos como parte de la continuidad del compromiso de sus fundadores.",
    ],
  },
  {
    slug: "orgullo-coocentral-barismo-sca",
    image: baristaImage,
    imageAlt: "Grupo de baristas en su ceremonia de certificación en Tecnicafé",
    date: "2022-09-05",
    dateLabel: "5 de septiembre de 2022",
    category: "Talento cafetero",
    title: "Orgullo Coocentral: certificación de barismo SCA",
    summary:
      "La publicación reconoce la certificación de barismo intermedio de Stephanie Rivera Quimbaya, hija de un asociado.",
    content: [
      "Coocentral reconoció a Stephanie Rivera Quimbaya, hija de un caficultor asociado, por obtener la certificación de barista intermedia de la Specialty Coffee Association (SCA).",
      "La publicación relata que Stephanie inició su trayectoria en 2016 y que su formación se desarrolló en dos etapas, en las que destacó por sus habilidades técnicas y personales.",
      "El reconocimiento fue recibido en el Parque Tecnológico de Innovación del Café (Tecnicafé), en el Cauca.",
    ],
  },
  {
    slug: "nueva-era-trabajo-colaborativo",
    image: coworkingNewsImage,
    imageAlt: "Equipo reunido en el espacio Coworking de Coocentral en Garzón",
    date: "2022-08-10",
    dateLabel: "10 de agosto de 2022",
    category: "Comunidad",
    title: "Una nueva era del trabajo colaborativo en Garzón",
    summary:
      "Presentación del Coworking Martha Stella Velásquez Bravo como espacio de trabajo colaborativo en Garzón.",
    content: [
      "La Cooperativa presentó el Coworking Martha Stella Velásquez Bravo como un espacio de trabajo colaborativo y tecnológico para la comunidad de Garzón y el Huila.",
      "El artículo describe el proyecto como una iniciativa que amplía la presencia de Coocentral más allá del sector cafetero y que fue desarrollada junto con The Laughing Man Coffee Company.",
      "La publicación invitó a asociados y habitantes de Garzón a participar en las actividades del espacio.",
    ],
  },
  {
    slug: "proyecto-incas-global-caficultores",
    image: incasProjectImage,
    imageAlt: "Equipo técnico acompaña a productores en el seguimiento del proyecto INCAS GLOBAL+",
    date: "2022-08-05",
    dateLabel: "5 de agosto de 2022",
    category: "Sostenibilidad",
    title: "Avances del proyecto INCAS GLOBAL+ en el centro del Huila",
    summary:
      "Seguimiento al trabajo realizado con productores de la región y aliados del proyecto.",
    content: [
      "El 3 de agosto de 2022, Coocentral recibió a representantes de GIZ para realizar el primer monitoreo del proyecto INCAS GLOBAL+ con productores del centro del Huila.",
      "Durante la jornada, los participantes realizaron actividades para revisar el estado de sus fincas y compartir avances del proyecto.",
      "Uno de los caficultores participantes relató mejoras en la infraestructura de beneficio de su finca. La nota indicaba que el proyecto continuaría su desarrollo y esperaba cubrir a 650 caficultores.",
    ],
  },
] as const;

type Service = { icon: LucideIcon; title: string; text: string };

export const agroServices: Service[] = [
  {
    icon: Scale,
    title: "Báscula oficial",
    text: "Pesaje certificado de tractomulas, camiones y camionetas, con derecho a repeso.",
  },
  {
    icon: Factory,
    title: "Trilla y tostión",
    text: "Trilla de lotes lavados, honeys y naturales; tostión, molienda y empaque por libra.",
  },
  {
    icon: Warehouse,
    title: "Almacenes Coocentral",
    text: "Líneas Agro, Hogar, Ferretería y Maquinaria, además de corresponsalía bancaria.",
  },
  {
    icon: FlaskConical,
    title: "Laboratorio de suelos y agua",
    text: "Análisis estándar, mejorado, premium, foliar y de agua con tarifa preferencial.",
  },
];

type BusinessUnit = {
  icon: LucideIcon;
  name: string;
  text: string;
  href?: string;
  internal?: boolean;
};

export const businessUnits: BusinessUnit[] = [
  {
    icon: Leaf,
    name: "FUNDECAFÉ",
    text: "Brazo social y técnico: extensión agropecuaria y formación en finca.",
    href: "https://www.fundecafe.com/",
  },
  {
    icon: Sprout,
    name: "Ferticoolombia",
    text: "Marca propia de fertilizantes e insumos, con planta mezcladora.",
    href: "https://ferticoolombia.com/",
  },
  {
    icon: Coffee,
    name: "Café Coocentral",
    text: "Cafés de alta calidad inspirados en el legado de Don Máximo.",
    href: "https://www.cafescoocentral.com.co/",
  },
  {
    icon: Store,
    name: "Tiendas Kahvé",
    text: "Cultura cafetera y degustación en múltiples métodos de extracción.",
    href: "/tiendas-kahve",
    internal: true,
  },
  {
    icon: Hotel,
    name: "Hotel Kahvé",
    text: "Hotel temático del café en Garzón para rutas turísticas y clientes.",
    href: "https://hotelkahve.com/",
  },
  {
    icon: Warehouse,
    name: "Almacenes Coocentral",
    text: "Red regional de insumos, hogar, ferretería y maquinaria.",
    href: "/almacenes",
    internal: true,
  },
  {
    icon: Presentation,
    name: "Cooworking",
    text: "Espacios para reuniones, capacitación, cocreación e innovación.",
    href: "https://coocentral.com/coworking/",
  },
  {
    icon: Building2,
    name: "Taller Aprendamos de Café",
    text: "Experiencia sensorial con catadores y baristas, del cultivo a la taza.",
  },
];

export const warehouseProductLines = [
  { name: "Línea agro", products: "Fertilizantes y agro-insumos." },
  {
    name: "Línea hogar",
    products: "Electrodomésticos, electro-hogar, muebles, artículos Rimax y calzado especializado.",
  },
  {
    name: "Línea ferretería",
    products: "Plásticos para secaderos y demás artículos de ferretería.",
  },
  {
    name: "Línea maquinaria",
    products: "Guadañas, despulpadores, desmucilaginadores, motosierras y demás maquinaria.",
  },
] as const;

export const warehouseLocations = [
  {
    municipality: "Garzón",
    name: "Centro Comercial El Molino",
    address: "Calle 3 #11-31",
    hours: [
      "Lunes a viernes · 7:00 a. m.–12:30 p. m. y 2:00–4:30 p. m.",
      "Sábado · 7:00 a. m.–1:00 p. m.",
    ],
  },
  {
    municipality: "Garzón",
    name: "C.C. Café",
    address: "Calle 2 #10A-58",
    hours: [
      "Lunes a viernes · 7:00 a. m.–12:30 p. m. y 2:00–4:30 p. m.",
      "Sábado · 7:00 a. m.–1:00 p. m.",
    ],
  },
  {
    municipality: "Garzón",
    name: "Ferretería · Nueva sede",
    address: "Carrera 12 #2-55",
    hours: [
      "Lunes a viernes · 7:00 a. m.–12:00 m. y 2:00–5:00 p. m.",
      "Sábado · 7:00 a. m.–1:00 p. m.",
    ],
  },
  {
    municipality: "Garzón",
    name: "Ferretería La 14",
    address: "Calle 9 #14-35",
    hours: [
      "Lunes a viernes · 7:00 a. m.–12:00 m. y 2:00–5:00 p. m.",
      "Sábado · 7:00 a. m.–1:00 p. m.",
    ],
  },
  {
    municipality: "Garzón",
    name: "Centro poblado Zuluaga",
    address: "Carrera 5 #2-45",
    hours: [
      "Martes a viernes · 7:00 a. m.–12:30 p. m. y 2:00–4:00 p. m.",
      "Sábado y domingo · 7:00 a. m.–1:00 p. m.",
    ],
  },
  {
    municipality: "Garzón",
    name: "Corregimiento de San Antonio del Pescado",
    address: "",
    hours: [
      "Martes a viernes · 7:00 a. m.–12:30 p. m. y 2:00–4:00 p. m.",
      "Sábado · 7:00 a. m.–12:30 p. m. y 2:00–4:00 p. m.",
      "Domingo · 7:00 a. m.–1:00 p. m.",
    ],
  },
  {
    municipality: "Gigante",
    name: "Sede principal",
    address: "Carrera 4 #3-92",
    hours: [
      "Lunes a viernes · 8:00 a. m.–12:30 p. m. y 2:00–5:00 p. m.",
      "Sábado · 7:00 a. m.–1:00 p. m.",
    ],
  },
  {
    municipality: "Gigante",
    name: "Inspección de Potrerillos",
    address: "",
    hours: [
      "Martes a viernes · 7:00 a. m.–12:30 p. m. y 2:00–4:30 p. m.",
      "Sábado · 7:00 a. m.–1:00 p. m.",
    ],
  },
  {
    municipality: "Guadalupe",
    name: "Sede principal",
    address: "Calle 4 #5-52, local 2",
    hours: [
      "Martes a viernes · 7:00 a. m.–12:30 p. m. y 2:00–4:30 p. m.",
      "Sábado y domingo · 7:00 a. m.–1:00 p. m.",
    ],
  },
  {
    municipality: "Agrado",
    name: "Sede principal",
    address: "Carrera 5 #4-35",
    hours: [
      "Martes a viernes · 7:00 a. m.–12:30 p. m. y 2:00–4:00 p. m.",
      "Sábado y domingo · 7:00 a. m.–1:00 p. m.",
    ],
  },
  {
    municipality: "Pital",
    name: "Sede principal",
    address: "Carrera 10 #8-68",
    hours: [
      "Martes a viernes · 7:00 a. m.–1:00 p. m. y 2:00–4:00 p. m.",
      "Sábado y domingo · 7:00 a. m.–1:00 p. m.",
    ],
  },
  {
    municipality: "Pital",
    name: "Inspección El Socorro",
    address: "",
    hours: [
      "Martes a viernes · 7:00 a. m.–12:30 p. m. y 2:00–4:00 p. m.",
      "Sábado · 7:00 a. m.–3:00 p. m.",
      "Domingo · 7:00 a. m.–1:00 p. m.",
    ],
  },
  {
    municipality: "Suaza",
    name: "Sede principal",
    address: "Calle 6 #4-33/45",
    hours: [
      "Lunes a viernes · 7:00 a. m.–12:30 p. m. y 2:00–4:30 p. m.",
      "Sábado · 7:00 a. m.–1:00 p. m.",
    ],
  },
  {
    municipality: "Tarqui",
    name: "Sede principal",
    address: "Carrera 6 #1-66",
    hours: [
      "Lunes a viernes · 7:00 a. m.–12:30 p. m. y 2:00–4:00 p. m.",
      "Sábado · 7:00 a. m.–1:00 p. m.",
    ],
  },
  {
    municipality: "Tarqui",
    name: "Centro poblado Quituro",
    address: "",
    hours: [
      "Lunes a viernes · 7:00 a. m.–12:00 m. y 2:00–4:30 p. m.",
      "Sábado · 7:00 a. m.–1:00 p. m.",
    ],
  },
  {
    municipality: "Tarqui",
    name: "Centro poblado Maito",
    address: "",
    hours: [
      "Lunes a viernes · 7:00 a. m.–12:00 m. y 2:00–4:00 p. m.",
      "Sábado · 7:00 a. m.–1:00 p. m.",
    ],
  },
] as const;

type DigitalTool = { icon: LucideIcon; name: string; text: string; href?: "/coonectate" };

export const digitalTools: DigitalTool[] = [
  {
    icon: Smartphone,
    name: "Coocentral App",
    text: "Trámites, saldos y aportes desde el celular.",
  },
  { icon: ClipboardCheck, name: "A-Catar", text: "Trazabilidad y calificación SCA de muestras." },
  { icon: Laptop, name: "Finapp", text: "Gestión centralizada del expediente crediticio." },
  {
    icon: Wifi,
    name: "Coonéctate",
    text: "Conectividad a internet en veredas aisladas.",
    href: "/coonectate",
  },
  { icon: Tv, name: "Coocentral TV", text: "Precios y noticias en las pantallas de los fielatos." },
];

type ServiceShowcase = {
  id: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  href?: string;
  action?: string;
};

export const serviceShowcase: ServiceShowcase[] = [
  {
    id: "coworking",
    title: "Coworking",
    summary:
      "Espacio de trabajo colaborativo en el Centro Comercial El Molino para reuniones, capacitación, creación de ideas y emprendimiento.",
    image: coworkingShowcaseImage,
    imageAlt: "Sala de reuniones del Coworking Coocentral en Garzón",
    href: "/coworking",
  },
  {
    id: "pic",
    title: "PIC · Parque Industrial del Café",
    summary:
      "Infraestructura que integra secado, trilla, tostión, almacenamiento y control de calidad para agregar valor al café del Huila.",
    image: "https://coocentral.com/wp-content/uploads/2026/05/jp_pic-1536x634.jpg",
    imageAlt: "Instalaciones del Parque Industrial del Café de Coocentral",
    href: "/pic",
  },
  {
    id: "almacenes-coocentral",
    title: "Almacenes Coocentral",
    summary:
      "Red de 17 tiendas en el centro del Huila con líneas agropecuaria, hogar, ferretería y maquinaria para las familias de la región.",
    image: historyImage,
    imageAlt: "Memoria de la caficultura del Huila, territorio atendido por la red de almacenes",
    href: "/almacenes",
  },
  {
    id: "ferticoolombia",
    title: "Ferticoolombia",
    summary:
      "Marca de fertilizantes de Coocentral con soluciones nutricionales, formulación propia y acompañamiento técnico para los cultivos.",
    image: ferticoolombiaLogo,
    imageAlt: "Logo de Ferticoolombia",
    href: "https://ferticoolombia.com/",
  },
  {
    id: "area-de-cafe",
    title: "Área de Café",
    summary:
      "Puntos de compra y venta de café verde y seco que acercan a los productores a la comercialización y al control de calidad.",
    image: qualityImage,
    imageAlt: "Selección y control de calidad de café verde",
    href: "/area-de-cafe",
  },
  {
    id: "cafe-coocentral",
    title: "Cafés Coocentral",
    summary:
      "Café tostado de origen Huila, desde opciones clásicas hasta cafés especiales y ediciones de origen para distintos momentos y preparaciones.",
    image: coocentralCoffeeImage,
    imageAlt: "Variedades de café tostado Coocentral",
    href: "https://www.cafescoocentral.com.co/",
    action: "Visitar tienda de café",
  },
  {
    id: "hoteles-kahve",
    title: "Hoteles Kahvé",
    summary:
      "Hotel temático del café en Garzón que recibe a visitantes, compradores y viajeros interesados en conocer el territorio cafetero.",
    image: hotelKahveImage,
    imageAlt: "Recepción del Hotel Kahvé en Garzón",
    href: "https://hotelkahve.com/",
  },
  {
    id: "tiendas-kahve",
    title: "Tiendas Kahvé",
    summary:
      "Espacios para disfrutar la cultura cafetera y degustar café en Garzón y Neiva, con distintas preparaciones y métodos.",
    image: qualityImage,
    imageAlt: "Selección de café verde, cultura cafetera que inspira Tiendas Kahvé",
    href: "/tiendas-kahve",
  },
  {
    id: "fundecafe",
    title: "Fundecafé",
    summary:
      "Fundación de apoyo social y técnico que acompaña a las familias con extensión agropecuaria, formación y fortalecimiento de la vida en la finca.",
    image: territoryImage,
    imageAlt: "Familia caficultora en una finca del Huila, comunidad acompañada por Fundecafé",
    href: "https://www.fundecafe.com/",
  },
  {
    id: "coonectate",
    title: "Coonéctate",
    summary:
      "Proyecto social que brinda internet confiable a familias rurales de la vereda Las Delicias, en Tarqui, para apoyar la educación, la comunicación, la productividad y el bienestar.",
    image: farmerImage,
    imageAlt: "Caficultor del Huila, imagen de contexto del proyecto de conectividad rural",
    href: "/coonectate",
  },
];

export const industrialProjects = [
  {
    name: "Planta Mezcladora de Fertilizantes",
    investment: "$4.800 M",
    allies: "Gobernación del Huila · JM Estrada · COOCENTRAL",
    impact: "Formulación a medida que beneficia a 2.000 productores.",
  },
  {
    name: "Torrefactora Industrial",
    investment: "$1.916 M",
    allies: "Gobernación del Huila · COOCENTRAL",
    impact: "Mayor capacidad de tostión para café tostado de origen.",
  },
  {
    name: "Central de Acopio de Garzón",
    investment: "$1.592 M",
    allies: "Gobernación del Huila · Alcaldía de Garzón · COOCENTRAL",
    impact: "Recepción, almacenamiento y estandarización del grano.",
  },
];

export const sustainabilityPillars = [
  {
    title: "Ambiental",
    text: "Cero deforestación con polígonos georreferenciados, agricultura de precisión y post-cosecha de bajo consumo hídrico.",
  },
  {
    title: "Social",
    text: "Equidad de género, relevo generacional, educación universitaria y protección para la salud y la vejez.",
  },
  {
    title: "Económica",
    text: "Compra permanente, estabilización de precios, crédito de fomento y distribución equitativa de primas.",
  },
];

export const certifications = [
  {
    name: "Fair Trade",
    detail: "Comercio Justo desde 2009",
    stats: [
      { value: "3.475", label: "asociados" },
      { value: "221.276", label: "sacos certificados" },
    ],
  },
  {
    name: "Rainforest Alliance",
    detail: "Biodiversidad y gestión ambiental",
    stats: [
      { value: "1.083", label: "asociados" },
      { value: "80.214", label: "sacos certificados" },
    ],
  },
  {
    name: "UTZ · FLO",
    detail: "Pedidos combinados según cada comprador",
    stats: [],
  },
];

export const cooperationProjects = [
  {
    name: "Cultivando el Cambio: café sostenible impulsado por mujeres",
    investment: "$4.549 M",
    reach: "200 mujeres asociadas",
    allies: "IDH · COOCENTRAL · FUNDECAFÉ",
  },
  {
    name: "Soluciones post-cosecha sostenibles en el Corredor Andino-Amazónico",
    investment: "$710 M",
    reach: "80 productores",
    allies: "Pacto Hylea · Conservación Internacional · COOCENTRAL · FUNDECAFÉ",
  },
  {
    name: "Sostenibilidad, inclusión de la mujer y relevo generacional",
    investment: "$2.441 M",
    reach: "300 jóvenes, 200 mujeres y 250 personas en certificación",
    allies: "GIZ · USAID · Laughing Man · COOCENTRAL · FUNDECAFÉ",
  },
];

export const allies = [
  "USAID",
  "GIZ",
  "IDH",
  "Conservación Internacional",
  "Pacto Hylea",
  "Laughing Man",
  "Gobernación del Huila",
  "Alcaldía de Garzón",
];

export const footerColumns = [
  {
    title: "La cooperativa",
    links: [
      { label: "¿Quiénes somos?", href: "https://coocentral.com/mision-y-vision/" },
      { label: "Reseña histórica", href: "https://coocentral.com/resena-historica/" },
      { label: "Estatutos y reglamentos", href: "https://coocentral.com/estatutos-y-reglamentos/" },
      {
        label: "Administración y control",
        href: "https://coocentral.com/administracion-y-control/",
      },
      { label: "Noticias", href: "/noticias" },
    ],
  },
  {
    title: "Beneficios",
    links: [
      { label: "Educación", href: "https://coocentral.com/educacion/" },
      { label: "Salud visual", href: "https://coocentral.com/salud-visual/" },
      { label: "Crédito y cartera", href: "https://coocentral.com/credito-y-cartera/" },
      { label: "Vivienda", href: "https://coocentral.com/vivienda/" },
      { label: "Previsión exequial", href: "https://coocentral.com/proteccion-exequial/" },
    ],
  },
  {
    title: "Transparencia",
    links: [
      {
        label: "Política de privacidad",
        href: "/documentos/cooperativa/politica-de-privacidad.pdf",
      },
      {
        label: "Abastecimiento responsable y cero deforestación",
        href: "/documentos/cooperativa/Politica_de_abastecimiento_responsable_y_cero_deforestacion.pdf",
      },
      {
        label: "Política anticorrupción y antisoborno",
        href: "/documentos/cooperativa/Politica_Anticorrupcion_y_Antisoborno.pdf",
      },
      {
        label: "Prevención de lavado de activos",
        href: "/documentos/cooperativa/Prevencion_Lavado_Activos_COOCENTRAL.pdf",
      },
      {
        label: "Artículo 364-5 E.T.",
        href: "/documentos/cooperativa/Articulo_364-5_Estatuto_Tributario_COOCENTRAL.pdf",
      },
    ],
  },
];

export const heroBadges = [
  { icon: HandCoins, label: "Crédito adaptado" },
  { icon: Leaf, label: "Cero deforestación" },
  { icon: Coffee, label: "100% arábica" },
];
