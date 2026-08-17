import { useTranslation } from "../lib/i18n/index.js";
import PageShell from "../components/PageShell.jsx";

export default function LegalPage({ type }) {
  const { t } = useTranslation();
  const isTerms = type === "terms";
  const title = isTerms ? t.legal.termsTitle : t.legal.privacyTitle;
  const sections = isTerms ? t.legal.termsSections : t.legal.privacySections;

  return (
    <main className="pt-24">
      <PageShell className="max-w-3xl py-16">
        <h1 className="text-3xl font-medium tracking-tight text-white">{title}</h1>
        <p className="mt-3 text-sm text-neutral-500">{t.legal.lastUpdated}</p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-medium text-white">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-400">{section.body}</p>
            </section>
          ))}
        </div>
      </PageShell>
    </main>
  );
}
