'use client';

import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon, MessageCircle, Bot } from 'lucide-react';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <img 
                src="https://cdn.discordapp.com/avatars/1017655436704481290/5603c2d1480875125ca4ba708eb35c46.png" 
                alt="CodingHelp Logo" 
                className="w-8 h-8 rounded-lg"
              />
              <span className="font-bold text-xl text-gray-900 dark:text-white">
                CodingHelp Wiki
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/getting-started" 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Getting Started
            </Link>
            <Link 
              href="/languages" 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Languages
            </Link>
            <Link 
              href="/resources" 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Resources
            </Link>
            <Link 
              href="/faq" 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              FAQ
            </Link>
          </nav>

          {/* Right side - Community links and theme toggle */}
          <div className="flex items-center space-x-4">
            {/* Community Links */}
            <div className="flex items-center space-x-2">
              <a
                href="https://discord.gg/geQEUBm"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                title="Join our Discord"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://reddit.com/r/CodingHelp"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
                title="Visit our Subreddit"
              >
                <Bot size={20} />
              </a>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon size={20} className="text-gray-600 dark:text-gray-300" />
              ) : (
                <Sun size={20} className="text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
