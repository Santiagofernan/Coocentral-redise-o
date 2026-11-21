import { ArrowDown, ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import finca from "@/assets/Inicio/finca.avif";
import coffeeMobile from "@/assets/Servicios/Ferticoolombia/Cafetal/h2-mobile.avif";
import coffee from "@/assets/Servicios/Ferticoolombia/Cafetal/h2.avif";
import front from "@/assets/Inicio/frente-desktop.webp";
import frontPicMobile from "@/assets/Inicio/frente_PIC-960.webp";
import frontPic from "@/assets/Inicio/frente_PIC-desktop.webp";
import { heroBadges } from "@/content/coocentral";
import { useCurrentTime } from "@/hooks/use-current-time";
import { getCoocentralAnniversary, getCoocentralCalendarYear } from "@/lib/coocentral-anniversary";

const heroImages = [
  { src: finca, srcSet: `${finca} 1672w` },
  { src: coffeeMobile, srcSet: `${coffeeMobile} 768w, ${coffee} 1672w` },
  { src: front, srcSet: `${front} 1152w` },
  { src: frontPicMobile, srcSet: `${frontPicMobile} 960w, ${frontPic} 1920w` },
];

export function Hero() {
  const [activeImage, setActiveImage] = useState(0);
  const [loadedImageIndexes, setLoadedImageIndexes] = useState([0]);
  const today = useCurrentTime() ?? new Date();
  const { count: anniversaryCount } = getCoocentralAnniversary(today);
  const currentYear = getCoocentralCalendarYear(today);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let timeoutId: number;
    let nextImageIndex = 1;

    const showNextImage = () => {
      timeoutId = window.setTimeout(() => {
        const imageIndex = nextImageIndex;
        const image = new window.Image();

        image.onload = () => {
          if (cancelled) return;

          setLoadedImageIndexes((current) =>
            current.includes(imageIndex) ? current : [...current, imageIndex],
          );
          setActiveImage(imageIndex);
          nextImageIndex = (imageIndex + 1) % heroImages.length;
          showNextImage();
        };
        image.onerror = () => {
          if (cancelled) return;

          nextImageIndex = (imageIndex + 1) % heroImages.length;
          showNextImage();
        };
        const nextImage = heroImages[imageIndex];
        if (!nextImage) {
          throw new Error(`No hay una imagen de portada para el índice ${imageIndex}.`);
        }

        image.sizes = "100vw";
        image.srcset = nextImage.srcSet;
        image.src = nextImage;
      }, 7000);
    };

    showNextImage();

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[calc(100svh-4.5rem)] items-end overflow-hidden bg-zinc-900 text-paper lg:min-h-[calc(100svh-5rem)]"
    >
      {heroImages.map(
        (image, index) =>
          loadedImageIndexes.includes(index) && (
            <img
              key={image.src}
              src={image.src}
              srcSet={image.srcSet}
              sizes="100vw"
              alt=""
              aria-hidden="true"
              fetchPriority={index === 0 ? "high" : "auto"}
              className={`absolute inset-0 -z-20 size-full object-cover object-center transition-opacity duration-1000 motion-reduce:transition-none ${
                index === activeImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ),
      )}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-zinc-900/40 via-zinc-900/60 to-zinc-900/85 lg:bg-linear-to-r lg:from-zinc-900/75 lg:via-zinc-900/55 lg:to-zinc-900/25" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <svg
          viewBox="0 0 36 60"
          fill="none"
          className="nature-leaf nature-leaf--one absolute -top-16 left-[18%] size-8 text-lime/45"
        >
          <path
            d="M18 3C8 12 4 24 10 34c2 4 5 6 8 7 3-1 6-3 8-7 6-10 2-22-8-31Z"
            fill="currentColor"
          />
          <path
            d="M18 40V13m0 16-7-8m7 1 7-8"
            stroke="oklch(0.22 0.045 158 / 0.55)"
            strokeWidth="1.2"
          />
        </svg>
        <svg
          viewBox="0 0 36 60"
          fill="none"
          className="nature-leaf nature-leaf--two absolute -top-20 left-[57%] size-6 text-lime/35"
        >
          <path
            d="M18 3C8 12 4 24 10 34c2 4 5 6 8 7 3-1 6-3 8-7 6-10 2-22-8-31Z"
            fill="currentColor"
          />
          <path
            d="M18 40V13m0 16-7-8m7 1 7-8"
            stroke="oklch(0.22 0.045 158 / 0.55)"
            strokeWidth="1.2"
          />
        </svg>
        <svg
          viewBox="0 0 36 60"
          fill="none"
          className="nature-leaf nature-leaf--three absolute -top-24 left-[82%] size-7 text-paper/30"
        >
          <path
            d="M18 3C8 12 4 24 10 34c2 4 5 6 8 7 3-1 6-3 8-7 6-10 2-22-8-31Z"
            fill="currentColor"
          />
          <path
            d="M18 40V13m0 16-7-8m7 1 7-8"
            stroke="oklch(0.22 0.045 158 / 0.55)"
            strokeWidth="1.2"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-8 pt-[calc(41.3vw+2rem)] sm:px-8 sm:pb-12 sm:pt-[calc(41.3vw+2.5rem)] lg:px-10 lg:pb-16 lg:pt-20">
        <div className="max-w-4xl">
          <h1
            className="editorial-reveal max-w-3xl text-[clamp(2.4rem,9vw,4.5rem)] font-medium leading-[1.02] tracking-normal drop-shadow-[0_2px_10px_oklch(0.16_0.035_158/0.8)] sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "120ms" }}
          >
            Más que una cooperativa: una <em className="font-normal text-lime">familia cafetera</em>
          </h1>
          <p
            className="editorial-reveal mt-5 max-w-[56ch] text-base leading-7 text-paper/85 sm:mt-7 sm:text-lg sm:leading-8 lg:text-xl"
            style={{ animationDelay: "240ms" }}
          >
            Desde 1975 articulamos producción, industria, financiamiento y desarrollo humano para
            que la caficultura del Huila sea rentable, tecnificada y sostenible.
          </p>
          <div
            className="editorial-reveal mt-5 inline-flex min-h-12 max-w-full items-center gap-2.5 rounded-xl border border-lime/35 bg-forest-deep/75 px-3 py-2 shadow-[0_8px_24px_-16px_oklch(0.08_0.02_158/0.8)] backdrop-blur-sm sm:mt-7 sm:gap-3 sm:px-4"
            style={{ animationDelay: "300ms" }}
          >
            <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-lime/15 text-lime">
              <CalendarDays aria-hidden="true" className="size-4" />
            </span>
            <span className="font-display text-lg font-semibold leading-none text-lime">
              {anniversaryCount} años
            </span>
            <span className="h-6 w-px bg-paper/20" aria-hidden="true" />
            <span className="text-[11px] font-semibold tracking-wide text-paper/85 sm:text-sm">
              1975–{currentYear} · Huila, Colombia
            </span>
          </div>
          <div
            className="editorial-reveal mt-5 grid gap-2.5 sm:flex sm:flex-wrap sm:gap-3"
            style={{ animationDelay: "360ms" }}
          >
            <Link
              to="/servicios"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-bold text-forest-deep shadow-[0_12px_28px_-14px_oklch(0.763_0.175_129.7/0.8)] transition-all duration-200 hover:-translate-y-1 hover:bg-paper hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep active:translate-y-0 sm:justify-start sm:px-7 sm:py-4"
            >
              Explorar servicios
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/asociarme"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-paper/35 bg-paper/5 px-6 py-3.5 text-sm font-bold backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-paper hover:bg-paper hover:text-forest-deep hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep active:translate-y-0 sm:justify-start sm:px-7 sm:py-4"
            >
              Quiero asociarme
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-4 border-t border-paper/20 pt-5 sm:mt-12 sm:gap-6 sm:pt-6">
          <ul className="flex flex-wrap gap-x-5 gap-y-2.5 text-xs font-semibold text-paper/85 sm:gap-x-8 sm:gap-y-3 sm:text-sm">
            {heroBadges.map(({ icon: Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-2">
                <Icon className="size-4 text-lime" /> {label}
              </li>
            ))}
          </ul>
          <a
            href="#impacto"
            className="hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-paper/60 transition-colors hover:text-lime sm:inline-flex"
          >
            Descubre más <ArrowDown className="size-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
