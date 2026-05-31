import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/site/PageShell";
import { MapEmbed } from "@/components/site/MapEmbed";
import { BRAND, whatsappLink } from "@/lib/brand";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontakt & vägbeskrivning — Mark Lodge Boxing @ Mike's Gym Marbella" },
      { name: "description", content: "Kontakta Mark Lodge Boxing. WhatsApp, mejl eller besök oss på Mike's Gym Marbella. Karta och vägbeskrivning." },
      { property: "og:title", content: "Kontakt — Mark Lodge Boxing" },
      { property: "og:description", content: "WhatsApp, mejl eller besök oss på plats." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="Kontakt" title="HITTA HIT & HÖR AV DIG" intro="Snabbaste sättet att nå oss är WhatsApp. Vi svarar personligen." whatsappPrefill="Hej! Jag vill komma i kontakt med Mark Lodge Boxing.">
      <Section title="Karta & vägbeskrivning">
        <MapEmbed />
      </Section>
      <Section title="WhatsApp">
        <p>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Öppna WhatsApp →
          </a>
        </p>
      </Section>
      <Section title="Mejl">
        <p><a href={`mailto:${BRAND.email}`} className="text-primary hover:underline">{BRAND.email}</a></p>
      </Section>
      <Section title="Besök oss">
        <p>{BRAND.address.street}<br />{BRAND.address.postal} {BRAND.address.city}, {BRAND.address.country}</p>
      </Section>
    </PageShell>
  );
}