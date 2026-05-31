export const BRAND = {
  name: "MARK LODGE BOXING",
  fullName: "MARK LODGE BOXING @ MIKE'S GYM MARBELLA",
  short: "MARK LODGE",
  tagline: "Premium boxningscoaching. Riktig träning. På Mike's Gym Marbella.",
  whatsappNumber: "34600000000", // PLACEHOLDER — replace with real number in admin / .env
  whatsappDisplay: "WhatsApp",
  email: "hello@marklodgeboxing.com", // PLACEHOLDER
  address: {
    street: "La Majadilla del Muerto 210",
    city: "Las Lagunas de Mijas",
    postal: "29649",
    country: "Spain",
  },
  coords: { lat: 36.5908, lng: -4.6649 }, // approximate placeholder
} as const;

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${BRAND.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}