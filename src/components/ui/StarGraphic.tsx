export default function StarGraphic() {
  return (
    <div className="relative w-full max-w-[420px] aspect-square">
      {/* Ambient glow */}
      <div className="absolute inset-[15%] bg-gold/8 rounded-full blur-3xl animate-pulse-glow" />

      {/* Outer rotating ring */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full animate-rotate-slow"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#C9A84C" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="180" fill="none" stroke="url(#ringGrad)" strokeWidth="0.5" />
        {/* Tick marks around the ring */}
        {Array.from({ length: 60 }).map((_, i) => {
          const angle = (i * 6 * Math.PI) / 180;
          const isMajor = i % 5 === 0;
          const r1 = isMajor ? 168 : 173;
          const r2 = 180;
          return (
            <line
              key={i}
              x1={200 + r1 * Math.cos(angle)}
              y1={200 + r1 * Math.sin(angle)}
              x2={200 + r2 * Math.cos(angle)}
              y2={200 + r2 * Math.sin(angle)}
              stroke="#C9A84C"
              strokeWidth={isMajor ? "0.8" : "0.3"}
              opacity={isMajor ? "0.5" : "0.2"}
            />
          );
        })}
      </svg>

      {/* Inner counter-rotating star geometry */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full animate-rotate-reverse"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="200,60 230,160 340,160 250,220 280,330 200,265 120,330 150,220 60,160 170,160"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="0.6"
          opacity="0.35"
        />
        <polygon
          points="200,100 220,170 300,170 235,210 260,290 200,250 140,290 165,210 100,170 180,170"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="0.4"
          opacity="0.2"
        />
      </svg>

      {/* Static inner diamond */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="200,130 270,200 200,270 130,200"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="0.5"
          opacity="0.25"
        />
        <circle cx="200" cy="200" r="85" fill="none" stroke="#C9A84C" strokeWidth="0.3" opacity="0.15" strokeDasharray="4 6" />
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="relative">
          <span className="text-gold text-5xl font-light leading-none block" style={{ fontFamily: 'Georgia, serif' }}>&#10022;</span>
          <div className="absolute inset-0 text-gold/30 text-5xl font-light leading-none blur-sm" style={{ fontFamily: 'Georgia, serif' }}>&#10022;</div>
        </div>
        <span className="font-display text-[1.75rem] font-black text-white leading-none mt-3 tracking-wide">
          FIVE STAR
        </span>
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent my-2.5" />
        <span className="text-[0.65rem] tracking-[0.3em] uppercase text-gold/80 font-medium">
          STR Cleaning Co.
        </span>
      </div>
    </div>
  );
}
