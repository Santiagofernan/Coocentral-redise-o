import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";

import historyImage from "@/assets/coocentral-historia.jpg";
import { timeline } from "@/content/coocentral";

import { SectionHeading } from "./section-heading";

export function History() {
  const timelineRef = useRef<HTMLOListElement>(null);
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    const track = timelineRef.current;
    if (!track) return;

    const updateControls = () => {
      setCanScrollPrevious(track.scrollLeft > 1);
      setCanScrollNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 1);
    };

    updateControls();
    track.addEventListener("scroll", updateControls, { passive: true });
    window.addEventListener("resize", updateControls);

    return () => {
      track.removeEventListener("scroll", updateControls);
      window.removeEventListener("resize", updateControls);
    };
  }, []);

  const scrollTimeline = (direction: -1 | 1) => {
    const track = timelineRef.current;
    if (!track) return;

    const firstCard = track.querySelector("li");
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const distance = (firstCard?.getBoundingClientRect().width ?? track.clientWidth) + gap;
    track.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  return (
    <section id="historia" className="relative overflow-hidden bg-forest-deep text-paper">
      <span className="grain absolute inset-0 opacity-40" />
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 220"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-52 w-full text-lime/60"
      >
        <g
          className="nature-root-group"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        >
          <path
            className="nature-root-path"
            d="M0 220C75 196 76 169 132 146s66-52 108-82 68-44 101-64"
          />
          <path
            className="nature-root-path"
            d="M72 220c35-35 52-41 91-53s53-35 75-67 43-38 69-48"
          />
          <path
            className="nature-root-path"
            d="M239 89c-5-29-27-42-44-59M132 146c-10-27-6-45 5-64"
          />
          <path
            className="nature-root-path"
            d="M1200 220c-75-24-76-51-132-74s-66-52-108-82-68-44-101-64"
          />
          <path
            className="nature-root-path"
            d="M1128 220c-35-35-52-41-91-53s-53-35-75-67-43-38-69-48"
          />
          <path className="nature-root-path" d="M961 89c5-29 27-42 44-59m63 116c10-27 6-45-5-64" />
        </g>
      </svg>
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              tone="dark"
              eyebrow="Herencia pionera"
              title={
                <>
                  “El café me lo ha <em className="text-lime">dado todo</em>.”
                </>
              }
            />
            <div className="reveal mt-8 space-y-5 text-base leading-8 text-paper/75 lg:text-lg">
              <p>
                A los 15 años, Don Máximo sembró su primer cafetal con el deseo de ser un hombre
                independiente y conquistar el corazón de Doña Leonilde, su compañera de vida y madre
                de sus siete hijos.
              </p>
              <p>
                Motivado por su amigo Guillermo Guerrero, se unió a otros 54 caficultores para
                fundar la cooperativa en 1975. Hoy su rostro es la imagen de Café Coocentral y
                símbolo del relevo generacional de las familias huilenses.
              </p>
            </div>
          </div>
          <figure className="reveal relative lg:col-span-6">
            <img
              src={historyImage}
              alt="Memoria histórica de la caficultura huilense"
              loading="lazy"
              width="1536"
              height="864"
              className="aspect-[4/3] w-full rounded-3xl object-cover"
            />
            <figcaption className="absolute -bottom-6 left-6 rounded-2xl bg-lime px-6 py-4 text-forest-deep shadow-xl">
              <span className="block font-display text-4xl font-medium leading-none">54</span>
              <span className="text-xs font-bold uppercase tracking-[0.15em]">
                Pioneros fundadores
              </span>
            </figcaption>
          </figure>
        </div>

        <div className="mt-24 flex items-end justify-between gap-6">
          <h3 className="reveal text-3xl font-medium lg:text-4xl">Medio siglo de evolución</h3>
          <p className="hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-paper/50 sm:flex">
            Explora la línea de tiempo <MoveRight className="size-4" />
          </p>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl pb-20 lg:pb-32">
        <div className="mb-4 hidden items-center justify-between px-5 lg:flex lg:px-10">
          <button
            type="button"
            aria-label="Ver años anteriores"
            disabled={!canScrollPrevious}
            onClick={() => scrollTimeline(-1)}
            className="grid size-12 place-items-center rounded-full border border-paper/20 text-paper transition-all hover:border-lime hover:bg-lime hover:text-forest-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronLeft aria-hidden="true" className="size-6" />
          </button>
          <button
            type="button"
            aria-label="Ver años siguientes"
            disabled={!canScrollNext}
            onClick={() => scrollTimeline(1)}
            className="grid size-12 place-items-center rounded-full border border-paper/20 text-paper transition-all hover:border-lime hover:bg-lime hover:text-forest-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronRight aria-hidden="true" className="size-6" />
          </button>
        </div>
        <ol
          ref={timelineRef}
          tabIndex={0}
          aria-label="Línea de tiempo 1975 a 2025"
          className="relative flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-5 [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-lime [&::-webkit-scrollbar]:hidden lg:px-10"
        >
          {timeline.map((item) => (
            <li
              key={item.year}
              className="group relative flex min-h-[27rem] w-[min(18rem,calc(100vw-2.5rem))] shrink-0 snap-start flex-col rounded-3xl border border-paper/12 bg-paper/5 p-7 transition-colors hover:border-lime/60 hover:bg-paper/10 sm:w-80"
            >
              <span className="block font-display text-4xl font-medium tracking-tight text-lime">
                {item.year}
              </span>
              <span className="mt-4 block h-px w-10 bg-paper/25 transition-all group-hover:w-20 group-hover:bg-lime" />
              <p className="mt-4 text-sm leading-6 text-paper/75">{item.text}</p>
              <div className="mt-auto pt-6">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                  className="aspect-video w-full rounded-2xl border border-paper/10 object-cover"
                />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
