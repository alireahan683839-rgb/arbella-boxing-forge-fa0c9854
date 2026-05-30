import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/site/PageShell";
import cardHoliday from "@/assets/card-holiday.jpg";

export const Route = createFileRoute("/boxing-holiday-retreat")({
  head: () => ({
    meta: [
      { title: "Boxing Holiday Retreat — Marbella | Lodgey's Boxing" },
      { name: "description", content: "5, 7 or 10-day boxing retreats at Mike's Gym Marbella. Twice-daily training, recovery, real food, on-site accommodation." },
      { property: "og:title", content: "Boxing Holiday Retreat — Marbella" },
      { property: "og:description", content: "Train, recover and reset in the hills above Marbella. 5, 7 or 10-day boxing holidays." },
      { property: "og:url", content: "/boxing-holiday-retreat" },
      { property: "og:image", content: cardHoliday },
    ],
    links: [{ rel: "canonical", href: "/boxing-holiday-retreat" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      eyebrow="02 — Holiday Retreat"
      title="Boxing Holiday Retreat"
      intro="Five, seven or ten days of boxing, recovery, real food and mountain air. Twice-daily training, hosted at Mike's Gym Marbella."
      heroImage={cardHoliday}
      ctaPrimary={{ label: "Reserve your dates", to: "/book" }}
      whatsappPrefill="Hi! I'd like more info on the Boxing Holiday Retreat."
    >
      <Section title="What's included">
        <ul>
          <li>Twice-daily boxing sessions (technique AM, conditioning / pads PM)</li>
          <li>On-site accommodation at Mike's Gym</li>
          <li>Performance kitchen — proper food, three times a day</li>
          <li>Recovery: sauna, mobility, rest</li>
          <li>One private 1:1 with Coach Lodgey</li>
        </ul>
      </Section>
      <Section title="Lengths & pricing">
        <ul>
          <li><strong>€180 per day</strong> — includes room, accommodation and 3 meals a day</li>
          <li><strong>5 days</strong> — short reset</li>
          <li><strong>7 days</strong> — the classic</li>
          <li><strong>10 days</strong> — full transformation</li>
        </ul>
        <p>Extra 1:1 coaching: €60 per hour or €30 per half hour. Deposit secures your dates. Final pricing confirmed before payment.</p>
      </Section>
      <Section title="Add-ons">
        <ul>
          <li>Airport transfer from Málaga (AGP)</li>
          <li>Additional private 1:1 sessions (€60/hr · €30/30 min)</li>
          <li>Room upgrade</li>
        </ul>
      </Section>
    </PageShell>
  );
}