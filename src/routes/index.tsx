import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Menu } from "lucide-react";
import logoAsset from "@/assets/coocentral-logo.svg.asset.json";
import heroImage from "@/assets/coocentral-caficultor-hero.jpg";
import territoryImage from "@/assets/coocentral-territorio.jpg";
import historyImage from "@/assets/coocentral-historia.jpg";
import qualityImage from "@/assets/coocentral-calidad.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Coocentral | Un ecosistema alrededor del caficultor" },
      { name: "description", content: "Conoce el ecosistema social, productivo y agroindustrial que acompaña a cerca de 4.000 familias caficultoras del Huila." },
      { property: "og:title", content: "Coocentral | Un ecosistema alrededor del caficultor" },
      { property: "og:description", content: "50 años transformando la caficultura del Huila con servicios, innovación y sostenibilidad." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  ["01", "Asistencia técnica", "Acompañamiento agronómico en finca para elevar productividad y calidad."],
  ["02", "Compra y calidad", "Recepción permanente, control de calidad y comercialización del café."],
  ["03", "Crédito e insumos", "Financiación adaptada, fertilizantes y herramientas para el campo."],
  ["04", "Bienestar", "Salud, educación, protección familiar y programas de relevo generacional."],
];

function Index() {
  return (
    <div className="min-h-screen bg-paper font-body text-ink antialiased">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-5 px-5 lg:px-10">
          <a href="#inicio" aria-label="Coocentral, inicio">
            <img src={logoAsset.url} alt="Coocentral" className="h-9 w-auto" width="180" height="40" />
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium lg:flex" aria-label="Navegación principal">
            <a href="#caficultor" className="text-ink/70 transition-colors hover:text-brand">Asociados</a>
            <a href="#cadena" className="text-ink/70 transition-colors hover:text-brand">Café</a>
            <a href="#servicios" className="text-ink/70 transition-colors hover:text-brand">Servicios</a>
            <a href="#sostenibilidad" className="text-ink/70 transition-colors hover:text-brand">Sostenibilidad</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="https://cafescoocentral.com.co" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-paper transition-opacity hover:opacity-90 sm:px-5">
              <span className="size-2 rounded-full bg-accent-soft" /> Comprar café
            </a>
            <details className="relative lg:hidden">
              <summary className="grid size-10 cursor-pointer list-none place-items-center rounded-full border border-border" aria-label="Abrir menú"><Menu className="size-5" /></summary>
              <nav className="absolute right-0 mt-2 grid min-w-48 gap-1 border border-border bg-paper p-2 shadow-xl">
                <a href="#caficultor" className="px-3 py-2 text-sm">Asociados</a><a href="#cadena" className="px-3 py-2 text-sm">Café</a><a href="#servicios" className="px-3 py-2 text-sm">Servicios</a><a href="#sostenibilidad" className="px-3 py-2 text-sm">Sostenibilidad</a>
              </nav>
            </details>
          </div>
        </div>
      </header>

      <main id="inicio">
        <section className="border-b border-border/70">
          <div className="mx-auto max-w-7xl px-5 py-7 lg:px-10">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] font-medium uppercase tracking-[0.18em] text-ink/50">
              <span>Edición institucional</span><span className="text-brand">50 años · 1975—2025</span><span>Huila · Colombia</span><span className="ml-auto hidden sm:inline">Ecosistema cafetero</span>
            </div>
          </div>
        </section>

        <section className="border-b border-border/70">
          <div className="mx-auto grid max-w-7xl gap-9 px-5 py-10 lg:grid-cols-12 lg:gap-12 lg:px-10 lg:py-16">
            <div className="flex flex-col justify-center lg:col-span-7">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">Cooperativa Central de Caficultores del Huila</p>
              <h1 className="max-w-[19ch] font-display text-[2.55rem] font-normal leading-[1.08] sm:text-5xl lg:text-6xl">
                Más que una cooperativa: un <em className="text-brand">ecosistema</em> alrededor del caficultor.
              </h1>
              <p className="mt-6 max-w-[58ch] text-base leading-7 text-ink/70 lg:text-lg">Desde 1975 articulamos producción, industria, financiamiento y desarrollo humano para hacer de la caficultura un negocio rentable y sostenible.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#ecosistema" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-90">Conocer el ecosistema <ArrowRight className="size-4" /></a>
                <a href="#servicios" className="inline-flex items-center rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-brand hover:text-brand">Explorar servicios</a>
              </div>
            </div>
            <figure className="lg:col-span-5">
              <img src={heroImage} alt="Caficultor del Huila con una cosecha de café" className="aspect-[4/5] w-full object-cover" width="1088" height="1360" />
              <figcaption className="mt-3 text-xs leading-5 text-ink/50">El caficultor es el centro de cada decisión cooperativa.</figcaption>
            </figure>
          </div>
        </section>

        <section className="bg-ink text-paper" aria-label="Cifras de impacto">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-11 lg:grid-cols-4 lg:px-10">
            {[['Cerca de 4.000','Asociados y familias'],['7','Municipios núcleo'],['+9.000 ha','Superficie productiva'],['+50 años','Liderazgo continuo']].map(([value,label], index) => <div key={label} className="editorial-reveal" style={{animationDelay:`${index * 80}ms`}}><div className="font-display text-3xl font-bold text-accent-soft sm:text-4xl lg:text-5xl">{value}</div><div className="mt-2 text-[10px] font-medium uppercase tracking-[0.16em] text-paper/60 sm:text-[11px]">{label}</div></div>)}
          </div>
        </section>

        <section id="caficultor" className="border-b border-border/70">
          <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
            <div className="flex items-baseline justify-between gap-6"><h2 className="font-display text-3xl font-normal lg:text-4xl">El caficultor en el centro</h2><span className="hidden text-[11px] font-medium uppercase tracking-[0.16em] text-ink/40 sm:inline">Territorio · Familia · Futuro</span></div>
            <div className="mt-8 grid gap-9 lg:grid-cols-12">
              <figure className="lg:col-span-7"><img src={territoryImage} alt="Familia caficultora recorriendo una finca del Huila" loading="lazy" className="aspect-video w-full object-cover" width="1536" height="864" /><figcaption className="mt-3 text-sm text-ink/50">El modelo cooperativo integra familias cafeteras en el centro y sur del Huila.</figcaption></figure>
              <blockquote className="self-center lg:col-span-5 lg:pl-6"><p className="font-display text-xl italic leading-8 lg:text-2xl">“El café es una continua bendición de Dios, y Coocentral es la mejor opción para hacer realidad los sueños de los caficultores.”</p><footer className="mt-6 text-sm font-semibold text-brand">José Ovidio Aldana · Caficultor asociado</footer></blockquote>
            </div>
          </div>
        </section>

        <section id="servicios" className="border-b border-border/70">
          <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
            <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Acompañamiento integral</p><h2 className="mt-3 font-display text-3xl font-normal lg:text-4xl">Servicios que fortalecen la vida en la finca</h2></div>
            <div className="mt-9 grid overflow-hidden border border-border sm:grid-cols-2 lg:grid-cols-4">{services.map(([n,title,copy]) => <article key={n} className="border-b border-border p-6 last:border-b-0 sm:border-r lg:border-b-0"><span className="font-display text-lg font-bold text-brand">{n}</span><h3 className="mt-3 font-display text-lg">{title}</h3><p className="mt-2 text-sm leading-6 text-ink/60">{copy}</p></article>)}</div>
          </div>
        </section>

        <section id="cadena" className="border-b border-border/70">
          <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-12"><div className="lg:col-span-5"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Cadena de valor completa</p><h2 className="mt-3 font-display text-3xl font-normal lg:text-4xl">De la finca al consumidor final</h2><p className="mt-5 max-w-[48ch] leading-7 text-ink/70">COOCENTRAL acompaña cada etapa: recolección, compra, control de calidad, trilla, tostión, empaque y comercialización nacional e internacional.</p><div className="mt-7 flex flex-wrap gap-2">{['Finca','Compra','Calidad','Trilla','Tostión','Exportación'].map(item => <span key={item} className="border border-border bg-accent-soft/15 px-3 py-1.5 text-sm font-medium">{item}</span>)}</div></div><figure className="lg:col-span-7"><img src={qualityImage} alt="Selección y control de calidad del café" loading="lazy" className="aspect-[4/3] w-full object-cover" width="1024" height="768" /></figure></div>
          </div>
        </section>

        <section id="ecosistema" className="border-b border-border/70">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-12 lg:px-10 lg:py-20"><div className="lg:col-span-5"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">1975—2025</p><h2 className="mt-3 font-display text-3xl font-normal lg:text-4xl">Cincuenta años de territorio</h2><p className="mt-5 leading-7 text-ink/70">De 54 pioneros en Garzón a un ecosistema agroindustrial con asistencia técnica, almacenes, Ferticolombia, Café Coocentral, Tiendas y Hotel Kahvé, herramientas digitales y cooperación internacional.</p><dl className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6"><div><dt className="text-xs uppercase tracking-[0.14em] text-ink/50">Inversión social y productiva</dt><dd className="mt-2 font-display text-2xl text-brand">USD 7,5 M</dd></div><div><dt className="text-xs uppercase tracking-[0.14em] text-ink/50">Educación superior</dt><dd className="mt-2 font-display text-2xl text-brand">+350 estudiantes</dd></div></dl></div><figure className="lg:col-span-7"><img src={historyImage} alt="Memoria histórica de la caficultura huilense" loading="lazy" className="aspect-video w-full object-cover" width="1536" height="864" /></figure></div>
        </section>

        <section id="sostenibilidad" className="border-b border-border/70">
          <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20"><div className="grid gap-10 lg:grid-cols-12"><div className="lg:col-span-5"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Triple impacto</p><h2 className="mt-3 font-display text-3xl font-normal lg:text-4xl">Sostenibilidad que se demuestra</h2></div><div className="grid gap-6 sm:grid-cols-3 lg:col-span-7"><article><span className="font-display text-2xl text-brand">01</span><h3 className="mt-3 font-display text-lg">Ambiental</h3><p className="mt-2 text-sm leading-6 text-ink/60">Cero deforestación, agricultura de precisión y menor consumo de agua.</p></article><article><span className="font-display text-2xl text-brand">02</span><h3 className="mt-3 font-display text-lg">Social</h3><p className="mt-2 text-sm leading-6 text-ink/60">Educación, salud, equidad de género y relevo generacional.</p></article><article><span className="font-display text-2xl text-brand">03</span><h3 className="mt-3 font-display text-lg">Económico</h3><p className="mt-2 text-sm leading-6 text-ink/60">Compra permanente, crédito y primas de comercio justo.</p></article></div></div><div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-6 text-sm font-semibold text-ink/60"><span>Fairtrade desde 2009</span><span>Rainforest Alliance</span><span>UTZ</span><span>FLO</span></div></div>
        </section>

        <section className="bg-ink text-paper"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-12 lg:px-10 lg:py-16"><div className="lg:col-span-7"><h2 className="max-w-[18ch] font-display text-3xl font-normal leading-tight lg:text-5xl">El futuro del café se cultiva juntos.</h2><p className="mt-5 max-w-[52ch] leading-7 text-paper/65">Atención a asociados, productores, compradores y aliados desde el corazón del Huila.</p></div><address className="space-y-5 border-l border-paper/15 pl-6 not-italic lg:col-span-5"><div><span className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent-soft">Oficina principal</span><p className="mt-1 text-sm leading-6 text-paper/80">Centro Comercial El Molino<br />Carrera 12 No. 2-56 · Garzón, Huila</p></div><div><span className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent-soft">Contacto</span><p className="mt-1 text-sm text-paper/80">info@coocentral.co</p></div></address></div></section>
      </main>

      <footer className="border-t border-border bg-paper"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-ink/50 sm:flex-row sm:items-center sm:justify-between lg:px-10"><img src={logoAsset.url} alt="Coocentral" className="h-7 w-auto opacity-70" width="140" height="31" /><span>© 2026 Cooperativa Central de Caficultores del Huila</span></div></footer>
    </div>
  );
}
