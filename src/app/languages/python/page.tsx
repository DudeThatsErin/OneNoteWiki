import Link from 'next/link';
import { ArrowLeft, ArrowRight, Code, Database, Brain, Zap } from 'lucide-react';

const pythonFeatures = [
  { title: 'Simple Syntax', description: 'Clean, readable code that\'s easy to learn and understand' },
  { title: 'Versatile', description: 'Used for web development, data science, AI, automation, and more' },
  { title: 'Large Community', description: 'Extensive libraries, frameworks, and community support' },
  { title: 'Cross-Platform', description: 'Runs on Windows, macOS, Linux, and many other platforms' }
];

const pythonLibraries = [
  { category: 'Web Development', libraries: ['Django', 'Flask', 'FastAPI', 'Pyramid'] },
  { category: 'Data Science', libraries: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'] },
  { category: 'Machine Learning', libraries: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Keras'] },
  { category: 'Automation', libraries: ['Selenium', 'BeautifulSoup', 'Requests', 'Scrapy'] }
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
          <span className="text-4xl">🐍</span>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Python</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The versatile, beginner-friendly programming language
            </p>
          </div>
        </div>
      </div>

      {/* Why Python */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
          🌟 Why Choose Python?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pythonFeatures.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">{feature.title}</h4>
                <p className="text-blue-800 dark:text-blue-200 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Getting Started */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Getting Started</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
            💻 Your First Python Program
          </h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`# Hello World in Python
print("Hello, World!")

# Variables and data types
name = "Alice"
age = 25
height = 5.6
is_student = True

print(f"My name is {name}, I'm {age} years old")

# Lists and loops
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(f"I like {fruit}")

# Functions
def greet(name):
    return f"Hello, {name}!"

message = greet("Python")
print(message)`}
          </pre>
        </div>
      </section>

      {/* Core Concepts */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Core Python Concepts</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2 mb-3">
              <Code className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Basic Syntax</h3>
            </div>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Variables and data types</li>
              <li>• Control structures (if/else, loops)</li>
              <li>• Functions and modules</li>
              <li>• Lists, dictionaries, tuples</li>
              <li>• String manipulation</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2 mb-3">
              <Zap className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Object-Oriented Programming</h3>
            </div>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Classes and objects</li>
              <li>• Inheritance and polymorphism</li>
              <li>• Encapsulation</li>
              <li>• Magic methods</li>
              <li>• Decorators</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2 mb-3">
              <Database className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-gray-900 dark:text-white">File & Data Handling</h3>
            </div>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• File I/O operations</li>
              <li>• JSON and CSV handling</li>
              <li>• Database connections</li>
              <li>• API requests</li>
              <li>• Error handling</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2 mb-3">
              <Brain className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Advanced Topics</h3>
            </div>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• List comprehensions</li>
              <li>• Generators and iterators</li>
              <li>• Context managers</li>
              <li>• Async/await</li>
              <li>• Testing with pytest</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Popular Libraries */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Popular Python Libraries</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pythonLibraries.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.libraries.map((library, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">
                    {library}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Code Example */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Practical Example</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
            📊 Data Analysis with Pandas
          </h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`import pandas as pd
import matplotlib.pyplot as plt

# Read data from CSV
df = pd.read_csv('sales_data.csv')

# Basic data exploration
print(df.head())
print(df.info())
print(df.describe())

# Data manipulation
df['total_sales'] = df['quantity'] * df['price']
monthly_sales = df.groupby('month')['total_sales'].sum()

# Data visualization
plt.figure(figsize=(10, 6))
monthly_sales.plot(kind='bar')
plt.title('Monthly Sales')
plt.xlabel('Month')
plt.ylabel('Total Sales ($)')
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()

# Filter and analyze
high_value_sales = df[df['total_sales'] > 1000]
print(f"High value sales: {len(high_value_sales)} transactions")`}
          </pre>
        </div>
      </section>

      {/* Learning Path */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
          🎯 Python Learning Path
        </h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Python Basics (2-4 weeks)</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Variables, data types, control structures, functions</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Object-Oriented Programming (2-3 weeks)</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Classes, objects, inheritance, encapsulation</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Libraries & Frameworks (4-6 weeks)</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Choose your path: web development, data science, or automation</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Build Projects (Ongoing)</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Apply your skills with real-world projects</p>
            </div>
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
          📚 Python Learning Resources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Free Resources:</h4>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
              <li>• Python.org Official Tutorial</li>
              <li>• Automate the Boring Stuff with Python</li>
              <li>• Python for Everybody (Coursera)</li>
              <li>• Real Python (articles and tutorials)</li>
              <li>• Python Crash Course (book)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Practice Projects:</h4>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
              <li>• Calculator and simple games</li>
              <li>• Web scraper for data collection</li>
              <li>• Personal expense tracker</li>
              <li>• Weather app with API integration</li>
              <li>• Data analysis of CSV files</li>
            </ul>
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
