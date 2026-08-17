import CopyButton from "./CopyButton.jsx";

export default function CodeWindow({
  title = "example.js",
  children,
  className = "",
  copyText,
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/[0.08] bg-[#050505] shadow-[0_24px_80px_-12px_rgba(0,0,0,0.8)] ${className}`}
    >
      <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]/90" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]/90" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]/90" />
        </div>
        <div className="flex items-center gap-2">
          {copyText && <CopyButton text={copyText} />}
          {title && (
            <span className="hidden font-mono text-[10px] text-neutral-600 sm:inline">{title}</span>
          )}
        </div>
      </div>
      <div className="overflow-x-auto p-4 font-mono text-xs leading-6 text-neutral-300 sm:p-5 sm:text-[13px] sm:leading-7">
        {children}
      </div>
    </div>
  );
}
