import { useTranslation } from "../lib/i18n/index.js";
import { HEALTH_URL, INE_URL, LAST_UPDATED } from "../lib/constants.js";
import PageShell from "../components/PageShell.jsx";

export default function TrustBar() {
  const { t } = useTranslation();

  return (
    <section className="border-b border-white/[0.06] bg-black/40 py-4">
      <PageShell>
        <div className="flex flex-wrap gap-2">
          <a
            href={INE_URL}
            target="_blank"
            rel="noreferrer"
            className="badge-pill badge-pill--accent transition hover:opacity-90"
          >
            {t.trust.badges.ine}
          </a>
          <span className="badge-pill">{t.trust.badges.coverage}</span>
          <span className="badge-pill">{t.trust.badges.rateLimit}</span>
          <a
            href={HEALTH_URL}
            target="_blank"
            rel="noreferrer"
            className="badge-pill hidden sm:inline-flex transition hover:border-white/20"
          >
            {t.trust.badges.status}
          </a>
          <span className="badge-pill hidden md:inline-flex">{LAST_UPDATED}</span>
        </div>
        <p className="mt-3 hidden text-xs leading-6 text-neutral-600 md:block">{t.trust.disclaimer}</p>
      </PageShell>
    </section>
  );
}
