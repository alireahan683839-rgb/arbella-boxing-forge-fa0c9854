import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
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

function Page() {
  const [offering, setOffering] = useState<Offering>("trial");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [state, handleSubmit] = useForm("meedyenk");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await handleSubmit(e);
    if (!state.errors || state.errors.length === 0) {
      const msg = `Booking request — ${labels[offering]}\nName: ${name}\nEmail: ${email}\nNotes: ${notes}`;
      window.open(whatsappLink(msg), "_blank");
    }
  };

  if (state.succeeded) {
    return (
      <PageShell eyebrow="Book" title="Request received" intro="Your booking has been sent to hello@lodgeysboxing.com. We'll confirm within 24 hours.">
        <div className="border border-primary/40 bg-primary/5 p-6 max-w-lg">
          <p className="text-sm text-muted-foreground mb-4">
            WhatsApp should have opened in a new tab too — feel free to send a message there for the fastest reply.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="px-5 py-3 border border-border text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-colors"
          >
            Make another booking
          </button>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell eyebrow="Book" title="Book your session" intro="Local classes and private sessions are booked directly. Holiday retreats secure your dates with a deposit.">
      <ul className="text-sm text-muted-foreground space-y-1 mb-2">
        <li><strong className="text-foreground">Trial / group class:</strong> €15</li>
        <li><strong className="text-foreground">Private 1:1:</strong> €60 per hour · €30 per 30 min</li>
        <li><strong className="text-foreground">Holiday retreat:</strong> €180 per day — includes room, accommodation and 3 meals a day</li>
        <li><strong className="text-foreground">Private 1:1 term:</strong> €700 per month</li>
      </ul>

      <form onSubmit={onSubmit} className="mt-8 space-y-6">
        <input type="hidden" name="_subject" value={`Booking request — ${labels[offering]} — Lodgey's Boxing`} />
        <input type="hidden" name="offering" value={labels[offering]} />
        <input type="hidden" name="price" value={prices[offering]} />

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
          <div>
            <input
              required
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full bg-input border border-border px-4 py-3 text-foreground"
            />
            <ValidationError field="name" errors={state.errors} className="text-xs text-red-500 mt-1" />
          </div>
          <div>
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full bg-input border border-border px-4 py-3 text-foreground"
            />
            <ValidationError field="email" errors={state.errors} className="text-xs text-red-500 mt-1" />
          </div>
        </div>

        <div>
          <textarea
            name="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Dates, level, anything we should know"
            rows={5}
            className="w-full bg-input border border-border px-4 py-3 text-foreground"
          />
        </div>

        <div className="border border-border bg-muted/30 px-4 py-3 text-sm">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Your selection</div>
          <div className="text-foreground"><strong>{labels[offering]}</strong> — {prices[offering]}</div>
        </div>

        <ValidationError errors={state.errors} className="text-xs text-red-500" />

        <button
          type="submit"
          disabled={state.submitting}
          className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-medium disabled:opacity-50"
        >
          <MessageCircle className="h-4 w-4" />
          {state.submitting ? "Sending…" : "Send booking request"}
        </button>
      </form>
    </PageShell>
  );
}
