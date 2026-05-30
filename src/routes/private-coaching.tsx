import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/site/PageShell";
import heroImg from "@/assets/hero-boxer.jpg";

export const Route = createFileRoute("/private-coaching")({
  head: () => ({
    meta: [
      { title: "Private 1:1 Boxing Coaching — Marbella | Lodgey's Boxing" },
      { name: "description", content: "1:1 boxing coaching with Coach Lodgey at Mike's Gym Marbella. Beginner to fight-prep. Book a session." },
      { property: "og:title", content: "Private 1:1 Boxing Coaching — Marbella" },
      { property: "og:description", content: "Direct, focused, no fluff. Private boxing coaching at Mike's Gym Marbella." },
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
        </ul>
        <p>5-pack and 10-pack available. Deposit secures the slot.</p>
      </Section>
    </PageShell>
  );
}