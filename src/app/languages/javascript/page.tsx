import Link from 'next/link';
import { ArrowLeft, ArrowRight, Globe, Smartphone, Server, Zap, Code, Users, Layers, BookOpen, Clock } from 'lucide-react';

const jsFeatures = [
  {
    title: 'Versatile & Ubiquitous',
    description: 'The only language that runs natively in web browsers, with expanding reach everywhere',
    icon: <Globe className="w-5 h-5" />,
    details: 'From frontend to backend, mobile apps to desktop applications, JavaScript is everywhere'
  },
  {
    title: 'Dynamic & Flexible',
    description: 'Dynamically typed with first-class functions and multiple programming paradigms',
    icon: <Zap className="w-5 h-5" />,
    details: 'Supports procedural, object-oriented, and functional programming styles'
  },
  {
    title: 'Event-Driven',
    description: 'Built for handling user interactions and asynchronous operations',
    icon: <Code className="w-5 h-5" />,
    details: 'Perfect for creating interactive user interfaces and real-time applications'
  },
  {
    title: 'Massive Ecosystem',
    description: 'Largest package ecosystem in the world with npm containing over 2 million packages',
    icon: <Layers className="w-5 h-5" />,
    details: 'Find libraries and frameworks for virtually any functionality you need'
  },
  {
    title: 'Rapid Development',
    description: 'No compilation step needed - write code and see results immediately',
    icon: <BookOpen className="w-5 h-5" />,
    details: 'Hot reloading and live editing capabilities speed up development cycles'
  },
  {
    title: 'Active Community',
    description: 'Largest programming community with extensive resources and support',
    icon: <Users className="w-5 h-5" />,
    details: 'Over 17 million developers worldwide, extensive documentation, and helpful forums'
  }
];

const jsUseCases = [
  {
    category: 'Frontend Web Development',
    description: 'Create interactive, dynamic user interfaces for websites and web applications',
    examples: ['Facebook', 'Netflix', 'Airbnb', 'Google Maps'],
    frameworks: ['React', 'Vue.js', 'Angular', 'Svelte', 'Next.js'],
    popularity: 'Very High',
    difficulty: 'Beginner to Advanced'
  },
  {
    category: 'Backend Development',
    description: 'Build scalable server-side applications and APIs with Node.js',
    examples: ['Netflix API', 'Uber backend', 'WhatsApp', 'LinkedIn'],
    frameworks: ['Node.js', 'Express.js', 'Koa.js', 'Fastify', 'NestJS'],
    popularity: 'Very High',
    difficulty: 'Intermediate to Advanced'
  },
  {
    category: 'Mobile App Development',
    description: 'Cross-platform mobile applications using JavaScript frameworks',
    examples: ['Instagram', 'Discord', 'Skype', 'Tesla app'],
    frameworks: ['React Native', 'Ionic', 'Cordova', 'NativeScript'],
    popularity: 'High',
    difficulty: 'Intermediate to Advanced'
  },
  {
    category: 'Desktop Applications',
    description: 'Cross-platform desktop applications using web technologies',
    examples: ['VS Code', 'Discord', 'Slack', 'WhatsApp Desktop'],
    frameworks: ['Electron', 'Tauri', 'NW.js'],
    popularity: 'Medium to High',
    difficulty: 'Intermediate'
  }
];

const jsSections = [
  {
    title: 'JavaScript Fundamentals',
    description: 'Master variables, functions, objects, arrays, and control flow',
    href: '/languages/javascript/fundamentals',
    icon: <BookOpen className="w-6 h-6" />,
    topics: ['Variables & Data Types', 'Functions & Scope', 'Objects & Arrays', 'Control Flow', 'Error Handling'],
    difficulty: 'Beginner',
    estimatedTime: '2-3 hours'
  },
  {
    title: 'Frameworks & Libraries',
    description: 'Explore React, Vue, Angular, Node.js and popular JavaScript tools',
    href: '/languages/javascript/frameworks',
    icon: <Layers className="w-6 h-6" />,
    topics: ['React Deep Dive', 'Vue.js Basics', 'Angular Overview', 'Node.js & Express', 'Framework Comparison'],
    difficulty: 'Intermediate',
    estimatedTime: '3-4 hours'
  },
  {
    title: 'Asynchronous Programming',
    description: 'Learn callbacks, promises, async/await, and the event loop',
    href: '/languages/javascript/async',
    icon: <Clock className="w-6 h-6" />,
    topics: ['Callbacks & Callback Hell', 'Promises & Promise Chaining', 'Async/Await', 'Fetch API', 'Event Loop'],
    difficulty: 'Intermediate to Advanced',
    estimatedTime: '2-3 hours'
  }
];

