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

function sectionClass(activeSection, sectionId, pathname) {
  const onHome = pathname === "/";
  const isActive =
    sectionId === "docs"
      ? pathname === "/docs" || (onHome && activeSection === "docs")
      : onHome && activeSection === sectionId;

  return isActive
    ? "text-accent"
    : "text-neutral-400 transition hover:text-white";
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
      <PageShell className="flex items-center justify-between py-4">
        <Link to="/" className="text-sm font-medium text-white">
          {t.brand}
        </Link>

        <nav className="hidden items-center gap-5 lg:gap-6 xl:flex">
          <button
            type="button"
            className={`text-sm ${sectionClass(activeSection, "integrate", pathname)}`}
            onClick={() => goToSection("#integrate")}
          >
            {t.nav.integrate}
          </button>
          <button
            type="button"
            className={`text-sm ${sectionClass(activeSection, "coverage", pathname)}`}
            onClick={() => goToSection("#coverage")}
          >
            {t.nav.coverage}
          </button>
          <button
            type="button"
            className={`text-sm ${sectionClass(activeSection, "use-cases", pathname)}`}
            onClick={() => goToSection("#use-cases")}
          >
            {t.nav.useCases}
          </button>
          <button
            type="button"
            className={`text-sm ${sectionClass(activeSection, "docs", pathname)}`}
            onClick={goToDocs}
          >
            {t.nav.docs}
          </button>
          <button
            type="button"
            className={`text-sm ${sectionClass(activeSection, "faq", pathname)}`}
            onClick={() => goToSection("#faq")}
          >
            {t.nav.faq}
          </button>
          <button
            type="button"
            className={`text-sm ${sectionClass(activeSection, "contact", pathname)}`}
            onClick={() => goToSection("#contact")}
          >
            {t.nav.contact}
          </button>
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          <div className="hidden xl:block">
            <LanguageSwitcher />
          </div>

          <MobileNav activeSection={activeSection} />

          <button
            type="button"
            className={`hidden rounded-full px-4 py-2 text-sm font-medium transition sm:inline-flex ${
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
