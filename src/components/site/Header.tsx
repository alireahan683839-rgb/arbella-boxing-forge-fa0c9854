import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BRAND, whatsappLink } from "@/lib/brand";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems: Array<{ to: string; key: string }> = [
    { to: "/local-boxing-academy", key: "nav.local" },
    { to: "/boxing-holiday-retreat", key: "nav.holiday" },
    { to: "/founder-executive-retreat", key: "nav.founder" },
    { to: "/private-coaching", key: "nav.private" },
    { to: "/about-coach", key: "nav.coach" },
    { to: "/mikes-gym-location", key: "nav.gym" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-display text-xl tracking-wider leading-none">
              {BRAND.short}
              <span className="text-primary">.</span>
            </span>
            <span className="hidden md:inline text-[10px] uppercase tracking-[0.2em] text-muted-foreground leading-none">
              @ Mike's Gym Marbella
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
                activeProps={{ className: "text-foreground" }}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher className="hidden md:flex" />
            <a
              href={whatsappLink("Hi! I'd like to know more about Lodgey's Boxing.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-widest text-foreground hover:text-primary transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <Link
              to="/book"
              className="hidden md:inline-flex items-center px-4 py-2 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-medium hover:opacity-90 transition-opacity"
            >
              {t("nav.book")}
            </Link>
            <button
              type="button"
              className="lg:hidden text-foreground p-2 -mr-2"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <div className="px-4 py-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block py-3 text-base uppercase tracking-wider text-foreground hover:text-primary"
              >
                {t(item.key)}
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="block mt-4 py-3 bg-primary text-primary-foreground text-center uppercase tracking-widest text-sm"
            >
              {t("nav.book")}
            </Link>
            <Link
              to="/apply"
              onClick={() => setOpen(false)}
              className="block py-3 border border-border text-center uppercase tracking-widest text-sm mt-2"
            >
              {t("nav.apply")}
            </Link>
            <div className="pt-4 flex items-center justify-between">
              <LanguageSwitcher />
              <a
                href={whatsappLink()}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}