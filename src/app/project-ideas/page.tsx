import Link from 'next/link';
import { Code, Lightbulb, ArrowRight, Users, Zap, Trophy, Smartphone, Apple } from 'lucide-react';

const languages = [
  {
    name: 'JavaScript',
    description: 'Build web applications, APIs, and mobile apps',
    icon: '🟨',
    href: '/project-ideas/javascript',
    color: 'yellow',
    popularity: 'Very High',
    difficulty: 'Beginner Friendly'
  },
  {
    name: 'Python',
    description: 'Data science, web development, and automation',
    icon: '🐍',
    href: '/project-ideas/python',
    color: 'blue',
    popularity: 'Very High',
    difficulty: 'Beginner Friendly'
  },
  {
    name: 'Java',
    description: 'Enterprise applications and Android development',
    icon: '☕',
    href: '/project-ideas/java',
    color: 'orange',
    popularity: 'High',
    difficulty: 'Intermediate'
  },
  {
    name: 'C++',
    description: 'System programming and high-performance applications',
    icon: '🔥',
    href: '/project-ideas/cpp',
    color: 'red',
    popularity: 'High',
    difficulty: 'Advanced'
  },
  {
    name: 'C#',
    description: 'Windows applications and game development',
    icon: '🔷',
    href: '/project-ideas/csharp',
    color: 'purple',
    popularity: 'High',
    difficulty: 'Intermediate'
  },
  {
    name: 'Go',
    description: 'Cloud services and microservices',
    icon: '🐹',
    href: '/project-ideas/go',
    color: 'cyan',
    popularity: 'Growing',
    difficulty: 'Intermediate'
  },
  {
    name: 'Rust',
    description: 'System programming with memory safety',
    icon: '🦀',
    href: '/project-ideas/rust',
    color: 'orange',
    popularity: 'Growing',
    difficulty: 'Advanced'
  },
  {
    name: 'Swift',
    description: 'iOS and macOS application development',
    icon: '🍎',
    href: '/project-ideas/swift',
    color: 'gray',
    popularity: 'High',
    difficulty: 'Intermediate'
  }
];

const projectCategories = [
  {
    level: 'Beginner',
    icon: <Users className="w-6 h-6" />,
    color: 'green',
    description: 'Perfect for learning fundamentals and building confidence',
    examples: ['To-Do Lists', 'Calculators', 'Simple Games', 'Basic CRUD Apps']
  },
  {
    level: 'Intermediate',
    icon: <Zap className="w-6 h-6" />,
    color: 'yellow',
    description: 'Challenging projects that expand your skills',
    examples: ['Web APIs', 'Database Integration', 'Real-time Apps', 'Mobile Apps']
  },
  {
    level: 'Advanced',
    icon: <Trophy className="w-6 h-6" />,
    color: 'red',
    description: 'Complex projects for experienced developers',
    examples: ['Distributed Systems', 'Machine Learning', 'Compilers', 'Game Engines']
  }
];

