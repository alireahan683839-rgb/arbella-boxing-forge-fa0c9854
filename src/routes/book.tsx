import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { whatsappLink } from "@/lib/brand";
import { MessageCircle } from "lucide-react";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book — Lodgey's Boxing @ Mike's Gym Marbella" },
      { name: "description", content: "Book a trial class, a private 1:1 or reserve your boxing holiday retreat at Mike's Gym Marbella." },
      { property: "og:title", content: "Book — Lodgey's Boxing" },
      { property: "og:description", content: "Book your boxing experience at Mike's Gym Marbella." },
      { property: "og:url", content: "/book" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: Page,
});

type Offering = "trial" | "private" | "holiday";

function Page() {
  const [offering, setOffering] = useState<Offering>("trial");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [sent, setSent] = useState(false);

  const labels: Record<Offering, string> = {
    trial: "Trial class",
    private: "Private 1:1",
    holiday: "Holiday retreat (deposit)",
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    const msg = `Booking request — ${labels[offering]}\nName: ${name}\nEmail: ${email}\nNotes: ${notes}`;
    window.open(whatsappLink(msg), "_blank");
  };

  return (
    <PageShell eyebrow="Book" title="Book your session" intro="Local classes and private sessions are booked directly. Holiday retreats secure your dates with a deposit.">
      <ul className="text-sm text-muted-foreground space-y-1 mb-2">
        <li><strong className="text-foreground">Trial / group class:</strong> €15</li>
        <li><strong className="text-foreground">Private 1:1:</strong> €60 per hour · €30 per 30 min</li>
        <li><strong className="text-foreground">Holiday retreat:</strong> €180 per day — includes room, accommodation and 3 meals a day</li>
      </ul>
      <form onSubmit={onSubmit} className="mt-8 space-y-6">
        <div>
          <label className="text-xs uppercase tracking-widest text-muted-foreground mb-3 block">Choose</label>
          <div className="grid sm:grid-cols-3 gap-2">
            {(Object.keys(labels) as Offering[]).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setOffering(k)}
                className={`px-4 py-4 border text-left text-sm transition-colors ${
                  offering === k ? "border-primary bg-primary/10 text-foreground" : "border-border text-muted-foreground hover:border-primary/50"
                }`}
              >
                {labels[k]}
              </button>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="bg-input border border-border px-4 py-3 text-foreground" />
          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="bg-input border border-border px-4 py-3 text-foreground" />
        </div>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Dates, level, anything we should know" rows={5} className="w-full bg-input border border-border px-4 py-3 text-foreground" />
        <button type="submit" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-medium">
          <MessageCircle className="h-4 w-4" /> Send & open WhatsApp
        </button>
        {sent && <p className="text-sm text-primary">Thanks — we'll be in touch. WhatsApp opens in a new tab.</p>}
      </form>
    </PageShell>
  );
}