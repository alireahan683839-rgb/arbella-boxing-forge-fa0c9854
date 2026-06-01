import { createFileRoute } from "@tanstack/react-router";
import { useForm, ValidationError } from "@formspree/react";

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

function Page() {
  const [state, handleSubmit] = useForm("meedyenk");

  if (state.succeeded) {
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

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="_subject" value="New retreat application — Lodgey's Boxing" />

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <input
                required
                name="name"
                placeholder="Full name"
                className="w-full bg-input border border-border px-4 py-3 text-foreground"
              />
              <ValidationError field="name" errors={state.errors} className="text-xs text-red-500 mt-1" />
            </div>
            <div>
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                className="w-full bg-input border border-border px-4 py-3 text-foreground"
              />
              <ValidationError field="email" errors={state.errors} className="text-xs text-red-500 mt-1" />
            </div>
            <div>
              <input
                name="company"
                placeholder="Company"
                className="w-full bg-input border border-border px-4 py-3 text-foreground"
              />
            </div>
            <div>
              <input
                name="role"
                placeholder="Role / title"
                className="w-full bg-input border border-border px-4 py-3 text-foreground"
              />
            </div>
          </div>

          <div>
            <textarea
              required
              name="goals"
              placeholder="What are you hoping to get out of this retreat?"
              rows={6}
              className="w-full bg-input border border-border px-4 py-3 text-foreground"
            />
            <ValidationError field="goals" errors={state.errors} className="text-xs text-red-500 mt-1" />
          </div>

          <ValidationError errors={state.errors} className="text-xs text-red-500" />

          <button
            type="submit"
            disabled={state.submitting}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-medium disabled:opacity-50"
          >
            {state.submitting ? "Sending…" : "Submit application"}
          </button>
        </form>
      </div>
    </div>
  );
}
