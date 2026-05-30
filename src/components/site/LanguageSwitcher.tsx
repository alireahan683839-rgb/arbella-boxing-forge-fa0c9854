import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGS } from "@/lib/i18n";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { i18n } = useTranslation();
  const current = (i18n.resolvedLanguage || "en").slice(0, 2);
  return (
    <div className={`inline-flex items-center gap-1 text-xs uppercase tracking-widest ${className}`}>
      {SUPPORTED_LANGS.map((lang, i) => (
        <span key={lang} className="flex items-center">
          {i > 0 && <span className="text-muted-foreground/40 mx-1">/</span>}
          <button
            type="button"
            onClick={() => i18n.changeLanguage(lang)}
            className={
              current === lang
                ? "text-primary font-medium"
                : "text-muted-foreground hover:text-foreground transition-colors"
            }
            aria-label={`Switch to ${lang}`}
          >
            {lang}
          </button>
        </span>
      ))}
    </div>
  );
}