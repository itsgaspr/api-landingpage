import { useEffect } from "react";
import Layout from "../components/Layout.jsx";
import LegalPage from "./LegalPage.jsx";
import { usePageMeta } from "../hooks/usePageMeta.js";

export function TermsPage() {
  usePageMeta("terms");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <LegalPage type="terms" />
    </Layout>
  );
}

export function PrivacyPage() {
  usePageMeta("privacy");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <LegalPage type="privacy" />
    </Layout>
  );
}
