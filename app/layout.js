import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "MJAJC - Digital Solutions",
  description: "Crafting exceptional digital experiences with passion and precision.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
      </body>
    </html>
  );
}
