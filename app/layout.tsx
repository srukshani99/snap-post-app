import type { Metadata } from "next";
import "../styles/globals.scss";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "SnapPost",
  description: "A place to post your snaps...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
