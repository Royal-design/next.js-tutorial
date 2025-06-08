import { Poppins, Inter } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400"]
});
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400"]
});
