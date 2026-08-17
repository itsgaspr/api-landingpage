import { useTranslation } from "../lib/i18n/index.js";
import { HEALTH_URL, INE_URL, LAST_UPDATED } from "../lib/constants.js";
import PageShell from "../components/PageShell.jsx";

export default function TrustBar() {
  const { t } = useTranslation();

  return (
    <section className="border-b border-white/5 bg-white/[0.02] py-5">
      <PageShell>
        <div className="flex flex-wrap gap-2">
          <a
            href={INE_URL}
            target="_blank"
            rel="noreferrer"
            className="badge-pill transition hover:border-accent"
          >
            {t.trust.badges.ine}
          </a>
          <span className="badge-pill">{t.trust.badges.coverage}</span>
          <span className="badge-pill">{t.trust.badges.rateLimit}</span>
          <a
            href={HEALTH_URL}
            target="_blank"
            rel="noreferrer"
            className="badge-pill transition hover:border-accent"
          >
            {t.trust.badges.status}
          </a>
          <span className="badge-pill">{LAST_UPDATED}</span>
        </div>
        <p className="mt-4 text-xs leading-6 text-neutral-500">{t.trust.disclaimer}</p>
      </PageShell>
    </section>
  );
}
