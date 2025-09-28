import Link from 'next/link';
import { Code, Database, Brain, Zap, Star, ExternalLink, BookOpen, Users, Globe } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';
import { InfoCard } from '@/components/InfoCard';
import { FeatureList } from '@/components/FeatureList';
import { ContentList } from '@/components/ContentList';

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
    <PageLayout
      title="Python"
      description="Python is a high-level, interpreted programming language known for its simplicity and readability. It's perfect for beginners and powerful enough for complex applications in web development, data science, artificial intelligence, and more."
      previousLink={{
        href: "/languages",
        label: "Back to Languages"
      }}
      nextLink={{
        href: "/languages/javascript",
        label: "Next: JavaScript"
      }}
    >

      <QuickStats stats={[
        { value: "1991", label: "First Released" },
        { value: "Beginner", label: "Difficulty Level" },
        { value: "Very High", label: "Popularity" },
        { value: "Multi-Purpose", label: "Use Cases" }
      ]} />

      <InfoCard title="🐍 Why Choose Python?" variant="blue" icon={<Code className="w-5 h-5" />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Perfect for Beginners:</h4>
            <ContentList items={[
              "Simple, readable syntax",
              "No complex setup required", 
              "Extensive documentation",
              "Large, helpful community"
            ]} className="text-blue-800 dark:text-blue-200" />
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Versatile Applications:</h4>
            <ContentList items={[
              "Web development (Django, Flask)",
              "Data science and AI/ML",
              "Automation and scripting",
              "Desktop applications"
            ]} className="text-blue-800 dark:text-blue-200" />
          </div>
        </div>
      </InfoCard>

      <FeatureList 
        features={pythonFeatures} 
        title="Key Python Features" 
        columns={2} 
      />

      {/* Use Cases */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          What Can You Build with Python?
        </h2>
        <div className="flex flex-col gap-6 md:gap-8">
          {pythonUseCases.map((useCase, index) => (
            <div key={index} className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100">{useCase.category}</h3>
                <div className="flex items-center gap-2">
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
      <section className="flex flex-col gap-6 md:gap-8">
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

      {/* Project Ideas */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Python Project Ideas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Beginner Projects */}
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">🟢 Beginner Projects</h3>
            <ul className="list-disc list-inside text-green-800 dark:text-green-200 text-sm [&>li]:mb-2">
              <li><strong>Password Generator:</strong> Create secure passwords with custom rules</li>
              <li><strong>Number Guessing Game:</strong> Interactive guessing game with hints</li>
              <li><strong>Unit Converter:</strong> Convert between different units (temperature, length, etc.)</li>
              <li><strong>Simple Calculator:</strong> Basic arithmetic with a GUI using tkinter</li>
              <li><strong>File Organizer:</strong> Sort files into folders by extension</li>
              <li><strong>Word Counter:</strong> Analyze text files for word frequency</li>
            </ul>
          </div>

          {/* Intermediate Projects */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-3">🟡 Intermediate Projects</h3>
            <ul className="list-disc list-inside text-yellow-800 dark:text-yellow-200 text-sm [&>li]:mb-2">
              <li><strong>Web Scraper:</strong> Extract data from websites using BeautifulSoup</li>
              <li><strong>Personal Budget Tracker:</strong> Track expenses with data visualization</li>
              <li><strong>Weather Dashboard:</strong> Display weather data with charts</li>
              <li><strong>Task Automation:</strong> Automate repetitive tasks with scripts</li>
              <li><strong>API Client:</strong> Build a client for REST APIs with requests</li>
              <li><strong>Data Analysis Tool:</strong> Analyze CSV data with pandas</li>
            </ul>
          </div>

          {/* Advanced Projects */}
          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
            <h3 className="font-semibold text-red-900 dark:text-red-100 mb-3">🔴 Advanced Projects</h3>
            <ul className="list-disc list-inside text-red-800 dark:text-red-200 text-sm [&>li]:mb-2">
              <li><strong>Machine Learning Model:</strong> Build predictive models with scikit-learn</li>
              <li><strong>Web Application:</strong> Full-stack app with Django or Flask</li>
              <li><strong>Stock Price Predictor:</strong> Use ML to predict stock movements</li>
              <li><strong>Chatbot:</strong> AI-powered chatbot with natural language processing</li>
              <li><strong>Image Recognition:</strong> Classify images using deep learning</li>
              <li><strong>Cryptocurrency Tracker:</strong> Real-time crypto data with alerts</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
          🚀 Getting Started with Python
        </h3>
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Install Python</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Download from python.org or use package managers like Homebrew (Mac) or apt (Linux)</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Choose an Editor</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">VS Code with Python extension, PyCharm, or even IDLE for beginners</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Write Your First Program</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Start with print("Hello, World!") and build from there</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Learn the Fundamentals</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Master variables, data types, control structures, functions, and basic data structures</p>
            </div>
          </div>
        </div>
      </div>

    </PageLayout>
  );
}
