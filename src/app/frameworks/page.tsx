import Link from 'next/link';
import { Package, ArrowRight, Code, Server, Smartphone, Palette, Layers } from 'lucide-react';

const frameworkCategories = [
  {
    title: 'Frontend Frameworks',
    description: 'Build interactive user interfaces and single-page applications',
    examples: ['React', 'Vue.js', 'Angular', 'Svelte'],
    href: '/frameworks/frontend',
    icon: <Code className="w-6 h-6" />,
    color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
  },
  {
    title: 'Backend Frameworks',
    description: 'Create server-side applications, APIs, and web services',
    examples: ['Express.js', 'Django', 'Laravel', 'ASP.NET Core'],
    href: '/frameworks/backend',
    icon: <Server className="w-6 h-6" />,
    color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
  },
  {
    title: 'Full Stack Frameworks',
    description: 'Complete solutions for both frontend and backend development',
    examples: ['Next.js', 'Nuxt.js', 'Ruby on Rails', 'Gatsby'],
    href: '/frameworks/fullstack',
    icon: <Layers className="w-6 h-6" />,
    color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800'
  },
  {
    title: 'Mobile Frameworks',
    description: 'Build cross-platform mobile applications',
    examples: ['React Native', 'Flutter', 'Expo', 'Ionic'],
    href: '/frameworks/mobile',
    icon: <Smartphone className="w-6 h-6" />,
    color: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800'
  },
  {
    title: 'CSS Frameworks',
    description: 'Pre-built styles and components for rapid UI development',
    examples: ['Bootstrap', 'Tailwind CSS', 'Bulma', 'Foundation'],
    href: '/frameworks/css',
    icon: <Palette className="w-6 h-6" />,
    color: 'bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-800'
  }
];

const popularFrameworks = [
  { name: 'React', category: 'Frontend', popularity: 'Very High', difficulty: 'Intermediate' },
  { name: 'Express.js', category: 'Backend', popularity: 'Very High', difficulty: 'Beginner' },
  { name: 'Next.js', category: 'Full Stack', popularity: 'High', difficulty: 'Intermediate' },
  { name: 'React Native', category: 'Mobile', popularity: 'High', difficulty: 'Intermediate' },
  { name: 'Bootstrap', category: 'CSS', popularity: 'Very High', difficulty: 'Beginner' },
  { name: 'Vue.js', category: 'Frontend', popularity: 'High', difficulty: 'Beginner' },
  { name: 'Django', category: 'Backend', popularity: 'High', difficulty: 'Intermediate' },
  { name: 'Flutter', category: 'Mobile', popularity: 'Growing', difficulty: 'Intermediate' }
];

export default function FrameworksPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Package className="w-8 h-8 text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Frameworks
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Discover powerful frameworks that accelerate development and provide 
          structure to your applications. From frontend to backend, mobile to CSS.
        </p>
      </div>

      {/* What is a Framework */}
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
        <h2 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-4">
          🤔 What is a Framework?
        </h2>
        <div className="space-y-4 text-purple-800 dark:text-purple-200">
          <p>
            A <strong>framework</strong> is a pre-written collection of code that provides a foundation 
            and structure for building applications. Think of it as a blueprint or scaffolding that 
            gives you a head start on your project.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">✅ Benefits of Using Frameworks:</h3>
              <ul className="space-y-1 text-sm">
                <li>• <strong>Faster Development:</strong> Pre-built components and functionality</li>
                <li>• <strong>Best Practices:</strong> Established patterns and conventions</li>
                <li>• <strong>Community Support:</strong> Large ecosystems and documentation</li>
                <li>• <strong>Security:</strong> Built-in security features and updates</li>
                <li>• <strong>Maintainability:</strong> Structured, organized codebase</li>
                <li>• <strong>Testing:</strong> Built-in testing tools and methodologies</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🎯 Framework vs Library:</h3>
              <div className="space-y-2 text-sm">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded">
                  <strong>Framework:</strong> "Don't call us, we'll call you"
                  <br />
                  <span className="text-xs">The framework controls the flow and calls your code</span>
                </div>
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded">
                  <strong>Library:</strong> "You call us when you need us"
                  <br />
                  <span className="text-xs">You control the flow and call library functions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Framework Categories */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Framework Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {frameworkCategories.map((category, index) => (
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
                  <span key={i} className="text-xs px-2 py-1 bg-white dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300">
                    {example}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Frameworks Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Popular Frameworks at a Glance
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Framework
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Popularity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Difficulty
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {popularFrameworks.map((framework, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900 dark:text-white">{framework.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-600 dark:text-gray-300">{framework.category}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        framework.popularity === 'Very High' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                        framework.popularity === 'High' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                        'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      }`}>
                        {framework.popularity}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        framework.difficulty === 'Beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                        'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                      }`}>
                        {framework.difficulty}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Choosing a Framework */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
          🎯 How to Choose the Right Framework
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Consider Your Project:</h4>
            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
              <li>• Project size and complexity</li>
              <li>• Performance requirements</li>
              <li>• Team size and experience</li>
              <li>• Timeline and deadlines</li>
              <li>• Long-term maintenance needs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Evaluate the Framework:</h4>
            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
              <li>• Learning curve and documentation</li>
              <li>• Community size and support</li>
              <li>• Active development and updates</li>
              <li>• Available plugins and extensions</li>
              <li>• Job market demand</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Start Small:</h4>
            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
              <li>• Build a simple prototype first</li>
              <li>• Test with your team's workflow</li>
              <li>• Evaluate development speed</li>
              <li>• Check integration capabilities</li>
              <li>• Consider migration complexity</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
          🚀 Getting Started with Frameworks
        </h3>
        <div className="space-y-3 text-green-800 dark:text-green-200">
          <p>
            <strong>1. Master the Fundamentals First:</strong> Before diving into frameworks, 
            ensure you have a solid understanding of the underlying language (JavaScript, Python, etc.).
          </p>
          <p>
            <strong>2. Start with Popular, Well-Documented Frameworks:</strong> Choose frameworks 
            with large communities, extensive documentation, and plenty of learning resources.
          </p>
          <p>
            <strong>3. Follow Official Tutorials:</strong> Most frameworks provide excellent 
            getting-started guides and tutorials. These are usually the best place to begin.
          </p>
          <p>
            <strong>4. Build Real Projects:</strong> Apply what you learn by building actual 
            applications. Start small and gradually increase complexity.
          </p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {frameworkCategories.map((category, index) => (
          <Link
            key={category.href}
            href={category.href}
            className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
          >
            <div className="text-gray-600 dark:text-gray-400 mb-2">{category.icon}</div>
            <span className="text-sm font-medium text-gray-900 dark:text-white text-center">
              {category.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
