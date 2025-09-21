'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faReddit } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link 
              href="/project-ideas" 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Project Ideas
            </Link>
            <Link 
              href="/bot-commands" 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors flex items-center space-x-1"
            >
              <span>Bot Commands</span>
              <span className="text-xs px-2 py-0.5 bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300 rounded-full">
                Soon
              </span>
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

          {/* Right side - Community links, theme toggle, and mobile menu */}
          <div className="flex items-center space-x-4">
            {/* Community Links */}
            <div className="hidden sm:flex items-center space-x-2">
              <a
                href="https://discord.gg/geQEUBm"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                title="Join our Discord"
              >
                <FontAwesomeIcon icon={faDiscord} className="w-5 h-5" />
              </a>
              <a
                href="https://reddit.com/r/CodingHelp"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
                title="Visit our Subreddit"
              >
                <FontAwesomeIcon icon={faReddit} className="w-5 h-5" />
              </a>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              suppressHydrationWarning
            >
              {theme === 'light' ? (
                <Moon size={20} className="text-gray-600 dark:text-gray-300" suppressHydrationWarning />
              ) : (
                <Sun size={20} className="text-gray-600 dark:text-gray-300" suppressHydrationWarning />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
              title="Toggle menu"
              suppressHydrationWarning
            >
              {isMobileMenuOpen ? (
                <X size={20} className="text-gray-600 dark:text-gray-300" suppressHydrationWarning />
              ) : (
                <Menu size={20} className="text-gray-600 dark:text-gray-300" suppressHydrationWarning />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/getting-started" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Getting Started
              </Link>
              <Link 
                href="/languages" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Programming Languages
              </Link>
              <Link 
                href="/web-development" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Web Development
              </Link>
              <Link 
                href="/frameworks" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Frameworks
              </Link>
              <Link 
                href="/mobile-development" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Mobile Development
              </Link>
              <Link 
                href="/data-databases" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Data & Databases
              </Link>
              <Link 
                href="/devops-tools" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                DevOps & Tools
              </Link>
              <Link 
                href="/ai" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                AI & Machine Learning
              </Link>
              <Link 
                href="/resources" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                href="/faq" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              
              {/* Mobile Community Links */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <a
                  href="https://discord.gg/geQEUBm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                >
                  <FontAwesomeIcon icon={faDiscord} className="w-4 h-4" />
                  <span className="pl-1">Discord</span>
                </a>
                <a
                  href="https://reddit.com/r/CodingHelp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
                >
                  <FontAwesomeIcon icon={faReddit} className="w-4 h-4" />
                  <span className="pl-1">Reddit</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
