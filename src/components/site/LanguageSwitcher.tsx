import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGS, LANG_LABELS, type SupportedLang } from "@/lib/i18n";
import { Globe } from "lucide-react";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { i18n } = useTranslation();
  const current = ((i18n.resolvedLanguage || "en").slice(0, 2)) as SupportedLang;
  return (
    <div className={`relative inline-flex items-center gap-1.5 text-xs uppercase tracking-widest ${className}`}>
      <Globe className="h-3.5 w-3.5 text-muted-foreground" />
      <select
        value={current}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className="bg-transparent border-0 text-foreground appearance-none pr-4 cursor-pointer focus:outline-none focus:text-primary"
        aria-label="Language"
      >
        {SUPPORTED_LANGS.map((lang) => (
          <option key={lang} value={lang} className="bg-background text-foreground">
            {lang.toUpperCase()} — {LANG_LABELS[lang]}
          </option>
        ))}
      </select>
    </div>
  );
}