import { useState } from "react";
import CodeWindow from "./CodeWindow.jsx";
import { codeTabs, snippetFilename } from "../lib/codeSnippets.js";

export default function CodeTabs({
  snippets,
  showResponse = false,
  responseLabel = "HTTP 200",
  tabLayout = "sidebar",
}) {
  const [active, setActive] = useState("curl");
  const entry = snippets[active];
  const request = typeof entry === "string" ? entry : entry.request;
  const response = typeof entry === "string" ? null : entry.response;

  const tabs = (
    <div
      className={
        tabLayout === "sidebar"
          ? "flex flex-row flex-wrap gap-2 lg:flex-col"
          : "flex flex-wrap gap-2"
      }
    >
      {codeTabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => setActive(tab)}
          className={`rounded-lg px-4 py-2.5 text-left font-mono text-sm transition ${
            active === tab
              ? "bg-accent-muted text-accent"
              : "text-neutral-500 hover:bg-white/5 hover:text-neutral-300"
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
        <>
          <div className="mt-4 border-t border-white/8 pt-4 text-neutral-500">
            {responseLabel}
          </div>
          <pre className="mt-2 whitespace-pre-wrap text-neutral-400">{response}</pre>
        </>
      )}
    </CodeWindow>
  );

  if (tabLayout === "inline") {
    return (
      <div className="space-y-4">
        {tabs}
        {codePanel}
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[160px_1fr]">
      {tabs}
      {codePanel}
    </div>
  );
}
