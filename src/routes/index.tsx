import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, MessageCircle, Check, Trophy, Shield, Flag, Star, Quote, Plus } from "lucide-react";
import heroAction from "@/assets/coach-action.jpg";
import heroProfile from "@/assets/coach-profile.jpg";
import cardLocal from "@/assets/card-local.jpg";
import cardHoliday from "@/assets/card-holiday.jpg";
import cardFounder from "@/assets/card-founder.jpg";
import heroBoxer from "@/assets/hero-boxer.jpg";
import heroVideo from "@/assets/hero-fightcamp.mp4.asset.json";
import { BRAND, whatsappLink } from "@/lib/brand";
import { useReveal, useCountUp } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elite Boxing Coaching & Retreats Marbella | Mark Lodge at Mike's Gym" },
      {
        name: "description",
        content:
          "Premium boxing coaching, local classes and 5–10 day boxing retreats hosted at Mike's Gym Marbella. Train with champion coach Mark Lodge in La Cala de Mijas.",
      },
      { property: "og:title", content: "Elite Boxing Coaching & Retreats Marbella | Mark Lodge at Mike's Gym" },
      {
        property: "og:description",
        content: "Train. Reset. Come back sharper. Boxing classes, holiday retreats and executive retreats at Mike's Gym Marbella.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroAction },
      { name: "twitter:image", content: heroAction },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroAction, fetchpriority: "high" } as any,
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsActivityLocation",
          name: "Lodgey's Boxing @ Mike's Gym Marbella",
          sport: "Boxing",
          url: "/",
          address: {
            "@type": "PostalAddress",
            streetAddress: "La Majadilla del Muerto 210",
            addressLocality: "Las Lagunas de Mijas",
            postalCode: "29649",
            addressCountry: "ES",
          },
        }),
      },
    ],
  }),
  component: Index,
});

const credentials = [
  { icon: Trophy, label: "3× European Kickboxing Champion" },
  { icon: Flag, label: "Former British Champion" },
  { icon: Flag, label: "Former English Champion" },
  { icon: Shield, label: "Professional Boxing Coach" },
  { icon: Shield, label: "BBBoC Coach" },
  { icon: Trophy, label: "Head Coach — PPBL" },
];

const testimonials = [
  {
    quote: "Best boxing experience I've ever had. The coaching is direct, the setting is unreal, and I came back with structure I still use.",
    name: "James K.",
    role: "Founder, London",
  },
  {
    quote: "I'd never thrown a punch in my life. Within a week I felt strong, focused and like a different person. Beginner-friendly is real here.",
    name: "Sofia M.",
    role: "Marbella local",
  },
  {
    quote: "Mark is the real deal. Champion's mindset, world-class teacher, and the gym setting is a serious reset.",
    name: "Ahmed R.",
    role: "Executive retreat guest",
  },
];

const outcomes = ["Confidence", "Skill", "Energy", "Discipline", "Clarity", "Power", "Focus", "Reset"];

const faqPreview = [
  { q: "Do I need any boxing experience?", a: "No. Beginners are welcome — most guests start here." },
  { q: "Is sparring required?", a: "Never. Sparring is optional and consent-based." },
  { q: "How do I get there from Málaga Airport?", a: "30 minutes by car. Airport transfers can be added to retreats." },
];

function Index() {
  return (
    <div className="bg-background text-foreground">
      {/* ============ HERO ============ */}
      <Hero />

      {/* ============ TRUST STRIP ============ */}
      <TrustStrip />

      {/* ============ THREE PATHS — BENTO ============ */}
      <Paths />

      {/* ============ COACH AUTHORITY ============ */}
      <Coach />

      {/* ============ DIFFERENT ============ */}
      <Different />

      {/* ============ MIKE'S GYM ============ */}
      <GymSection />

      {/* ============ OUTCOMES MARQUEE ============ */}
      <Outcomes />

      {/* ============ HOLIDAY RETREAT PREVIEW ============ */}
      <HolidayPreview />

      {/* ============ FOUNDER RETREAT PREVIEW ============ */}
      <FounderPreview />

      {/* ============ TESTIMONIALS ============ */}
      <Testimonials />

      {/* ============ PRICING TEASER ============ */}
      <PricingTeaser />

      {/* ============ LOCATION + MAP ============ */}
      <LocationSection />

      {/* ============ FAQ PREVIEW ============ */}
      <FaqPreview />

      {/* ============ FINAL CTA ============ */}
      <FinalCta />
    </div>
  );
}

