import Link from 'next/link';
import { Code, ArrowRight, Star, TrendingUp, Users, Zap } from 'lucide-react';

const languages = [
  {
    name: 'Python',
    description: 'Versatile, beginner-friendly language perfect for web development, data science, and AI',
    difficulty: 'Beginner',
    popularity: 'Very High',
    useCases: ['Web Development', 'Data Science', 'AI/ML', 'Automation'],
    href: '/languages/python',
    color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
    icon: '🐍'
  },
  {
    name: 'JavaScript',
    description: 'The language of the web - essential for frontend and increasingly popular for backend',
    difficulty: 'Beginner',
    popularity: 'Very High',
    useCases: ['Web Development', 'Mobile Apps', 'Desktop Apps', 'Server-side'],
    href: '/languages/javascript',
    color: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
    icon: '🟨'
  },
  {
    name: 'Java',
    description: 'Enterprise-grade language known for its stability, security, and cross-platform compatibility',
    difficulty: 'Intermediate',
    popularity: 'Very High',
    useCases: ['Enterprise Apps', 'Android Development', 'Web Backend', 'Desktop Apps'],
    href: '/languages/java',
    color: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
    icon: '☕'
  },
  {
    name: 'C++',
    description: 'Powerful, high-performance language for system programming and game development',
    difficulty: 'Advanced',
    popularity: 'High',
    useCases: ['Game Development', 'System Programming', 'Embedded Systems', 'High-Performance Apps'],
    href: '/languages/cpp',
    color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
    icon: '⚡'
  },
  {
    name: 'C#',
    description: 'Microsoft\'s modern, object-oriented language for .NET development',
    difficulty: 'Intermediate',
    popularity: 'High',
    useCases: ['Windows Apps', 'Web Development', 'Game Development', 'Enterprise Software'],
    href: '/languages/csharp',
    color: 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800',
    icon: '#️⃣'
  },
  {
    name: 'Go',
    description: 'Google\'s fast, simple language designed for modern cloud and network programming',
    difficulty: 'Intermediate',
    popularity: 'Growing',
    useCases: ['Cloud Services', 'Microservices', 'Network Programming', 'DevOps Tools'],
    href: '/languages/go',
    color: 'bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-800',
    icon: '🐹'
  },
  {
    name: 'Rust',
    description: 'Systems programming language focused on safety, speed, and concurrency',
    difficulty: 'Advanced',
    popularity: 'Growing',
    useCases: ['System Programming', 'Web Assembly', 'Blockchain', 'Performance-Critical Apps'],
    href: '/languages/rust',
    color: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800',
    icon: '🦀'
  }
];

const languageStats = [
  { label: 'Most Popular', value: 'JavaScript', icon: <Star className="w-4 h-4" /> },
  { label: 'Best for Beginners', value: 'Python', icon: <Users className="w-4 h-4" /> },
  { label: 'Fastest Growing', value: 'Rust', icon: <TrendingUp className="w-4 h-4" /> },
  { label: 'Highest Performance', value: 'C++', icon: <Zap className="w-4 h-4" /> }
];

export default function LanguagesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Code className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Programming Languages
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Explore popular programming languages and find the right one for your goals. 
          Each language has its strengths and is suited for different types of projects.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {languageStats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2 mb-2">
              <div className="text-blue-600">{stat.icon}</div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{stat.label}</span>
            </div>
            <p className="font-semibold text-gray-900 dark:text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* How to Choose */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
          🤔 How to Choose Your First Programming Language
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🎯 Consider Your Goals:</h4>
            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
              <li>• Web development → JavaScript</li>
              <li>• Data science → Python</li>
              <li>• Mobile apps → Java/Kotlin or Swift</li>
              <li>• Game development → C# or C++</li>
              <li>• System programming → Rust or C++</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">📈 Market Demand:</h4>
            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
              <li>• JavaScript - Highest demand</li>
              <li>• Python - Growing rapidly</li>
              <li>• Java - Enterprise standard</li>
              <li>• C# - Microsoft ecosystem</li>
              <li>• Go - Cloud/DevOps focus</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🎓 Learning Curve:</h4>
            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
              <li>• Python - Very beginner-friendly</li>
              <li>• JavaScript - Good for beginners</li>
              <li>• Java - Moderate complexity</li>
              <li>• C# - Moderate complexity</li>
              <li>• C++/Rust - More challenging</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Languages Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Popular Programming Languages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {languages.map((language, index) => (
            <Link
              key={language.href}
              href={language.href}
              className={`block p-6 rounded-lg border-2 transition-all hover:shadow-lg hover:scale-105 ${language.color}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{language.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {language.name}
                    </h3>
                    <div className="flex items-center space-x-3 mt-1">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        language.difficulty === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                        language.difficulty === 'Intermediate' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' :
                        'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                      }`}>
                        {language.difficulty}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        language.popularity === 'Very High' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300' :
                        language.popularity === 'High' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' :
                        'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300'
                      }`}>
                        {language.popularity}
                      </span>
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {language.description}
              </p>
              
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Common Use Cases:</h4>
                <div className="flex flex-wrap gap-1">
                  {language.useCases.map((useCase, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-white dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300">
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Learning Resources */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
          📚 General Learning Resources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Free Resources:</h4>
            <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
              <li>• freeCodeCamp - Interactive coding lessons</li>
              <li>• Codecademy - Hands-on programming courses</li>
              <li>• MDN Web Docs - Comprehensive web development</li>
              <li>• W3Schools - Quick reference and tutorials</li>
              <li>• YouTube channels and coding tutorials</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Practice Platforms:</h4>
            <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
              <li>• LeetCode - Algorithm and data structure problems</li>
              <li>• HackerRank - Programming challenges</li>
              <li>• Codewars - Coding kata and challenges</li>
              <li>• Project Euler - Mathematical programming problems</li>
              <li>• GitHub - Build and share real projects</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
          🚀 Getting Started Tips
        </h3>
        <div className="space-y-3 text-purple-800 dark:text-purple-200">
          <p>
            <strong>1. Start with one language:</strong> Focus on mastering one language before moving to others. 
            Python or JavaScript are excellent first choices.
          </p>
          <p>
            <strong>2. Practice regularly:</strong> Consistency is key. Even 30 minutes of daily practice 
            is better than long, infrequent sessions.
          </p>
          <p>
            <strong>3. Build projects:</strong> Apply what you learn by building real projects. 
            Start small and gradually increase complexity.
          </p>
          <p>
            <strong>4. Join communities:</strong> Connect with other learners and experienced developers 
            through forums, Discord servers, and local meetups.
          </p>
        </div>
      </div>
    </div>
  );
}
