import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";

// Body / UI text
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Display / headings
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Monospace labels, nav, numbers
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${inter.className} ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <Component {...pageProps} />
    </div>
  );
}
