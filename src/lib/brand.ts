export const BRAND = {
  name: "LODGEY'S BOXING",
  fullName: "LODGEY'S BOXING @ MIKES GYM MARBELLA",
  short: "LODGEY'S",
  tagline: "Premium boxing. Real coaching. Hosted at Mike's Gym Marbella.",
  whatsappNumber: "34637481214",
  whatsappDisplay: "+34 637 48 12 14",
  phone: "+34 637 48 12 14",
  email: "hello@lodgeysboxing.com",
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