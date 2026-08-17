import { useTranslation } from "../lib/i18n/index.js";
import CodeTabs from "../components/CodeTabs.jsx";
import PageShell from "../components/PageShell.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { integrateSnippets } from "../lib/codeSnippets.js";

export default function Integrate() {
  const { t } = useTranslation();

  return (
    <section id="integrate" className="section-glow border-t border-white/5 py-24">
      <PageShell>
        <SectionHeader
          large
          title={t.integrate.title}
          description={t.integrate.description}
        />

        <div className="mt-14">
          <CodeTabs snippets={integrateSnippets} />
        </div>
      </PageShell>
    </section>
  );
}
