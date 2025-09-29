'use client';

import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import { useSearch } from '@/contexts/SearchContext';

export function SearchButton() {
  const { openSearch } = useSearch();
  const [isMac, setIsMac] = useState(false);

  // Detect if user is on Mac
  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0);
  }, []);

  // Handle keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [openSearch]);

  return (
    <button
      onClick={openSearch}
      className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors min-w-[200px] group"
    >
      <Search className="w-4 h-4" />
      <span className="flex-1 text-left">Search documentation...</span>
      <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-xs font-mono text-gray-500 dark:text-gray-400">
        {isMac ? '⌘' : 'Ctrl'} K
      </kbd>
    </button>
  );
}
