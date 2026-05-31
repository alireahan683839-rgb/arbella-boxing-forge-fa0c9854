import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/site/PageShell";
import { MapEmbed } from "@/components/site/MapEmbed";
import cardHoliday from "@/assets/card-holiday.jpg";

export const Route = createFileRoute("/mikes-gym-location")({
  head: () => ({
    meta: [
      { title: "Träna på Mike's Gym Marbella — adress & vägbeskrivning" },
      { name: "description", content: "Mike's Gym Marbella — ett legendariskt boxningsgym med boende, återhämtning och performance-kök i bergen, 30 min från Málaga flygplats." },
      { property: "og:title", content: "Mike's Gym Marbella" },
      { property: "og:description", content: "Ett riktigt boxningsgym i bergen ovanför Marbella." },
      { property: "og:url", content: "/mikes-gym-location" },
      { property: "og:image", content: cardHoliday },
    ],
    links: [{ rel: "canonical", href: "/mikes-gym-location" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      eyebrow="Träningsplatsen"
      title="MIKE'S GYM MARBELLA"
      intro="Ett legendariskt boxningsgym med boende på plats, performance-kök, isbad och bergsutsikt — 30 minuter från Málaga flygplats."
      heroImage={cardHoliday}
    >
      <Section title="Platsen är en del av upplevelsen">
        <p>Bergen, luften, anläggningen, boendet, maten, återhämtningen — och ett gym som har sett världens bästa fighters. Här tränar du.</p>
      </Section>
      <Section title="Faciliteter">
        <ul>
          <li>Fullskaligt boxningsgym med ringar och säckar</li>
          <li>Boende på plats — rum för retreat-gäster</li>
          <li>Performance-kök med 3 mål om dagen</li>
          <li>Isbad och mobilitetszon</li>
          <li>Utomhusyta för conditioning och sol</li>
        </ul>
      </Section>
      <Section title="Hitta hit">
        <MapEmbed />
      </Section>
      <Section title="Resa hit">
        <ul>
          <li>~30 minuter med bil från Málaga flygplats (AGP)</li>
          <li>Flygplatstransfer ingår som tillval för camp-gäster</li>
          <li>Gratis parkering på plats</li>
        </ul>
      </Section>
    </PageShell>
  );
}