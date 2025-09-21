import Link from 'next/link';
import { BookOpen, ArrowRight, CheckCircle } from 'lucide-react';

const gettingStartedSteps = [
  {
    title: 'What is Programming?',
    description: 'Understand the fundamentals of programming and how computers work.',
    href: '/getting-started/what-is-programming',
    completed: false
  },
  {
    title: 'Choosing Your First Language',
    description: 'Learn about different programming languages and which one to start with.',
    href: '/getting-started/choosing-language',
    completed: false
  },
  {
    title: 'Setting Up Your Environment',
    description: 'Install the necessary tools and set up your development environment.',
    href: '/getting-started/setup',
    completed: false
  },
  {
    title: 'Your First Program',
    description: 'Write and run your very first program - the traditional "Hello, World!"',
    href: '/getting-started/first-program',
    completed: false
  }
];

export default function GettingStartedPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <BookOpen className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Getting Started with Programming
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Welcome to your programming journey! This section will guide you through the basics 
          of programming, from understanding what programming is to writing your first program.
        </p>
      </div>

      {/* Learning Path */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Your Learning Path
        </h2>
        <div className="space-y-4">
          {gettingStartedSteps.map((step, index) => (
            <Link
              key={step.href}
              href={step.href}
              className="block p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all hover:border-blue-300 dark:hover:border-blue-600"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {step.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Tips */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
          💡 Tips for Success
        </h3>
        <ul className="space-y-2 text-blue-800 dark:text-blue-200">
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <span>Take your time - programming is a skill that develops gradually</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <span>Practice regularly, even if it's just 15-30 minutes a day</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <span>Don't be afraid to make mistakes - they're part of learning</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <span>Join our community for help and support when you get stuck</span>
          </li>
        </ul>
      </div>

      {/* Community Support */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Need Help?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Learning to program can be challenging, but you're not alone! Our community is here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://discord.gg/geQEUBm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
          >
            💬 Ask on Discord
          </a>
          <a
            href="https://reddit.com/r/CodingHelp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors"
          >
            🤝 Post on Reddit
          </a>
        </div>
      </div>
    </div>
  );
}
