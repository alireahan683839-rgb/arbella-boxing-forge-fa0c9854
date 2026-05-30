import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/site/PageShell";
import cardLocal from "@/assets/card-local.jpg";

export const Route = createFileRoute("/local-boxing-academy")({
  head: () => ({
    meta: [
      { title: "Local Boxing Academy — Lodgey's Boxing Marbella" },
      { name: "description", content: "Weekly boxing classes for kids, teens, adults and competitors. Real coaching at Mike's Gym Marbella. Book a trial class." },
      { property: "og:title", content: "Local Boxing Academy — Lodgey's Boxing Marbella" },
      { property: "og:description", content: "Real boxing coaching for kids, teens, adults and competitors at Mike's Gym Marbella." },
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
      eyebrow="01 — Local Academy"
      title="Local Boxing Academy"
      intro="Weekly group classes structured by level — kids, teens, adults, competitors. Real boxing in a real boxing gym, hosted at Mike's Gym Marbella."
      heroImage={cardLocal}
      ctaPrimary={{ label: "Book a trial class", to: "/book" }}
      whatsappPrefill="Hi! I'd like to book a trial class at Lodgey's Boxing Academy."
    >
      <Section title="Who it's for">
        <ul>
          <li><strong>Kids (8–12):</strong> Coordination, confidence, technique. No sparring.</li>
          <li><strong>Teens (13–17):</strong> Foundations, fitness, controlled sparring with consent.</li>
          <li><strong>Adults:</strong> Beginner to advanced. Technique-led, fitness-loaded.</li>
          <li><strong>Competitors:</strong> Fight prep, sparring, individual programming.</li>
        </ul>
      </Section>
      <Section title="What you get">
        <ul>
          <li>Structured weekly schedule with progression</li>
          <li>Coach-led sessions — not a stream-along class</li>
          <li>Access to Mike's Gym's full facility</li>
          <li>Optional 1:1 private coaching add-ons</li>
        </ul>
      </Section>
      <Section title="Pricing">
        <ul>
          <li><strong>Group class:</strong> €15 per class</li>
          <li><strong>Private 1:1 (30 min):</strong> €30</li>
          <li><strong>Private 1:1 (1 hour):</strong> €60</li>
        </ul>
        <p>Monthly memberships available. Final pricing confirmed at booking.</p>
      </Section>
    </PageShell>
  );
}