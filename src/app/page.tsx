import Link from 'next/link';
import { BookOpen, Code, Globe, Smartphone, Database, Layers, Lightbulb, HelpCircle, MessageCircle, Bot } from 'lucide-react';

const quickStartCards = [
  {
    title: 'Getting Started',
    description: 'New to programming? Start here to learn the basics and choose your first language.',
    href: '/getting-started',
    icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
  },
  {
    title: 'Programming Languages',
    description: 'Explore different programming languages and find the one that suits your goals.',
    href: '/languages',
    icon: <Code className="w-8 h-8 text-green-600" />,
    color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
  },
  {
    title: 'Web Development',
    description: 'Learn to build websites and web applications with modern technologies.',
    href: '/web-development',
    icon: <Globe className="w-8 h-8 text-purple-600" />,
    color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800'
  },
  {
    title: 'Mobile Development',
    description: 'Create mobile apps for iOS and Android using various frameworks.',
    href: '/mobile-development',
    icon: <Smartphone className="w-8 h-8 text-orange-600" />,
    color: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800'
  },
  {
    title: 'Data & Databases',
    description: 'Learn about data storage, databases, and data analysis techniques.',
    href: '/data-databases',
    icon: <Database className="w-8 h-8 text-indigo-600" />,
    color: 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800'
  },
  {
    title: 'DevOps & Tools',
    description: 'Master the tools and practices that make development more efficient.',
    href: '/devops-tools',
    icon: <Layers className="w-8 h-8 text-red-600" />,
    color: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
  },
  {
    title: 'Resources',
    description: 'Find learning platforms, books, practice problems, and communities.',
    href: '/resources',
    icon: <Lightbulb className="w-8 h-8 text-yellow-600" />,
    color: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800'
  },
  {
    title: 'FAQ',
    description: 'Get answers to frequently asked questions about programming.',
    href: '/faq',
    icon: <HelpCircle className="w-8 h-8 text-gray-600" />,
    color: 'bg-gray-50 dark:bg-gray-900/20 border-gray-200 dark:border-gray-800'
  }
];

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Welcome to CodingHelp Wiki
        </h1>
        <p className="pt-2 pb-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Your comprehensive guide to learning programming and software development. 
          Created by the CodingHelp community to help aspiring developers on their coding journey.
        </p>
        <div className="flex flex-col gap-4 justify-center items-center pb-4">
          <Link
            href="/getting-started"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Start Learning
          </Link>
            <a
              href="https://discord.gg/geQEUBm"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors"
            >
              Join Discord
            </a>
            <a
              href="https://reddit.com/r/CodingHelp"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors"
            >
              Visit Subreddit
            </a>
        </div>
      </div>

      {/* Quick Start Cards */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
          Explore Topics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {quickStartCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className={`p-6 rounded-lg border-2 transition-all hover:shadow-lg hover:scale-105 ${card.color}`}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white dark:bg-gray-800 shadow-sm flex-shrink-0">
                    {card.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {card.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Community Section */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Join Our Community
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          CodingHelp Wiki is maintained by a vibrant community of developers who are passionate about 
          helping others learn to code. Join us on Discord for real-time help or visit our subreddit 
          for discussions and Q&A.
        </p>
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
          <a
            href="https://discord.gg/geQEUBm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Join Discord Server</span>
          </a>
          <a
            href="https://reddit.com/r/CodingHelp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors"
          >
            <Bot className="w-5 h-5" />
            <span>Visit r/CodingHelp</span>
          </a>
        </div>
      </div>

      {/* Recent Updates or Featured Content */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Featured Content
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              🚀 Getting Started Guide
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Complete beginner's guide to programming with step-by-step instructions.
            </p>
            <Link
              href="/getting-started"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
            >
              Read More →
            </Link>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              💡 Best Practices
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Learn industry best practices and coding standards for clean, maintainable code.
            </p>
            <Link
              href="/resources"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
            >
              Explore Resources →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
