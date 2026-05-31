import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { whatsappLink } from "@/lib/brand";
import { MessageCircle } from "lucide-react";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Boka — Mark Lodge Boxing @ Mike's Gym Marbella" },
      { name: "description", content: "Boka prova-på-pass, privat 1:1, Holiday Boxing Camp eller Business Retreat på Mike's Gym Marbella. Enkelt formulär — vi svarar personligen." },
      { property: "og:title", content: "Boka — Mark Lodge Boxing" },
      { property: "og:description", content: "Boka din boxningsupplevelse på Mike's Gym Marbella." },
      { property: "og:url", content: "/book" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: Page,
});

type Offering = "trial" | "private" | "holiday" | "business";

const labels: Record<Offering, string> = {
  trial: "Lokal klass / prova-på",
  private: "Privat 1:1",
  holiday: "Holiday Boxing Camp (deposition)",
  business: "Business Boxing Retreat (strategisamtal)",
};

const prices: Record<Offering, string> = {
  trial: "€15 per klass",
  private: "€60/timme · €30/30 min · Termin €700/månad",
  holiday: "€180/dag — rum, boende och 3 mål mat. Extra 1:1: €60/h · €30/30 min",
  business: "Skräddarsytt — vi ringer er och skickar offert",
};

const placeholders: Record<Offering, string> = {
  trial: "Vilken nivå? Önskad veckodag/tid?",
  private: "Vad vill du jobba på? Önskade tider?",
  holiday: "Önskade datum, antal personer, nivå",
  business: "Företag, gruppstorlek (5/10/15+), önskade datum, mål",
};

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

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    const ref = `ML-${Date.now().toString(36).toUpperCase()}`;
    setReceipt({
      ref,
      when: new Date().toLocaleString("sv-SE"),
      offering,
      name,
      email,
      notes,
    });
    const msg = `Bokningsförfrågan — ${labels[offering]}\nNamn: ${name}\nMejl: ${email}\nMeddelande: ${notes}`;
    window.open(whatsappLink(msg), "_blank");
  };

  return (
    <PageShell
      eyebrow="Boka"
      title="BOKA DIN PLATS"
      intro="Välj erbjudande, fyll i formuläret och skicka. Vi svarar personligen — oftast samma dag."
    >
      {receipt && (
        <div className="mb-8 border border-primary/40 bg-primary/5 p-6">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Bokningskvittens</p>
              <h2 className="font-display text-2xl md:text-3xl mt-1">Förfrågan mottagen</h2>
            </div>
            <div className="text-right text-xs text-muted-foreground">
              <div>Ref: <span className="text-foreground font-mono">{receipt.ref}</span></div>
              <div>{receipt.when}</div>
            </div>
          </div>
          <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Erbjudande</dt>
              <dd className="text-foreground">{labels[receipt.offering]}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Pris</dt>
              <dd className="text-foreground font-medium">{prices[receipt.offering]}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Namn</dt>
              <dd className="text-foreground">{receipt.name}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Mejl</dt>
              <dd className="text-foreground break-all">{receipt.email}</dd>
            </div>
            {receipt.notes && (
              <div className="sm:col-span-2">
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Meddelande</dt>
                <dd className="text-foreground whitespace-pre-wrap">{receipt.notes}</dd>
              </div>
            )}
          </dl>
          <div className="mt-5 pt-4 border-t border-border/60 text-xs text-muted-foreground space-y-1">
            <p><strong className="text-foreground">Prisreferens</strong></p>
            <p>Lokal klass / prova-på: <span className="text-foreground">€15</span> per pass.</p>
            <p>Holiday Boxing Camp: <span className="text-foreground">€180/dag</span> — rum, boende och 3 mål mat.</p>
            <p>Extra 1:1: <span className="text-foreground">€60/timme</span> · <span className="text-foreground">€30/30 min</span>.</p>
            {receipt.offering === "private" && (
              <p>Termin: <span className="text-foreground">€700/månad</span> — 3 timslånga 1:1-pass per vecka (endast 1:1).</p>
            )}
            {receipt.offering === "business" && (
              <p>Business Retreat: skräddarsytt pris bekräftas efter strategisamtal.</p>
            )}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="px-5 py-3 border border-border text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-colors"
            >
              Skriv ut / spara PDF
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
              Ny bokning
            </button>
          </div>
        </div>
      )}

      <ul className="text-sm text-muted-foreground space-y-1 mb-2">
        <li><strong className="text-foreground">Prova-på / gruppklass:</strong> €15</li>
        <li><strong className="text-foreground">Privat 1:1:</strong> €60/timme · €30/30 min</li>
        <li><strong className="text-foreground">Privat 1:1 termin:</strong> €700/månad — 3 timslånga pass i veckan</li>
        <li><strong className="text-foreground">Holiday Boxing Camp:</strong> €180/dag — rum, boende och 3 mål mat</li>
        <li><strong className="text-foreground">Business Boxing Retreat:</strong> skräddarsytt — vi ringer er</li>
      </ul>

      <form onSubmit={onSubmit} className="mt-8 space-y-6">
        <div>
          <label className="text-xs uppercase tracking-widest text-muted-foreground mb-3 block">Välj erbjudande</label>
          <div className="grid sm:grid-cols-2 gap-2">
            {(Object.keys(labels) as Offering[]).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setOffering(k)}
                className={`px-4 py-4 border text-left text-sm transition-colors ${
                  offering === k ? "border-primary bg-primary/10 text-foreground" : "border-border text-muted-foreground hover:border-primary/50"
                }`}
              >
                <div className="font-medium text-foreground">{labels[k]}</div>
                <div className="text-xs text-muted-foreground mt-1">{prices[k]}</div>
              </button>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Ditt namn" className="bg-input border border-border px-4 py-3 text-foreground" />
          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Mejl" className="bg-input border border-border px-4 py-3 text-foreground" />
        </div>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder={placeholders[offering]} rows={5} className="w-full bg-input border border-border px-4 py-3 text-foreground" />
        <div className="border border-border bg-muted/30 px-4 py-3 text-sm">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Din valda upplevelse</div>
          <div className="text-foreground"><strong>{labels[offering]}</strong> — {prices[offering]}</div>
        </div>
        <button type="submit" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-medium">
          <MessageCircle className="h-4 w-4" /> Skicka & öppna WhatsApp
        </button>
        {sent && <p className="text-sm text-primary">Tack — vi hör av oss. WhatsApp öppnas i en ny flik.</p>}
      </form>
    </PageShell>
  );
}