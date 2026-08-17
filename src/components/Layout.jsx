import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen">
      <div className="site-grid" aria-hidden="true" />
      <div className="relative z-[1]">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
