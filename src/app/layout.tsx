import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "animate.css/animate.min.css";
import { NavBar } from "@/components/NavBar";
import { menuItems } from "./config/menuItems";
import type { AppProps } from "next/app";
import StoreProvider from "@/main/Provider";
// src/pages/_app.tsx

import store from "../store";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ideariver Marketing Agency",
  // description: "Generated by create next app",
};
//
const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; 2024 Ideariver Marketing Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar menuItems={menuItems} />
            <main className="mt-16">
              {" "}
              {/* Add top margin here */}
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
