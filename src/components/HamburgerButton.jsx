export default function HamburgerButton({ open, onClick, className = "" }) {
  return (
    <button
      type="button"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      onClick={onClick}
      className={`relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition hover:border-white/20 hover:bg-white/[0.06] ${className}`}
    >
      <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      <span className={`hamburger-icon ${open ? "hamburger-icon--open" : ""}`}>
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </span>
    </button>
  );
}
