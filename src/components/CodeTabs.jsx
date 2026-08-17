import { useState } from "react";
import CodeWindow from "./CodeWindow.jsx";
import { codeTabs, snippetFilename } from "../lib/codeSnippets.js";

export default function CodeTabs({
  snippets,
  showResponse = false,
  responseLabel = "HTTP 200",
  tabLayout = "sidebar",
  compactOnMobile = false,
}) {
  const [active, setActive] = useState("curl");
  const entry = snippets[active];
  const request = typeof entry === "string" ? entry : entry.request;
  const response = typeof entry === "string" ? null : entry.response;

  const visibleTabs = compactOnMobile ? codeTabs.filter((tab) => tab === "curl") : codeTabs;

  const tabs = (
    <div
      className={
        tabLayout === "sidebar"
          ? "flex flex-row flex-wrap gap-1.5 lg:flex-col lg:gap-2"
          : "flex flex-wrap gap-1.5"
      }
    >
      {visibleTabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => setActive(tab)}
          className={`rounded-md px-3 py-2 text-left font-mono text-xs transition sm:text-sm ${
            active === tab
              ? "bg-white/[0.08] text-white"
              : "text-neutral-500 hover:bg-white/[0.04] hover:text-neutral-300"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );

  const codePanel = (
    <CodeWindow title={snippetFilename(active)} copyText={request}>
      <pre className="whitespace-pre-wrap">{request}</pre>
      {showResponse && response && (
        <div className={compactOnMobile ? "hidden lg:block" : undefined}>
          <div className="mt-4 border-t border-white/[0.06] pt-4 text-neutral-500">
            {responseLabel}
          </div>
          <pre className="mt-2 whitespace-pre-wrap text-neutral-400">{response}</pre>
        </div>
      )}
    </CodeWindow>
  );

  if (tabLayout === "inline") {
    return (
      <div className="space-y-3 sm:space-y-4">
        {tabs}
        {codePanel}
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[140px_1fr] lg:gap-8">
      {tabs}
      {codePanel}
    </div>
  );
}
