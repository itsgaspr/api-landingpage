import { useState } from "react";
import { useTranslation } from "../lib/i18n/index.js";
import PageShell from "../components/PageShell.jsx";
import SectionHeader from "../components/SectionHeader.jsx";

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border-b transition ${open ? "border-accent" : "border-white/8"}`}>
      <button
        type="button"
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <span className={`text-sm font-medium ${open ? "text-accent" : "text-white"}`}>
          {question}
        </span>
        <span className={open ? "text-accent" : "text-neutral-500"}>{open ? "−" : "+"}</span>
      </button>
      {open && <p className="pb-5 text-sm leading-7 text-neutral-400">{answer}</p>}
    </div>
  );
}

export default function FAQ() {
  const { t } = useTranslation();

  return (
    <section id="faq" className="border-t border-white/5 py-24">
      <PageShell>
        <SectionHeader title={t.faq.title} description={t.faq.description} />

        <div className="mt-10 max-w-3xl">
          {t.faq.items.map((item) => (
            <FAQItem key={item.q} question={item.q} answer={item.a} />
          ))}
        </div>
      </PageShell>
    </section>
  );
}
