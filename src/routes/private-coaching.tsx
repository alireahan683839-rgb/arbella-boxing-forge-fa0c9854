import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/site/PageShell";
import heroImg from "@/assets/hero-boxer.jpg";

export const Route = createFileRoute("/private-coaching")({
  head: () => ({
    meta: [
      { title: "Private Boxing Coach Marbella | 1:1 Coaching with Mark Lodge" },
      { name: "description", content: "Book private 1:1 boxing coaching in Marbella with Mark Lodge. Beginner technique, fitness, confidence, fight preparation and executive coaching available." },
      { property: "og:title", content: "Private Boxing Coach Marbella | 1:1 Coaching with Mark Lodge" },
      { property: "og:description", content: "Champion-led private boxing coaching at Mike's Gym Marbella — beginner to fight prep." },
      { property: "og:url", content: "https://lodgeysboxing.com/private-coaching" },
      { property: "og:image", content: "https://lodgeysboxing.com/og/coach-profile.jpg" },
      { name: "twitter:image", content: "https://lodgeysboxing.com/og/coach-profile.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://lodgeysboxing.com/private-coaching" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      eyebrow="Private 1:1"
      title="Private Coaching"
      intro="One coach, one student. The fastest way to actually get good at boxing. Available as single sessions or block packages."
      heroImage={heroImg}
      ctaPrimary={{ label: "Book a private session", to: "/book" }}
      whatsappPrefill="Hi! I'd like to book a private 1:1 session."
    >
      <Section title="What you can work on">
        <ul>
          <li>Foundations — stance, guard, footwork, breathing</li>
          <li>Combinations, defence, head movement</li>
          <li>Sparring preparation</li>
          <li>Strength & conditioning specific to boxing</li>
        </ul>
      </Section>
      <Section title="Pricing">
        <ul>
          <li><strong>1 hour 1:1:</strong> €60</li>
          <li><strong>30 min 1:1:</strong> €30</li>
          <li><strong>Group class:</strong> €15</li>
          <li><strong>Monthly package:</strong> €700 for 3 one-hour 1:1 sessions per week for a month</li>
          <li><strong>Holiday retreat:</strong> €180 per day — includes room, accommodation and 3 meals a day (extra 1:1 €60/hr · €30/30 min)</li>
        </ul>
        <p>5-pack and 10-pack available. Deposit secures the slot.</p>
      </Section>
    </PageShell>
  );
}