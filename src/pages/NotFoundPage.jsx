import { Link } from "../lib/router.jsx";
import { useTranslation } from "../lib/i18n/index.js";
import PageShell from "../components/PageShell.jsx";

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-[70vh] items-center pt-24">
      <PageShell className="py-16">
        <p className="font-mono text-sm text-neutral-500">404</p>
        <h1 className="mt-4 text-3xl font-medium tracking-tight text-white">
          {t.notFound.title}
        </h1>
        <p className="mt-4 max-w-lg text-base leading-7 text-neutral-400">
          {t.notFound.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/"
            className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-neutral-200"
          >
            {t.notFound.home}
          </Link>
          <Link
            to="/docs"
            className="inline-flex items-center rounded-full border border-white/15 px-5 py-2.5 text-sm text-neutral-300 transition hover:border-white/30 hover:text-white"
          >
            {t.notFound.docs}
          </Link>
        </div>
      </PageShell>
    </main>
  );
}
