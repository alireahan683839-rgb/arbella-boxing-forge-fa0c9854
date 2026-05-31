import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/site/PageShell";
import heroImg from "@/assets/hero-boxer.jpg";

export const Route = createFileRoute("/private-coaching")({
  head: () => ({
    meta: [
      { title: "Privat 1:1 boxningscoaching i Marbella — Mark Lodge Boxing" },
      { name: "description", content: "Privat 1:1 boxningscoaching med Mark Lodge på Mike's Gym Marbella. Nybörjare till matchprep. Boka en session." },
      { property: "og:title", content: "Privat 1:1 boxningscoaching — Marbella" },
      { property: "og:description", content: "Direkt, fokuserat, premium. Privat boxningscoaching på Mike's Gym Marbella." },
      { property: "og:url", content: "/private-coaching" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/private-coaching" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      eyebrow="Premium 1:1"
      title="PRIVAT COACHING. RIKTIGA RESULTAT."
      intro="En coach, en klient. Den snabbaste vägen till verklig progression — oavsett om du är nybörjare eller förbereder dig för match."
      heroImage={heroImg}
      ctaPrimary={{ label: "Boka 1:1 nu", to: "/book" }}
      whatsappPrefill="Hej! Jag vill boka ett privat 1:1-pass med Mark Lodge."
    >
      <Section title="Vad vi kan jobba på">
        <ul>
          <li>Grunder — stance, gard, footwork, andning</li>
          <li>Kombinationer, försvar, head movement</li>
          <li>Sparringprep</li>
          <li>Styrka & kondition specifikt för boxning</li>
          <li>Skräddarsytt program för matchprep</li>
        </ul>
      </Section>
      <Section title="Pris & paket">
        <ul>
          <li><strong>60 min 1:1:</strong> €60</li>
          <li><strong>30 min 1:1:</strong> €30</li>
          <li><strong>Termin 1:1:</strong> €700/månad — 3 timslånga 1:1-pass i veckan</li>
          <li><strong>5-pack & 10-pack:</strong> rabatterat — fråga oss</li>
        </ul>
        <p className="text-sm text-muted-foreground">Deposition säkrar tiden. Slutpris bekräftas vid bokning.</p>
      </Section>
    </PageShell>
  );
}