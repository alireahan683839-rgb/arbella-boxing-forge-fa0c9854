import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/site/PageShell";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Lodgey's Boxing @ Mike's Gym Marbella" },
      { name: "description", content: "Frequently asked questions about Lodgey's Boxing — local classes, holiday retreats, founder retreats and private coaching." },
      { property: "og:title", content: "FAQ — Lodgey's Boxing" },
      { property: "og:description", content: "Everything you need to know before booking." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: Page,
});

const faqs = [
  { q: "Do I need to know how to box?", a: "No. Beginners are welcome and most guests start there. We meet you where you are." },
  { q: "Is sparring required?", a: "Never. Sparring is optional and consent-based. You can train for years without sparring once." },
  { q: "What level of fitness do I need?", a: "Some baseline fitness helps, but the programme adapts to you. We've coached very fit fighters and very unfit founders." },
  { q: "What does the retreat include?", a: "Twice-daily training, accommodation on-site, performance kitchen, recovery (ice bath + mobility), and one private 1:1." },
  { q: "How much does the holiday retreat cost?", a: "€180 per day — includes your room, accommodation and 3 meals a day. Extra 1:1 coaching is €60 per hour or €30 per half hour." },
  { q: "What's the cancellation policy?", a: "Deposits hold your dates. Final cancellation terms are confirmed at booking — we're reasonable and write to humans." },
  { q: "Can I bring my partner?", a: "Yes — partners can join as non-training guests or training guests. Ask us on WhatsApp." },
];

function Page() {
  return (
    <PageShell eyebrow="FAQ" title="Common questions" intro="If yours isn't here, message us on WhatsApp.">
      {faqs.map((f, i) => (
        <Section key={i} title={f.q}>
          <p>{f.a}</p>
        </Section>
      ))}
    </PageShell>
  );
}