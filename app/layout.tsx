import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";

import type { Metadata } from "next";
import { Teachers } from "next/font/google";
import "./globals.css";
const teachers = Teachers({
  variable: "--font-teachers",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Booker App — rank books to read.",
  description: "Collect books to read.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${teachers.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
