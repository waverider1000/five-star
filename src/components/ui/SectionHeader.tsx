interface SectionHeaderProps {
  label: string;
  title: string;
  goldWord?: string;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  goldWord,
  className = "",
}: SectionHeaderProps) {
  const renderTitle = () => {
    if (!goldWord) return title;
    const parts = title.split(goldWord);
    return (
      <>
        {parts[0]}
        <em className="italic text-gold">{goldWord}</em>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={className}>
      <p className="text-[0.65rem] tracking-[0.25em] uppercase text-gold/80 mb-4 flex items-center gap-3 font-semibold">
        <span className="block w-8 h-px bg-gradient-to-r from-gold/60 to-gold/20" />
        {label}
      </p>
      <h2 className="font-display font-black text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] text-white max-w-2xl tracking-wide">
        {renderTitle()}
      </h2>
    </div>
  );
}
