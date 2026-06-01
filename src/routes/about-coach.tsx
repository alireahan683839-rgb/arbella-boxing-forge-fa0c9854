import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/site/PageShell";
import heroImg from "@/assets/hero-boxer.jpg";
import { Trophy, Flag, Shield } from "lucide-react";

export const Route = createFileRoute("/about-coach")({
  head: () => ({
    meta: [
      { title: "Mark Lodge Boxing Coach | Champion Kickboxer & Professional Coach" },
      { name: "description", content: "Meet Mark Lodge — former professional kickboxer, 3-time European Kickboxing Champion, former British and English Champion, professional boxing coach and BBBoC coach." },
      { property: "og:title", content: "Mark Lodge — Champion Kickboxer & Professional Boxing Coach" },
      { property: "og:description", content: "Former Professional Kickboxer. 3× European Kickboxing Champion. Professional Boxing Coach. Head Coach PPBL. BBBoC Coach." },
      { property: "og:url", content: "https://lodgeysboxing.com/about-coach" },
      { property: "og:image", content: "https://lodgeysboxing.com/og/coach-profile.jpg" },
      { name: "twitter:image", content: "https://lodgeysboxing.com/og/coach-profile.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://lodgeysboxing.com/about-coach" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Mark Lodge",
          url: "https://lodgeysboxing.com/about-coach",
          jobTitle: "Professional Boxing Coach",
          description: "Former Professional Kickboxer, 3× European Kickboxing Champion, Former British & English Champion, BBBoC Coach, Head Coach of the Professional Pakistan Boxing League (PPBL).",
          worksFor: { "@type": "SportsActivityLocation", name: "Mike's Gym Marbella", url: "https://lodgeysboxing.com" },
          award: [
            "3× European Kickboxing Champion",
            "Former British Champion",
            "Former English Champion",
          ],
        }),
      },
    ],
  }),
  component: Page,
});

const credentials = [
  { icon: Trophy, label: "Former Professional Kickboxer" },
  { icon: Trophy, label: "3× European Kickboxing Champion" },
  { icon: Flag, label: "Former British Champion" },
  { icon: Flag, label: "Former English Champion" },
  { icon: Shield, label: "Professional Boxing Coach" },
  { icon: Shield, label: "BBBoC Coach — British Boxing Board of Control" },
  { icon: Trophy, label: "Head Coach — Professional Pakistan Boxing League (PPBL)" },
];

function Page() {
  return (
    <PageShell
      eyebrow="The Coach"
      title="Mark Lodge"
      intro="Champion kickboxer. Professional boxing coach. A life in the sport — direct, technical and adapted to every level, from first class to fight prep."
      heroImage={heroImg}
    >
      <Section title="Approach">
        <p>
          Mark Lodge brings real fight experience, professional coaching structure and decades of combat-sport knowledge to Mike's Gym Marbella. Whether you are stepping into boxing for the first time, returning to training, preparing for competition or joining a premium retreat, the coaching is direct, technical and adapted to your level.
        </p>
      </Section>
      <Section title="Verified credentials">
        <div className="not-prose grid sm:grid-cols-2 gap-3 mt-4">
          {credentials.map((c) => (
            <div key={c.label} className="flex items-center gap-3 border border-border/60 bg-surface/60 px-4 py-3">
              <c.icon className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-xs uppercase tracking-wider text-foreground/90">{c.label}</span>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Coaching focus">
        <ul>
          <li>Beginners — clean technique from day one, no ego required</li>
          <li>Returners — re-build fitness and confidence safely</li>
          <li>Competitors — fight prep, sparring, individual programming</li>
          <li>Executives & retreat guests — focus, energy, discipline</li>
        </ul>
      </Section>
    </PageShell>
  );
}