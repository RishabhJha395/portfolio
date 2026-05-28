export default function Button({ as: Tag = "a", variant = "primary", className = "", children, ...props }) {
  const variants = {
    primary: "border-emerald-primary bg-emerald-primary text-[#0A0A0A] shadow-glow hover:bg-emerald-soft",
    ghost: "border-white/15 bg-white/8 text-white hover:border-emerald-primary/60 hover:bg-emerald-primary/10",
    gold: "border-highlight/70 bg-highlight/10 text-highlight shadow-gold hover:bg-highlight hover:text-[#0A0A0A]"
  };

  return (
    <Tag
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-bold transition duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
