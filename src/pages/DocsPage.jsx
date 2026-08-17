import { useEffect } from "react";
import Layout from "../components/Layout.jsx";
import Documentation from "../sections/Documentation.jsx";
import { usePageMeta } from "../hooks/usePageMeta.js";

export default function DocsPage() {
  usePageMeta("docs");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <main className="pt-24">
        <Documentation />
      </main>
    </Layout>
  );
}
