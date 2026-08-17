const variants = {
  primary:
    "bg-white text-black shadow-[0_0_0_1px_rgba(255,255,255,0.08)] hover:bg-neutral-200 active:scale-[0.98]",
  secondary:
    "border border-white/10 bg-white/[0.03] text-neutral-200 hover:border-white/20 hover:bg-white/[0.06] active:scale-[0.98]",
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
      className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 sm:px-5 sm:py-2.5 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
