import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { defaultMetadata } from "@/lib/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";
import "./globals.css";

const inter = Inter({
  subsets: [ "latin" ],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
                                     children
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/assets/favicon_io/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon_io/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon_io/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon_io/apple-touch-icon.png" />
        <link rel="manifest" href="/assets/favicon_io/site.webmanifest" />
        <StructuredData />
        {process.env.PLAUSIBLE_DOMAIN && (
          <script
            defer
            data-domain={process.env.PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          ></script>
        )}
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
