import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/section/Header";
import Footer from "./_components/section/Footer";

import { Work_Sans } from "next/font/google";

const workSan = Work_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Root Level",
  description:
    "Root Level is a full-service digital agency that specializes in web development, mobile app development, and digital marketing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={workSan.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
