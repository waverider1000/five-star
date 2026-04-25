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
      <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4 flex items-center gap-3">
        <span className="block w-8 h-px bg-gold" />
        {label}
      </p>
      <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl leading-tight text-white max-w-xl">
        {renderTitle()}
      </h2>
    </div>
  );
}
