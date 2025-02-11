import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/lib/provider/theme-provider";

export const metadata: Metadata = {
  title: "Sprite",
  description: "Love you 3000 times",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
