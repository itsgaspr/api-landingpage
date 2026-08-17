import { useTranslation } from "../lib/i18n/index.js";
import MozambiqueMap from "../components/MozambiqueMap.jsx";
import PageShell from "../components/PageShell.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { API_V1_URL, PROVINCES } from "../lib/constants.js";

export default function DataCoverage() {
  const { t } = useTranslation();
  const { columns, rows } = t.dataCoverage;

  const stats = [
    { label: t.about.stats.baseUrl, value: API_V1_URL },
    { label: t.about.stats.coverage, value: "2017 – 2026" },
    { label: t.about.stats.provinces, value: "11" },
    { label: t.about.stats.rateLimit, value: "100 req / min" },
  ];

  return (
    <section id="coverage" className="border-t border-white/5 py-24">
      <PageShell>
        <div className="grid gap-12 lg:grid-cols-[1fr_220px] lg:items-start">
          <SectionHeader
            large
            title={t.dataCoverage.title}
            description={t.dataCoverage.description}
          />
          <div className="mx-auto w-full max-w-[220px] lg:mx-0 lg:max-w-[240px]">
            <MozambiqueMap />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/8 bg-white/[0.02] px-5 py-4"
            >
              <p className="text-xs uppercase tracking-wide text-neutral-500">
                {stat.label}
              </p>
              <p className="mt-2 break-all font-mono text-sm text-neutral-200">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-neutral-500">
                <th className="py-3 pr-4 font-normal">{columns.resource}</th>
                <th className="py-3 pr-4 font-normal">{columns.years}</th>
                <th className="py-3 pr-4 font-normal">{columns.scope}</th>
                <th className="py-3 font-normal">{columns.notes}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.resource} className="border-b border-white/5 align-top">
                  <td className="py-3 pr-4 font-mono text-xs text-accent">{row.resource}</td>
                  <td className="py-3 pr-4 text-neutral-300">{row.years}</td>
                  <td className="py-3 pr-4 text-neutral-400">{row.scope}</td>
                  <td className="py-3 text-neutral-400">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 rounded-2xl border border-white/8 bg-white/[0.02] p-6">
          <p className="text-sm leading-7 text-neutral-400">{PROVINCES.join(" · ")}</p>
          <p className="mt-4 text-sm text-neutral-500">{t.about.footnote}</p>
        </div>
      </PageShell>
    </section>
  );
}
