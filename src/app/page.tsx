import Link from 'next/link';
import { ArrowRight, BookOpen, Users, FileText, Zap, Star, Smartphone, PenTool, Settings, Lightbulb, HelpCircle, MessageCircle, Bot, Search, Share2, Layers } from 'lucide-react';
import { QuickStats } from '@/components/QuickStats';
import { InfoCard } from '@/components/InfoCard';
import { FeatureList } from '@/components/FeatureList';

const quickStartCards = [
  {
    title: 'Getting Started',
    description: 'New to OneNote? Learn the basics and create your first notebook.',
    href: '/getting-started',
    icon: <BookOpen className="w-8 h-8 text-white" />,
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    title: 'Notebooks & Organization',
    description: 'Master notebook creation, sections, pages, and organization strategies.',
    href: '/notebooks',
    icon: <FileText className="w-8 h-8 text-white" />,
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    title: 'Note-Taking Features',
    description: 'Discover text formatting, drawing, handwriting, and advanced features.',
    href: '/features',
    icon: <PenTool className="w-8 h-8 text-white" />,
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    title: 'Mobile OneNote',
    description: 'Use OneNote on iOS and Android devices with mobile-specific tips.',
    href: '/mobile',
    icon: <Smartphone className="w-8 h-8 text-white" />,
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    title: 'Media & Attachments',
    description: 'Add images, audio, video, and file attachments to your notes.',
    href: '/media',
    icon: <Layers className="w-8 h-8 text-white" />,
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    title: 'Sharing & Collaboration',
    description: 'Share notebooks and collaborate with others in real-time.',
    href: '/sharing',
    icon: <Share2 className="w-8 h-8 text-white" />,
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    title: 'Search & Organization',
    description: 'Find your notes quickly with powerful search and OCR features.',
    href: '/search',
    icon: <Search className="w-8 h-8 text-white" />,
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    title: 'Settings & Customization',
    description: 'Configure OneNote settings, sync, backup, and customization options.',
    href: '/settings',
    icon: <Settings className="w-8 h-8 text-white" />,
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  }
];

export default function HomePage() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8 md:gap-12">
      {/* Hero Section */}
      <div className="text-center py-12 md:py-20">
        <div className="flex justify-center mb-6">
          <div className="text-6xl md:text-8xl">📝</div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          OneNote Wiki
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Your comprehensive guide to Microsoft OneNote. From basic note-taking to advanced organization, 
          master the art of digital note-taking and boost your productivity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/getting-started"
            className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Get Started
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center px-6 py-3 border border-purple-300 dark:border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 text-purple-700 dark:text-purple-300 font-medium rounded-lg transition-colors"
          >
            <FileText className="w-5 h-5 mr-2" />
            Browse Features
          </Link>
        </div>
      </div>

      {/* Quick Start Cards */}
      <div className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white text-center">
          Explore Topics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {quickStartCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className={`p-6 rounded-lg border transition-all hover:border-gray-600 ${card.color}`}
            >
              <div className="flex flex-col gap-3 md:gap-4">
                <div className="flex items-center gap-3 xl:flex-col xl:items-start xl:gap-2">
                  <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gray-700 flex-shrink-0">
                    {card.icon}
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                    {card.title}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Community Section */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 md:p-8 text-center flex flex-col gap-4 md:gap-6 border border-gray-200/50 dark:border-gray-700">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
          Join Our Community
        </h2>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Connect with fellow OneNote users, get help with your note-taking questions, and share your 
          organization tips with others in our supportive community.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-2 md:pt-4">
          <a
            href="https://discord.gg/5kv4bDUkpc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Join Discord Server</span>
          </a>
          <a
            href="https://www.reddit.com/r/OneNote/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
          >
            <Bot className="w-5 h-5" />
            <span>Visit r/OneNote</span>
          </a>
        </div>
      </div>

      {/* Recent Updates or Featured Content */}
      <div className="flex flex-col gap-4 md:gap-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
          Featured Content
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg border border-gray-200/50 dark:border-gray-700 p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              🚀 Getting Started Guide
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Complete beginner's guide to OneNote with step-by-step instructions and screenshots.
            </p>
            <Link
              href="/getting-started"
              className="text-purple-400 hover:underline text-sm font-medium"
            >
              Read More →
            </Link>
          </div>
          <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg border border-gray-200/50 dark:border-gray-700 p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              💡 Organization Tips
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Learn best practices for organizing your notes, notebooks, and maximizing productivity.
            </p>
            <Link
              href="/resources"
              className="text-purple-400 hover:underline text-sm font-medium"
            >
              Explore Resources →
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
