import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { BRAND } from "@/lib/brand";

const EJS = {
  service: "service_gbgpe07",
  template: "template_k96zuvd",
  key: "IgNwobzA_FBLvrWOa",
} as const;

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Apply — Founder & Executive Retreat | Lodgey's Boxing" },
      { name: "description", content: "Apply for the Founder & Executive Boxing Retreat at Mike's Gym Marbella. Application-only cohorts designed for leaders who need to reset, refocus and return stronger." },
      { property: "og:title", content: "Apply — Founder & Executive Retreat" },
      { property: "og:description", content: "Application-only. Small groups. Built around clarity, energy and discipline at Mike's Gym Marbella." },
      { property: "og:url", content: "https://lodgeysboxing.com/apply" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "https://lodgeysboxing.com/apply" }],
  }),
  component: Page,
});

function buildDetailsHtml(company: string, role: string, goals: string) {
  const row = (label: string, value: string) =>
    value
      ? `<tr><td style="padding:14px 0 0;"><p style="margin:0 0 4px;color:#888;font-size:10px;letter-spacing:0.25em;text-transform:uppercase;font-family:Helvetica,Arial,sans-serif;">${label}</p><p style="margin:0;color:#ffffff;font-size:15px;font-family:Helvetica,Arial,sans-serif;">${value}</p></td></tr>`
      : "";
  return `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-top:1px solid #2a2a2a;margin-top:4px;">${row("Company", company)}${row("Role / Title", role)}${row("Goals", goals)}</table>`;
}

function Page() {
  const [data, setData] = useState({ name: "", email: "", company: "", role: "", goals: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const set = (k: keyof typeof data) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setData((d) => ({ ...d, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        EJS.service,
        EJS.template,
        {
          form_type: "Retreat Application",
          customer_name: data.name,
          customer_email: data.email,
          details_html: buildDetailsHtml(data.company, data.role, data.goals),
        },
        EJS.key
      );
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Application received</p>
          <h1 className="font-display text-3xl md:text-4xl">We'll be in touch.</h1>
          <p className="text-muted-foreground text-sm">
            Your application has been sent to <strong>hello@lodgeysboxing.com</strong>. We review every application personally and reply within 48 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Apply</p>
        <h1 className="font-display text-4xl md:text-5xl mb-3">Founder &amp; Executive Retreat</h1>
        <p className="text-muted-foreground mb-10">Tell us about you. If it's a fit, we'll set up a short call to confirm dates and price.</p>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required value={data.name} onChange={set("name")} placeholder="Full name" className="w-full bg-input border border-border px-4 py-3 text-foreground" />
            <input required type="email" value={data.email} onChange={set("email")} placeholder="Email" className="w-full bg-input border border-border px-4 py-3 text-foreground" />
            <input value={data.company} onChange={set("company")} placeholder="Company" className="w-full bg-input border border-border px-4 py-3 text-foreground" />
            <input value={data.role} onChange={set("role")} placeholder="Role / title" className="w-full bg-input border border-border px-4 py-3 text-foreground" />
          </div>

          <textarea
            required
            value={data.goals}
            onChange={set("goals")}
            placeholder="What are you hoping to get out of this retreat?"
            rows={6}
            className="w-full bg-input border border-border px-4 py-3 text-foreground"
          />

          {status === "error" && (
            <p className="text-sm text-red-500">Something went wrong — please try again or <a href={`tel:${BRAND.whatsappNumber}`} className="underline">call us directly</a>.</p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-medium disabled:opacity-50"
          >
            {status === "sending" ? "Sending…" : "Submit application"}
          </button>
        </form>
      </div>
    </div>
  );
}