/* ============================================================
   HERO
============================================================ */
function Hero() {
  // Detect mobile / reduced data to skip video entirely
  const [showVideo, setShowVideo] = React.useState(false);
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(min-width: 768px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const conn = (navigator as any).connection;
    const slow = conn && (conn.saveData || /2g|3g/.test(conn.effectiveType || ""));
    if (mql.matches && !reduced.matches && !slow) setShowVideo(true);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden">
      {/* Poster image — always rendered as instant LCP + mobile fallback */}
      <img
        src={heroAction}
        alt="Champion coach Mark Lodge training a boxer at Mike's Gym Marbella"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
        fetchPriority="high"
      />
      {/* Cinematic fight-camp video — desktop only, fades in over the poster */}
      {showVideo && (
        <video
          src={heroVideo.url}
          poster={heroAction}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center animate-fade-in"
        />
      )}
      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
      <div className="absolute inset-0 light-leak opacity-90" />
      <div className="absolute inset-0 grain" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 md:pb-32 w-full">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-primary mb-5 reveal is-visible">
          Lodgey's Boxing · Hosted at Mike's Gym Marbella
        </p>
        <h1 className="font-display text-[3.25rem] sm:text-7xl lg:text-[8.5rem] leading-[0.9] tracking-tight max-w-5xl">
          Elite Boxing Coaching.
          <br />
          <span className="text-primary">Marbella Fight Camp Energy.</span>
        </h1>
        <p className="mt-6 text-base md:text-xl text-muted-foreground max-w-2xl text-pretty">
          Private coaching, local boxing classes and premium boxing retreats hosted at Mike's Gym Marbella.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link
            to="/book"
            className="cta-glow inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-semibold"
          >
            Book Your Boxing Experience <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="#paths"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-border/80 text-foreground text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-colors"
          >
            Choose Your Path
          </a>
          <a
            href={whatsappLink("Hi! I'd like to know more about Lodgey's Boxing.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-4 text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>

        <p className="mt-8 text-[11px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground/90 max-w-2xl">
          Hosted at Mike's Gym Marbella · All levels welcome · Led by champion coach Mark Lodge
        </p>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-6 right-6 hidden md:block text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70">
        Scroll
      </div>
    </section>
  );
}

/* ============================================================
   TRUST STRIP
============================================================ */
function TrustStrip() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="border-y border-border/60 bg-surface/40">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          "Hosted at Mike's Gym Marbella",
          "Champion-led coaching",
          "All levels welcome",
          "30 min from Málaga Airport",
        ].map((item) => (
          <div key={item} className="flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-widest text-muted-foreground">
            <Check className="h-4 w-4 text-primary flex-shrink-0" /> {item}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   THREE PATHS — BENTO
============================================================ */
function Paths() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="paths" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">01 — Choose Your Path</p>
            <h2 className="font-display text-4xl md:text-6xl leading-none">Three doors in. One standard.</h2>
          </div>
          <p className="text-muted-foreground md:max-w-sm">
            Locals, travellers, founders — pick the one that fits you. No wrong answer.
          </p>
        </div>

        {/* Bento: Holiday Retreat large left, two stacked right */}
        <div className="grid md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-5 md:h-[640px]">
          {/* Holiday — large */}
          <PathCard
            to="/boxing-holiday-retreat"
            img={cardHoliday}
            eyebrow="Retreat"
            title="Boxing Holiday Retreat"
            forWho="For travellers who want 5, 7 or 10 days that actually change something."
            what="Twice-daily training, recovery, real food, accommodation on-site."
            cta="Explore Holiday Retreat"
            className="md:row-span-2 md:col-span-2 min-h-[420px]"
            big
          />
          {/* Local */}
          <PathCard
            to="/local-boxing-academy"
            img={cardLocal}
            eyebrow="Locals"
            title="Local Boxing Academy"
            forWho="Kids, teens, adults — beginners to competitors."
            what="Weekly group classes, structured by level."
            cta="View Local Classes"
            className="min-h-[280px]"
          />
          {/* Founder */}
          <PathCard
            to="/founder-executive-retreat"
            img={cardFounder}
            eyebrow="Founders"
            title="Founder & Executive Retreat"
            forWho="Founders, leaders and small executive teams."
            what="Application-only. Energy, focus, discipline."
            cta="Apply for Executive Retreat"
            className="min-h-[280px]"
          />
        </div>

        {/* Subtle 1:1 add-on note */}
        <p className="mt-6 text-xs text-muted-foreground text-center">
          Want one-on-one? Add{" "}
          <Link to="/private-coaching" className="text-primary hover:underline">
            Private 1:1 Coaching
          </Link>{" "}
          to any path.
        </p>
      </div>
    </section>
  );
}

function PathCard({
  to,
  img,
  eyebrow,
  title,
  forWho,
  what,
  cta,
  className = "",
  big = false,
}: {
  to: string;
  img: string;
  eyebrow: string;
  title: string;
  forWho: string;
  what: string;
  cta: string;
  className?: string;
  big?: boolean;
}) {
  const ref = useReveal<HTMLAnchorElement>();
  return (
    <Link
      ref={ref as any}
      to={to}
      className={`reveal card-lift group relative overflow-hidden border border-border bg-surface flex flex-col ${className}`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/10" />
      </div>
      <div className={`relative mt-auto p-6 ${big ? "md:p-10" : "md:p-7"}`}>
        <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-3">{eyebrow}</p>
        <h3 className={`font-display leading-none mb-3 ${big ? "text-4xl md:text-6xl" : "text-3xl md:text-4xl"}`}>
          {title}
        </h3>
        <p className="text-sm text-foreground/85 mb-2">{forWho}</p>
        <p className="text-sm text-muted-foreground mb-5">{what}</p>
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary">
          {cta} <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}

/* ============================================================
   COACH AUTHORITY
============================================================ */
function Coach() {
  const ref = useReveal<HTMLDivElement>();
  const yearsRef = useCountUp(25);
  const champRef = useCountUp(3);
  const levelsRef = useCountUp(4);
  return (
    <section className="py-24 md:py-32 border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 light-leak opacity-50" />
      <div ref={ref} className="reveal relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Portrait */}
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] overflow-hidden border border-border relative">
            <img
              src={heroProfile}
              alt="Coach Mark Lodge — Former Professional Kickboxer & Professional Boxing Coach"
              loading="lazy"
              className="w-full h-full object-cover grayscale contrast-110"
            />
            <div className="absolute inset-0 light-leak opacity-40" />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 text-[10px] uppercase tracking-[0.25em]">
            BBBoC Coach
          </div>
        </div>

        {/* Bio */}
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">02 — Meet Your Coach</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95] mb-6">
            Coached by a champion.<br />
            Built for every level.
          </h2>
          <p className="text-muted-foreground text-lg mb-8 text-pretty max-w-2xl">
            Mark Lodge brings real fight experience, professional coaching structure and decades of combat-sport knowledge to Mike's Gym Marbella. Whether you are stepping into boxing for the first time, returning to training, preparing for competition or joining a premium retreat — the coaching is direct, technical and adapted to your level.
          </p>

          {/* Stat counters */}
          <div className="grid grid-cols-3 gap-4 mb-10 border-y border-border py-6">
            <Stat refEl={yearsRef} suffix="+" label="Years in the sport" />
            <Stat refEl={champRef} suffix="×" label="European Kickboxing titles" />
            <Stat refEl={levelsRef} label="Levels coached — kids to pro" />
          </div>

          {/* Credential badges */}
          <div className="grid sm:grid-cols-2 gap-3">
            {credentials.map((c) => (
              <div key={c.label} className="flex items-center gap-3 border border-border/60 bg-surface/60 px-4 py-3">
                <c.icon className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-xs uppercase tracking-wider text-foreground/90">{c.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              to="/about-coach"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary hover:underline"
            >
              Full coach profile <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ refEl, suffix = "", label }: { refEl: React.RefObject<HTMLSpanElement | null>; suffix?: string; label: string }) {
  return (
    <div>
      <div className="font-display text-4xl md:text-5xl text-primary leading-none">
        <span ref={refEl}>0</span>
        <span>{suffix}</span>
      </div>
      <div className="mt-2 text-[11px] uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

/* ============================================================
   DIFFERENT
============================================================ */
function Different() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 md:py-32 border-t border-border/50">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">03 — The Difference</p>
        <h2 className="font-display text-4xl md:text-6xl leading-none max-w-3xl mb-16">
          Why this isn't another gym session.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { n: "01", t: "The Environment", b: "A serious boxing gym in the hills above Marbella — built to train in, not to scroll in." },
            { n: "02", t: "The Coaching", b: "Real progression. Real corrections. Real respect for the sport." },
            { n: "03", t: "The Transformation", b: "You arrive curious. You leave moving, eating and sleeping differently." },
            { n: "04", t: "Scalable Standard", b: "First class to fight prep. The standard stays. The programme adapts." },
          ].map((item) => (
            <div key={item.n} className="border-t border-border pt-6">
              <div className="text-xs text-muted-foreground tabular-nums mb-3">{item.n}</div>
              <h3 className="font-display text-2xl mb-3">{item.t}</h3>
              <p className="text-sm text-muted-foreground">{item.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   GYM SECTION
============================================================ */
function GymSection() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 md:py-32 border-t border-border/50 relative overflow-hidden">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">04 — The Gym</p>
          <h2 className="font-display text-4xl md:text-6xl leading-none mb-6">Hosted at Mike's Gym Marbella.</h2>
          <p className="text-muted-foreground text-lg mb-8 text-pretty">
            A serious training environment in the hills of La Cala de Mijas — with boxing facilities, accommodation, food and the space to fully reset.
          </p>
          <ul className="grid grid-cols-2 gap-3 mb-8">
            {["Full boxing gym", "On-site accommodation", "Performance kitchen", "Recovery & ice bath", "Mountain setting", "30 min from Málaga"].map((k) => (
              <li key={k} className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-primary" /> {k}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/mikes-gym-location"
              className="inline-flex items-center gap-2 px-5 py-3 border border-border text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-colors"
            >
              <MapPin className="h-4 w-4" /> View Location
            </Link>
            <Link
              to="/book"
              className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-widest cta-glow"
            >
              Book Your Stay / Camp <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-6 text-xs text-muted-foreground italic max-w-md">
            This boxing experience is hosted at Mike's Gym Marbella. Camp accommodation and facility bookings may be coordinated with Mike's Gym depending on package and availability.
          </p>
        </div>
        <div className="aspect-[4/5] overflow-hidden border border-border relative">
          <img src={cardHoliday} alt="Mike's Gym Marbella facility" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 light-leak opacity-30" />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   OUTCOMES MARQUEE
============================================================ */
function Outcomes() {
  const loop = [...outcomes, ...outcomes];
  return (
    <section className="py-16 border-t border-border/50 overflow-hidden">
      <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        What you take home
      </p>
      <div className="overflow-hidden">
        <div className="marquee-track flex gap-12 whitespace-nowrap font-display text-5xl md:text-8xl leading-none">
          {loop.map((w, i) => (
            <span key={i} className={i % 2 === 0 ? "text-foreground" : "text-primary"}>
              {w} <span className="text-muted-foreground">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   HOLIDAY PREVIEW
============================================================ */
function HolidayPreview() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 md:py-32 border-t border-border/50 relative overflow-hidden">
      <img src={cardHoliday} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-15" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
      <div ref={ref} className="reveal relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">05 — Holiday Retreat</p>
        <h2 className="font-display text-4xl md:text-7xl leading-[0.95] max-w-3xl mb-6">
          Five, seven or ten days that change something.
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mb-8">
          Twice-daily training, recovery, real food, accommodation on-site. From €180/day — room, board and three meals included.
        </p>
        <Link
          to="/boxing-holiday-retreat"
          className="inline-flex items-center gap-2 px-7 py-4 border border-primary text-primary text-xs uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Explore Holiday Retreat <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

/* ============================================================
   FOUNDER PREVIEW
============================================================ */
function FounderPreview() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 md:py-32 border-t border-border/50 relative overflow-hidden">
      <img src={cardFounder} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-15" />
      <div className="absolute inset-0 bg-gradient-to-l from-background via-background/95 to-background/60" />
      <div ref={ref} className="reveal relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:text-right lg:ml-auto lg:max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">06 — Founders & Executives</p>
        <h2 className="font-display text-4xl md:text-7xl leading-[0.95] mb-6">
          Reset your body. Sharpen your mind.
        </h2>
        <p className="text-muted-foreground text-lg mb-8 lg:ml-auto">
          Application-only. Small groups. Built around clarity, energy and discipline. Step away from the noise — return stronger, clearer and more disciplined.
        </p>
        <Link
          to="/apply"
          className="inline-flex items-center gap-2 px-7 py-4 border border-primary text-primary text-xs uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Apply for the Retreat <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

/* ============================================================
   TESTIMONIALS
============================================================ */
function Testimonials() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 md:py-32 border-t border-border/50">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">07 — Guests</p>
        <h2 className="font-display text-4xl md:text-6xl leading-none mb-14 max-w-3xl">What guests say.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure key={i} className="card-lift border border-border bg-surface/60 p-7 flex flex-col">
              <Quote className="h-5 w-5 text-primary mb-4" />
              <blockquote className="text-foreground/90 text-base leading-relaxed flex-1">"{t.quote}"</blockquote>
              <figcaption className="mt-6 pt-4 border-t border-border/60">
                <div className="text-sm font-medium">{t.name}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{t.role}</div>
              </figcaption>
              <div className="mt-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-3 w-3 fill-primary text-primary" />
                ))}
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PRICING TEASER
============================================================ */
function PricingTeaser() {
  const ref = useReveal<HTMLDivElement>();
  const items = [
    { label: "Group Class", price: "€15", per: "per class", to: "/local-boxing-academy" },
    { label: "Private 1:1", price: "€60", per: "per hour", to: "/private-coaching" },
    { label: "Holiday Retreat", price: "€180", per: "per day · room + 3 meals", to: "/boxing-holiday-retreat" },
    { label: "Executive Retreat", price: "Apply", per: "tailored programme", to: "/apply" },
  ];
  return (
    <section className="py-24 md:py-32 border-t border-border/50">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">08 — A simple way in</p>
        <h2 className="font-display text-4xl md:text-6xl leading-none mb-4 max-w-3xl">Transparent pricing.</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">Indicative starting points. Final pricing per date and package.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it) => (
            <Link
              key={it.label}
              to={it.to}
              className="card-lift group border border-border bg-surface/60 p-6 flex flex-col"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">{it.label}</div>
              <div className="font-display text-5xl text-primary leading-none mb-2">{it.price}</div>
              <div className="text-xs text-muted-foreground mb-6">{it.per}</div>
              <span className="mt-auto inline-flex items-center gap-2 text-xs uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
                Details <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   LOCATION + MAP
============================================================ */
function LocationSection() {
  const ref = useReveal<HTMLDivElement>();
  const q = encodeURIComponent(`${BRAND.address.street}, ${BRAND.address.postal} ${BRAND.address.city}, ${BRAND.address.country}`);
  return (
    <section className="py-24 md:py-32 border-t border-border/50">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">09 — Where you'll train</p>
          <h2 className="font-display text-4xl md:text-6xl leading-none mb-6">In the hills above La Cala de Mijas.</h2>
          <address className="not-italic text-foreground/90 text-base mb-6">
            Mike's Gym Marbella<br />
            {BRAND.address.street}<br />
            {BRAND.address.postal} {BRAND.address.city}<br />
            {BRAND.address.country}
          </address>
          <ul className="space-y-2 text-sm text-muted-foreground mb-8">
            <li className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> ~30 minutes by car from Málaga Airport (AGP)</li>
            <li className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> Close to La Cala de Mijas — mountain access</li>
            <li className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> Free parking on-site · airport transfer add-on</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${q}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-widest cta-glow"
            >
              <MapPin className="h-4 w-4" /> Get Directions
            </a>
            <Link to="/mikes-gym-location" className="inline-flex items-center gap-2 px-5 py-3 border border-border text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-colors">
              Location details
            </Link>
          </div>
        </div>
        <div className="lg:col-span-7 border border-border overflow-hidden min-h-[360px]">
          <iframe
            title="Mike's Gym Marbella — Google Maps"
            src={`https://www.google.com/maps?q=${q}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full min-h-[360px] grayscale contrast-110"
          />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FAQ PREVIEW
============================================================ */
function FaqPreview() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 md:py-32 border-t border-border/50">
      <div ref={ref} className="reveal mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">10 — Quick Answers</p>
        <h2 className="font-display text-4xl md:text-6xl leading-none mb-10">Before you book.</h2>
        <div className="divide-y divide-border border-y border-border">
          {faqPreview.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex items-start gap-4 cursor-pointer list-none">
                <Plus className="h-5 w-5 text-primary mt-0.5 transition-transform group-open:rotate-45 flex-shrink-0" />
                <span className="font-display text-xl md:text-2xl leading-tight flex-1">{f.q}</span>
              </summary>
              <p className="pl-9 mt-3 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/faq" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary hover:underline">
            See all FAQs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FINAL CTA
============================================================ */
function FinalCta() {
  const ref = useReveal<HTMLDivElement>();
  const q = encodeURIComponent(`${BRAND.address.street}, ${BRAND.address.postal} ${BRAND.address.city}, ${BRAND.address.country}`);
  return (
    <section className="relative py-32 md:py-48 border-t border-border/50 text-center overflow-hidden">
      <img src={heroBoxer} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/90 to-background" />
      <div className="absolute inset-0 light-leak opacity-50" />
      <div ref={ref} className="reveal relative mx-auto max-w-4xl px-4">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">11 — Start your reset</p>
        <h2 className="font-display text-6xl md:text-[8rem] leading-[0.9]">
          Choose your path.<br /><span className="text-primary">Start your reset.</span>
        </h2>
        <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
          Whether you live locally, want a boxing holiday, or need a high-performance retreat — the next step is simple.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/book"
            className="cta-glow inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-semibold"
          >
            Book Your Boxing Experience <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/apply"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-border text-foreground text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-colors"
          >
            Apply for Executive Retreat
          </Link>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${q}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            <MapPin className="h-4 w-4" /> Get Directions
          </a>
        </div>
        <p className="mt-10 text-[11px] uppercase tracking-[0.25em] text-muted-foreground/80">
          Hosted at Mike's Gym Marbella · Coached by Mark Lodge
        </p>
      </div>
    </section>
  );
}