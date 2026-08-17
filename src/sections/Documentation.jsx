import CodeBlock from "../components/CodeBlock.jsx";
import EndpointDoc from "../components/EndpointDoc.jsx";
import PageShell from "../components/PageShell.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { useTranslation } from "../lib/i18n/index.js";
import { useScrollSpy } from "../hooks/useScrollSpy.js";

export default function Documentation() {
  const { t } = useTranslation();
  const docs = t.docs;
  const sectionIds = docs.sections.map((section) => section.id);
  const activeSection = useScrollSpy(sectionIds, 120);

  const overviewRows = [
    [docs.overviewLabels.baseUrl, docs.baseUrl],
    [docs.overviewLabels.source, docs.overviewValues.source],
    [docs.overviewLabels.coverage, docs.overviewValues.coverage],
    [docs.overviewLabels.methods, docs.overviewValues.methods],
    [docs.overviewLabels.format, docs.overviewValues.format],
    [docs.overviewLabels.rateLimit, docs.overviewValues.rateLimit],
  ];

  const errorsFootnote = docs.errorsFootnote
    .replace("{authRateLimit}", docs.overviewValues.authRateLimit)
    .replace("{rateLimit}", docs.overviewValues.rateLimit);

  return (
    <section id="documentation" className="border-t border-white/5 py-24">
      <PageShell>
        <SectionHeader
          large
          title={docs.title}
          description={docs.description}
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[160px_1fr]">
          <nav className="hidden lg:block">
            <ul className="sticky top-24 space-y-2 text-sm">
              {docs.sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={`block transition ${
                      activeSection === section.id
                        ? "text-accent"
                        : "text-neutral-500 hover:text-white"
                    }`}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="doc-content min-w-0">
            <article id="overview" className="pb-10">
              <h3 className="text-lg font-medium text-white">{docs.overviewTitle}</h3>
              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                {overviewRows.map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3"
                  >
                    <dt className="text-xs uppercase tracking-wide text-neutral-500">
                      {label}
                    </dt>
                    <dd className="mt-1 text-sm text-neutral-300">{value}</dd>
                  </div>
                ))}
              </dl>
            </article>

            <article id="authentication" className="border-t border-white/8 py-10">
              <h3 className="text-lg font-medium text-white">{docs.authTitle}</h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-400">
                {docs.authDescription}
              </p>
              <div className="mt-6">
                <CodeBlock>{docs.authExample}</CodeBlock>
              </div>
              <p className="mt-4 text-sm text-neutral-500">
                {docs.authHeaderLabel}{" "}
                <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-xs text-neutral-300">
                  {docs.authHeader}
                </code>
              </p>
            </article>

            <article id="response-format" className="border-t border-white/8 py-10">
              <h3 className="text-lg font-medium text-white">{docs.responseTitle}</h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-400">
                {docs.responseDescription}
              </p>
              <div className="mt-6">
                <CodeBlock>{docs.responseFormat}</CodeBlock>
              </div>
            </article>

            <div className="border-t border-white/8 pt-4">
              {docs.endpoints.map((endpoint) => (
                <EndpointDoc
                  key={endpoint.id}
                  endpoint={endpoint}
                  labels={{ ...docs.table, ...docs.endpoint }}
                />
              ))}
            </div>

            <article id="errors" className="border-t border-white/8 py-10">
              <h3 className="text-lg font-medium text-white">{docs.errorsTitle}</h3>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[420px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-neutral-500">
                      <th className="py-2 pr-4 font-normal">{docs.table.status}</th>
                      <th className="py-2 font-normal">{docs.table.meaning}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {docs.errorCodes.map((error) => (
                      <tr key={error.code} className="border-b border-white/5">
                        <td className="py-3 pr-4 font-mono text-xs text-neutral-300">
                          {error.code}
                        </td>
                        <td className="py-3 text-neutral-400">{error.meaning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-6 text-sm leading-7 text-neutral-400">{errorsFootnote}</p>
            </article>
          </div>
        </div>
      </PageShell>
    </section>
  );
}
