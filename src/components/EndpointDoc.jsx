import CodeBlock from "./CodeBlock.jsx";

function ParamTable({ parameters, labels }) {
  if (!parameters.length) {
    return <p className="text-sm text-neutral-500">{labels.noParams}</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[540px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-white/10 text-neutral-500">
            <th className="py-2 pr-4 font-normal">{labels.parameter}</th>
            <th className="py-2 pr-4 font-normal">{labels.type}</th>
            <th className="py-2 pr-4 font-normal">{labels.required}</th>
            <th className="py-2 font-normal">{labels.description}</th>
          </tr>
        </thead>
        <tbody>
          {parameters.map((param) => (
            <tr key={param.name} className="border-b border-white/5 align-top">
              <td className="py-3 pr-4 font-mono text-xs text-neutral-200">{param.name}</td>
              <td className="py-3 pr-4 text-neutral-400">{param.type}</td>
              <td className="py-3 pr-4 text-neutral-400">
                {param.required ? labels.yes : labels.no}
              </td>
              <td className="py-3 text-neutral-400">
                {param.description}
                {param.example && (
                  <span className="mt-1 block font-mono text-xs text-neutral-600">
                    {labels.examplePrefix} {param.example}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function EndpointDoc({ endpoint, labels, embedded = false }) {
  return (
    <article
      id={embedded ? undefined : endpoint.id}
      className={
        embedded
          ? undefined
          : "border-t border-white/8 py-10 first:border-t-0 first:pt-0"
      }
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-mono text-xs text-neutral-500">{endpoint.method}</span>
        <code className="font-mono text-sm text-neutral-200">{endpoint.path}</code>
      </div>

      <h3 className="mt-3 text-lg font-medium text-white">{endpoint.title}</h3>
      <p className="mt-2 max-w-3xl text-sm leading-7 text-neutral-400">{endpoint.summary}</p>

      {endpoint.notes.length > 0 && (
        <ul className="mt-4 space-y-1 text-sm text-neutral-400">
          {endpoint.notes.map((note) => (
            <li key={note} className="flex gap-2">
              <span className="text-neutral-600">—</span>
              <span>{note}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-8">
        <h4 className="text-sm font-medium text-white">{labels.parameters}</h4>
        <div className="mt-3">
          <ParamTable parameters={endpoint.parameters} labels={labels} />
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div>
          <h4 className="text-sm font-medium text-white">{labels.exampleRequest}</h4>
          <div className="mt-3">
            <CodeBlock>{endpoint.exampleRequest}</CodeBlock>
          </div>
        </div>
        <div className="hidden lg:block">
          <h4 className="text-sm font-medium text-white">{labels.exampleResponse}</h4>
          <div className="mt-3">
            <CodeBlock>{endpoint.exampleResponse}</CodeBlock>
          </div>
        </div>
      </div>
    </article>
  );
}
