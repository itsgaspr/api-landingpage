import CopyButton from "./CopyButton.jsx";

export default function CodeWindow({
  title = "example.js",
  children,
  className = "",
  copyText,
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl shadow-black/50 ${className}`}
    >
      <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex items-center gap-2">
          {copyText && <CopyButton text={copyText} />}
          {title && (
            <span className="font-mono text-[11px] text-neutral-500">{title}</span>
          )}
        </div>
      </div>
      <div className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-neutral-300">
        {children}
      </div>
    </div>
  );
}
