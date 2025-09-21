import Link from 'next/link';
import { ArrowLeft, Layers, Code, Server, Database, Globe, Zap } from 'lucide-react';

const fullstackStacks = [
  {
    name: 'MERN Stack',
    description: 'MongoDB, Express.js, React, Node.js - JavaScript everywhere',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    pros: ['Single language', 'Large community', 'Fast development', 'JSON everywhere'],
    cons: ['JavaScript fatigue', 'Rapid changes', 'Callback complexity'],
    bestFor: 'Startups, rapid prototyping, real-time applications',
    color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
  },
  {
    name: 'MEAN Stack',
    description: 'MongoDB, Express.js, Angular, Node.js - Enterprise-ready',
    technologies: ['MongoDB', 'Express.js', 'Angular', 'Node.js'],
    pros: ['TypeScript support', 'Enterprise features', 'Structured approach', 'Google backing'],
    cons: ['Complex setup', 'Steep learning curve', 'Heavy framework'],
    bestFor: 'Large applications, enterprise projects, teams preferring structure',
    color: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
  },
  {
    name: 'Django + React',
    description: 'Python backend with React frontend - Best of both worlds',
    technologies: ['Django', 'PostgreSQL', 'React', 'Django REST Framework'],
    pros: ['Python simplicity', 'Django admin', 'Great for AI/ML', 'Mature ecosystem'],
    cons: ['Two languages', 'Different deployment', 'Context switching'],
    bestFor: 'Data-heavy apps, AI/ML integration, content management',
    color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
  },
  {
    name: 'Next.js Full Stack',
    description: 'React framework with built-in API routes and server-side rendering',
    technologies: ['Next.js', 'React', 'Prisma', 'PostgreSQL/MongoDB'],
    pros: ['Single framework', 'SSR/SSG', 'API routes', 'Great DX', 'Vercel deployment'],
    cons: ['Vendor lock-in', 'Learning curve', 'File-based routing'],
    bestFor: 'Modern web apps, SEO-important sites, developer experience',
    color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800'
  }
];

const fullstackConcepts = [
  {
    title: 'Frontend-Backend Communication',
    description: 'REST APIs, GraphQL, real-time connections with WebSockets',
    icon: <Globe className="w-5 h-5" />
  },
  {
    title: 'State Management',
    description: 'Client-side state, server state, caching, and synchronization',
    icon: <Layers className="w-5 h-5" />
  },
  {
    title: 'Authentication Flow',
    description: 'End-to-end user authentication, sessions, and authorization',
    icon: <Server className="w-5 h-5" />
  },
  {
    title: 'Deployment & DevOps',
    description: 'CI/CD pipelines, containerization, monitoring, and scaling',
    icon: <Zap className="w-5 h-5" />
  }
];

