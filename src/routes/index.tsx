import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowRight, MapPin, MessageCircle, Check } from "lucide-react";
import heroImg from "@/assets/hero-boxer.jpg";
import cardLocal from "@/assets/card-local.jpg";
import cardHoliday from "@/assets/card-holiday.jpg";
import cardFounder from "@/assets/card-founder.jpg";
import { BRAND, whatsappLink } from "@/lib/brand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lodgey's Boxing @ Mike's Gym Marbella — Premium boxing coaching" },
      { name: "description", content: "Premium boxing coaching in the mountains above Marbella. Local academy, holiday retreats and founder retreats — hosted at Mike's Gym." },
      { property: "og:title", content: "Lodgey's Boxing @ Mike's Gym Marbella" },
      { property: "og:description", content: "Train. Reset. Come back sharper. Boxing retreats and coaching, hosted at Mike's Gym Marbella." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const { t } = useTranslation();

  const paths = [
    { key: "local", to: "/local-boxing-academy", img: cardLocal, cta: "trial" as const },
    { key: "holiday", to: "/boxing-holiday-retreat", img: cardHoliday, cta: "primary" as const },
    { key: "founder", to: "/founder-executive-retreat", img: cardFounder, cta: "apply" as const },
  ];

  const outcomes = t("home.outcomes.items", { returnObjects: true }) as string[];

  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Boxer training at Mike's Gym Marbella"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 md:pb-28 w-full">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-primary mb-4">
            {t("home.heroEyebrow")}
          </p>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-9xl leading-[0.95] tracking-tight max-w-5xl">
            {t("home.heroTitle")}
          </h1>
          <p className="mt-6 text-base md:text-xl text-muted-foreground max-w-2xl text-pretty">
            {t("home.heroSubtitle")}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-medium hover:opacity-90 transition-opacity"
            >
              {t("cta.primary")} <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={whatsappLink("Hi! I'd like to know more about Lodgey's Boxing.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-border text-foreground text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> {t("cta.whatsapp")}
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
            {(["hosted", "levels", "coaching", "premium"] as const).map((k) => (
              <div key={k} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{t(`home.trust.${k}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE PATHS */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">01 — Programmes</p>
              <h2 className="font-display text-4xl md:text-6xl leading-none">{t("home.paths.title")}</h2>
            </div>
            <p className="text-muted-foreground md:max-w-sm">{t("home.paths.sub")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {paths.map((p) => (
              <Link
                key={p.key}
                to={p.to}
                className="group relative overflow-hidden border border-border bg-surface hover:border-primary transition-colors"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={p.img}
                    alt={t(`home.paths.${p.key}.title`)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-display text-3xl md:text-4xl leading-none mb-3">
                    {t(`home.paths.${p.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{t(`home.paths.${p.key}.for`)}</p>
                  <p className="text-sm text-foreground/80 mb-6">{t(`home.paths.${p.key}.what`)}</p>
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary">
                    {t(`home.paths.${p.key}.next`)} <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENT */}
      <section className="py-24 md:py-32 border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">02 — Difference</p>
          <h2 className="font-display text-4xl md:text-6xl leading-none max-w-3xl mb-16">
            {t("home.different.title")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(["env", "coach", "transform", "scope"] as const).map((k, i) => (
              <div key={k} className="border-t border-border pt-6">
                <div className="text-xs text-muted-foreground tabular-nums mb-3">0{i + 1}</div>
                <h3 className="font-display text-2xl mb-3">{t(`home.different.items.${k}.title`)}</h3>
                <p className="text-sm text-muted-foreground">{t(`home.different.items.${k}.body`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="py-20 border-t border-border/50 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">{t("home.outcomes.title")}</p>
          <div className="flex flex-wrap gap-x-10 gap-y-2 font-display text-3xl md:text-6xl leading-none">
            {outcomes.map((w, i) => (
              <span key={i} className={i % 2 === 0 ? "text-foreground" : "text-primary"}>
                {w}
                {i < outcomes.length - 1 && <span className="text-muted-foreground"> · </span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* GYM */}
      <section className="py-24 md:py-32 border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">03 — The Gym</p>
            <h2 className="font-display text-4xl md:text-6xl leading-none mb-6">{t("home.gym.title")}</h2>
            <p className="text-muted-foreground text-lg mb-8 text-pretty">{t("home.gym.body")}</p>
            <ul className="grid grid-cols-2 gap-3 mb-8">
              {(["gym", "stay", "food", "recovery", "setting", "access"] as const).map((k) => (
                <li key={k} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" /> {t(`home.gym.items.${k}`)}
                </li>
              ))}
            </ul>
            <Link to="/mikes-gym-location" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary hover:underline">
              <MapPin className="h-4 w-4" /> {t("cta.directions")}
            </Link>
          </div>
          <div className="aspect-[4/5] overflow-hidden border border-border">
            <img src={cardHoliday} alt="Mike's Gym Marbella" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* FOUNDER STRIP */}
      <section className="py-24 md:py-32 border-t border-border/50 relative overflow-hidden">
        <img src={cardFounder} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">04 — Founders</p>
          <h2 className="font-display text-4xl md:text-7xl leading-[0.95] max-w-3xl mb-6">
            {t("home.founderPreview.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-8">{t("home.founderPreview.body")}</p>
          <Link
            to="/apply"
            className="inline-flex items-center gap-2 px-7 py-4 border border-primary text-primary text-xs uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {t("home.founderPreview.cta")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 md:py-48 border-t border-border/50 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-display text-7xl md:text-[10rem] leading-none">
            {t("home.finalCta.title")}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">{t("home.finalCta.sub")}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/book" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-medium">
              {t("cta.primary")}
            </Link>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-border text-foreground text-xs uppercase tracking-widest">
              <MessageCircle className="h-4 w-4" /> {BRAND.whatsappDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
