import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { MovieProvider } from "@/context/MovieContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Movie Platform",
  description: "See movie details with easy browsing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <MovieProvider>{children}</MovieProvider>
      </body>
    </html>
  );
}
