import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // optional weights
  variable: "--font-ibm-plex-mono", // optional CSS variable
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ibmPlexMono.className}>
      <body className="bg-[#000]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
