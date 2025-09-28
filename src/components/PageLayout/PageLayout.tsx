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
        {previousLink ? (
          <Link
            href={previousLink.href}
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline pb-2 md:pb-0"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{previousLink.label}</span>
          </Link>
        ) : (
          <div></div>
        )}
        
        {nextLink ? (
          <Link
            href={nextLink.href}
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <span>{nextLink.label}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        ) : (
          <div></div>
        )}
      </nav>
    );
  };

  return (
    <div className="flex flex-col gap-8 md:gap-12">
      {/* Header Navigation */}
      <NavigationSection />

      {/* Page Header */}
      <header className="flex flex-col gap-4 md:gap-6">
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
      <main>
        {children}
      </main>

      {/* Footer Navigation */}
      <NavigationSection className="pt-8 border-t border-gray-200 dark:border-gray-700" />
    </div>
  );
}
