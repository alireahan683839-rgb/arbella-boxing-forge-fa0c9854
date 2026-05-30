import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { whatsappLink } from "@/lib/brand";

export function StickyMobileCTA() {
  const { t } = useTranslation();
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-background/95 backdrop-blur-xl border-t border-border">
      <div className="flex gap-2">
        <Link
          to="/book"
          className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-medium"
        >
          {t("nav.book")}
        </Link>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-3 border border-border text-foreground"
          aria-label="WhatsApp"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}