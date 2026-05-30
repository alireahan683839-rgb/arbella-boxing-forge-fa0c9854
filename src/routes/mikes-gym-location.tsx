import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/site/PageShell";
import { BRAND } from "@/lib/brand";
import cardHoliday from "@/assets/card-holiday.jpg";

export const Route = createFileRoute("/mikes-gym-location")({
  head: () => ({
    meta: [
      { title: "Mike's Gym Marbella — Location & Directions | Lodgey's Boxing" },
      { name: "description", content: "Mike's Gym Marbella — a working boxing gym with accommodation, recovery and real food in the hills 30 min from Málaga airport." },
      { property: "og:title", content: "Mike's Gym Marbella — Location" },
      { property: "og:description", content: "A working boxing gym in the mountains above Marbella." },
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
      <Section title="Address">
        <p>{BRAND.address.street}<br />{BRAND.address.postal} {BRAND.address.city}<br />{BRAND.address.country}</p>
        <p>
          <a href={`https://www.google.com/maps/search/?api=1&query=${mapsQ}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Open in Google Maps →
          </a>
        </p>
      </Section>
      <Section title="Getting here">
        <ul>
          <li>~30 minutes by car from Málaga Airport (AGP)</li>
          <li>Airport transfer available as a retreat add-on</li>
          <li>Free parking on-site</li>
        </ul>
      </Section>
    </PageShell>
  );
}