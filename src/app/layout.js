import { Geist, Geist_Mono } from "next/font/google";
import "@/style/globals.css";



export const metadata = {
  title: "Mockingjays Are Just Curious",
  description: "Mocking are just curious about everything.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="apple-mobile-web-app-title" content="MJAJC" />
      <body>
        {children}
      </body>
    </html>
  );
}
