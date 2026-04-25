import { type ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"a"> {
  variant?: "primary" | "outline";
}

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-block px-7 py-3.5 text-sm font-medium uppercase tracking-wider no-underline transition-all duration-200 hover:-translate-y-0.5 cursor-pointer text-center";

  const variants = {
    primary: "bg-gold text-black hover:bg-gold-light",
    outline:
      "bg-transparent text-white border border-white/20 hover:border-gold hover:text-gold",
  };

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
