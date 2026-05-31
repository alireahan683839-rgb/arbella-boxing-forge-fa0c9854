import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/site/PageShell";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Vanliga frågor (FAQ) — Mark Lodge Boxing" },
      { name: "description", content: "Vanliga frågor om Mark Lodge Boxing — lokala klasser, Holiday Boxing Camp, Business Retreat och privat 1:1 coaching." },
      { property: "og:title", content: "Vanliga frågor — Mark Lodge Boxing" },
      { property: "og:description", content: "Allt du behöver veta innan du bokar." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: Page,
});

const faqs = [
  { q: "Måste jag kunna boxas innan?", a: "Nej. Nybörjare är välkomna och de flesta börjar där. Vi möter dig på din nivå." },
  { q: "Är sparring obligatoriskt?", a: "Aldrig. Sparring är frivilligt och bygger på samtycke. Du kan träna i åratal utan att sparra en gång." },
  { q: "Vilken kondition behöver jag?", a: "Lite baskondition hjälper, men programmet anpassas efter dig. Vi har coachat både matchformade fighters och otränade founders." },
  { q: "Vad ingår i Holiday Boxing Camp?", a: "Två pass om dagen, boende på plats, performance-kök, återhämtning (isbad + mobilitet) och ett privat 1:1-pass med Mark." },
  { q: "Vad kostar Holiday Boxing Camp?", a: "€180 per dag — inkluderar rum, boende och 3 mål mat. Extra 1:1 coaching är €60/timme eller €30/30 min." },
  { q: "Hur funkar Business Boxing Retreat?", a: "Vi börjar med ett kort strategisamtal, skräddarsyr upplägget för ditt team (5, 10 eller 15+ personer) och skickar en personlig offert." },
  { q: "Vad kostar privat 1:1?", a: "€60 per timme, €30 per 30 min. Termin: €700/månad för 3 timslånga 1:1-pass i veckan." },
  { q: "Vad är avbokningsvillkoren?", a: "Deposition håller dina datum. Slutliga villkor bekräftas vid bokning — vi är rimliga och skriver till människor." },
  { q: "Kan jag ta med min partner?", a: "Ja — partners kan följa med som icke-tränande eller tränande gäster. Skriv på WhatsApp så löser vi det." },
  { q: "Hur tar jag mig hit?", a: "Mike's Gym Marbella ligger ~30 min från Málaga flygplats (AGP). Transfer ingår som tillval för camp-gäster." },
];

function Page() {
  return (
    <PageShell eyebrow="FAQ" title="VANLIGA FRÅGOR" intro="Hittar du inte din fråga? Skriv till oss på WhatsApp." whatsappPrefill="Hej! Jag har en fråga om Mark Lodge Boxing.">
      {faqs.map((f, i) => (
        <Section key={i} title={f.q}>
          <p>{f.a}</p>
        </Section>
      ))}
    </PageShell>
  );
}