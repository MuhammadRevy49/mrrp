import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MRRP",
  description: "Bismillah, Halo Saya M. Revy!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}
      >
        {/* Background image */}
        <div className="fixed inset-0 -z-10 h-screen min-w-screen">
          <img
            src="/images/bg3.jpg"
            alt="Background"
            className="w-screen h-full object-cover"
          />
        </div>

        <Navbar />
        {children}
      </body>
    </html>
  );
}
