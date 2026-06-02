import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { PageShell } from "@/components/site/PageShell";
import { whatsappLink, BRAND } from "@/lib/brand";
import { MessageCircle } from "lucide-react";

const EJS = {
  service: "service_gbgpe07",
  template: "template_4uup9ge",
  autoReply: "template_6u1lsre",
  key: "IgNwobzA_FBLvrWOa",
} as const;

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
  trial: "Trial Class",
  private: "Private 1:1",
  holiday: "Holiday Retreat (Deposit)",
};

const prices: Record<Offering, string> = {
  trial: "€15 per class",
  private: "€60/hr · €30/30 min · Term: €700/month",
  holiday: "€180/day — room, accommodation & 3 meals. Extra 1:1: €60/hr",
};

function buildDetailsHtml(offering: Offering, notes: string) {
  const row = (label: string, value: string) =>
    value
      ? `<tr><td style="padding:14px 0 0;"><p style="margin:0 0 4px;color:#888;font-size:10px;letter-spacing:0.25em;text-transform:uppercase;font-family:Helvetica,Arial,sans-serif;">${label}</p><p style="margin:0;color:#ffffff;font-size:15px;font-family:Helvetica,Arial,sans-serif;">${value}</p></td></tr>`
      : "";
  return `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-top:1px solid #2a2a2a;margin-top:4px;">${row("Offering", labels[offering])}${row("Price", prices[offering])}${row("Notes / Dates", notes)}</table>`;
}

function Page() {
  const [offering, setOffering] = useState<Offering>("trial");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const payload = {
        form_type: "Booking Request",
        customer_name: name,
        customer_email: email,
        details_html: buildDetailsHtml(offering, notes),
      };
      await emailjs.send(EJS.service, EJS.template, payload, EJS.key);
      await emailjs.send(EJS.service, EJS.autoReply, payload, EJS.key);
      setStatus("sent");
      const msg = `Booking request — ${labels[offering]}\nName: ${name}\nEmail: ${email}\nNotes: ${notes}`;
      window.open(whatsappLink(msg), "_blank");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <PageShell eyebrow="Book" title="Request received" intro="Your booking has been sent to hello@lodgeysboxing.com. We'll confirm within 24 hours.">
        <div className="border border-primary/40 bg-primary/5 p-6 max-w-lg">
          <p className="text-sm text-muted-foreground mb-4">
            WhatsApp opened in a new tab too — feel free to send a message there for the fastest reply.
          </p>
          <button
            type="button"
            onClick={() => { setStatus("idle"); setName(""); setEmail(""); setNotes(""); }}
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
        <li><strong className="text-foreground">Private 1:1:</strong> €60/hr · €30/30 min</li>
        <li><strong className="text-foreground">Holiday retreat:</strong> €180/day — room, accommodation & 3 meals</li>
        <li><strong className="text-foreground">Private 1:1 term:</strong> €700/month</li>
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
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full bg-input border border-border px-4 py-3 text-foreground"
          />
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full bg-input border border-border px-4 py-3 text-foreground"
          />
        </div>

        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Dates, level, anything we should know"
          rows={5}
          className="w-full bg-input border border-border px-4 py-3 text-foreground"
        />

        <div className="border border-border bg-muted/30 px-4 py-3 text-sm">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Your selection</div>
          <div className="text-foreground"><strong>{labels[offering]}</strong> — {prices[offering]}</div>
        </div>

        {status === "error" && (
          <p className="text-sm text-red-500">Something went wrong — please try again or <a href={`tel:${BRAND.whatsappNumber}`} className="underline">call us directly</a>.</p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-medium disabled:opacity-50"
        >
          <MessageCircle className="h-4 w-4" />
          {status === "sending" ? "Sending…" : "Send booking request"}
        </button>
      </form>
    </PageShell>
  );
}
