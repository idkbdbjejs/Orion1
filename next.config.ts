import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Verwandelt das Projekt beim Bauen in reines HTML, CSS und JavaScript.
  // Das Ergebnis landet im Ordner "out" und laeuft ueberall — auf Netlify
  // per Drag and Drop, auf jedem Webspace, sogar direkt vom Handy.
  // Kein Server noetig.
  output: "export",

  // Ohne Server kann Next.js Bilder nicht zur Laufzeit umrechnen.
  images: { unoptimized: true },

  // Sorgt dafuer, dass jede Seite als eigener Ordner mit index.html
  // ausgeliefert wird. Ohne das gibt es auf manchen Hostern 404.
  trailingSlash: true,

  // Fehler in Typen oder Stilpruefung sollen den Bau nicht aufhalten —
  // das Projekt soll erst einmal laufen.
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
