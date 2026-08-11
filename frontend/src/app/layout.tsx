import { Libre_Baskerville, Manrope, Italianno } from "next/font/google";
import "./globals.css";

const libre = Libre_Baskerville({
  subsets: ["latin"],
  //weight: ["400", "700"],
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
      <body className="min-h-screen bg-[var(--color-forest)]">
        {children}
      </body>
    </html>
  );
}