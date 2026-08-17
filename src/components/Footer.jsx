import { Link, useRouter } from "../lib/router.jsx";
import { useTranslation } from "../lib/i18n/index.js";
import { HEALTH_URL } from "../lib/constants.js";
import PageShell from "./PageShell.jsx";

export default function Footer() {
  const { navigate } = useRouter();
  const { t } = useTranslation();

  return (
    <footer className="border-t border-white/[0.06]">
      <PageShell className="flex flex-col gap-5 py-8 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:py-10">
        <p className="text-xs sm:text-sm">{t.footer.builtBy} therakius</p>

        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs sm:gap-x-5 sm:text-sm">
          <Link to="/docs" className="transition hover:text-white">
            {t.footer.documentation}
          </Link>
          <button
            type="button"
            onClick={() => navigate("/#get-started")}
            className="transition hover:text-white"
          >
            {t.footer.getApiKey}
          </button>
          <button
            type="button"
            onClick={() => navigate("/#coverage")}
            className="hidden transition hover:text-white sm:inline"
          >
            {t.nav.coverage}
          </button>
          <button
            type="button"
            onClick={() => navigate("/#faq")}
            className="transition hover:text-white"
          >
            {t.footer.faq}
          </button>
          <button
            type="button"
            onClick={() => navigate("/#contact")}
            className="hidden transition hover:text-white md:inline"
          >
            {t.footer.contact}
          </button>
          <Link to="/terms" className="transition hover:text-white">
            {t.footer.terms}
          </Link>
          <Link to="/privacy" className="transition hover:text-white">
            {t.footer.privacy}
          </Link>
          <a
            href={HEALTH_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden transition hover:text-white lg:inline"
          >
            {t.footer.status}
          </a>
        </div>
      </PageShell>
    </footer>
  );
}
