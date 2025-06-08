import { Inter, Oswald, Titillium_Web, Playfair } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald"
});

export const titillium = Titillium_Web({
  subsets: ["latin"],
  variable: "--font-titillium",
  weight: "400"
});
export const playfair = Playfair({
  subsets: ["latin"],
  variable: "--font-playfair"
});
