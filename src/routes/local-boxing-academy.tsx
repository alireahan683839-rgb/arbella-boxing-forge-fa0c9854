import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/site/PageShell";
import cardLocal from "@/assets/card-local.jpg";

export const Route = createFileRoute("/local-boxing-academy")({
  head: () => ({
    meta: [
      { title: "Lokala boxningsklasser i La Cala de Mijas — Mark Lodge Boxing" },
      { name: "description", content: "Veckovisa boxningsklasser för barn, ungdomar, vuxna, motionärer och tävlingsgrupp. Riktig coaching på Mike's Gym Marbella. Boka prova-på-pass." },
      { property: "og:title", content: "Lokala boxningsklasser — Mark Lodge Boxing" },
      { property: "og:description", content: "Riktig boxning i La Cala de Mijas för alla nivåer." },
      { property: "og:url", content: "/local-boxing-academy" },
      { property: "og:image", content: cardLocal },
    ],
    links: [{ rel: "canonical", href: "/local-boxing-academy" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      eyebrow="01 — Lokala klasser"
      title="RIKTIG BOXNING I LA CALA DE MIJAS"
      intro="Veckovisa gruppass indelade efter nivå — barn, ungdom, vuxna, motionärer och tävlingsgrupp. Riktig boxning i ett riktigt boxningsgym på Mike's Gym Marbella."
      heroImage={cardLocal}
      ctaPrimary={{ label: "Boka prova-på-pass", to: "/book" }}
      whatsappPrefill="Hej! Jag vill boka ett prova-på-pass på Mark Lodge Boxing."
    >
      <Section title="För vem">
        <ul>
          <li><strong>Barn (8–12):</strong> Koordination, självförtroende och teknik. Ingen sparring.</li>
          <li><strong>Ungdomar (13–17):</strong> Grunder, kondition och kontrollerad sparring med samtycke.</li>
          <li><strong>Vuxna — nybörjare & motionärer:</strong> Teknikledd träning med ordentlig kondition.</li>
          <li><strong>Vuxna — fortsättning:</strong> Bygg ut din arsenal, defensiv och footwork.</li>
          <li><strong>Tävlingsgrupp:</strong> Matchprep, sparring och individuella program.</li>
        </ul>
      </Section>
      <Section title="Vad du får">
        <ul>
          <li>Strukturerat veckoschema med tydlig progression</li>
          <li>Coach-ledda pass — inte ett klipp-på-tv-pass</li>
          <li>Tillgång till hela Mike's Gym</li>
          <li>Möjlighet att lägga till privat 1:1-coaching</li>
        </ul>
      </Section>
      <Section title="Schema">
        <ul>
          <li><strong>Måndag–fredag:</strong> Vuxengrupper morgon och kväll</li>
          <li><strong>Eftermiddagar:</strong> Barn- och ungdomsgrupper</li>
          <li><strong>Helger:</strong> Öppen sparring & tävlingsgrupp</li>
        </ul>
        <p className="text-sm text-muted-foreground">Exakta tider bekräftas vid bokning. Skriv på WhatsApp för aktuellt schema.</p>
      </Section>
      <Section title="Pris">
        <ul>
          <li><strong>Prova-på / drop-in:</strong> €15 per klass</li>
          <li><strong>Privat 1:1 (30 min):</strong> €30</li>
          <li><strong>Privat 1:1 (60 min):</strong> €60</li>
          <li><strong>Termin 1:1:</strong> €700/månad — 3 timslånga 1:1-pass i veckan</li>
        </ul>
        <p className="text-sm text-muted-foreground">Månadsmedlemskap finns. Slutpris bekräftas vid bokning.</p>
      </Section>
    </PageShell>
  );
}