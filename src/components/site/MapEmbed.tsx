import { MapPin, ExternalLink, MessageCircle } from "lucide-react";
import { BRAND, whatsappLink } from "@/lib/brand";

const ADDRESS = `${BRAND.address.street}, ${BRAND.address.postal} ${BRAND.address.city}, ${BRAND.address.country}`;
const MAPS_QUERY = encodeURIComponent(ADDRESS);
const EMBED_URL = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;
const OPEN_URL = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`;

export function MapEmbed({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`grid lg:grid-cols-5 gap-6 ${compact ? "" : "items-stretch"}`}>
      <div className="lg:col-span-3 relative overflow-hidden border border-border bg-surface aspect-[4/3] lg:aspect-auto lg:min-h-[420px]">
        <iframe
          title="Mike's Gym Marbella — karta"
          src={EMBED_URL}
          loading="lazy"
          className="absolute inset-0 w-full h-full grayscale contrast-125"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className="lg:col-span-2 flex flex-col justify-center gap-5 p-2">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Hitta hit</p>
          <h3 className="font-display text-3xl md:text-4xl leading-none mb-3">Mike's Gym Marbella</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {BRAND.address.street}<br />
            {BRAND.address.postal} {BRAND.address.city}<br />
            {BRAND.address.country}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-medium"
          >
            <MapPin className="h-4 w-4" /> Få vägbeskrivning
          </a>
          <a
            href={OPEN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-border text-foreground text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-colors"
          >
            <ExternalLink className="h-4 w-4" /> Öppna i Google Maps
          </a>
          <a
            href={whatsappLink("Hej! Jag behöver hjälp att hitta till Mike's Gym Marbella.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-border text-foreground text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-colors"
          >
            <MessageCircle className="h-4 w-4" /> Behöver du hjälp? Skriv till oss
          </a>
        </div>
      </div>
    </div>
  );
}