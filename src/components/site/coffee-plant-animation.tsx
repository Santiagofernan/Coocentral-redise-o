export function CoffeePlantAnimation() {
  return (
    <svg
      aria-labelledby="coffee-plant-title coffee-plant-description"
      className="coffee-plant-animation mx-auto block w-full max-w-sm"
      role="img"
      viewBox="0 0 360 300"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="coffee-plant-title">La planta del café crece desde una semilla</title>
      <desc id="coffee-plant-description">
        Animación de una semilla que desarrolla raíces, tallo y hojas verdes.
      </desc>
      <circle cx="180" cy="148" r="116" fill="oklch(0.948 0.022 110 / 0.75)" />
      <circle cx="95" cy="94" r="4" fill="#8fc74a" opacity=".5" />
      <circle cx="270" cy="112" r="3" fill="#148135" opacity=".35" />
      <path d="M54 248H306" stroke="#8a704e" strokeLinecap="round" strokeWidth="3" />
      <path
        className="coffee-plant-root"
        d="M180 244c-1 12-8 18-15 25m15-19c5 7 10 12 16 16"
        fill="none"
        stroke="#9b7653"
        strokeLinecap="round"
        strokeWidth="3"
      />
      <g className="coffee-plant-seed">
        <ellipse cx="180" cy="239" rx="12" ry="8" fill="#704321" />
        <path
          d="M180 232c-4 4-4 10 1 14"
          fill="none"
          stroke="#d6a66e"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </g>
      <g fill="none" stroke="#17653b" strokeLinecap="round" strokeWidth="4">
        <path
          className="coffee-plant-stem"
          d="M180 240c-4-29 3-55 0-81-3-29 2-55 0-82"
        />
        <path className="coffee-plant-branch coffee-plant-branch--one" d="M179 198c-13-8-24-17-32-29" />
        <path className="coffee-plant-branch coffee-plant-branch--two" d="M181 177c13-8 25-17 34-29" />
        <path className="coffee-plant-branch coffee-plant-branch--three" d="M179 148c-12-8-22-17-30-28" />
        <path className="coffee-plant-branch coffee-plant-branch--four" d="M181 124c12-7 21-15 29-25" />
      </g>
      <g className="coffee-plant-leaf coffee-plant-leaf--one">
        <path d="M150 171c-22-1-37-14-40-34 21-2 38 9 45 27 2 4 0 7-5 7Z" fill="#398c46" />
        <path d="M115 139c13 8 25 16 38 29" fill="none" stroke="#c6df8b" strokeWidth="1.5" />
      </g>
      <g className="coffee-plant-leaf coffee-plant-leaf--two">
        <path d="M210 150c21-2 36-15 39-34-21-2-38 9-45 27-2 4 1 7 6 7Z" fill="#24793d" />
        <path d="M245 118c-13 8-25 16-38 29" fill="none" stroke="#c6df8b" strokeWidth="1.5" />
      </g>
      <g className="coffee-plant-leaf coffee-plant-leaf--three">
        <path d="M147 120c-20-3-33-16-35-34 19 0 34 10 40 27 1 4-1 7-5 7Z" fill="#4b9b4d" />
        <path d="M113 87c12 8 23 17 35 29" fill="none" stroke="#d4e89d" strokeWidth="1.5" />
      </g>
      <g className="coffee-plant-leaf coffee-plant-leaf--four">
        <path d="M211 101c19-3 32-16 34-34-19 0-34 10-40 27-1 4 1 7 6 7Z" fill="#398c46" />
        <path d="M243 68c-12 8-23 17-35 29" fill="none" stroke="#c6df8b" strokeWidth="1.5" />
      </g>
      <g className="coffee-plant-leaf coffee-plant-leaf--top">
        <path d="M179 77c-16-13-19-31-7-47 15 10 20 26 14 42-1 4-4 6-7 5Z" fill="#17653b" />
        <path d="M173 32c3 13 6 27 8 42" fill="none" stroke="#c6df8b" strokeWidth="1.5" />
      </g>
    </svg>
  );
}
