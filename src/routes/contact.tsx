import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/site/PageShell";
import { BRAND, whatsappLink } from "@/lib/brand";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lodgey's Boxing @ Mike's Gym Marbella" },
      { name: "description", content: "Get in touch with Lodgey's Boxing at Mike's Gym Marbella. Reach us via WhatsApp, email, or visit us in person in La Cala de Mijas, Marbella." },
      { property: "og:title", content: "Contact — Lodgey's Boxing" },
      { property: "og:description", content: "WhatsApp, email or visit us at Mike's Gym Marbella in La Cala de Mijas." },
      { property: "og:url", content: "https://lodgeysboxing.com/contact" },
      { property: "og:image", content: "https://lodgeysboxing.com/og/coach-action.jpg" },
      { name: "twitter:image", content: "https://lodgeysboxing.com/og/coach-action.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://lodgeysboxing.com/contact" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="Contact" title="Get in touch" intro="The fastest way to reach us is WhatsApp. We reply personally." whatsappPrefill="Hi! I'd like to get in touch with Lodgey's Boxing.">
      <Section title="WhatsApp">
        <p>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Open WhatsApp →
          </a>
        </p>
      </Section>
      <Section title="Email">
        <p><a href={`mailto:${BRAND.email}`} className="text-primary hover:underline">{BRAND.email}</a></p>
      </Section>
      <Section title="Visit">
        <p>{BRAND.address.street}<br />{BRAND.address.postal} {BRAND.address.city}, {BRAND.address.country}</p>
      </Section>
    </PageShell>
  );
}