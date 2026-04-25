export default function StarGraphic() {
  return (
    <div className="relative w-full max-w-md aspect-square">
      {/* Rotating star */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full animate-rotate-slow"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="100,10 120,75 190,75 132,115 152,180 100,145 48,180 68,115 10,75 80,75"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="0.5"
          opacity="0.6"
        />
        <polygon
          points="100,30 115,78 175,78 125,110 142,165 100,138 58,165 75,110 25,78 85,78"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="0.3"
          opacity="0.3"
        />
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-4xl mb-2">✦</span>
        <span className="font-display text-2xl font-bold text-white leading-tight">
          Five Star
        </span>
        <span className="text-xs tracking-[0.2em] uppercase text-gold mt-2">
          STR Cleaning
        </span>
      </div>
    </div>
  );
}
