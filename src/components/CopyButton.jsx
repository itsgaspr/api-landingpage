import { useState } from "react";
import { useTranslation } from "../lib/i18n/index.js";

export default function CopyButton({ text, className = "" }) {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`rounded-md px-2 py-1 font-mono text-[10px] text-neutral-500 transition hover:bg-white/5 hover:text-neutral-300 ${className}`}
    >
      {copied ? t.common.copied : t.common.copy}
    </button>
  );
}
