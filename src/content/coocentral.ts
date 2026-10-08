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
  type LucideIcon,
} from "lucide-react";
import ferticoolombiaLogo from "@/assets/Servicios/Ferticoolombia/Logo Ferticoolombia TRAZO BLANCO.png";
import almacenesCoocentralImage from "@/assets/Servicios/Almacenes/Almacenes Coocentral.png";
import fundecafeImage from "@/assets/Servicios/Fundecafe/Fundecafe.jpg";
import hotelKahveImage from "@/assets/Servicios/Hotel_Kahve/Planta.webp";
import coworkingShowcaseImage from "@/assets/Servicios/Coworking/YDRAY-IMG_9436-1-scaled.webp";
import coocentralCoffeeImage from "@/assets/Servicios/Cafes_coocentral/Cafe.webp";
import tiendasKahveImage from "@/assets/Servicios/Nueva carpeta/Plaza Rosario y Café Kahvé.png";
import creditFondoRotatorioImage from "@/assets/creditos/fondo-rotatorio.png";
import creditFuturitoImage from "@/assets/creditos/futurito.png";
import creditAnticipoSecadoImage from "@/assets/creditos/anticipo-secado.png";
import creditCupoGeneralImage from "@/assets/creditos/cupo-general.png";
import creditCheque30DiasImage from "@/assets/creditos/cheque-30-dias.png";
import creditParticularesImage from "@/assets/creditos/credito-particulares.png";
import creditCostsGuaranteesImage from "@/assets/creditos/costos-y-garantias.png";

// Todo el contenido proviene del informe institucional (docs/informe-coocentral.pdf),
// salvo teléfonos, redes y enlaces legales, tomados de www.coocentral.com.

export const links = {
  store: "https://www.cafescoocentral.com.co/",
  app: "https://play.google.com/store/apps/details?id=com.coocentral.app&hl=es_CO",
  appStore: "https://apps.apple.com/co/app/nueva-app-red-coopcentral/id6742431196",
  requirements: "https://coocentral.com/requisitos/",
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
  { label: "YouTube", href: "https://www.youtube.com/@CoocentralSistemas" },
  { label: "TikTok", href: "https://www.tiktok.com/@coocentral" },
] as const;

export const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Cooperativa", href: "/cooperativa" },
  { label: "Asociarme", href: "/asociarme" },
  { label: "Café", href: "/cafe" },
  { label: "Servicios", href: "/servicios" },
] as const;

