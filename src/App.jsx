import { Router, useRouter } from "./lib/router.jsx";
import { LanguageProvider } from "./lib/i18n/index.js";
import HomePage from "./pages/HomePage.jsx";
import DocsPage from "./pages/DocsPage.jsx";
import { TermsPage, PrivacyPage } from "./pages/LegalPages.jsx";
import NotFoundRoute from "./pages/NotFoundRoute.jsx";
import ResetPasswordRoute from "./pages/ResetPasswordRoute.jsx";

function AppRoutes() {
  const { pathname } = useRouter();

  switch (pathname) {
    case "/":
      return <HomePage />;
    case "/docs":
      return <DocsPage />;
    case "/terms":
      return <TermsPage />;
    case "/privacy":
      return <PrivacyPage />;
    case "/reset-password":
      return <ResetPasswordRoute />;
    default:
      return <NotFoundRoute />;
  }
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppRoutes />
      </Router>
    </LanguageProvider>
  );
}
