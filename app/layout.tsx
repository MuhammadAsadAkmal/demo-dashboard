"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { TopBar } from "@/components/top-bar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import TranslationProvider from "@/TranslationProvider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
           <TranslationProvider>

          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
             {/* Content Area */}
              <TopBar />
              <div className="flex-1 overflow-y-auto mt-16">{children}</div>
            </SidebarInset>
          </SidebarProvider>
           </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
