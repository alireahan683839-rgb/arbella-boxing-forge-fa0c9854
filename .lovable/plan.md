
# Plan: Premium svensk boxningssajt – Mark Lodge @ Mike's Gym Marbella

## Mål
Bygg om sajten till en svensk, premium, konverteringsdriven boxningsbrand kring Mark Lodge med 4 erbjudanden: lokala klasser, Holiday Boxing Camp, Business Boxing Retreat, 1:1 Coaching.

## Designspråk
- Mörk bas: svart (#0A0A0A) + off-white (#F5F3EE) + mörkgrå
- Accent: teal/turkos (~#2DD4BF) + sparsam guld (~#C9A84C)
- Typografi: stora all-caps display-rubriker (Bebas Neue / Archivo Black), body i Inter
- Cinematic hero med kraftfull bild + overlay, hög kontrast, generösa marginaler
- Sticky mobil-CTA "Boka nu"

## Sidstruktur (TanStack Start, file-based routes)
```
/                        Hem
/lokala-klasser          Lokala boxningsklasser
/holiday-camp            Holiday Boxing Camp
/business-retreat        Business Boxing Retreat
/1-1-coaching            Privat 1:1 coaching
/om-mark-lodge           Coachprofil
/mikes-gym-marbella      Träningsplatsen
/boka                    Bokning (4 flöden, ett formulär per erbjudande)
/kontakt                 Hitta hit + karta + kontakt
```
Engelska förbereds via i18n-strängar (sajten ligger redan med svensk locale) — innehåll skrivs som översättningsbara strängar där det är rimligt, men v1 körs hårdkodat på svenska för fart. Befintliga engelska routes (`/book`, `/contact`, etc.) raderas / ersätts.

## Innehåll per sida (kortform)
- **Hem**: hero (rubrik "TRÄNA SOM EN FIGHTER. KOM HEM SOM EN NY MÄNNISKA."), primär CTA "Boka nu", sekundär "Se våra upplägg". 3 segmentkort + premium 1:1-sektion + coach-proof + venue-proof (Mike's Gym) + testimonials + bokningsteaser + Google Maps + FAQ.
- **Lokala klasser**: barn/ungdom/vuxna/nybörjare/fortsättning/tävling, schema, prova-på-pris, CTA.
- **Holiday Camp**: 5–10 dagar, vad ingår (boende, träning 2x/dag, mat, recovery), nästa datum, deposition-CTA. Ordet "Camp" eller "Retreat" — aldrig "camping".
- **Business Retreat**: team 5/10/15+, energi/fokus/sammanhållning, CTA "Boka strategisamtal".
- **1:1 Coaching**: paket, från nybörjare till avancerad, CTA "Boka 1:1".
- **Om Mark Lodge**: stor coachprofil, plats för credentials/badges, foto.
- **Mike's Gym Marbella**: platsen som upplevelse, faciliteter, karta.
- **Boka**: ett enkelt formulär per erbjudande (tabs eller segment), skickar via WhatsApp + visar kvittens.
- **Kontakt**: full karta, adress, WhatsApp, email, "Öppna i Google Maps".

## Konvertering & CTA
- Sticky mobil-CTA "BOKA NU" → `/boka`
- Header har alltid primär CTA-knapp
- Varje sektion på undersidor avslutas med relevant CTA

## Teknik / SEO
- Per-route `head()` med svensk title + description + og:* + canonical (leaf only)
- JSON-LD: Organization på root, LocalBusiness på kontakt, Service på erbjudanden
- Sökord: "boxning La Cala de Mijas", "boxningsklasser Mijas", "boxing camp Marbella", "boxningsresa Spanien", "private boxing coach Marbella"
- Google Maps via befintlig iframe (eller ren länk om ingen Maps-nyckel)
- Bilder: använd befintliga `hero-boxer.jpg`, `card-holiday.jpg`, `card-local.jpg`, `card-founder.jpg`. Genererar 2–3 nya premiumbilder vid behov (Mike's Gym-känsla, Mark-porträtt-platshållare).

## Pricing (från tidigare context)
- Lokal grupp: €15/klass
- Privat 1:1: €60/h · €30/30 min · termin €700/månad (endast 1:1)
- Holiday: €180/dag (rum + 3 mål)

## Vad som ersätts/tas bort
- Befintliga engelska route-filer (book.tsx, contact.tsx, etc.) skrivs om till svenska eller döps om till nya paths.
- `_authenticated`, admin, apply behålls om de finns men tas inte upp i nav.
- Forbidden-terms-checken behålls.

## Tekniska detaljer
- TanStack file-based routing, `createFileRoute` per sida
- Tailwind tokens i `src/styles.css` (oklch) — uppdaterar paletten
- Header/Footer/StickyMobileCTA-komponenter uppdateras med ny nav på svenska
- Inga nya npm-paket nödvändiga
- Inga backend-ändringar; bokning är fortfarande WhatsApp + kvittens (Stripe/Calendly förbereds som platshållar-knappar med tydlig "kommer snart"-text eller deeplink-stubbar)

## Leverabel
9 sidor live på svenska, ny premium-design, sticky CTA, karta, FAQ, segmentkort, fungerande bokningsformulär per erbjudande, SEO på plats.
