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

// Todo el contenido proviene del informe institucional (docs/informe-coocentral.pdf),
// salvo teléfonos, redes y enlaces legales, tomados de www.coocentral.com.

export const links = {
  store: "https://www.cafescoocentral.com.co/",
  app: "https://play.google.com/store/apps/details?id=com.coocentral.app&hl=es_CO",
  requirements: "https://coocentral.com/requisitos/",
  contact: "https://coocentral.com/contacto-2/",
  news: "https://coocentral.com/noticias/",
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
  { label: "¿Quiénes somos?", href: "/cooperativa", external: false },
  { label: "Reseña Histórica", href: "/historia", external: false },
  { label: "Estatutos y reglamentos", href: "https://coocentral.com/estatutos-y-reglamentos/", external: true },
  { label: "Administración y control", href: "https://coocentral.com/administracion-y-control/", external: true },
  { label: "Acta de compromiso Fundecafé", href: "https://coocentral.com/wp-content/uploads/2023/05/Acta-de-Compromiso-y-proteccion-datos.pdf", external: true },
  { label: "Política de privacidad", href: "https://coocentral.com/politica-de-privacidad/", external: true },
  { label: "Política de abastecimiento responsable y cero deforestación", href: "https://coocentral.com/img/Politica_de_abastecimiento_responsable_y_cero_deforestacion.pdf", external: true },
  { label: "Política Anticorrupción y Antisoborno", href: "https://coocentral.com/img/Politica_Anticorrupcion_y_Antisoborno.pdf", external: true },
  { label: "Prevención de lavado de activos", href: "https://coocentral.com/prevencion-de-lavado-de-activos/", external: true },
  { label: "Oficinas y Horarios", href: "/cooperativa#oficinas-y-horarios", external: false },
  { label: "Artículo 364-5 del estatuto tributario", href: "https://coocentral.com/articulo-364-5/", external: true },
  { label: "Reglamento interno de trabajo", href: "mailto:info@coocentral.co?subject=Solicitud%20del%20reglamento%20interno%20de%20trabajo", external: false },
] as const;

export const publicOffice = {
  address: "Carrera 12 # 2-55 · Barrio Rodrigo Lara, Garzón, Huila",
  hours: [
    { days: "Lunes a viernes", time: "7:00 a. m. – 12:00 m. y 2:00 – 5:00 p. m." },
    { days: "Sábado", time: "7:00 – 11:00 a. m." },
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

export const mission =
  "Ser una cooperativa responsable social y ambientalmente, donde la prioridad siempre serán nuestros asociados, clientes, empleados y comunidad, generando valor y bienestar con productos y servicios de calidad, y haciendo del agro un negocio posible y rentable mediante la innovación en la producción, transformación y consumo de café.";

export const vision =
  "En el 2027, como líderes transformamos el mercado del café y enseñamos el camino para que la actividad cafetera sea rentable y sostenible.";

export const principles = [
  "Libre adhesión y libre retiro",
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

type BusinessUnit = { icon: LucideIcon; name: string; text: string; href?: string };

export const businessUnits: BusinessUnit[] = [
  {
    icon: Leaf,
    name: "FUNDECAFÉ",
    text: "Brazo social y técnico: extensión agropecuaria y formación en finca.",
    href: "http://fundecafe.com/",
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
    href: "https://coocentral.com/tiendas-khave/",
  },
  {
    icon: Hotel,
    name: "Hotel Kahvé",
    text: "Hotel temático del café en Garzón para rutas turísticas y clientes.",
    href: "http://www.hotelkahve.co/",
  },
  {
    icon: Warehouse,
    name: "Almacenes Coocentral",
    text: "Red regional de insumos, hogar, ferretería y maquinaria.",
    href: "https://coocentral.com/almacenes-coocentral/",
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

type DigitalTool = { icon: LucideIcon; name: string; text: string };

export const digitalTools: DigitalTool[] = [
  { icon: Smartphone, name: "Coocentral App", text: "Trámites, saldos y aportes desde el celular." },
  { icon: ClipboardCheck, name: "A-Catar", text: "Trazabilidad y calificación SCA de muestras." },
  { icon: Laptop, name: "Finapp", text: "Gestión centralizada del expediente crediticio." },
  { icon: Wifi, name: "Coonéctate", text: "Conectividad a internet en veredas aisladas." },
  { icon: Tv, name: "Coocentral TV", text: "Precios y noticias en las pantallas de los fielatos." },
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
      { label: "Administración y control", href: "https://coocentral.com/administracion-y-control/" },
      { label: "Noticias", href: "https://coocentral.com/noticias/" },
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
      { label: "Política de privacidad", href: "https://coocentral.com/politica-de-privacidad/" },
      {
        label: "Abastecimiento responsable y cero deforestación",
        href: "https://coocentral.com/img/Politica_de_abastecimiento_responsable_y_cero_deforestacion.pdf",
      },
      {
        label: "Política anticorrupción y antisoborno",
        href: "https://coocentral.com/img/Politica_Anticorrupcion_y_Antisoborno.pdf",
      },
      {
        label: "Prevención de lavado de activos",
        href: "https://coocentral.com/prevencion-de-lavado-de-activos/",
      },
      { label: "Artículo 364-5 E.T.", href: "https://coocentral.com/articulo-364-5/" },
    ],
  },
];

export const heroBadges = [
  { icon: HandCoins, label: "Crédito adaptado" },
  { icon: Leaf, label: "Cero deforestación" },
  { icon: Coffee, label: "100% arábica" },
];
