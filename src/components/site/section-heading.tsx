import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "light",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <div className={cn("reveal max-w-3xl", className)}>
      <p
        className={cn(
          "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]",
          dark ? "text-lime" : "text-brand",
        )}
      >
        <span className={cn("h-px w-8", dark ? "bg-lime" : "bg-brand")} />
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-4 text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl",
          dark ? "text-paper" : "text-ink",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-6 max-w-[60ch] text-base leading-7 lg:text-lg lg:leading-8",
            dark ? "text-paper/70" : "text-ink/70",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
