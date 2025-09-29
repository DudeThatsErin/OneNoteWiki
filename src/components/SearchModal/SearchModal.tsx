'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Search, Clock, ArrowRight, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useSearch } from '@/contexts/SearchContext';

interface SearchResult {
  title: string;
  path: string;
  excerpt: string;
  category: string;
}

// Sample search data - in a real app, this would come from an API or search index
const searchData: SearchResult[] = [
  {
    title: 'Getting Started with Programming',
    path: '/getting-started/what-is-programming',
    excerpt: 'Learn the fundamentals of programming and how to get started with your coding journey. Programming is the process of creating instructions for computers to follow.',
    category: 'Getting Started'
  },
  {
    title: 'JavaScript Fundamentals',
    path: '/languages/javascript/fundamentals',
    excerpt: 'Master the basics of JavaScript including variables, functions, objects, and control flow. JavaScript is a versatile programming language used for web development.',
    category: 'Languages'
  },
  {
    title: 'Python Programming',
    path: '/languages/python',
    excerpt: 'Python is a high-level, interpreted programming language known for its simplicity and readability. Perfect for beginners and powerful for experts.',
    category: 'Languages'
  },
  {
    title: 'React Framework',
    path: '/frameworks/frontend',
    excerpt: 'React is a popular JavaScript library for building user interfaces. Learn how to create interactive web applications with component-based architecture.',
    category: 'Frameworks'
  },
  {
    title: 'HTML & CSS Basics',
    path: '/web-development/html-css',
    excerpt: 'HTML and CSS are the fundamental technologies for building web pages. Learn to structure content with HTML and style it beautifully with CSS.',
    category: 'Web Development'
  },
  {
    title: 'Full-Stack Development',
    path: '/web-development/fullstack',
    excerpt: 'Full-stack development involves working with both frontend and backend technologies to build complete web applications from start to finish.',
    category: 'Web Development'
  },
  {
    title: 'Mobile Development with React Native',
    path: '/mobile-development/react-native',
    excerpt: 'Build native mobile apps for iOS and Android using React Native. Learn how to create cross-platform mobile applications with JavaScript.',
    category: 'Mobile Development'
  },
  {
    title: 'Git Version Control',
    path: '/devops-tools/git',
    excerpt: 'Git is a distributed version control system that tracks changes in source code during software development. Essential tool for all developers.',
    category: 'DevOps Tools'
  },
  {
    title: 'SQL Databases',
    path: '/data-databases/sql',
    excerpt: 'Structured Query Language (SQL) is used to communicate with databases. Learn how to store, retrieve, and manipulate data efficiently.',
    category: 'Data & Databases'
  },
  {
    title: 'AI and Machine Learning',
    path: '/ai',
    excerpt: 'Explore artificial intelligence and machine learning concepts. Learn how to build intelligent applications and understand AI fundamentals.',
    category: 'AI & ML'
  }
];

export function SearchModal() {
  const { isSearchOpen, closeSearch } = useSearch();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Load recent searches from cookies
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = document.cookie
        .split('; ')
        .find(row => row.startsWith('recentSearches='))
        ?.split('=')[1];
      
      if (saved) {
        try {
          setRecentSearches(JSON.parse(decodeURIComponent(saved)));
        } catch (e) {
          console.error('Failed to parse recent searches:', e);
        }
      }
    }
  }, []);

  // Save recent searches to cookies
  const saveRecentSearches = useCallback((searches: string[]) => {
    if (typeof window !== 'undefined') {
      const expires = new Date();
      expires.setTime(expires.getTime() + (30 * 24 * 60 * 60 * 1000)); // 30 days
      document.cookie = `recentSearches=${encodeURIComponent(JSON.stringify(searches))}; expires=${expires.toUTCString()}; path=/`;
    }
  }, []);

  // Search function
  const performSearch = useCallback((searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const filtered = searchData.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 10); // Limit to 10 results

    setResults(filtered);
    setSelectedIndex(0);
  }, []);

  // Handle search input change
  useEffect(() => {
    performSearch(query);
  }, [query, performSearch]);

  // Focus input when modal opens
  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isSearchOpen) return;

      switch (e.key) {
        case 'Escape':
          closeSearch();
          break;
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev < (query ? results.length - 1 : recentSearches.length - 1) ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev > 0 ? prev - 1 : (query ? results.length - 1 : recentSearches.length - 1)
          );
          break;
        case 'Enter':
          e.preventDefault();
          if (query && results.length > 0) {
            handleResultClick(results[selectedIndex]);
          } else if (!query && recentSearches.length > 0) {
            setQuery(recentSearches[selectedIndex]);
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, query, results, recentSearches, selectedIndex, closeSearch]);

  const handleResultClick = (result: SearchResult) => {
    // Add to recent searches
    const newRecentSearches = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
    setRecentSearches(newRecentSearches);
    saveRecentSearches(newRecentSearches);

    // Navigate to result
    router.push(result.path);
    closeSearch();
    setQuery('');
  };

  const handleRecentSearchClick = (search: string) => {
    setQuery(search);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    saveRecentSearches([]);
  };

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeSearch}
      />
      
      {/* Modal */}
      <div className="relative min-h-screen flex items-start justify-center p-4 pt-[10vh]">
        <div className="relative w-full max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Search Input */}
          <div className="flex items-center px-4 py-3 border-b border-gray-200 dark:border-gray-700">
            <Search className="w-5 h-5 text-gray-400 mr-3" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search documentation..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none text-lg"
            />
            <button
              onClick={closeSearch}
              className="ml-3 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto">
            {query ? (
              // Search Results
              results.length > 0 ? (
                <div className="py-2">
                  {results.map((result, index) => (
                    <button
                      key={result.path}
                      onClick={() => handleResultClick(result)}
                      className={`w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                        index === selectedIndex ? 'bg-gray-50 dark:bg-gray-700' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                              {result.category}
                            </span>
                          </div>
                          <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                            {result.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                            {result.excerpt}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 ml-3 flex-shrink-0" />
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center text-gray-500 dark:text-gray-400">
                  <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p>No results found for "{query}"</p>
                </div>
              )
            ) : (
              // Recent Searches
              <div className="py-2">
                {recentSearches.length > 0 ? (
                  <>
                    <div className="flex items-center justify-between px-4 py-2">
                      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Recent</h3>
                      <button
                        onClick={clearRecentSearches}
                        className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                      >
                        Clear
                      </button>
                    </div>
                    {recentSearches.map((search, index) => (
                      <button
                        key={search}
                        onClick={() => handleRecentSearchClick(search)}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-3 ${
                          index === selectedIndex ? 'bg-gray-50 dark:bg-gray-700' : ''
                        }`}
                      >
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-700 dark:text-gray-300">{search}</span>
                      </button>
                    ))}
                  </>
                ) : (
                  <div className="py-8 text-center text-gray-500 dark:text-gray-400">
                    <Clock className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p>No recent searches</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-xs">↵</kbd>
                  to select
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-xs">↑↓</kbd>
                  to navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-xs">esc</kbd>
                  to close
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
