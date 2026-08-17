import { Link } from "../lib/router.jsx";
import { useTranslation } from "../lib/i18n/index.js";
import EndpointDoc from "../components/EndpointDoc.jsx";
import PageShell from "../components/PageShell.jsx";
import SectionHeader from "../components/SectionHeader.jsx";

const PREVIEW_ENDPOINT_ID = "population";

export default function DocsPreview() {
  const { t } = useTranslation();
  const endpoint = t.docs.endpoints.find((item) => item.id === PREVIEW_ENDPOINT_ID);
  const labels = { ...t.docs.table, ...t.docs.endpoint };

  return (
    <section id="docs" className="section-glow border-t border-white/5 py-24">
      <PageShell>
        <SectionHeader
          large
          title={t.docsPreview.title}
          description={t.docsPreview.description}
        />

        {endpoint && (
          <div className="mt-14 rounded-2xl border border-white/8 bg-white/[0.02] p-6 sm:p-8 lg:p-10">
            <EndpointDoc endpoint={endpoint} labels={labels} embedded />
          </div>
        )}

        <div className="mt-10 flex justify-center">
          <Link
            to="/docs"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent px-5 py-2.5 text-sm font-medium text-neutral-200 transition hover:border-accent hover:text-white"
          >
            {t.docsPreview.readFullDocs}
          </Link>
        </div>
      </PageShell>
    </section>
  );
}
