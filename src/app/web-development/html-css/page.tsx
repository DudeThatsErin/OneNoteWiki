import Link from 'next/link';
import { ArrowLeft, ArrowRight, Code, Palette, Layout, Smartphone } from 'lucide-react';

const htmlBasics = [
  { title: 'HTML Structure', description: 'DOCTYPE, html, head, body elements' },
  { title: 'Text Elements', description: 'Headings, paragraphs, lists, links' },
  { title: 'Media Elements', description: 'Images, videos, audio' },
  { title: 'Forms', description: 'Input fields, buttons, validation' },
  { title: 'Semantic HTML', description: 'header, nav, main, article, section, footer' }
];

const cssBasics = [
  { title: 'Selectors', description: 'Element, class, ID, attribute selectors' },
  { title: 'Box Model', description: 'Margin, border, padding, content' },
  { title: 'Layout', description: 'Flexbox, Grid, positioning' },
  { title: 'Responsive Design', description: 'Media queries, mobile-first approach' },
  { title: 'Animations', description: 'Transitions, keyframes, transforms' }
];

export default function HtmlCssPage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/web-development"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Web Development</span>
        </Link>
        <Link
          href="/web-development/frontend"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>Next: Frontend Frameworks</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Code className="w-8 h-8 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            HTML & CSS
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Learn the fundamental building blocks of web development. HTML provides structure 
          and content, while CSS handles styling and layout.
        </p>
      </div>

      {/* What You'll Learn */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
          📚 What You'll Learn
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Layout className="w-5 h-5 text-green-600" />
              <h4 className="font-semibold text-green-900 dark:text-green-100">HTML Fundamentals</h4>
            </div>
            <ul className="space-y-2">
              {htmlBasics.map((item, index) => (
                <li key={index} className="text-green-800 dark:text-green-200 text-sm">
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Palette className="w-5 h-5 text-green-600" />
              <h4 className="font-semibold text-green-900 dark:text-green-100">CSS Fundamentals</h4>
            </div>
            <ul className="space-y-2">
              {cssBasics.map((item, index) => (
                <li key={index} className="text-green-800 dark:text-green-200 text-sm">
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* HTML Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
          <Layout className="w-6 h-6 text-gray-600" />
          <span>HTML - HyperText Markup Language</span>
        </h2>
        
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300">
            HTML is the standard markup language for creating web pages. It describes the structure 
            and content of a webpage using elements and tags.
          </p>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Basic HTML Structure:</h4>
            <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="home">
            <h2>Home Section</h2>
            <p>This is the main content of the page.</p>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
    </footer>
</body>
</html>`}
            </pre>
          </div>
        </div>
      </section>

      {/* CSS Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
          <Palette className="w-6 h-6 text-gray-600" />
          <span>CSS - Cascading Style Sheets</span>
        </h2>
        
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300">
            CSS is used to style and layout web pages. It controls colors, fonts, spacing, 
            positioning, and responsive behavior.
          </p>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Basic CSS Example:</h4>
            <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
{`/* Reset and base styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
}

/* Header styles */
header {
    background-color: #2c3e50;
    color: white;
    padding: 1rem 0;
}

header h1 {
    text-align: center;
    margin-bottom: 1rem;
}

/* Navigation */
nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 2rem;
}

nav a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s;
}

nav a:hover {
    background-color: #34495e;
}

/* Responsive design */
@media (max-width: 768px) {
    nav ul {
        flex-direction: column;
        gap: 0.5rem;
    }
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Modern CSS Features */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Modern CSS Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">🔧 Flexbox Layout</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              Perfect for one-dimensional layouts and component alignment.
            </p>
            <pre className="text-xs text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-2 rounded">
{`.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}`}
            </pre>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">📱 CSS Grid</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              Powerful two-dimensional layout system for complex designs.
            </p>
            <pre className="text-xs text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-2 rounded">
{`.grid {
  display: grid;
  grid-template-columns: 
    repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
          📖 Recommended Learning Resources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Free Resources:</h4>
            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
              <li>• MDN Web Docs (HTML & CSS Reference)</li>
              <li>• freeCodeCamp (Interactive Lessons)</li>
              <li>• CSS-Tricks (Tips and Tutorials)</li>
              <li>• Flexbox Froggy (Flexbox Game)</li>
              <li>• Grid Garden (CSS Grid Game)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Practice Projects:</h4>
            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
              <li>• Personal Portfolio Website</li>
              <li>• Restaurant Landing Page</li>
              <li>• Photo Gallery with Grid</li>
              <li>• Responsive Navigation Menu</li>
              <li>• CSS Animation Showcase</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🚀 Next Steps
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Once you're comfortable with HTML and CSS fundamentals, you're ready to explore 
          modern frontend frameworks and JavaScript libraries.
        </p>
        <Link
          href="/web-development/frontend"
          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          Learn Frontend Frameworks →
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/web-development"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Web Development</span>
        </Link>
        <Link
          href="/web-development/frontend"
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Next: Frontend Frameworks</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
