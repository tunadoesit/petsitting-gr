import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kypseli Pet Sitting | Professional Pet Care in Athens",
  description: "Professional pet sitting in Kypseli and Central Athens by Melissanthi Kontoleon. Veterinary-trained care for dogs, cats and exotic animals.",
  keywords: [
    "Pet Sitting Athens",
    "Pet Sitter Athens",
    "Kypseli Pet Sitting",
    "Exotic Pet Care Athens",
    "Dog walking Athens",
    "Cat sitting Athens",
    "Pet care Athens Greece",
    "Veterinary Technician"
  ],
  openGraph: {
    title: "Kypseli Pet Sitting | Professional Pet Care in Athens",
    description: "Professional pet sitting in Kypseli and Central Athens by Melissanthi Kontoleon. Veterinary-trained care for dogs, cats and exotic animals.",
    type: "website",
    locale: "en_GB",
    siteName: "Kypseli Pet Sitting"
  },
  alternates: {
    canonical: "https://petsitting.gr"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
