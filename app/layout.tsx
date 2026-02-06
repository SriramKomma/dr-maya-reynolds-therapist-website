import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy in Santa Monica, CA",
    template: "%s | Dr. Maya Reynolds, PsyD",
  },
  description:
    "Licensed clinical psychologist specializing in anxiety, trauma, EMDR, and burnout therapy. Compassionate, evidence-based treatment for adults in Santa Monica, California.",
  keywords: [
    "anxiety therapy",
    "trauma therapy",
    "EMDR",
    "burnout therapy",
    "Santa Monica therapist",
    "clinical psychologist",
  ],
  authors: [{ name: "Dr. Maya Reynolds" }],
  creator: "Dr. Maya Reynolds, PsyD",
  publisher: "Dr. Maya Reynolds, PsyD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://drmayareynolds.com",
    title:
      "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy in Santa Monica, CA",
    description:
      "Licensed clinical psychologist specializing in anxiety, trauma, EMDR, and burnout therapy. Compassionate, evidence-based treatment for adults in Santa Monica, California.",
    images: [
      {
        url: "/images/dr-maya-reynolds.png",
        width: 1200,
        height: 630,
        alt: "Dr. Maya Reynolds, PsyD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy in Santa Monica, CA",
    description:
      "Licensed clinical psychologist specializing in anxiety, trauma, EMDR, and burnout therapy.",
    images: ["/images/dr-maya-reynolds.png"],
    creator: "@drmayareynolds",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