export default function FullStackPage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/web-development/backend"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Backend Development</span>
        </Link>
        <Link
          href="/web-development"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>Back to Web Development</span>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Layers className="w-8 h-8 text-orange-600" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Full Stack Development
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Master both frontend and backend development to build complete web applications 
          from database to user interface. Learn popular technology stacks and how to 
          integrate all the pieces together.
        </p>
      </div>

      {/* What is Full Stack */}
      <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 border border-orange-200 dark:border-orange-800">
        <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-4">
          🎯 What is Full Stack Development?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-3">
              <Code className="w-6 h-6 text-orange-600" />
            </div>
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Frontend</h4>
            <p className="text-orange-800 dark:text-orange-200 text-sm">
              User interface, user experience, client-side logic, and responsive design
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-3">
              <Server className="w-6 h-6 text-orange-600" />
            </div>
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Backend</h4>
            <p className="text-orange-800 dark:text-orange-200 text-sm">
              Server logic, APIs, authentication, security, and business rules
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-3">
              <Database className="w-6 h-6 text-orange-600" />
            </div>
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Database</h4>
            <p className="text-orange-800 dark:text-orange-200 text-sm">
              Data storage, retrieval, relationships, and optimization
            </p>
          </div>
        </div>
      </div>

      {/* Core Concepts */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Full Stack Concepts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fullstackConcepts.map((concept, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-3">
                <div className="text-orange-600">{concept.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{concept.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{concept.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Stacks */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Popular Full Stack Technologies
        </h2>
        <div className="space-y-6">
          {fullstackStacks.map((stack, index) => (
            <div key={index} className={`p-6 rounded-lg border-2 ${stack.color}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {stack.name}
                </h3>
                <span className="text-sm px-3 py-1 bg-white dark:bg-gray-800 rounded-full font-medium">
                  Popular Stack
                </span>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {stack.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🛠️ Technologies:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {stack.technologies.map((tech, i) => (
                      <li key={i}>• {tech}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✅ Pros:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {stack.pros.map((pro, i) => (
                      <li key={i}>• {pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">❌ Cons:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {stack.cons.map((con, i) => (
                      <li key={i}>• {con}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🎯 Best For:</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {stack.bestFor}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Development Workflow */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Full Stack Development Workflow
        </h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
            🔄 Typical Development Process
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Planning & Design</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Define requirements, create wireframes, design database schema</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Backend Development</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Set up database, create APIs, implement authentication and business logic</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Frontend Development</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Build user interface, integrate with APIs, implement user interactions</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Integration & Testing</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Connect frontend and backend, test end-to-end functionality</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Deployment & Monitoring</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Deploy to production, set up monitoring, implement CI/CD</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Tools */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Essential Full Stack Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">🛠️ Development Tools</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• VS Code / WebStorm</li>
              <li>• Git / GitHub</li>
              <li>• Postman / Insomnia</li>
              <li>• Docker</li>
              <li>• Terminal / Command Line</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">☁️ Deployment Platforms</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Vercel / Netlify</li>
              <li>• Heroku / Railway</li>
              <li>• AWS / Google Cloud</li>
              <li>• DigitalOcean</li>
              <li>• Firebase</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">📊 Monitoring & Analytics</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Google Analytics</li>
              <li>• Sentry (Error tracking)</li>
              <li>• LogRocket</li>
              <li>• New Relic</li>
              <li>• Datadog</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
          🎯 Full Stack Learning Path
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Phase 1: Foundations (2-3 months)</h4>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
              <li>• HTML, CSS, JavaScript fundamentals</li>
              <li>• Basic backend concepts (Node.js or Python)</li>
              <li>• Database basics (SQL or MongoDB)</li>
              <li>• Git version control</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Phase 2: Specialization (3-4 months)</h4>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
              <li>• Choose and master a frontend framework</li>
              <li>• Learn a backend framework thoroughly</li>
              <li>• Build REST APIs and integrate with frontend</li>
              <li>• Implement authentication and security</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Phase 3: Integration (2-3 months)</h4>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
              <li>• Build complete full stack applications</li>
              <li>• Learn deployment and DevOps basics</li>
              <li>• Testing strategies (unit, integration, e2e)</li>
              <li>• Performance optimization</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Phase 4: Advanced (Ongoing)</h4>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
              <li>• Microservices architecture</li>
              <li>• Advanced deployment (Docker, Kubernetes)</li>
              <li>• Real-time features (WebSockets, SSE)</li>
              <li>• System design and scalability</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Project Ideas */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
          💡 Full Stack Project Ideas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Beginner Projects:</h4>
            <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
              <li>• Personal blog with admin panel</li>
              <li>• Todo app with user accounts</li>
              <li>• Recipe sharing platform</li>
              <li>• Simple e-commerce store</li>
              <li>• Weather dashboard with favorites</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Advanced Projects:</h4>
            <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
              <li>• Social media platform</li>
              <li>• Real-time collaboration tool</li>
              <li>• Marketplace with payments</li>
              <li>• Project management system</li>
              <li>• Learning management system</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Career Advice */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
          💼 Full Stack Career Tips
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Skills to Highlight:</h4>
            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
              <li>• End-to-end application development</li>
              <li>• Problem-solving across the entire stack</li>
              <li>• Understanding of system architecture</li>
              <li>• Ability to work independently</li>
              <li>• Quick learning and adaptation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Portfolio Essentials:</h4>
            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
              <li>• 3-5 complete full stack projects</li>
              <li>• Live demos with source code</li>
              <li>• Clear documentation and README files</li>
              <li>• Variety of technologies demonstrated</li>
              <li>• Mobile-responsive designs</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/web-development/backend"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Backend Development</span>
        </Link>
        <Link
          href="/web-development"
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Back to Web Development</span>
        </Link>
      </div>
    </div>
  );
}
