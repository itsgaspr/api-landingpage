import { Link, useRouter } from "../lib/router.jsx";
import { useTranslation } from "../lib/i18n/index.js";
import { useScrollSpy } from "../hooks/useScrollSpy.js";
import PageShell from "./PageShell.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import MobileNav from "./MobileNav.jsx";

const HOME_SECTIONS = ["integrate", "coverage", "use-cases", "docs", "get-started", "faq", "contact"];

function scrollTo(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

function navLinkClass(activeSection, sectionId, pathname) {
  const onHome = pathname === "/";
  const isActive =
    sectionId === "docs"
      ? pathname === "/docs" || (onHome && activeSection === "docs")
      : onHome && activeSection === sectionId;

  return isActive ? "nav-link nav-link--active" : "nav-link";
}

export default function Header() {
  const { pathname, navigate } = useRouter();
  const { t } = useTranslation();
  const onHome = pathname === "/";
  const activeSection = useScrollSpy(onHome ? HOME_SECTIONS : []);

  function goToSection(hash) {
    if (onHome) {
      scrollTo(hash);
      return;
    }
    navigate(`/${hash}`);
  }

  function goToDocs() {
    if (pathname === "/docs") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    goToSection("#docs");
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-black/70 backdrop-blur-2xl backdrop-saturate-150">
      <PageShell className="flex h-14 items-center justify-between sm:h-16">
        <Link to="/" className="text-[0.9375rem] font-medium tracking-tight text-white">
          {t.brand}
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {[
            ["integrate", "#integrate", t.nav.integrate],
            ["coverage", "#coverage", t.nav.coverage],
            ["use-cases", "#use-cases", t.nav.useCases],
            ["docs", null, t.nav.docs],
            ["faq", "#faq", t.nav.faq],
            ["contact", "#contact", t.nav.contact],
          ].map(([id, hash, label]) =>
            id === "docs" ? (
              <button
                key={id}
                type="button"
                className={navLinkClass(activeSection, id, pathname)}
                onClick={goToDocs}
              >
                {label}
              </button>
            ) : (
              <button
                key={id}
                type="button"
                className={navLinkClass(activeSection, id, pathname)}
                onClick={() => goToSection(hash)}
              >
                {label}
              </button>
            )
          )}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden xl:block">
            <LanguageSwitcher />
          </div>

          <MobileNav activeSection={activeSection} />

          <button
            type="button"
            className={`hidden items-center justify-center rounded-full px-3.5 py-1.5 text-xs font-medium transition sm:inline-flex sm:px-4 sm:py-2 sm:text-sm ${
              activeSection === "get-started" && onHome
                ? "bg-accent text-black hover:opacity-90"
                : "bg-white text-black hover:bg-neutral-200"
            }`}
            onClick={() => goToSection("#get-started")}
          >
            {t.nav.getStarted}
          </button>
        </div>
      </PageShell>
    </header>
  );
}
