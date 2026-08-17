import { useEffect, useState } from "react";
import { Link, useRouter } from "../lib/router.jsx";
import { useTranslation } from "../lib/i18n/index.js";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import HamburgerButton from "./HamburgerButton.jsx";

function scrollTo(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

const MOBILE_NAV_ITEMS = [
  { id: "integrate", hash: "#integrate" },
  { id: "coverage", hash: "#coverage" },
  { id: "docs", hash: "#docs", docs: true },
  { id: "faq", hash: "#faq" },
];

export default function MobileNav({ activeSection }) {
  const [menuState, setMenuState] = useState("closed");
  const { pathname, navigate } = useRouter();
  const { t } = useTranslation();
  const onHome = pathname === "/";
  const open = menuState === "open";
  const closing = menuState === "closing";

  useEffect(() => {
    document.body.classList.toggle("menu-open", open || closing);
    return () => document.body.classList.remove("menu-open");
  }, [open, closing]);

  function openMenu() {
    setMenuState("open");
  }

  function closeMenu() {
    if (menuState !== "open") return;
    setMenuState("closing");
    window.setTimeout(() => setMenuState("closed"), 320);
  }

  function goToSection(hash) {
    closeMenu();
    window.setTimeout(() => {
      if (onHome) {
        scrollTo(hash);
        return;
      }
      navigate(`/${hash}`);
    }, 280);
  }

  function goToDocs() {
    closeMenu();
    window.setTimeout(() => {
      if (pathname === "/docs") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      if (onHome) {
        scrollTo("#docs");
        return;
      }
      navigate("/#docs");
    }, 280);
  }

  function navClass(sectionId) {
    if (sectionId === "docs") {
      return pathname === "/docs" || (onHome && activeSection === "docs")
        ? "text-white"
        : "text-neutral-400";
    }
    return onHome && activeSection === sectionId ? "text-white" : "text-neutral-400";
  }

  function handleNav(item) {
    if (item.docs) {
      goToDocs();
      return;
    }
    goToSection(item.hash);
  }

  return (
    <>
      <HamburgerButton open={open} onClick={open ? closeMenu : openMenu} className="xl:hidden" />

      {(open || closing) && (
        <div
          className={`mobile-menu fixed inset-0 z-[70] xl:hidden ${closing ? "mobile-menu--closing" : "mobile-menu--open"}`}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <button
            type="button"
            className="mobile-menu__backdrop absolute inset-0 bg-black/80 backdrop-blur-md"
            aria-label="Close menu"
            onClick={closeMenu}
          />

          <div className="mobile-menu__panel relative flex h-full flex-col bg-black">
            <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4">
              <span className="text-sm font-medium text-white">{t.brand}</span>
              <HamburgerButton open onClick={closeMenu} />
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-1 px-6 py-8">
              {MOBILE_NAV_ITEMS.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  style={{ animationDelay: `${index * 55 + 80}ms` }}
                  className={`mobile-menu__item text-left text-2xl font-medium tracking-tight transition hover:text-white ${navClass(item.id)}`}
                  onClick={() => handleNav(item)}
                >
                  {t.nav[item.id]}
                </button>
              ))}

              <button
                type="button"
                style={{ animationDelay: `${MOBILE_NAV_ITEMS.length * 55 + 80}ms` }}
                className={`mobile-menu__item mt-4 text-left text-2xl font-medium tracking-tight transition hover:text-white ${navClass("get-started")}`}
                onClick={() => goToSection("#get-started")}
              >
                {t.nav.getStarted}
              </button>
            </nav>

            <div
              className="mobile-menu__footer space-y-4 border-t border-white/[0.06] px-6 py-6"
              style={{ animationDelay: "320ms" }}
            >
              <Link
                to="/docs"
                className="mobile-menu__item block text-sm text-neutral-500 transition hover:text-white"
                onClick={closeMenu}
              >
                {t.footer.documentation} →
              </Link>
              <div className="flex items-center justify-between">
                <LanguageSwitcher />
                <Link
                  to="/terms"
                  className="text-xs text-neutral-600 transition hover:text-neutral-400"
                  onClick={closeMenu}
                >
                  {t.footer.terms}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
