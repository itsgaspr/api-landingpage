import { useTranslation } from "../lib/i18n/index.js";
import PageShell from "../components/PageShell.jsx";
import SectionHeader from "../components/SectionHeader.jsx";

const icons = {
  apps: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-accent" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  ),
  research: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-accent" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M8 17V11" />
      <path d="M12 17V7" />
      <path d="M16 17v-4" />
    </svg>
  ),
  learning: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-accent" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 19.5V6.5L12 3l8 3.5v13" />
      <path d="M12 22V9.5" />
      <path d="M4 6.5 12 10l8-3.5" />
    </svg>
  ),
};

const iconKeys = ["apps", "research", "learning"];

export default function UseCases() {
  const { t } = useTranslation();

  return (
    <section id="use-cases" className="border-t border-white/5 py-24">
      <PageShell>
        <SectionHeader title={t.useCases.title} description={t.useCases.description} />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.useCases.items.map((item, index) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition hover:border-accent"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-muted">
                {icons[iconKeys[index]]}
              </div>
              <h3 className="text-base font-medium text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">{item.description}</p>
            </article>
          ))}
        </div>
      </PageShell>
    </section>
  );
}
