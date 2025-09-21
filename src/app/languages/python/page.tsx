import Link from 'next/link';
import { ArrowLeft, ArrowRight, Code, Database, Brain, Zap, Star, ExternalLink, BookOpen, Users, Globe } from 'lucide-react';

const pythonFeatures = [
  {
    title: 'Readable Syntax',
    description: 'Python\'s syntax closely resembles English, making it intuitive to read and write',
    icon: <BookOpen className="w-5 h-5" />,
    details: 'Uses indentation for code blocks instead of braces, enforcing clean code structure'
  },
  {
    title: 'Interpreted Language',
    description: 'No compilation step needed - write code and run it immediately',
    icon: <Zap className="w-5 h-5" />,
    details: 'Interactive REPL allows for rapid prototyping and testing of code snippets'
  },
  {
    title: 'Dynamically Typed',
    description: 'Variables don\'t need explicit type declarations, increasing development speed',
    icon: <Code className="w-5 h-5" />,
    details: 'Type hints available for better code documentation and IDE support'
  },
  {
    title: 'Extensive Standard Library',
    description: 'Batteries included - vast standard library covers most common programming tasks',
    icon: <Database className="w-5 h-5" />,
    details: 'From file I/O to networking, web servers to data structures - it\'s all built-in'
  },
  {
    title: 'Cross-Platform',
    description: 'Write once, run anywhere - Python works on all major operating systems',
    icon: <Globe className="w-5 h-5" />,
    details: 'Same code runs on Windows, macOS, Linux, and many embedded systems'
  },
  {
    title: 'Large Community',
    description: 'Massive, active community providing libraries, frameworks, and support',
    icon: <Users className="w-5 h-5" />,
    details: 'Over 400,000 packages on PyPI, extensive documentation, and helpful forums'
  }
];

const pythonUseCases = [
  {
    category: 'Web Development',
    description: 'Build scalable web applications and APIs',
    examples: ['Instagram backend', 'Pinterest', 'Spotify backend', 'YouTube'],
    frameworks: ['Django', 'Flask', 'FastAPI', 'Pyramid', 'Tornado'],
    popularity: 'Very High',
    difficulty: 'Beginner to Intermediate',
    details: 'Python excels in rapid web development with frameworks like Django providing everything needed for complex web applications out of the box.'
  },
  {
    category: 'Data Science & Analytics',
    description: 'Analyze data, create visualizations, and extract insights',
    examples: ['Netflix recommendations', 'Uber surge pricing', 'Financial analysis', 'Scientific research'],
    frameworks: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Jupyter'],
    popularity: 'Very High',
    difficulty: 'Beginner to Advanced',
    details: 'Python is the de facto standard for data science with powerful libraries for data manipulation, analysis, and visualization.'
  },
  {
    category: 'Machine Learning & AI',
    description: 'Build intelligent systems and predictive models',
    examples: ['Tesla Autopilot', 'Google Search', 'Amazon recommendations', 'Medical diagnosis'],
    frameworks: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'OpenCV', 'NLTK'],
    popularity: 'Very High',
    difficulty: 'Intermediate to Advanced',
    details: 'Leading language for ML/AI with comprehensive libraries for deep learning, computer vision, and natural language processing.'
  },
  {
    category: 'Automation & Scripting',
    description: 'Automate repetitive tasks and system administration',
    examples: ['System backups', 'File organization', 'Web scraping', 'DevOps automation'],
    frameworks: ['Selenium', 'BeautifulSoup', 'Requests', 'Scrapy', 'Ansible', 'Fabric'],
    popularity: 'Very High',
    difficulty: 'Beginner',
    details: 'Python\'s simplicity makes it perfect for automation scripts, from simple file operations to complex system administration tasks.'
  }
];

export default function PythonPage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/languages"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Languages</span>
        </Link>
        <Link
          href="/languages/javascript"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>Next: JavaScript</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="text-4xl">🐍</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Python</h1>
            <p className="text-gray-600 dark:text-gray-300">The versatile, beginner-friendly programming language</p>
          </div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Python is a high-level, interpreted programming language known for its simplicity and readability. 
          Created by Guido van Rossum in 1991, Python emphasizes code readability and allows developers to 
          express concepts in fewer lines of code than many other languages.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1991</div>
          <div className="text-sm text-blue-700 dark:text-blue-300">First Released</div>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Beginner</div>
          <div className="text-sm text-blue-700 dark:text-blue-300">Difficulty Level</div>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">#1</div>
          <div className="text-sm text-blue-700 dark:text-blue-300">TIOBE Index</div>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">15.7M+</div>
          <div className="text-sm text-blue-700 dark:text-blue-300">Developers</div>
        </div>
      </div>

      {/* Key Features */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Why Choose Python?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pythonFeatures.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-3">
                <div className="text-blue-600">{feature.icon}</div>
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
          What Can You Build with Python?
        </h2>
        <div className="space-y-6">
          {pythonUseCases.map((useCase, index) => (
            <div key={index} className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100">{useCase.category}</h3>
                <div className="flex items-center space-x-2">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    useCase.difficulty === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                    useCase.difficulty === 'Beginner to Intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                    useCase.difficulty === 'Beginner to Advanced' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300' :
                    useCase.difficulty === 'Intermediate to Advanced' ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300' :
                    'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
                  }`}>
                    {useCase.difficulty}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    useCase.popularity === 'Very High' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                    useCase.popularity === 'High' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                    useCase.popularity === 'Medium' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300' :
                    'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300'
                  }`}>
                    {useCase.popularity}
                  </span>
                </div>
              </div>
              <p className="text-blue-800 dark:text-blue-200 text-sm mb-3">{useCase.description}</p>
              <p className="text-blue-700 dark:text-blue-300 text-sm mb-4">{useCase.details}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Real-World Examples:</h4>
                  <div className="flex flex-wrap gap-1">
                    {useCase.examples.map((example, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Popular Frameworks:</h4>
                  <div className="flex flex-wrap gap-1">
                    {useCase.frameworks.map((framework, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-blue-200 dark:bg-blue-800/30 text-blue-800 dark:text-blue-200 rounded-full">
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

      {/* Code Example */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Python Code Examples
        </h2>
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
            🚀 Getting Started - Basic Syntax
          </h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`# Hello World and Basic Concepts
print("Hello, World!")

# Variables and Data Types
name = "Alice"           # String
age = 25                 # Integer
height = 5.6             # Float
is_student = True        # Boolean
hobbies = ["reading", "coding", "gaming"]  # List

# String formatting (f-strings)
print(f"My name is {name}, I'm {age} years old")

# Control Structures
if age >= 18:
    print("You're an adult!")
else:
    print("You're a minor")

# Loops
for hobby in hobbies:
    print(f"I enjoy {hobby}")

# Functions
def greet(name, age):
    return f"Hello {name}, you are {age} years old!"

message = greet("Python", 32)
print(message)`}
          </pre>
        </div>
      </section>

      {/* Getting Started */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
          🚀 Getting Started with Python
        </h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Install Python</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Download from python.org or use package managers like Homebrew (Mac) or apt (Linux)</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Choose an Editor</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">VS Code with Python extension, PyCharm, or even IDLE for beginners</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Write Your First Program</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Start with print("Hello, World!") and build from there</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Learn the Fundamentals</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Master variables, data types, control structures, functions, and basic data structures</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/languages"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Languages</span>
        </Link>
        <Link
          href="/languages/javascript"
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Next: JavaScript</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
