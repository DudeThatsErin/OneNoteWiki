import Link from 'next/link';
import { Globe, ArrowRight, CheckCircle } from 'lucide-react';

const webDevPaths = [
  {
    title: 'HTML & CSS',
    description: 'Learn the building blocks of web development - structure and styling.',
    href: '/web-development/html-css',
    difficulty: 'Beginner',
    color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
  },
  {
    title: 'Frontend Frameworks',
    description: 'Master modern JavaScript frameworks like React, Vue, and Angular.',
    href: '/web-development/frontend',
    difficulty: 'Intermediate',
    color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
  },
  {
    title: 'Backend Development',
    description: 'Build server-side applications, APIs, and databases.',
    href: '/web-development/backend',
    difficulty: 'Intermediate',
    color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800'
  },
  {
    title: 'Full Stack',
    description: 'Combine frontend and backend skills to build complete web applications.',
    href: '/web-development/fullstack',
    difficulty: 'Advanced',
    color: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800'
  }
];

const webDevConcepts = [
  'Responsive Design',
  'Progressive Web Apps',
  'Web Performance',
  'SEO Optimization',
  'Web Security',
  'Testing & Debugging'
];

export default function WebDevelopmentPage() {
  return (
    <>
      {/* Header */}
      <div className="flex flex-col items-start p-4">
        <div className="flex items-center gap-3">
          <Globe className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white pb-2">
            Web Development
          </h1>
        </div>
        <p className="pt-4 text-lg text-gray-600 dark:text-gray-300">
          Build modern, responsive websites and web applications. From basic HTML/CSS 
          to full-stack development with modern frameworks and tools.
        </p>
      </div>

      {/* Learning Paths */}
      <div className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Learning Paths
        </h2>
        <div className="flex flex-col gap-4">
          {webDevPaths.map((path, index) => (
            <Link
              key={path.href}
              href={path.href}
              className={`block p-6 rounded-lg border-2 transition-all hover:shadow-lg hover:scale-105 ${path.color}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-purple-600 font-semibold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {path.title}
                  </h3>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {path.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {path.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Key Concepts */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🎯 Key Web Development Concepts
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {webDevConcepts.map((concept) => (
            <div key={concept} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300 text-sm">{concept}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Getting Started */}
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
          🚀 Getting Started with Web Development
        </h3>
        <div className="flex flex-col gap-3 text-purple-800 dark:text-purple-200">
          <p>
            <strong>New to web development?</strong> Start with HTML & CSS to learn the fundamentals 
            of web page structure and styling.
          </p>
          <p>
            <strong>Have some experience?</strong> Jump into JavaScript and modern frameworks 
            like React or Vue to build interactive applications.
          </p>
          <p>
            <strong>Want to go full-stack?</strong> Learn backend technologies like Node.js, 
            Python, or PHP to handle server-side logic and databases.
          </p>
        </div>
        <div className="mt-4">
          <Link
            href="/web-development/html-css"
            className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
          >
            Start with HTML & CSS →
          </Link>
        </div>
      </div>

      {/* Tools & Technologies */}
      <div className="flex flex-col gap-4 md:gap-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Popular Tools & Technologies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 [&>li]:mb-1">
              <li>React / Next.js</li>
              <li>Vue / Nuxt.js</li>
              <li>Angular</li>
              <li>Svelte</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Backend</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 [&>li]:mb-1">
              <li>Node.js / Express</li>
              <li>Python / Django</li>
              <li>PHP / Laravel</li>
              <li>Ruby / Rails</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Databases</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 [&>li]:mb-1">
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Redis</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tools</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 [&>li]:mb-1">
              <li>VS Code</li>
              <li>Git / GitHub</li>
              <li>Webpack / Vite</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
