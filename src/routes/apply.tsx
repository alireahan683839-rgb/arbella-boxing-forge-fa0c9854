import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { whatsappLink } from "@/lib/brand";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Boka strategisamtal — Business Boxing Retreat | Mark Lodge Boxing" },
      { name: "description", content: "Boka strategisamtal för Business Boxing Retreat på Mike's Gym Marbella. För founders, ledare och team." },
      { property: "og:title", content: "Boka strategisamtal — Business Retreat" },
      { property: "og:description", content: "Vi ringer er, förstår teamet och skickar offert." },
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
    const msg = `Business Boxing Retreat — strategisamtal\nNamn: ${data.name}\nMejl: ${data.email}\nFöretag: ${data.company}\nRoll: ${data.role}\nMål: ${data.goals}`;
    window.open(whatsappLink(msg), "_blank");
  };

  return (
    <PageShell eyebrow="Strategisamtal" title="BOKA STRATEGISAMTAL" intro="Berätta kort om er. Vi hör av oss, ringer ett kort strategisamtal och skickar sedan en personlig offert med datum och pris.">
      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <input required value={data.name} onChange={set("name")} placeholder="Ditt namn" className="bg-input border border-border px-4 py-3" />
          <input required type="email" value={data.email} onChange={set("email")} placeholder="Mejl" className="bg-input border border-border px-4 py-3" />
          <input value={data.company} onChange={set("company")} placeholder="Företag" className="bg-input border border-border px-4 py-3" />
          <input value={data.role} onChange={set("role")} placeholder="Roll" className="bg-input border border-border px-4 py-3" />
        </div>
        <textarea required value={data.goals} onChange={set("goals")} placeholder="Gruppstorlek, önskade datum och vad ni vill få ut av retreaten" rows={6} className="w-full bg-input border border-border px-4 py-3" />
        <button type="submit" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-medium">
          Skicka & öppna WhatsApp
        </button>
        {sent && <p className="text-sm text-primary">Tack — vi hör av oss inom 48 timmar.</p>}
      </form>
    </PageShell>
  );
}