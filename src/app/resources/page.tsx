import Link from 'next/link';
import { Lightbulb, ArrowRight, BookOpen, Users, Code, HelpCircle, Search, Target } from 'lucide-react';

const resourceCategories = [
  {
    title: 'Learning Platforms',
    description: 'Interactive coding courses and structured learning paths',
    examples: ['freeCodeCamp', 'Codecademy', 'Coursera', 'Udemy'],
    href: '/resources/platforms',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
  },
  {
    title: 'Books & Documentation',
    description: 'Comprehensive guides, references, and official documentation',
    examples: ['MDN Docs', 'Programming Books', 'API References', 'Tutorials'],
    href: '/resources/books',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
  },
  {
    title: 'Practice Problems',
    description: 'Coding challenges and exercises to sharpen your skills',
    examples: ['LeetCode', 'HackerRank', 'Codewars', 'Project Euler'],
    href: '/resources/practice',
    icon: <Code className="w-6 h-6" />,
    color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800'
  },
  {
    title: 'Communities',
    description: 'Connect with other developers and get help when you need it',
    examples: ['Stack Overflow', 'Reddit', 'Discord', 'GitHub'],
    href: '/resources/communities',
    icon: <Users className="w-6 h-6" />,
    color: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800'
  }
];

const additionalResources = [
  {
    title: 'Learning Guides',
    description: 'Comprehensive guides on learning styles and study techniques',
    href: '/resources/learning-guides',
    icon: <Target className="w-6 h-6" />,
    color: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800'
  },
  {
    title: 'Getting Help',
    description: 'How to ask questions effectively and find solutions online',
    href: '/resources/getting-help',
    icon: <HelpCircle className="w-6 h-6" />,
    color: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
  },
  {
    title: 'Search Tips',
    description: 'Master the art of googling programming problems',
    href: '/resources/search-tips',
    icon: <Search className="w-6 h-6" />,
    color: 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800'
  }
];

export default function ResourcesPage() {
  return (
    <div className="flex flex-col gap-8 md:gap-12">
      {/* Header */}
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex items-center gap-3">
          <Lightbulb className="w-8 h-8 text-yellow-600" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Learning Resources
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Discover the best resources to accelerate your programming journey. From interactive 
          platforms to practice problems and supportive communities.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Platforms</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">100+</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Books</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">20+</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Practice Sites</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
          <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">15+</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Communities</div>
        </div>
      </div>

      {/* Main Resource Categories */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Main Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resourceCategories.map((category, index) => (
            <Link
              key={category.href}
              href={category.href}
              className={`block p-6 rounded-lg border-2 transition-all hover:shadow-lg hover:scale-105 ${category.color}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-gray-700 dark:text-gray-300">{category.icon}</div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {category.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {category.description}
              </p>
              
              <div className="flex flex-wrap gap-1">
                {category.examples.map((example, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-white dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                    {example}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Additional Resources */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Learning Guides & Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalResources.map((resource, index) => (
            <Link
              key={resource.href}
              href={resource.href}
              className={`block p-6 rounded-lg border-2 transition-all hover:shadow-lg hover:scale-105 ${resource.color}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-gray-700 dark:text-gray-300">{resource.icon}</div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {resource.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {resource.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800 text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to Start Learning?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Choose a category above to explore curated resources, or dive into our detailed guides 
          for learning tips, getting help online, and mastering search techniques.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/resources/platforms"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Explore Platforms
          </Link>
          <Link
            href="/resources/getting-help"
            className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
          >
            <HelpCircle className="w-5 h-5 mr-2" />
            Learn How to Get Help
          </Link>
        </div>
      </div>
    </div>
  );
}
