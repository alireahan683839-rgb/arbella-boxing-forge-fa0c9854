## Varumärke & beslut

- **Namn:** LODGEY'S BOXING @ MIKES GYM MARBELLA
- **Språk live vid launch:** EN + ES + SV (alla tre, riktig i18n)
- **Kontakt:** WhatsApp som primär kanal (header, footer, sticky mobile CTA) + formulär/email som backup
- **Betalningar:** Stripe (Lovable-managed) aktiveras nu för Holiday deposits + Private session deposits
- **Founder Retreat:** application-led, ingen direkt betalning
- **Local Academy:** direktbokning av trial
- **Assets/credentials/datum/priser:** inga bekräftade → editerbara placeholders genomgående, ägaren byter via admin

## Designsystem

- Mörk premium: off-black bas, off-white text, accent electric teal/aqua
- Display-typsnitt: condensed modern (Bebas Neue / Archivo Black-stil) för rubriker; clean sans (Inter/Manrope) för brödtext (via @fontsource)
- Full-screen sektioner, hög kontrast, generösa whitespaces, subtila reveal-animationer
- Mobile-first, sticky bottom CTA på mobil
- Semantiska tokens i `src/styles.css` (oklch), inga hårdkodade färger i komponenter

## Sidstruktur (TanStack routes)

```text
/                              Hero + 3 dörrar + trust + sektioner
/local-boxing-academy          Lokala klasser, schema, trial
/boxing-holiday-retreat        5/7/10-dagars retreat, deposit
/founder-executive-retreat     Application-led premium
/private-coaching              1:1, direktbokning
/about-coach                   Mark Lodgey authority
/mikes-gym-location            Affiliation + karta + directions
/book                          Unified booking hub
/apply                         Founder application
/faq
/contact                       WhatsApp + form
/admin                         Lightweight CMS (auth-skyddad)
```

Varje route får egen `head()` med route-specifik title/description/og:title/og:description. Hero-bild som og:image per leaf-route (aldrig i __root).

## Affärslogik per spår

**A. Local Boxing Academy** — Kids / Teens / Adults Beginners / Competition Team / Private. Schema-grid, nivåförklaring, "no experience needed", trial-bokning direkt.

**B. Holiday Retreat** — 5/7/10 dagar, room types, add-ons, sample day, "all levels welcome", deposit via Stripe. Länk till Mike's Gym för officiellt boende vid behov.

**C. Founder & Executive Retreat** — Application form först → discovery call → manuell offert. Premium copy: step away, regain energy, sharpen focus.

**D. Private 1:1** — Synlig som upsell på alla spår, egen sida med session types och paket, Stripe deposit per session.

## Bokning & lead-system (Lovable Cloud)

Riktig databas, inte bara form. Tabeller: `bookings`, `leads`, `applications`, `availability_slots`, `offerings`, `testimonials`, `faqs`, `coach_credentials`, `media`, `retreat_dates`, `user_roles`.

Varje booking/lead taggas med `source`: `local_class | holiday_retreat | founder_retreat | private_coaching`.

Flöden:
- **Local trial:** välj datum/pass → form → bekräftelse-email + admin record
- **Private:** välj sessionstyp → calendar slot → Stripe deposit → bekräftelse
- **Holiday:** välj datum/längd/rum/add-ons → Stripe deposit → bekräftelse + admin
- **Founder:** application form → submitted → admin review → manuellt discovery call

Emails via Lovable Emails (skickas på bekräftelse).

## Stripe

Aktiveras via `enable_stripe_payments`. Eligibility-check körs först. Produkter skapas efter aktivering: trial class (om enabled), private session deposit, holiday retreat deposit. Founder = ingen Stripe-produkt initialt.

## Karta & plats

Google Maps via connector gateway (browser key för embed). Pinpoint på La Majadilla del Muerto 210, Las Lagunas de Mijas 29649. "Get directions" från Málaga Airport + La Cala de Mijas, höjd/berg-varning, parkering, transfer-add-on.

## i18n

`react-i18next` med JSON-resources per språk (`en.json`, `es.json`, `sv.json`). Language switcher i header. URL-pattern: `/[lang]/...` med EN som default utan prefix. Alla strängar genom `t()` från dag 1. Skickar med språk-attribut i HTML `lang`.

EN copy levereras komplett. ES + SV strängar fylls med strukturella översättningar (jag skriver dem, du verifierar) — markerade som "review needed" i admin tills bekräftade.

## Admin / CMS

Auth-skyddad `/admin` (Lovable Cloud auth + `user_roles` med admin role, security definer-funktion). Hanterar:
- offerings (priser, beskrivningar, status)
- retreat_dates (kommande camps)
- testimonials (CRUD)
- FAQs
- coach_credentials (titlar, licenser, logos — "verified" toggle)
- media gallery (uploads till Cloud storage)
- bookings/leads/applications (lista, status, notes)

## SEO

- Per-route head() med unika titles/descriptions
- JSON-LD: Organization i __root, LocalBusiness/SportsActivityLocation på /mikes-gym-location, FAQPage på /faq, Event på varje retreat date
- robots.txt + dynamic sitemap.xml server route
- Semantisk HTML, lazy images, responsive viewport
- Keywords i copy: boxing camp Marbella, boxing retreat Spain, boxing coach La Cala de Mijas, executive retreat Marbella

## Säkerhet

- Zod-validering på alla server functions och public API routes
- RLS på alla tabeller, `user_roles` mönstret för admin
- WhatsApp-länkar med proper `encodeURIComponent`
- Stripe webhook med signature verification under `/api/public/`

## Tekniska val

- TanStack Start v1 (befintligt template)
- Lovable Cloud (Supabase) för db/auth/storage/emails
- Stripe (Lovable-managed payments)
- Google Maps connector (workspace nivå)
- shadcn/ui komponenter, anpassade med design system
- Motion för subtila reveals
- @fontsource för fonts

## Leveransordning (efter approval)

1. Enable Lovable Cloud + Stripe + Google Maps connector
2. Design system (styles.css tokens, fonts)
3. Database schema + RLS + GRANTs + admin role
4. i18n setup + EN/ES/SV resources
5. Routes-skelett med per-route head()
6. Homepage (alla sektioner enligt brief)
7. De fyra erbjudande-sidorna
8. /book unified hub + bokningsflöden + Stripe checkout
9. /apply founder flow
10. /about-coach, /mikes-gym-location (karta), /faq, /contact
11. Admin CMS
12. Emails (confirmations) via Lovable Emails
13. SEO finishing (sitemap, JSON-LD, meta-pass)
14. Mobile QA-pass

## Vad jag använder placeholders för

Coachbild, hero-video (jag genererar cinematic still tills riktig video finns), priser, campdatum, testimonials, credentials/licenser/logos. Alla redigerbara via admin — inget hårdkodat påhittat innehåll om coachen.