import { Link, useRouter } from "../lib/router.jsx";
import { useTranslation } from "../lib/i18n/index.js";
import { HEALTH_URL } from "../lib/constants.js";
import PageShell from "./PageShell.jsx";

export default function Footer() {
  const { navigate } = useRouter();
  const { t } = useTranslation();

  return (
    <footer className="border-t border-white/5">
      <PageShell className="flex flex-col gap-4 py-10 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <p>{t.footer.builtBy} therakius</p>

        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Link to="/docs" className="hover:text-accent">
            {t.footer.documentation}
          </Link>
          <button
            type="button"
            onClick={() => navigate("/#get-started")}
            className="hover:text-accent"
          >
            {t.footer.getApiKey}
          </button>
          <button
            type="button"
            onClick={() => navigate("/#coverage")}
            className="hover:text-accent"
          >
            {t.nav.coverage}
          </button>
          <button type="button" onClick={() => navigate("/#faq")} className="hover:text-accent">
            {t.footer.faq}
          </button>
          <button type="button" onClick={() => navigate("/#contact")} className="hover:text-accent">
            {t.footer.contact}
          </button>
          <Link to="/terms" className="hover:text-accent">
            {t.footer.terms}
          </Link>
          <Link to="/privacy" className="hover:text-accent">
            {t.footer.privacy}
          </Link>
          <a href={HEALTH_URL} target="_blank" rel="noreferrer" className="hover:text-accent">
            {t.footer.status}
          </a>
        </div>
      </PageShell>
    </footer>
  );
}
