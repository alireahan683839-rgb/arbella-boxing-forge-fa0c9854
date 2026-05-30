import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/site/PageShell";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Lodgey's Boxing" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="Admin" title="Admin">
      <Section title="Coming next">
        <p>Auth-gated admin for offerings, retreat dates, testimonials, FAQs, coach credentials (with verified toggle), media, bookings, leads and applications.</p>
        <p>This route is intentionally minimal in this build pass and will be wired up with role-based auth (admin-only) before launch.</p>
      </Section>
    </PageShell>
  );
}