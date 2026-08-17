export default function PageShell({ children, className = "" }) {
  return (
    <div className={`mx-auto w-[80vw] max-w-[80vw] ${className}`}>
      {children}
    </div>
  );
}
