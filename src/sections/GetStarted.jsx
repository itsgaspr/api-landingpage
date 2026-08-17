import { useTranslation } from "../lib/i18n/index.js";
import AuthPanel from "../components/AuthPanel.jsx";
import PageShell from "../components/PageShell.jsx";
import SectionHeader from "../components/SectionHeader.jsx";

export default function GetStarted({ openForgot = false }) {
  const { t } = useTranslation();

  return (
    <section id="get-started" className="section-glow section-padding border-t border-white/[0.06]">
      <PageShell>
        <SectionHeader
          large
          title={t.getStarted.title}
          description={t.getStarted.description}
        />

        <div className="mt-14">
          <AuthPanel initialView={openForgot ? "forgot" : "signup"} />
        </div>
      </PageShell>
    </section>
  );
}
