import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PageLayoutProps } from './types';

export function PageLayout({
  children,
  title,
  description,
  icon,
  previousLink,
  nextLink
}: PageLayoutProps) {
  const NavigationSection = ({ className = "" }: { className?: string }) => {
    if (!previousLink && !nextLink) return null;

    return (
      <nav className={`flex flex-col md:flex-row items-center justify-between gap-4 ${className}`} role="navigation" aria-label="Page navigation">
        <div className="flex-1">
          {previousLink && (
            <Link
              href={previousLink.href}
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline pb-2 md:pb-0"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{previousLink.label}</span>
            </Link>
          )}
        </div>
        
        <div className="flex-1 flex justify-end">
          {nextLink && (
            <Link
              href={nextLink.href}
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              <span>{nextLink.label}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </nav>
    );
  };

  return (
    <div className="flex flex-col gap-3 md:gap-4">
      {/* Skip Navigation Links */}
      <div className="sr-only focus-within:not-sr-only">
        <a
          href="#main-content"
          className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Skip to main content
        </a>
        <a
          href="#page-navigation"
          className="absolute top-4 left-40 bg-blue-600 text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Skip to navigation
        </a>
      </div>

      {/* Header Navigation */}
      <NavigationSection />

      {/* Page Header */}
      <header className="flex flex-col gap-2 md:gap-3">
        <div className="flex items-center gap-3">
          {icon}
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {title}
          </h1>
        </div>
        {description && (
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {description}
          </p>
        )}
      </header>

      {/* Page Content */}
      <main 
        id="main-content"
        className="flex flex-col gap-3 md:gap-4"
        role="main"
        aria-label="Main content"
      >
        {children}
      </main>

      {/* Footer Navigation */}
      <div id="page-navigation">
        <NavigationSection className="pt-8 border-t border-gray-200 dark:border-gray-700" />
      </div>
    </div>
  );
}
