import { useEffect } from "react";
import Layout from "../components/Layout.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import { usePageMeta } from "../hooks/usePageMeta.js";

export default function NotFoundRoute() {
  usePageMeta("notFound");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <NotFoundPage />
    </Layout>
  );
}
