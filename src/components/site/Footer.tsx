import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { BRAND, whatsappLink } from "@/lib/brand";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-border/60 bg-background pt-16 pb-32 md:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2">
            <div className="font-display text-2xl tracking-wider">
              MARK LODGE<span className="text-primary">.</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-sm">
              {t("footer.tagline")}
            </p>
            <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
              {t("footer.hostedAt")}
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Upplägg</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/local-boxing-academy" className="hover:text-primary">{t("nav.local")}</Link></li>
              <li><Link to="/boxing-holiday-retreat" className="hover:text-primary">{t("nav.holiday")}</Link></li>
              <li><Link to="/founder-executive-retreat" className="hover:text-primary">{t("nav.founder")}</Link></li>
              <li><Link to="/private-coaching" className="hover:text-primary">{t("nav.private")}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Hitta hit</h4>
            <p className="text-sm text-muted-foreground">{BRAND.address.street}</p>
            <p className="text-sm text-muted-foreground">{BRAND.address.postal} {BRAND.address.city}</p>
            <Link to="/mikes-gym-location" className="text-sm text-primary hover:underline mt-3 inline-block">{t("cta.directions")}</Link>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline mt-2">
              {t("cta.whatsapp")}
            </a>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border/40 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {BRAND.fullName}. {t("footer.rights")}</p>
          <div className="flex gap-4">
            <Link to="/faq" className="hover:text-foreground">{t("nav.faq")}</Link>
            <Link to="/contact" className="hover:text-foreground">{t("nav.contact")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}