import { useTranslation } from "../lib/i18n/index.js";

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useTranslation();

  return (
    <div
      className="flex items-center rounded-full border border-white/10 bg-black/40 p-0.5 text-xs"
      role="group"
      aria-label="Language"
    >
      {[
        { code: "en", label: "EN" },
        { code: "pt", label: "PT" },
      ].map((option) => (
        <button
          key={option.code}
          type="button"
          title={t.language[option.code]}
          aria-pressed={locale === option.code}
          onClick={() => setLocale(option.code)}
          className={`rounded-full px-2.5 py-1 font-medium transition ${
            locale === option.code
              ? "bg-white text-black"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
