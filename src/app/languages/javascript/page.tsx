import Link from 'next/link';
import { ArrowLeft, ArrowRight, Globe, Smartphone, Server, Zap } from 'lucide-react';

const jsFeatures = [
  { title: 'Versatile', description: 'Frontend, backend, mobile, and desktop development' },
  { title: 'Dynamic', description: 'Flexible typing and runtime code modification' },
  { title: 'Event-Driven', description: 'Perfect for interactive user interfaces' },
  { title: 'Huge Ecosystem', description: 'Massive npm package repository' }
];

const jsEnvironments = [
  { name: 'Browser', description: 'Client-side web development', icon: <Globe className="w-5 h-5" /> },
  { name: 'Node.js', description: 'Server-side JavaScript runtime', icon: <Server className="w-5 h-5" /> },
  { name: 'Mobile', description: 'React Native, Ionic, Cordova', icon: <Smartphone className="w-5 h-5" /> },
  { name: 'Desktop', description: 'Electron, Tauri applications', icon: <Zap className="w-5 h-5" /> }
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
          <span className="text-4xl">🟨</span>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">JavaScript</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The language of the web - and much more
            </p>
          </div>
        </div>
      </div>

      {/* Why JavaScript */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
        <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-4">
          🌟 Why Choose JavaScript?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jsFeatures.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-yellow-900 dark:text-yellow-100">{feature.title}</h4>
                <p className="text-yellow-800 dark:text-yellow-200 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* JavaScript Environments */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Where JavaScript Runs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jsEnvironments.map((env, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-3">
                <div className="text-yellow-600">{env.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{env.name}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{env.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Getting Started */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Getting Started</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
            💻 Your First JavaScript Program
          </h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`// Hello World in JavaScript
console.log("Hello, World!");

// Variables and data types
let name = "Alice";
const age = 25;
var isStudent = true;

// Template literals
console.log(\`My name is \${name}, I'm \${age} years old\`);

// Arrays and objects
const fruits = ["apple", "banana", "orange"];
const person = {
  name: "Bob",
  age: 30,
  city: "New York"
};

// Functions
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Arrow functions (ES6+)
const multiply = (a, b) => a * b;

// DOM manipulation (in browser)
document.getElementById("myButton").addEventListener("click", function() {
  alert("Button clicked!");
});`}
          </pre>
        </div>
      </section>

      {/* Modern JavaScript */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Modern JavaScript (ES6+)</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
            🚀 Modern Features
          </h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`// Destructuring
const { name, age } = person;
const [first, second] = fruits;

// Spread operator
const newFruits = [...fruits, "grape"];
const newPerson = { ...person, country: "USA" };

// Async/Await
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Classes
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(\`\${this.name} makes a sound\`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(\`\${this.name} barks\`);
  }
}

// Modules
export const utils = {
  formatDate: (date) => date.toLocaleDateString()
};`}
          </pre>
        </div>
      </section>

      {/* Popular Frameworks */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Popular JavaScript Frameworks</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Frontend</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• React - Component-based UI</li>
              <li>• Vue.js - Progressive framework</li>
              <li>• Angular - Full framework</li>
              <li>• Svelte - Compile-time optimization</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Backend</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Express.js - Minimal web framework</li>
              <li>• Fastify - High performance</li>
              <li>• NestJS - Enterprise-grade</li>
              <li>• Koa.js - Next-gen Express</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Full Stack</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Next.js - React framework</li>
              <li>• Nuxt.js - Vue framework</li>
              <li>• Gatsby - Static site generator</li>
              <li>• Remix - Full stack web framework</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
          🎯 JavaScript Learning Path
        </h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">JavaScript Fundamentals (3-4 weeks)</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">Variables, functions, objects, arrays, DOM manipulation</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">Modern JavaScript (2-3 weeks)</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">ES6+ features, async/await, modules, classes</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">Choose Your Path (4-6 weeks)</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">Frontend frameworks, Node.js backend, or full-stack development</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">Build Projects (Ongoing)</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">Create interactive websites and web applications</p>
            </div>
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
          📚 JavaScript Learning Resources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Free Resources:</h4>
            <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
              <li>• MDN Web Docs (comprehensive reference)</li>
              <li>• JavaScript.info (modern tutorial)</li>
              <li>• freeCodeCamp JavaScript course</li>
              <li>• Eloquent JavaScript (free book)</li>
              <li>• You Don't Know JS (book series)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Practice Projects:</h4>
            <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
              <li>• Interactive calculator</li>
              <li>• Todo list application</li>
              <li>• Weather app with API</li>
              <li>• Simple games (tic-tac-toe, snake)</li>
              <li>• Personal portfolio website</li>
            </ul>
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
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Next: Java</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