export const cooperativeResources = [
  { label: "¿Quiénes somos?", href: "/cooperativa#quienes-somos", external: false },
  { label: "Crédito y cartera", href: "/credito-y-cartera", external: false },
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
  {
    label: "Historia",
    description: "Recorre el camino de Coocentral desde 1975.",
    href: "/historia",
  },
  {
    label: "Sostenibilidad",
    description: "Conoce nuestro compromiso con las familias y el territorio.",
    href: "/sostenibilidad",
  },
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
    text: "Central de Acopio y Planta Mezcladora de Fertilizantes.",
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

export const creditProductDetails = [
  {
    slug: "fondo-rotatorio",
    name: "Fondo Rotatorio",
    image: creditFondoRotatorioImage,
    imageAlt: "Ilustración oficial de la línea Fondo Rotatorio de Coocentral",
    summary:
      "Crédito inmediato para comprar productos disponibles en los almacenes de la Cooperativa.",
    description:
      "La ficha oficial indica que puede prestarse hasta el 90% del valor de los aportes sociales. No requiere deudor solidario; los aportes son la garantía del crédito.",
    term: "6 meses",
    requirements: [
      "Fotocopia de la cédula.",
      "Diligenciar la solicitud de crédito.",
      "Firmar el pagaré.",
      "Firmar el formato de cruce de aportes.",
      "Firmar el formato de declaración de asegurabilidad.",
      "Firmar el formato de protección de datos del asociado.",
    ],
  },
  {
    slug: "futurito",
    name: "Futurito",
    image: creditFuturitoImage,
    imageAlt: "Ilustración oficial de la línea Futurito de Coocentral",
    summary: "Crédito en efectivo para apoyar el pago de la recolección de café.",
    description:
      "Exclusivo para asociados que venden el 100% de su producción a Coocentral. El plazo es de 30 días, mientras se seca y entrega el café comprometido. El valor se descuenta de la venta del café y se paga solo capital, siempre que se cancele oportunamente y se cumpla la entrega de los kilos comprometidos. Requiere deudor solidario.",
    term: "30 días",
    requirements: [
      "Fotocopia de la cédula del asociado y del deudor solidario.",
      "Diligenciar la solicitud de crédito.",
      "Firmar el pagaré con el deudor solidario.",
      "El asociado firma el formato de cruce de aportes y el formato de declaración de asegurabilidad.",
      "Firmar los formatos de protección de datos del asociado y del deudor solidario.",
      "Cancelar la consulta a centrales de riesgo del asociado y del deudor solidario; vigencia publicada: un año.",
      "Presentar certificación del técnico de la Cooperativa (récord) que confirme que cuenta con café para secar y cumplir el compromiso de entrega y pago oportuno.",
      "Tener la visita técnica actualizada; vigencia publicada: un año.",
    ],
  },
  {
    slug: "anticipo-secado",
    name: "Anticipo secado",
    image: creditAnticipoSecadoImage,
    imageAlt: "Ilustración oficial de la línea Anticipo secado de Coocentral",
    summary: "Anticipo sobre el café verde entregado en la planta para el servicio de secado.",
    description:
      "La ficha oficial describe un anticipo del 50% del café verde entregado en la planta de la Cooperativa. El valor se descuenta de la venta del café y, si se cancela oportunamente, se paga solo capital, sin costo financiero.",
    term: "15 días",
    requirements: [
      "Presentar el recibo entregado en la planta de secado para liquidar el anticipo.",
    ],
  },
  {
    slug: "cupo-general",
    name: "Cupo General",
    image: creditCupoGeneralImage,
    imageAlt: "Ilustración oficial de la línea Cupo General de Coocentral",
    summary: "Financiación para compras en almacenes, SOAT y bono Merca 100.",
    description:
      "Permite financiar insumos, herramientas agrícolas y tecnológicas, electrodomésticos, calzado, SOAT, material de ferretería y bono Merca 100. Asociados del programa 100% pueden acceder cada mes al bono de $200.000 para comprar su remesa. Para SOAT y celulares se cobra la tasa que corresponda según la calificación; la compra de celulares aplica para asociados y no asociados.",
    term: "6 meses; tasa según calificación",
    requirements: [
      "Fotocopia de la cédula del asociado y del deudor solidario, cuando aplique.",
      "Diligenciar la solicitud de crédito.",
      "Firmar pagaré con deudor solidario, si aplica.",
      "El asociado firma los formatos de cruce de aportes y declaración de asegurabilidad.",
      "Firmar los formatos de protección de datos del asociado y del deudor solidario.",
      "Cancelar la consulta a centrales de riesgo del asociado y del deudor solidario; vigencia publicada: un año.",
      "Para compras de fertilizantes o insumos, presentar la recomendación del técnico de la Cooperativa (récord).",
      "Tener la visita técnica actualizada; vigencia publicada: un año.",
    ],
  },
  {
    slug: "cheque-30-dias",
    name: "Cheque a 30 días",
    image: creditCheque30DiasImage,
    imageAlt: "Ilustración oficial de la línea Cheque a 30 días de Coocentral",
    summary: "Crédito para comprar fertilizantes, insumos y productos de los puntos de venta.",
    description:
      "Aplica para asociados y no asociados. Para asociados, no genera intereses corrientes si se cancela oportunamente. Para no asociados, la ficha oficial publicada indica un interés corriente del 1% mensual.",
    term: "30 días",
    requirements: [],
  },
  {
    slug: "credito-a-particulares",
    name: "Crédito a particulares",
    image: creditParticularesImage,
    imageAlt: "Ilustración oficial de la línea Crédito a particulares de Coocentral",
    summary: "Consulta los documentos y condiciones de solicitud para clientes particulares.",
    description:
      "La ficha oficial publica requisitos para clientes particulares, pero no especifica monto, tasa ni plazo. El cliente y el deudor solidario deben tener buena calificación en centrales de riesgo. El deudor solidario debe ser propietario de un inmueble libre de gravámenes.",
    term: "Consultar condiciones",
    requirements: [
      "Fotocopia de la cédula del cliente particular y del deudor solidario.",
      "Diligenciar la solicitud de crédito y firmar el pagaré con el deudor solidario.",
      "El cliente firma el formato de declaración de asegurabilidad.",
      "Firmar los formatos de protección de datos del cliente particular y del deudor solidario.",
      "Cancelar la consulta a centrales de riesgo del cliente y del deudor solidario; ambos deben tener buena calificación.",
      "Certificar los ingresos.",
      "Asalariados: presentar los tres últimos desprendibles de nómina y certificado laboral con cargo, tiempo de vinculación, tipo de contrato y salario mensual.",
      "Independientes: presentar estados financieros del año anterior y al corte más reciente, declaración de renta de los dos últimos años cuando aplique, certificado de ingresos de contador público, certificado de Cámara de Comercio expedido en los últimos 30 días y fotocopia del RUT.",
      "El deudor solidario debe presentar certificado de libertad y tradición de un inmueble libre de gravámenes, expedido en los últimos 30 días.",
    ],
  },
];

export const creditCostsGuarantees = {
  image: creditCostsGuaranteesImage,
  imageAlt: "Tabla oficial de costos y garantías de los créditos Coocentral",
};

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

type DigitalTool = { icon: LucideIcon; name: string; text: string };

export const digitalTools: DigitalTool[] = [
  {
    icon: Smartphone,
    name: "Coocentral App",
    text: "Trámites, saldos y aportes desde el celular.",
  },
  { icon: ClipboardCheck, name: "A-Catar", text: "Trazabilidad y calificación SCA de muestras." },
  { icon: Laptop, name: "Finapp", text: "Gestión centralizada del expediente crediticio." },
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
    image: almacenesCoocentralImage,
    imageAlt: "Almacén Coocentral con productos e insumos para las familias de la región",
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
    image: coocentralCoffeeImage,
    imageAlt: "Presentación de cafés tostados Coocentral",
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
    image: tiendasKahveImage,
    imageAlt: "Sede de Tiendas Kahvé en el centro comercial Plaza Rosario",
    href: "/tiendas-kahve",
  },
  {
    id: "fundecafe",
    title: "Fundecafé",
    summary:
      "Fundación de apoyo social y técnico que acompaña a las familias con extensión agropecuaria, formación y fortalecimiento de la vida en la finca.",
    image: fundecafeImage,
    imageAlt: "Logo de Fundecafé, construimos desarrollo rural sostenible",
    href: "https://www.fundecafe.com/",
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
