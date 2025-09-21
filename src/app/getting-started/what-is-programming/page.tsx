import Link from 'next/link';
import { ArrowLeft, ArrowRight, Lightbulb, Code, Cpu, Monitor } from 'lucide-react';

export default function WhatIsProgrammingPage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/getting-started"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Getting Started</span>
        </Link>
        <Link
          href="/getting-started/choosing-language"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>Next: Choosing Your First Language</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          What is Programming?
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Understanding the fundamentals of programming and how computers work.
        </p>
      </div>

      {/* Main Content */}
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <div className="space-y-6">
          {/* Introduction */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
            <div className="flex items-start space-x-3">
              <Lightbulb className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Simple Definition
                </h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Programming is the process of creating instructions for computers to follow. 
                  These instructions, called code, tell the computer exactly what to do, step by step.
                </p>
              </div>
            </div>
          </div>

          {/* How Computers Work */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
              <Cpu className="w-6 h-6 text-gray-600" />
              <span>How Computers Work</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              To understand programming, it helps to understand how computers work:
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Input:</strong> Computers receive information (like keyboard presses, mouse clicks, or data from files)</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Processing:</strong> The computer's processor (CPU) follows instructions to manipulate that information</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Output:</strong> The computer produces results (like displaying text on screen, playing sounds, or saving files)</span>
              </li>
            </ul>
          </section>

          {/* What Programming Does */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
              <Code className="w-6 h-6 text-gray-600" />
              <span>What Programming Does</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Programming allows us to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🌐 Create Websites</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Build interactive websites and web applications that millions of people can use.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">📱 Build Mobile Apps</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Develop apps for smartphones and tablets that solve real-world problems.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🎮 Make Games</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Create entertaining games from simple puzzles to complex 3D worlds.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🤖 Automate Tasks</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Write programs that handle repetitive tasks automatically.
                </p>
              </div>
            </div>
          </section>

          {/* Programming Languages */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Programming Languages
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Just like humans speak different languages, computers can understand different programming languages. 
              Each language has its own syntax (grammar rules) and is designed for specific purposes.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Popular Programming Languages:</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• <strong>Python:</strong> Great for beginners, used for web development, data analysis, and AI</li>
                <li>• <strong>JavaScript:</strong> Essential for web development and interactive websites</li>
                <li>• <strong>Java:</strong> Widely used for large applications and Android apps</li>
                <li>• <strong>C++:</strong> Powerful language used for games and system programming</li>
              </ul>
            </div>
          </section>

          {/* Real World Example */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Real-World Example
            </h2>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">
                Example: A Simple Calculator Program
              </h4>
              <p className="text-green-800 dark:text-green-200 mb-3">
                Imagine you want to create a calculator that adds two numbers:
              </p>
              <ol className="text-green-800 dark:text-green-200 space-y-2 text-sm">
                <li>1. <strong>Input:</strong> Ask the user for two numbers</li>
                <li>2. <strong>Processing:</strong> Add the two numbers together</li>
                <li>3. <strong>Output:</strong> Display the result to the user</li>
              </ol>
              <p className="text-green-800 dark:text-green-200 mt-3 text-sm">
                This simple example shows the basic flow of most programs: get input, process it, and show output.
              </p>
            </div>
          </section>

          {/* Why Learn Programming */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Why Learn Programming?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💼</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Career Opportunities</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  High demand for programmers across all industries with excellent salaries.
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🧠</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Problem Solving</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Develop logical thinking and problem-solving skills that apply everywhere.
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Create & Innovate</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Build your own projects and bring your ideas to life.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/getting-started"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Getting Started</span>
        </Link>
        <Link
          href="/getting-started/choosing-language"
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Next: Choosing Your First Language</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