export default function ProjectIdeasPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="text-4xl">💡</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Project Ideas</h1>
            <p className="text-gray-600 dark:text-gray-300">Hands-on projects to build your programming skills</p>
          </div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Learning programming is best done through building real projects. Explore our curated collection 
          of project ideas organized by programming language and difficulty level. Each language page contains 
          30 carefully selected projects: 10 for beginners, 10 for intermediate developers, and 10 for advanced programmers.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">240+</div>
          <div className="text-sm text-blue-700 dark:text-blue-300">Total Projects</div>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">8</div>
          <div className="text-sm text-blue-700 dark:text-blue-300">Languages</div>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3</div>
          <div className="text-sm text-blue-700 dark:text-blue-300">Difficulty Levels</div>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">30</div>
          <div className="text-sm text-blue-700 dark:text-blue-300">Projects per Language</div>
        </div>
      </div>

      {/* Project Categories */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Project Difficulty Levels
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectCategories.map((category, index) => (
            <div key={index} className={`bg-${category.color}-50 dark:bg-${category.color}-900/20 p-6 rounded-lg border border-${category.color}-200 dark:border-${category.color}-800`}>
              <div className="flex items-center space-x-3 mb-4">
                <div className={`text-${category.color}-600`}>{category.icon}</div>
                <h3 className={`text-xl font-semibold text-${category.color}-900 dark:text-${category.color}-100`}>
                  {category.level}
                </h3>
              </div>
              <p className={`text-${category.color}-800 dark:text-${category.color}-200 text-sm mb-4`}>
                {category.description}
              </p>
              <div>
                <h4 className={`font-semibold text-${category.color}-900 dark:text-${category.color}-100 mb-2 text-sm`}>
                  Example Projects:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {category.examples.map((example, i) => (
                    <span key={i} className={`text-xs px-2 py-1 bg-${category.color}-100 dark:bg-${category.color}-900/30 text-${category.color}-700 dark:text-${category.color}-300 rounded-full`}>
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* iPhone App Development */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          iPhone App Development
        </h2>
        
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-start space-x-4">
            <div className="text-4xl">📱</div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Want to Create an iPhone App?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Building iPhone apps requires specific tools and knowledge. Here's what you need to get started:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">💰 Financial Requirements</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                    <li>• <strong>Apple Developer Program:</strong> $99/year (required for App Store)</li>
                    <li>• <strong>Mac Computer:</strong> $600+ (MacBook Air minimum)</li>
                    <li>• <strong>iPhone for Testing:</strong> $400+ (recommended)</li>
                    <li>• <strong>Total Initial Cost:</strong> ~$1,100+</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">🛠️ Technical Requirements</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                    <li>• <strong>macOS:</strong> Required for iOS development</li>
                    <li>• <strong>Xcode:</strong> Free IDE from Apple</li>
                    <li>• <strong>Swift:</strong> Apple's programming language</li>
                    <li>• <strong>iOS Simulator:</strong> Built into Xcode</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                  💡 Getting Started Steps:
                </h4>
                <ol className="text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
                  <li>1. Get a Mac computer (required for iOS development)</li>
                  <li>2. Download Xcode from the Mac App Store (free)</li>
                  <li>3. Learn Swift programming language basics</li>
                  <li>4. Build simple apps using iOS Simulator</li>
                  <li>5. Join Apple Developer Program when ready to publish</li>
                  <li>6. Test on real devices and submit to App Store</li>
                </ol>
              </div>
              
              <div className="mt-4 flex space-x-4">
                <Link
                  href="/project-ideas/swift"
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  <Apple className="w-4 h-4" />
                  <span>Swift Project Ideas</span>
                </Link>
                <Link
                  href="/mobile-development"
                  className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Mobile Development Guide</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Language Selection */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Choose Your Programming Language
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {languages.map((language, index) => (
            <Link key={index} href={language.href} className="block group">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 hover:shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{language.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {language.name}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          language.difficulty === 'Beginner Friendly' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                          language.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                          'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                        }`}>
                          {language.difficulty}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          language.popularity === 'Very High' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                          language.popularity === 'High' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' :
                          'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
                        }`}>
                          {language.popularity}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{language.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">30 Projects Available</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How to Use */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          How to Use These Project Ideas
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">✅ Best Practices</h3>
            <ul className="text-green-800 dark:text-green-200 text-sm space-y-2">
              <li>• Start with beginner projects to build confidence</li>
              <li>• Complete projects fully before moving to the next</li>
              <li>• Add your own features and improvements</li>
              <li>• Share your projects on GitHub</li>
              <li>• Document your learning process</li>
              <li>• Seek feedback from other developers</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">💡 Learning Tips</h3>
            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-2">
              <li>• Break large projects into smaller tasks</li>
              <li>• Research and plan before coding</li>
              <li>• Use version control (Git) for all projects</li>
              <li>• Test your code thoroughly</li>
              <li>• Refactor and improve existing code</li>
              <li>• Build a portfolio of completed projects</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Ready to Start Building?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Choose a programming language and start with your first project today!
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/project-ideas/javascript"
              className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors"
            >
              JavaScript Projects
            </Link>
            <Link
              href="/project-ideas/python"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              Python Projects
            </Link>
            <Link
              href="/project-ideas/java"
              className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors"
            >
              Java Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
