import Link from 'next/link';
import { Brain, ArrowRight, Zap, Shield, Code, Lightbulb } from 'lucide-react';

const aiCategories = [
  {
    title: 'AI Dos and Don\'ts',
    description: 'Best practices and common pitfalls when working with AI tools',
    examples: ['Ethical considerations', 'Code review practices', 'Learning balance', 'Dependency risks'],
    href: '/ai/dos-donts',
    icon: <Shield className="w-6 h-6" />,
    color: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
  },
  {
    title: 'Prompt Engineering',
    description: 'Master the art of communicating effectively with AI systems',
    examples: ['Clear instructions', 'Context setting', 'Iterative refinement', 'Output formatting'],
    href: '/ai/prompting',
    icon: <Lightbulb className="w-6 h-6" />,
    color: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800'
  },
  {
    title: 'Building Your Own AI',
    description: 'Learn to create AI applications and machine learning models',
    examples: ['ML fundamentals', 'Model training', 'API integration', 'Deployment strategies'],
    href: '/ai/build-ai',
    icon: <Code className="w-6 h-6" />,
    color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
  },
  {
    title: 'AI Languages & Tools',
    description: 'Discover the best programming languages and frameworks for AI',
    examples: ['Python ecosystem', 'JavaScript AI', 'Cloud platforms', 'Development tools'],
    href: '/ai/languages-tools',
    icon: <Zap className="w-6 h-6" />,
    color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800'
  }
];

const aiApplications = [
  { area: 'Web Development', uses: ['Code generation', 'Bug fixing', 'Documentation', 'Testing'], difficulty: 'Beginner' },
  { area: 'Data Analysis', uses: ['Data cleaning', 'Visualization', 'Pattern recognition', 'Reporting'], difficulty: 'Intermediate' },
  { area: 'Machine Learning', uses: ['Model building', 'Feature engineering', 'Hyperparameter tuning', 'Deployment'], difficulty: 'Advanced' },
  { area: 'Natural Language Processing', uses: ['Text analysis', 'Chatbots', 'Translation', 'Sentiment analysis'], difficulty: 'Advanced' },
  { area: 'Computer Vision', uses: ['Image recognition', 'Object detection', 'Medical imaging', 'Autonomous systems'], difficulty: 'Advanced' },
  { area: 'DevOps & Automation', uses: ['CI/CD optimization', 'Infrastructure management', 'Monitoring', 'Security'], difficulty: 'Intermediate' }
];

const skillLevels = [
  {
    level: 'Beginner (Using AI Tools)',
    timeframe: '1-3 months',
    skills: ['Using ChatGPT/Copilot effectively', 'Prompt engineering basics', 'Code review with AI', 'Learning best practices'],
    projects: ['AI-assisted web projects', 'Automated code documentation', 'Simple chatbot integration']
  },
  {
    level: 'Intermediate (AI Integration)',
    timeframe: '6-12 months',
    skills: ['API integration', 'Fine-tuning models', 'Data preprocessing', 'Model evaluation'],
    projects: ['Custom AI applications', 'Data analysis pipelines', 'Recommendation systems']
  },
  {
    level: 'Advanced (AI Development)',
    timeframe: '1-2+ years',
    skills: ['Deep learning', 'Model architecture design', 'MLOps', 'Research and development'],
    projects: ['Custom neural networks', 'Production ML systems', 'Research contributions']
  }
];

export default function AIPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Brain className="w-8 h-8 text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            AI & Machine Learning
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Navigate the AI revolution as a programmer. Learn to use AI tools effectively, 
          understand best practices, and discover how to build your own AI applications.
        </p>
      </div>

      {/* AI for Mid-Level Programmers */}
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
          🎯 AI for Mid-Level Programmers
        </h3>
        <div className="space-y-4 text-purple-800 dark:text-purple-200">
          <p>
            As a mid-level programmer, you're in the perfect position to leverage AI effectively. 
            You have enough experience to understand code quality and architecture, but can benefit 
            greatly from AI assistance and automation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🚀 Accelerate Development:</h4>
              <ul className="text-sm space-y-1">
                <li>• Generate boilerplate code quickly</li>
                <li>• Get help with complex algorithms</li>
                <li>• Automate repetitive tasks</li>
                <li>• Improve code documentation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🧠 Enhance Skills:</h4>
              <ul className="text-sm space-y-1">
                <li>• Learn new patterns and techniques</li>
                <li>• Explore unfamiliar technologies</li>
                <li>• Get instant code reviews</li>
                <li>• Debug complex issues faster</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🎯 Career Growth:</h4>
              <ul className="text-sm space-y-1">
                <li>• Stay current with AI trends</li>
                <li>• Build AI-powered applications</li>
                <li>• Become an AI-savvy developer</li>
                <li>• Lead AI adoption in your team</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Paths */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          AI Learning Paths
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiCategories.map((category, index) => (
            <Link
              key={category.href}
              href={category.href}
              className={`block p-6 rounded-lg border-2 transition-all hover:shadow-lg hover:scale-105 ${category.color}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-gray-700 dark:text-gray-300">{category.icon}</div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {category.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {category.description}
              </p>
              
              <div className="flex flex-wrap gap-1">
                {category.examples.map((example, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-white dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300">
                    {example}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* AI Applications */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          AI Applications in Programming
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Area
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Common Uses
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Difficulty
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {aiApplications.map((app, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900 dark:text-white">{app.area}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {app.uses.map((use, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">
                            {use}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        app.difficulty === 'Beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                        app.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                        'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }`}>
                        {app.difficulty}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Skill Progression */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          AI Skill Progression
        </h2>
        <div className="space-y-6">
          {skillLevels.map((level, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {level.level}
                </h3>
                <span className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full font-medium">
                  {level.timeframe}
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Key Skills:</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                    {level.skills.map((skill, i) => (
                      <li key={i}>• {skill}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Example Projects:</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                    {level.projects.map((project, i) => (
                      <li key={i}>• {project}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Getting Started */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
          🚀 Getting Started with AI
        </h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Learn AI Best Practices</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Understand dos and don'ts before diving deep into AI tools</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Master Prompt Engineering</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Learn to communicate effectively with AI systems</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Choose Your Tools</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Explore languages and frameworks that fit your goals</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Build Your First AI Project</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Start with simple integrations and gradually build complexity</p>
            </div>
          </div>
        </div>
      </div>

      {/* Current AI Landscape */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
          🌍 Current AI Landscape (2024)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Popular AI Tools:</h4>
            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
              <li>• ChatGPT & GPT-4</li>
              <li>• GitHub Copilot</li>
              <li>• Claude (Anthropic)</li>
              <li>• Cursor IDE</li>
              <li>• Replit AI</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Trends:</h4>
            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
              <li>• Code generation & completion</li>
              <li>• AI-powered debugging</li>
              <li>• Automated testing</li>
              <li>• Natural language to code</li>
              <li>• AI pair programming</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Future Outlook:</h4>
            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
              <li>• More specialized AI tools</li>
              <li>• Better code understanding</li>
              <li>• Improved collaboration</li>
              <li>• Enhanced security features</li>
              <li>• Domain-specific models</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quick Access */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {aiCategories.map((category, index) => (
          <Link
            key={category.href}
            href={category.href}
            className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
          >
            <div className="text-gray-600 dark:text-gray-400 mb-2">{category.icon}</div>
            <span className="text-sm font-medium text-gray-900 dark:text-white text-center">
              {category.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
