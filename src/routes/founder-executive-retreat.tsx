import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/site/PageShell";
import cardFounder from "@/assets/card-founder.jpg";

export const Route = createFileRoute("/founder-executive-retreat")({
  head: () => ({
    meta: [
      { title: "Business Boxing Retreat i Marbella — Mark Lodge Boxing" },
      { name: "description", content: "Boxningsretreat för founders, ledare och företagsteam. Energi, fokus, sammanhållning. 5, 10 eller 15+ personer. Boka strategisamtal." },
      { property: "og:title", content: "Business Boxing Retreat — Mark Lodge Boxing" },
      { property: "og:description", content: "Byt konferensrum mot ring, pads och bergsluft." },
      { property: "og:url", content: "/founder-executive-retreat" },
      { property: "og:image", content: cardFounder },
    ],
    links: [{ rel: "canonical", href: "/founder-executive-retreat" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      eyebrow="03 — Business Retreat"
      title="BYT KONFERENSRUM MOT RING, PADS OCH BERGSLUFT."
      intro="Träningsresa för founders, ledningsgrupper och team som vill bygga energi, fokus och sammanhållning på riktigt. Vi skräddarsyr upplägget för 5, 10 eller 15+ personer."
      heroImage={cardFounder}
      ctaPrimary={{ label: "Boka strategisamtal", to: "/apply" }}
      whatsappPrefill="Hej! Vi vill boka strategisamtal för Business Boxing Retreat."
    >
      <Section title="Formatet">
        <ul>
          <li>Liten grupp — 5, 10 eller 15+ personer</li>
          <li>Boxning två gånger om dagen — anpassat efter nivå</li>
          <li>Strategifönster, andning, isbad och mobilitet</li>
          <li>Performance-kök — inga beslut behöver tas om mat</li>
          <li>Valbara 1:1-pass med Mark Lodge</li>
        </ul>
      </Section>
      <Section title="Varför företag väljer det här">
        <p>De flesta retreats ger dig en grön smoothie och ett mantra. Den här ger dig handskar, struktur och tystnad. Ni kommer hit överstimulerade. Ni åker hem som ett annat team.</p>
      </Section>
      <Section title="Så funkar det">
        <ol>
          <li>Du bokar ett kort strategisamtal</li>
          <li>Vi ringer och förstår ert team och era mål</li>
          <li>Ni får en personlig offert med datum och pris</li>
        </ol>
      </Section>
      <Section title="Gruppstorlekar">
        <ul>
          <li><strong>5 personer:</strong> ledningsgrupp / founders-cirkel</li>
          <li><strong>10 personer:</strong> nyckelteam eller offsite</li>
          <li><strong>15+ personer:</strong> custom — vi skräddarsyr boende och program</li>
        </ul>
      </Section>
    </PageShell>
  );
}