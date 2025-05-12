import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-full flex-grow">
              {children}
            </main>
            <footer className="dark:bg-black dark:text-white py-4">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
    <div className="mb-4 md:mb-0">
      <span className="text-sm">
        Made with ❤️ by Ketan for PPOC Secy Nomination
      </span>
    </div>
    <div className="flex space-x-4">
      <a href="/about" className="text-gray-400 hover:dark:text-white hover:text-black transition">
        About Us
      </a>
      <a href="/contact" className="text-gray-400 hover:dark:text-white hover:text-black transition">
        Contact
      </a>
      <a href="/blog" className="text-gray-400 hover:dark:text-white hover:text-black transition">
        Blog
      </a>
      <a href="/initiatives" className="text-gray-400 hover:dark:text-white hover:text-black transition">
        Our Initiatives
      </a>
    </div>
  </div>
</footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
