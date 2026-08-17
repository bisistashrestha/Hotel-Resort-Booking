import { Libre_Baskerville, Manrope, Italianno } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const libre = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-heading",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const italianno = Italianno({
  weight: "400",
  variable: "--font-quote",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libre.variable} ${manrope.variable} ${italianno.variable} h-full antialiased`}
    >
      <body className="bg-[var(--color-forest)] text-[var(--color-ink)]">
        <div className="bg-[var(--color-forest)]">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}