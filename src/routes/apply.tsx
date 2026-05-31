import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { whatsappLink } from "@/lib/brand";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Apply — Founder & Executive Retreat | Lodgey's Boxing" },
      { name: "description", content: "Apply for the Founder & Executive Boxing Retreat at Mike's Gym Marbella. Application-only, small cohorts." },
      { property: "og:title", content: "Apply — Founder & Executive Retreat" },
      { property: "og:description", content: "Application-only. Small groups. Built around clarity, energy and discipline." },
      { property: "og:url", content: "/apply" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/apply" }],
  }),
  component: Page,
});

function Page() {
  const [data, setData] = useState({ name: "", email: "", company: "", role: "", goals: "" });
  const [sent, setSent] = useState(false);
  const set = (k: keyof typeof data) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setData({ ...data, [k]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    const msg = `Founder Retreat application\nName: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\nRole: ${data.role}\nGoals: ${data.goals}`;
    window.open(whatsappLink(msg), "_blank");
  };

  return (
    <PageShell eyebrow="Apply" title="Founder & Executive Retreat" intro="Tell us about you. If it's a fit, we'll set up a short call to confirm dates and price.">
      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <input required value={data.name} onChange={set("name")} placeholder="Full name" className="bg-input border border-border px-4 py-3" />
          <input required type="email" value={data.email} onChange={set("email")} placeholder="Email" className="bg-input border border-border px-4 py-3" />
          <input value={data.company} onChange={set("company")} placeholder="Company" className="bg-input border border-border px-4 py-3" />
          <input value={data.role} onChange={set("role")} placeholder="Role" className="bg-input border border-border px-4 py-3" />
        </div>
        <textarea required value={data.goals} onChange={set("goals")} placeholder="What are you hoping to get out of this retreat?" rows={6} className="w-full bg-input border border-border px-4 py-3" />
        <button type="submit" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-medium">
          Submit application
        </button>
        {sent && <p className="text-sm text-primary">Thanks — we'll review and reply within 48h.</p>}
      </form>
    </PageShell>
  );
}