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
    <section id="home" className="hero-glow relative overflow-hidden pt-36 pb-24">
      <PageShell>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="animate-fade-up text-5xl font-medium leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[3.75rem]">
              {t.hero.titleLine1}
              <br />
              {t.hero.titleLine2}
            </h1>

            <p className="animate-fade-up-delay mt-6 text-lg leading-8 text-neutral-400">
              {t.hero.description}
            </p>

            <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap gap-3">
              <Button onClick={() => scrollTo("#get-started")}>{t.hero.ctaPrimary}</Button>
              <button
                type="button"
                onClick={() => scrollTo("#docs")}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent px-5 py-2.5 text-sm font-medium text-neutral-200 transition hover:border-accent hover:text-white"
              >
                {t.hero.ctaSecondary}
              </button>
            </div>

            <p className="mt-10 text-sm text-neutral-600">{t.hero.footnote}</p>
          </div>

          <div className="animate-fade-up-delay-2 w-full">
            <CodeTabs snippets={heroSnippets} showResponse tabLayout="inline" />
          </div>
        </div>
      </PageShell>
    </section>
  );
}
