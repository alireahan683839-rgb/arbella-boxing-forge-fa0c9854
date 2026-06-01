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
      { property: "og:url", content: "https://lodgeysboxing.com/book" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "https://lodgeysboxing.com/book" }],
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
  const [receipt, setReceipt] = useState<{
    ref: string;
    when: string;
    offering: Offering;
    name: string;
    email: string;
    notes: string;
  } | null>(null);

  const labels: Record<Offering, string> = {
    trial: "Trial class",
    private: "Private 1:1",
    holiday: "Holiday retreat (deposit)",
  };

  const prices: Record<Offering, string> = {
    trial: "€15 per class",
    private: "€60 per hour · €30 per 30 min · Term: €700/month",
    holiday: "€180 per day — includes room, accommodation and 3 meals a day. Extra 1:1: €60/hr · €30/30 min",
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    const ref = `LB-${Date.now().toString(36).toUpperCase()}`;
    setReceipt({
      ref,
      when: new Date().toLocaleString("sv-SE"),
      offering,
      name,
      email,
      notes,
    });
    const msg = `Booking request — ${labels[offering]}\nName: ${name}\nEmail: ${email}\nNotes: ${notes}`;
    window.open(whatsappLink(msg), "_blank");
  };

  return (
    <PageShell eyebrow="Book" title="Book your session" intro="Local classes and private sessions are booked directly. Holiday retreats secure your dates with a deposit.">
      {receipt && (
        <div className="mb-8 border border-primary/40 bg-primary/5 p-6">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Booking receipt</p>
              <h2 className="font-display text-2xl md:text-3xl mt-1">Request received</h2>
            </div>
            <div className="text-right text-xs text-muted-foreground">
              <div>Ref: <span className="text-foreground font-mono">{receipt.ref}</span></div>
              <div>{receipt.when}</div>
            </div>
          </div>
          <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Offering</dt>
              <dd className="text-foreground">{labels[receipt.offering]}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Price</dt>
              <dd className="text-foreground font-medium">{prices[receipt.offering]}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Name</dt>
              <dd className="text-foreground">{receipt.name}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Email</dt>
              <dd className="text-foreground break-all">{receipt.email}</dd>
            </div>
            {receipt.notes && (
              <div className="sm:col-span-2">
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Notes</dt>
                <dd className="text-foreground whitespace-pre-wrap">{receipt.notes}</dd>
              </div>
            )}
          </dl>
          <div className="mt-5 pt-4 border-t border-border/60 text-xs text-muted-foreground space-y-1">
            <p><strong className="text-foreground">Pricing reference</strong></p>
            <p>Holiday retreat: <span className="text-foreground">€180/day</span> — room, accommodation & 3 meals/day.</p>
            <p>Extra 1:1 coaching: <span className="text-foreground">€60/hour</span> · <span className="text-foreground">€30/30 min</span>.</p>
            {receipt.offering === "private" && (
              <p>Term pricing: <span className="text-foreground">€700/month</span> (private 1:1 only).</p>
            )}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="px-5 py-3 border border-border text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-colors"
            >
              Print / save PDF
            </button>
            <button
              type="button"
              onClick={() => {
                setReceipt(null);
                setSent(false);
                setName("");
                setEmail("");
                setNotes("");
              }}
              className="px-5 py-3 border border-border text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-colors"
            >
              New booking
            </button>
          </div>
        </div>
      )}
      <ul className="text-sm text-muted-foreground space-y-1 mb-2">
        <li><strong className="text-foreground">Trial / group class:</strong> €15</li>
        <li><strong className="text-foreground">Private 1:1:</strong> €60 per hour · €30 per 30 min</li>
        <li><strong className="text-foreground">Holiday retreat:</strong> €180 per day — includes room, accommodation and 3 meals a day</li>
        <li><strong className="text-foreground">Private 1:1 term:</strong> €700 per month</li>
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
                <div>{labels[k]}</div>
                <div className="text-xs text-muted-foreground mt-1">{prices[k]}</div>
              </button>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="bg-input border border-border px-4 py-3 text-foreground" />
          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="bg-input border border-border px-4 py-3 text-foreground" />
        </div>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Dates, level, anything we should know" rows={5} className="w-full bg-input border border-border px-4 py-3 text-foreground" />
        <div className="border border-border bg-muted/30 px-4 py-3 text-sm">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Your selection</div>
          <div className="text-foreground"><strong>{labels[offering]}</strong> — {prices[offering]}</div>
        </div>
        <button type="submit" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-medium">
          <MessageCircle className="h-4 w-4" /> Send & open WhatsApp
        </button>
        {sent && <p className="text-sm text-primary">Thanks — we'll be in touch. WhatsApp opens in a new tab.</p>}
      </form>
    </PageShell>
  );
}