export default function JavaScriptPage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/languages/python"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Python</span>
        </Link>
        <Link
          href="/languages/java"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>Next: Java</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="text-4xl">🟨</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">JavaScript</h1>
            <p className="text-gray-600 dark:text-gray-300">The language of the web - and much more</p>
          </div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          JavaScript is a high-level, dynamic programming language that's essential for web development. 
          Originally created for browsers in 1995, it has evolved into a versatile language used for 
          frontend, backend, mobile, and desktop development.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">1995</div>
          <div className="text-sm text-yellow-700 dark:text-yellow-300">First Released</div>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">Beginner</div>
          <div className="text-sm text-yellow-700 dark:text-yellow-300">Difficulty Level</div>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">#1</div>
          <div className="text-sm text-yellow-700 dark:text-yellow-300">Most Used Language</div>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">17M+</div>
          <div className="text-sm text-yellow-700 dark:text-yellow-300">Developers</div>
        </div>
      </div>

      {/* Learning Sections */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          JavaScript Learning Path
        </h2>
        <div className="space-y-6">
          {jsSections.map((section, index) => (
            <Link key={index} href={section.href} className="block group">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-yellow-300 dark:hover:border-yellow-600 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="text-yellow-600 group-hover:text-yellow-700 transition-colors">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                        {section.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          section.difficulty === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                          section.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                          'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                        }`}>
                          {section.difficulty}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{section.estimatedTime}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{section.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {section.topics.map((topic, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-yellow-600 transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Why Choose JavaScript?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jsFeatures.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-3">
                <div className="text-yellow-600">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{feature.description}</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">{feature.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          What Can You Build with JavaScript?
        </h2>
        <div className="space-y-6">
          {jsUseCases.map((useCase, index) => (
            <div key={index} className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-yellow-900 dark:text-yellow-100">{useCase.category}</h3>
                <div className="flex items-center space-x-2">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    useCase.difficulty.includes('Beginner') ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                    useCase.difficulty.includes('Intermediate') && useCase.difficulty.includes('Advanced') ? 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300' :
                    useCase.difficulty.includes('Intermediate') ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                    'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                  }`}>
                    {useCase.difficulty}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    useCase.popularity === 'Very High' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                    useCase.popularity === 'High' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                    'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300'
                  }`}>
                    {useCase.popularity}
                  </span>
                </div>
              </div>
              <p className="text-yellow-800 dark:text-yellow-200 text-sm mb-4">{useCase.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 text-sm">Real-World Examples:</h4>
                  <div className="flex flex-wrap gap-1">
                    {useCase.examples.map((example, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 text-sm">Popular Frameworks:</h4>
                  <div className="flex flex-wrap gap-1">
                    {useCase.frameworks.map((framework, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-yellow-200 dark:bg-yellow-800/30 text-yellow-800 dark:text-yellow-200 rounded-full">
                        {framework}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Start */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
          🚀 Getting Started with JavaScript
        </h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">No Installation Needed</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">JavaScript runs in any web browser - just open the developer console</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Choose Your Environment</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Browser console, CodePen, VS Code, or Node.js for server-side</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Start with HTML</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Create an HTML file and add &lt;script&gt; tags to begin coding</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Learn the Fundamentals</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Master variables, functions, DOM manipulation, and asynchronous programming</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/languages/python"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Python</span>
        </Link>
        <Link
          href="/languages/java"
          className="flex items-center space-x-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Next: Java</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
