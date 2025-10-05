'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faReddit } from '@fortawesome/free-brands-svg-icons';
import { SearchButton } from '@/components/SearchButton';
import { HeaderProps } from './types';

export function Header({ children, className = '' }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={`sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <img 
                src="https://download.logo.wine/logo/Microsoft_OneNote/Microsoft_OneNote-Logo.wine.png" 
                alt="OneNote Logo" 
                className="w-8 h-8 rounded-lg"
              />
              <span className="font-bold text-xl text-gray-900 dark:text-white">
                OneNote Wiki
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link 
              href="/templates" 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Templates
            </Link>
            <Link 
              href="/bot-commands" 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors flex items-center space-x-1"
            >
              <span>Bot Commands</span>
            </Link>
            <Link 
              href="/resources" 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Resources
            </Link>
            
            {/* Search */}
            <div className="flex items-center">
              <SearchButton />
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3 border-l border-gray-200 dark:border-gray-700 pl-6">
              <a
                href="https://discord.gg/5kv4bDUkpc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                title="Join our Discord"
              >
                <FontAwesomeIcon icon={faDiscord} className="w-5 h-5" />
              </a>
              <a
                href="https://www.reddit.com/r/OneNote/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
                title="Visit our Subreddit"
              >
                <FontAwesomeIcon icon={faReddit} className="w-5 h-5" />
              </a>
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/templates"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Templates
              </Link>
              <Link 
                href="/bot-commands"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors flex items-center space-x-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Bot Commands</span>
                <span className="text-xs px-2 py-0.5 bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300 rounded-full">
                  Soon
                </span>
              </Link>
              <Link 
                href="/resources"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resources
              </Link>
              
              {/* Mobile Search */}
              <div className="pt-2">
                <SearchButton />
              </div>
              
              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <a
                  href="https://discord.gg/5kv4bDUkpc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                  title="Join our Discord"
                >
                  <FontAwesomeIcon icon={faDiscord} className="w-6 h-6" />
                </a>
                <a
                  href="https://www.reddit.com/r/OneNote/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
                  title="Visit our Subreddit"
                >
                  <FontAwesomeIcon icon={faReddit} className="w-6 h-6" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
      {children}
    </header>
  );
}
