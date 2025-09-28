import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { BreadcrumbProps } from './types';

export function Breadcrumb({
  items,
  separator = <ChevronRight className="w-4 h-4" />,
  className = ''
}: BreadcrumbProps) {
  return (
    <nav className={`flex items-center gap-2 text-sm ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center gap-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {index > 0 && (
              <span className="text-gray-400 dark:text-gray-500">
                {separator}
              </span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
