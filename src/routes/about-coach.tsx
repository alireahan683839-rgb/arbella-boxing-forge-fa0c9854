import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/site/PageShell";
import heroImg from "@/assets/hero-boxer.jpg";

export const Route = createFileRoute("/about-coach")({
  head: () => ({
    meta: [
      { title: "Coach Mark Lodgey — Lodgey's Boxing @ Mike's Gym Marbella" },
      { name: "description", content: "Meet Mark Lodgey — the coach behind Lodgey's Boxing at Mike's Gym Marbella. Real boxing, real coaching, real standards." },
      { property: "og:title", content: "Coach Mark Lodgey — Lodgey's Boxing" },
      { property: "og:description", content: "The coach behind Lodgey's Boxing at Mike's Gym Marbella." },
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
      eyebrow="The Coach"
      title="Mark Lodgey"
      intro="A life in the sport. A coach for kids, for adults, for fighters and for founders. The same standard, adapted to the person in front of him."
      heroImage={heroImg}
    >
      <Section title="Approach">
        <p>Boxing taught properly is one of the most honest things you can do with your time. You can't fake it, you can't shortcut it, and the gym tells the truth quickly. Lodgey's coaching is built on that: structure first, ego nowhere.</p>
      </Section>
      <Section title="Credentials">
        <p className="text-sm text-muted-foreground italic">Final credentials, fight records and logos will be added once verified. Placeholder list below is editable in admin.</p>
        <ul>
          <li>Years in the sport — placeholder</li>
          <li>Coaching certifications — placeholder</li>
          <li>Notable fights cornered — placeholder</li>
        </ul>
      </Section>
    </PageShell>
  );
}