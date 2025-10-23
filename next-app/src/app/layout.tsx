import type { Metadata } from "next";
import { Playfair_Display, Roboto } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cafe 8AM",
  description:
    "Welcome to Cafe 8AM, your new favorite coffee spot in Cairo. We offer a wide range of hot and cold drinks, delicious food, and a cozy atmosphere.",
  keywords: [
    "Cafe 8AM",
    "coffee",
    "cafe",
    "Cairo",
    "hot drinks",
    "cold drinks",
    "food",
    "reservation",
    "menu",
    "gallery",
  ],
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
