import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'CodingHelp Wiki - Learn to Code',
  description: 'A comprehensive wiki for learning programming and coding, created by the CodingHelp community.',
  keywords: 'programming, coding, tutorial, learn to code, web development, software development',
  authors: [{ name: 'CodingHelp Community' }],
  openGraph: {
    title: 'CodingHelp Wiki - Learn to Code',
    description: 'A comprehensive wiki for learning programming and coding, created by the CodingHelp community.',
    url: 'https://coding-help.vercel.app',
    siteName: 'CodingHelp Wiki',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodingHelp Wiki - Learn to Code',
    description: 'A comprehensive wiki for learning programming and coding, created by the CodingHelp community.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900">
            <Header />
            <div className="flex">
              <Sidebar />
              <main className="flex-1 p-6 overflow-y-auto h-[calc(100vh-4rem)]">
                <div className="max-w-4xl mx-auto">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
