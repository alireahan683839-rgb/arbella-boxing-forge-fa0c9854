import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/site/PageShell";
import { BRAND } from "@/lib/brand";
import cardHoliday from "@/assets/card-holiday.jpg";
import { MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/mikes-gym-location")({
  head: () => ({
    meta: [
      { title: "Mike's Gym Marbella Location | Boxing Coaching in La Cala de Mijas" },
      { name: "description", content: "Find Mike's Gym Marbella in Las Lagunas de Mijas. View map, directions and location details for boxing classes, private coaching and retreats." },
      { property: "og:title", content: "Mike's Gym Marbella — Boxing in La Cala de Mijas" },
      { property: "og:description", content: "Map, directions and travel info for Mike's Gym Marbella — 30 min from Málaga Airport." },
      { property: "og:url", content: "/mikes-gym-location" },
      { property: "og:image", content: cardHoliday },
    ],
    links: [{ rel: "canonical", href: "/mikes-gym-location" }],
  }),
  component: Page,
});

function Page() {
  const mapsQ = encodeURIComponent(`${BRAND.address.street}, ${BRAND.address.postal} ${BRAND.address.city}, ${BRAND.address.country}`);
  return (
    <PageShell
      eyebrow="The Gym"
      title="Mike's Gym Marbella"
      intro="A working boxing gym with on-site accommodation, performance kitchen, ice bath and mountain views — 30 minutes from Málaga airport."
      heroImage={cardHoliday}
    >
      <div className="not-prose mb-8 border border-border overflow-hidden">
        <iframe
          title="Mike's Gym Marbella — Google Maps"
          src={`https://www.google.com/maps?q=${mapsQ}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[420px] grayscale contrast-110"
        />
      </div>
      <Section title="Address">
        <p>{BRAND.address.street}<br />{BRAND.address.postal} {BRAND.address.city}<br />{BRAND.address.country}</p>
        <div className="not-prose mt-4 flex flex-col sm:flex-row gap-3">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${mapsQ}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-widest cta-glow"
          >
            <MapPin className="h-4 w-4" /> Get Directions
          </a>
          <Link to="/book" className="inline-flex items-center gap-2 px-5 py-3 border border-border text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-colors">
            Book Your Stay / Camp <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
      <Section title="Getting here">
        <ul>
          <li><strong>From Málaga Airport (AGP):</strong> ~30 minutes by car via the AP-7 / A-7</li>
          <li><strong>From La Cala de Mijas:</strong> 10–15 minutes — the gym sits in the hills, use the map</li>
          <li>Airport transfer available as a retreat add-on</li>
          <li>Free parking on-site</li>
          <li>The gym is in a mountain area — please use the map link, not just the address</li>
        </ul>
      </Section>
      <Section title="What's on-site">
        <ul>
          <li>Full boxing gym — ring, bags, pads, conditioning area</li>
          <li>On-site accommodation for retreat guests</li>
          <li>Performance kitchen with three meals a day</li>
          <li>Recovery: ice bath, mobility space, mountain air</li>
        </ul>
      </Section>
    </PageShell>
  );
}