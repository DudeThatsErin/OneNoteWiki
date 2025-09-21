import Link from 'next/link';
import { Github, Heart, Code } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faReddit } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              CodingHelp Wiki
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              A comprehensive programming resource for developers of all skill levels. 
              Learn, build, and grow with our community-driven content.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <span>Made with ❤️ by the CodingHelp community</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/getting-started" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline md:no-underline md:hover:underline transition-colors">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/languages" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline md:no-underline md:hover:underline transition-colors">
                  Programming Languages
                </Link>
              </li>
              <li>
                <Link href="/project-ideas" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline md:no-underline md:hover:underline transition-colors">
                  Project Ideas
                </Link>
              </li>
              <li>
                <Link href="/mobile-development" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline md:no-underline md:hover:underline transition-colors">
                  Mobile Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Open Source */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Open Source
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              This wiki is open source! Contribute to make it better for everyone.
            </p>
            <div className="space-y-3">
              <a
                href="https://github.com/DudeThatsErin/CodingHelp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline md:no-underline md:hover:underline transition-colors"
              >
                <Github className="w-4 h-4" suppressHydrationWarning />
                <span className="text-sm">Wiki Repository</span>
              </a>
              <a
                href="https://github.com/DudeThatsErin/CodingHelpBot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline md:no-underline md:hover:underline transition-colors"
              >
                <Github className="w-4 h-4" suppressHydrationWarning />
                <span className="text-sm">Discord Bot Repository</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} CodingHelp Community. Open source and community-driven.
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://discord.gg/geQEUBm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline md:no-underline md:hover:underline transition-colors"
              >
                <FontAwesomeIcon icon={faDiscord} className="w-4 h-4" />
              </a>
              <a
                href="https://reddit.com/r/CodingHelp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline md:no-underline md:hover:underline transition-colors"
              >
                <FontAwesomeIcon icon={faReddit} className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
