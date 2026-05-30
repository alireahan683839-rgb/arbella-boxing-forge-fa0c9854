import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, Check } from "lucide-react";
import { SUPPORTED_LANGS, LANG_LABELS, LANG_FLAGS, type SupportedLang } from "@/lib/i18n";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { i18n } = useTranslation();
  const current = ((i18n.resolvedLanguage || "en").slice(0, 2)) as SupportedLang;
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className={`relative inline-block ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 px-2.5 py-1.5 border border-border hover:border-primary text-xs uppercase tracking-widest text-foreground transition-colors"
        aria-label="Select language"
        aria-expanded={open}
      >
        <span className="text-base leading-none">{LANG_FLAGS[current]}</span>
        <span>{current.toUpperCase()}</span>
        <ChevronDown className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul className="absolute right-0 mt-2 w-52 max-h-80 overflow-y-auto bg-background border border-border shadow-xl z-50 py-1">
          {SUPPORTED_LANGS.map((lang) => (
            <li key={lang}>
              <button
                type="button"
                onClick={() => {
                  i18n.changeLanguage(lang);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 text-sm text-left hover:bg-surface transition-colors ${
                  current === lang ? "text-primary" : "text-foreground"
                }`}
              >
                <span className="text-lg leading-none">{LANG_FLAGS[lang]}</span>
                <span className="flex-1">{LANG_LABELS[lang]}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">{lang}</span>
                {current === lang && <Check className="h-3.5 w-3.5 text-primary" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}