import { useEffect } from "react";
import { useRouter } from "../lib/router.jsx";
import Layout from "../components/Layout.jsx";
import Hero from "../sections/Hero.jsx";
import TrustBar from "../sections/TrustBar.jsx";
import Integrate from "../sections/Integrate.jsx";
import DocsPreview from "../sections/DocsPreview.jsx";
import UseCases from "../sections/UseCases.jsx";
import DataCoverage from "../sections/DataCoverage.jsx";
import FAQ from "../sections/FAQ.jsx";
import Contact from "../sections/Contact.jsx";
import GetStarted from "../sections/GetStarted.jsx";
import { usePageMeta } from "../hooks/usePageMeta.js";

export default function HomePage() {
  const { hash, search } = useRouter();
  usePageMeta("home");
  const openForgot = new URLSearchParams(search).get("forgot") === "1";

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    window.scrollTo(0, 0);
  }, [hash]);

  return (
    <Layout>
      <main>
        <Hero />
        <TrustBar />
        <Integrate />
        <DataCoverage />
        <UseCases />
        <DocsPreview />
        <GetStarted openForgot={openForgot} />
        <FAQ />
        <Contact />
      </main>
    </Layout>
  );
}
