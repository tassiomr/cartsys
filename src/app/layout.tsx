import NavigationMenu from "@/components/shared/navigator";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wizard Creator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "w-screen h-screen")}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <NavigationMenu />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
