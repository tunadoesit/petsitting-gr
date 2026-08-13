import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kypseli Pet Sitting | Pet Sitter Athens",
  description:
    "Professional pet sitting in Athens, Greece. Home visits, dog walking, overnight care, and exotic pet care with a veterinary technician background.",
  keywords: [
    "Pet Sitting Athens",
    "Pet Sitter Athens",
    "Kypseli Pet Sitting",
    "Exotic Pet Care Athens",
    "Dog walking Athens",
    "Cat sitting Athens",
    "Pet care Athens Greece"
  ],
  openGraph: {
    title: "Kypseli Pet Sitting",
    description:
      "Warm, professional pet care in Athens for dogs, cats, and exotic animals.",
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
