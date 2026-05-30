import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/brand";

interface PageShellProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  heroImage?: string;
  ctaPrimary?: { label: string; to: string };
  ctaSecondary?: { label: string; to: string };
  whatsappPrefill?: string;
  children: ReactNode;
}

export function PageShell({
  eyebrow,
  title,
  intro,
  heroImage,
  ctaPrimary,
  ctaSecondary,
  whatsappPrefill,
  children,
}: PageShellProps) {
  return (
    <div className="bg-background text-foreground">
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {heroImage && (
          <>
            <img src={heroImage} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          </>
        )}
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {eyebrow && <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">{eyebrow}</p>}
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight">{title}</h1>
          {intro && <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty">{intro}</p>}
          {(ctaPrimary || ctaSecondary || whatsappPrefill) && (
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              {ctaPrimary && (
                <Link to={ctaPrimary.to} className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-medium">
                  {ctaPrimary.label} <ArrowRight className="h-4 w-4" />
                </Link>
              )}
              {ctaSecondary && (
                <Link to={ctaSecondary.to} className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-border text-foreground text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-colors">
                  {ctaSecondary.label}
                </Link>
              )}
              {whatsappPrefill && (
                <a href={whatsappLink(whatsappPrefill)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-border text-foreground text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-colors">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              )}
            </div>
          )}
        </div>
      </section>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-32">{children}</div>
    </div>
  );
}

export function Section({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <section className="py-12 border-t border-border/50">
      {title && <h2 className="font-display text-3xl md:text-5xl leading-none mb-8">{title}</h2>}
      <div className="prose prose-invert max-w-none text-foreground/90">{children}</div>
    </section>
  );
}