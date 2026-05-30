import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/site/PageShell";
import cardFounder from "@/assets/card-founder.jpg";

export const Route = createFileRoute("/founder-executive-retreat")({
  head: () => ({
    meta: [
      { title: "Founder & Executive Boxing Retreat — Lodgey's Boxing Marbella" },
      { name: "description", content: "Application-only boxing retreat for founders, leaders and executive teams. Train, reset, return sharper. Small groups in Marbella." },
      { property: "og:title", content: "Founder & Executive Retreat — Lodgey's Boxing" },
      { property: "og:description", content: "Application-only. Small groups. Built around clarity, energy and discipline." },
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
      eyebrow="03 — Founders & Executives"
      title="Founder & Executive Retreat"
      intro="Application-only. Small groups. Built for founders and leaders who need to step away from the noise, train with structure and come back sharper."
      heroImage={cardFounder}
      ctaPrimary={{ label: "Apply for the retreat", to: "/apply" }}
      whatsappPrefill="Hi! I'd like to apply for the Founder & Executive Retreat."
    >
      <Section title="The format">
        <ul>
          <li>Small cohort, application-led</li>
          <li>Boxing twice daily — built around your level</li>
          <li>Strategy windows, breathwork, ice bath, mobility</li>
          <li>Performance kitchen, no decisions on food</li>
          <li>Optional 1:1 coaching with Lodgey</li>
        </ul>
      </Section>
      <Section title="Why founders come here">
        <p>Most retreats hand you a green smoothie and a mantra. This one hands you gloves, structure and silence. You arrive overstimulated. You leave clear.</p>
      </Section>
      <Section title="How it works">
        <ol>
          <li>You submit a short application</li>
          <li>We get on a discovery call</li>
          <li>If it's a fit, we send a personal offer with dates and price</li>
        </ol>
      </Section>
    </PageShell>
  );
}