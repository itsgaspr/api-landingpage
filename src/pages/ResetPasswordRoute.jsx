import { useEffect } from "react";
import Layout from "../components/Layout.jsx";
import ResetPasswordPage from "./ResetPasswordPage.jsx";
import { usePageMeta } from "../hooks/usePageMeta.js";

export default function ResetPasswordRoute() {
  usePageMeta("resetPassword");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <ResetPasswordPage />
    </Layout>
  );
}
