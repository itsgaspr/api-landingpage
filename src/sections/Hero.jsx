import { useTranslation } from "../lib/i18n/index.js";
import Button from "../components/Button.jsx";
import CodeTabs from "../components/CodeTabs.jsx";
import PageShell from "../components/PageShell.jsx";
import { heroSnippets } from "../lib/codeSnippets.js";

function scrollTo(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="hero-glow relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <PageShell>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="animate-fade-up hero-badge mb-6">
              <span className="hero-badge__dot" aria-hidden="true" />
              {t.hero.footnote}
            </div>

            <h1 className="animate-fade-up text-[2.5rem] font-medium leading-[1.06] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4rem]">
              {t.hero.titleLine1}
              <br />
              <span className="text-neutral-400">{t.hero.titleLine2}</span>
            </h1>

            <p className="animate-fade-up-delay mt-5 max-w-lg text-base leading-7 text-neutral-400 sm:mt-6 sm:text-lg sm:leading-8">
              {t.hero.description}
            </p>

            <div className="animate-fade-up-delay-2 mt-7 flex flex-wrap gap-3 sm:mt-8">
              <Button onClick={() => scrollTo("#get-started")}>{t.hero.ctaPrimary}</Button>
              <Button variant="secondary" onClick={() => scrollTo("#docs")}>
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </div>

          <div className="animate-fade-up-delay-2 w-full lg:pt-4">
            <CodeTabs snippets={heroSnippets} showResponse tabLayout="inline" compactOnMobile />
          </div>
        </div>
      </PageShell>
    </section>
  );
}
