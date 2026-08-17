import { useState } from "react";
import { Link, useRouter } from "../lib/router.jsx";
import { useTranslation } from "../lib/i18n/index.js";
import LanguageSwitcher from "./LanguageSwitcher.jsx";

function scrollTo(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function MobileNav({ activeSection }) {
  const [open, setOpen] = useState(false);
  const { pathname, navigate } = useRouter();
  const { t } = useTranslation();
  const onHome = pathname === "/";

  function goToSection(hash) {
    setOpen(false);
    if (onHome) {
      scrollTo(hash);
      return;
    }
    navigate(`/${hash}`);
  }

  function goToDocs() {
    setOpen(false);
    if (pathname === "/docs") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    goToSection("#docs");
  }

  function navClass(sectionId) {
    if (sectionId === "docs") {
      return pathname === "/docs" || (onHome && activeSection === "docs")
        ? "text-accent"
        : "text-neutral-300";
    }
    return onHome && activeSection === sectionId ? "text-accent" : "text-neutral-300";
  }

  if (!open) {
    return (
      <button
        type="button"
        className="rounded-lg border border-white/10 px-3 py-2 text-neutral-300 xl:hidden"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[60] xl:hidden">
      <button
        type="button"
        className="absolute inset-0 bg-black/70"
        aria-label="Close menu"
        onClick={() => setOpen(false)}
      />
      <div className="absolute right-0 top-0 h-full w-[min(100%,280px)] border-l border-white/10 bg-black p-6">
        <div className="mb-8 flex items-center justify-between">
          <LanguageSwitcher />
          <button type="button" className="text-neutral-400" onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>
        <nav className="flex flex-col gap-4 text-sm">
          <button
            type="button"
            className={`text-left ${navClass("integrate")}`}
            onClick={() => goToSection("#integrate")}
          >
            {t.nav.integrate}
          </button>
          <button
            type="button"
            className={`text-left ${navClass("coverage")}`}
            onClick={() => goToSection("#coverage")}
          >
            {t.nav.coverage}
          </button>
          <button
            type="button"
            className={`text-left ${navClass("use-cases")}`}
            onClick={() => goToSection("#use-cases")}
          >
            {t.nav.useCases}
          </button>
          <button type="button" className={`text-left ${navClass("docs")}`} onClick={goToDocs}>
            {t.nav.docs}
          </button>
          <button
            type="button"
            className={`text-left ${navClass("get-started")}`}
            onClick={() => goToSection("#get-started")}
          >
            {t.nav.getStarted}
          </button>
          <button
            type="button"
            className={`text-left ${navClass("faq")}`}
            onClick={() => goToSection("#faq")}
          >
            {t.nav.faq}
          </button>
          <button
            type="button"
            className={`text-left ${navClass("contact")}`}
            onClick={() => goToSection("#contact")}
          >
            {t.nav.contact}
          </button>
          <Link to="/terms" className="text-neutral-300" onClick={() => setOpen(false)}>
            {t.footer.terms}
          </Link>
          <Link to="/privacy" className="text-neutral-300" onClick={() => setOpen(false)}>
            {t.footer.privacy}
          </Link>
        </nav>
      </div>
    </div>
  );
}
