import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AuthKitProvider } from "@workos-inc/authkit-nextjs/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Family Cookbook",
  description: "A collection of family recipes passed down through generations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthKitProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </AuthKitProvider>
      </body>
    </html>
  );
}
