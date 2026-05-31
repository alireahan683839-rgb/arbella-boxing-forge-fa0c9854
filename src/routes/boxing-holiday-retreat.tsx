import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/site/PageShell";
import cardHoliday from "@/assets/card-holiday.jpg";

export const Route = createFileRoute("/boxing-holiday-retreat")({
  head: () => ({
    meta: [
      { title: "Holiday Boxing Camp i Marbella — Mark Lodge Boxing" },
      { name: "description", content: "5, 7 eller 10 dagars boxning på Mike's Gym Marbella. Två pass om dagen, performance-mat, återhämtning och boende på plats. Boxningsresa på Costa del Sol." },
      { property: "og:title", content: "Holiday Boxing Camp — Marbella" },
      { property: "og:description", content: "Träna, återhämta dig och resetta i bergen ovanför Marbella. 5, 7 eller 10 dagar." },
      { property: "og:url", content: "/boxing-holiday-retreat" },
      { property: "og:image", content: cardHoliday },
    ],
    links: [{ rel: "canonical", href: "/boxing-holiday-retreat" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      eyebrow="02 — Holiday Camp"
      title="FEM DAGAR SOM KAN FÖRÄNDRA MER ÄN DIN FYSIK."
      intro="Fem, sju eller tio dagar med boxning, återhämtning, riktig mat och bergsluft. Två pass om dagen, på Mike's Gym Marbella."
      heroImage={cardHoliday}
      ctaPrimary={{ label: "Reservera dina datum", to: "/book" }}
      whatsappPrefill="Hej! Jag vill veta mer om Holiday Boxing Camp."
    >
      <Section title="För dig som vill ha en riktig transformation">
        <p>Alla nivåer välkomna — otränade, halvtränade, vältränade och elittränade. Du bor, tränar, äter och återhämtar dig på plats. Du kommer hem starkare i kropp och huvud.</p>
      </Section>
      <Section title="Vad som ingår">
        <ul>
          <li>Två boxningspass om dagen (teknik fm, kondition / pads em)</li>
          <li>Boende på plats på Mike's Gym</li>
          <li>Performance-kök — riktig mat tre gånger om dagen</li>
          <li>Återhämtning: isbad, mobilitet, vila</li>
          <li>Ett privat 1:1-pass med Mark Lodge</li>
        </ul>
      </Section>
      <Section title="Upplägg & pris">
        <ul>
          <li><strong>€180 per dag</strong> — inkluderar rum, boende och 3 mål mat. Extra 1:1: €60/timme eller €30/30 min.</li>
          <li><strong>5 dagar</strong> — kort reset</li>
          <li><strong>7 dagar</strong> — klassikern</li>
          <li><strong>10 dagar</strong> — full transformation</li>
        </ul>
        <p>Deposition säkrar dina datum. Slutpris bekräftas före betalning.</p>
      </Section>
      <Section title="Tillval">
        <ul>
          <li>Flygplatstransfer från Málaga (AGP)</li>
          <li>Extra privata 1:1-pass (€60/timme · €30/30 min)</li>
          <li>Rumsuppgradering</li>
        </ul>
      </Section>
      <Section title="Nästa datum">
        <ul>
          <li><strong>Kommer snart</strong> — skriv på WhatsApp så bekräftar vi nästa tillgängliga vecka</li>
        </ul>
      </Section>
    </PageShell>
  );
}