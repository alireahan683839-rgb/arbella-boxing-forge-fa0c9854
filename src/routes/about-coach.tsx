import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/site/PageShell";
import heroImg from "@/assets/hero-boxer.jpg";

export const Route = createFileRoute("/about-coach")({
  head: () => ({
    meta: [
      { title: "Mark Lodge — coachen bakom Mark Lodge Boxing @ Mike's Gym Marbella" },
      { name: "description", content: "Möt Mark Lodge — coachen bakom Mark Lodge Boxing på Mike's Gym Marbella. Riktig boxning, riktig coaching, riktig standard." },
      { property: "og:title", content: "Mark Lodge — coachen" },
      { property: "og:description", content: "Coachen bakom Mark Lodge Boxing på Mike's Gym Marbella." },
      { property: "og:url", content: "/about-coach" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/about-coach" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      eyebrow="Coachen"
      title="MARK LODGE"
      intro="Ett liv i sporten. En coach för barn, vuxna, fighters och founders. Samma standard — anpassad till personen framför honom."
      heroImage={heroImg}
    >
      <Section title="Approach">
        <p>Boxning lärd på rätt sätt är en av de mest ärliga saker du kan göra med din tid. Du kan inte fejka det, du kan inte ta genvägar, och gymet säger alltid sanningen. Marks coaching är byggd på det: struktur först, ego ingenstans.</p>
      </Section>
      <Section title="Erfarenhet & meriter">
        <p className="text-sm text-muted-foreground italic">Slutliga meriter, matchrekord och logotyper läggs in när de är verifierade. Listan nedan är platshållare och redigeras i admin.</p>
        <ul>
          <li>År i sporten — platshållare</li>
          <li>Coaching-certifieringar — platshållare</li>
          <li>Tunga matcher cornerade — platshållare</li>
          <li>Mike's Gym Marbella — partner & hemmagym</li>
        </ul>
      </Section>
      <Section title="Träna med Mark">
        <p>Mark coachar lokala klasser, Holiday Boxing Camp, Business Retreats och privata 1:1. Välj din väg och boka direkt — eller skriv på WhatsApp om du vill prata först.</p>
      </Section>
    </PageShell>
  );
}