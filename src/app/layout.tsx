import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { SearchProvider } from '@/contexts/SearchContext';
import { SearchModal } from '@/components/SearchModal';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  metadataBase: new URL('https://onenote.vercel.app'),
  title: 'OneNote Wiki - Master Digital Note-Taking',
  description: 'A comprehensive wiki for mastering Microsoft OneNote, created by the OneNote community.',
  keywords: 'OneNote, Microsoft OneNote, digital notes, note-taking, productivity, organization, notebooks',
  authors: [{ name: 'OneNote Community' }],
  openGraph: {
    title: 'OneNote Wiki - Master Digital Note-Taking',
    description: 'A comprehensive wiki for mastering Microsoft OneNote, created by the OneNote community.',
    url: 'https://onenote.vercel.app',
    siteName: 'OneNote Wiki',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OneNote Wiki - Master Digital Note-Taking',
    description: 'A comprehensive wiki for mastering Microsoft OneNote, created by the OneNote community.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://download.logo.wine/logo/Microsoft_OneNote/Microsoft_OneNote-Logo.wine.png" />
        <link rel="apple-touch-icon" href="https://download.logo.wine/logo/Microsoft_OneNote/Microsoft_OneNote-Logo.wine.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <Analytics />
        <SpeedInsights />
        <ThemeProvider>
          <SearchProvider>
            <div className="min-h-screen bg-white dark:bg-almost-black-purple flex">
              <div className="w-64 bg-white dark:bg-dark-purple border-r border-dark-purple dark:border-dark-purple">
                <Sidebar className='fixed top-0 left-0 w-64 overflow-y-auto' />
              </div>
              <div className="flex-1 flex flex-col">
                <Header />
                <main className="flex-1 p-2 sm:p-4 lg:p-6 overflow-auto">
                  {children}
                </main>
                <Footer />
              </div>
            </div>
            <SearchModal />
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
