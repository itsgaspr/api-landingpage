import CopyButton from "./CopyButton.jsx";

export default function CodeBlock({ children, title }) {
  const code = typeof children === "string" ? children : String(children ?? "");

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a]">
      <div className="flex items-center justify-between border-b border-white/8 px-4 py-2.5">
        {title ? (
          <span className="font-mono text-[11px] text-neutral-500">{title}</span>
        ) : (
          <span />
        )}
        <CopyButton text={code.trim()} />
      </div>
      <pre className="overflow-x-auto p-4 text-xs leading-6 text-neutral-300 sm:text-[13px]">
        <code>{children}</code>
      </pre>
    </div>
  );
}
