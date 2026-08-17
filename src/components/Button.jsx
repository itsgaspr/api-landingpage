const variants = {
  primary: "bg-white text-black hover:bg-neutral-200",
  secondary:
    "border border-white/15 bg-transparent text-neutral-200 hover:border-white/30 hover:bg-white/5",
  ghost: "text-neutral-400 hover:text-white",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
