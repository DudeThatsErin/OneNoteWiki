import Link from 'next/link';
import { Lightbulb, ArrowRight, BookOpen, Users, Code, Trophy } from 'lucide-react';

const resourceCategories = [
  {
    title: 'Learning Platforms',
    description: 'Interactive coding courses and structured learning paths',
    examples: ['freeCodeCamp', 'Codecademy', 'Coursera', 'Udemy'],
    href: '/resources/platforms',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
  },
  {
    title: 'Books & Documentation',
    description: 'Comprehensive guides, references, and official documentation',
    examples: ['MDN Docs', 'Programming Books', 'API References', 'Tutorials'],
    href: '/resources/books',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
  },
  {
    title: 'Practice Problems',
    description: 'Coding challenges and exercises to sharpen your skills',
    examples: ['LeetCode', 'HackerRank', 'Codewars', 'Project Euler'],
    href: '/resources/practice',
    icon: <Code className="w-6 h-6" />,
    color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800'
  },
  {
    title: 'Communities',
    description: 'Connect with other developers and get help when you need it',
    examples: ['Stack Overflow', 'Reddit', 'Discord', 'GitHub'],
    href: '/resources/communities',
    icon: <Users className="w-6 h-6" />,
    color: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800'
  }
];

const learningTypes = [
  {
    type: 'Visual Learners',
    description: 'Learn best through diagrams, videos, and visual content',
    resources: ['YouTube tutorials', 'Interactive diagrams', 'Infographics', 'Video courses'],
    tips: ['Use mind maps', 'Draw out concepts', 'Watch coding videos', 'Use visual debugging tools']
  },
  {
    type: 'Auditory Learners',
    description: 'Learn best through listening and discussion',
    resources: ['Podcasts', 'Audio courses', 'Study groups', 'Verbal explanations'],
    tips: ['Join coding meetups', 'Explain code out loud', 'Listen to tech podcasts', 'Participate in discussions']
  },
  {
    type: 'Kinesthetic Learners',
    description: 'Learn best through hands-on practice and experimentation',
    resources: ['Coding challenges', 'Interactive tutorials', 'Project-based learning', 'Hackathons'],
    tips: ['Code along with tutorials', 'Build projects immediately', 'Experiment with code', 'Take frequent breaks']
  },
  {
    type: 'Reading/Writing Learners',
    description: 'Learn best through reading and taking notes',
    resources: ['Technical books', 'Documentation', 'Written tutorials', 'Code comments'],
    tips: ['Take detailed notes', 'Read documentation thoroughly', 'Write code comments', 'Keep a learning journal']
  }
];

export default function ResourcesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Lightbulb className="w-8 h-8 text-yellow-600" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Learning Resources
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Discover the best resources to accelerate your programming journey. From interactive 
          platforms to practice problems and supportive communities.
        </p>
      </div>

      {/* Why Resources Matter */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
        <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-4">
          🎯 Why Good Resources Matter
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">📈 Accelerated Learning:</h4>
            <ul className="text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
              <li>• Structured learning paths</li>
              <li>• Expert-curated content</li>
              <li>• Progressive difficulty</li>
              <li>• Immediate feedback</li>
              <li>• Time-tested methods</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">🤝 Community Support:</h4>
            <ul className="text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
              <li>• Get help when stuck</li>
              <li>• Learn from others' mistakes</li>
              <li>• Share your knowledge</li>
              <li>• Find study partners</li>
              <li>• Stay motivated</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">🎯 Practical Skills:</h4>
            <ul className="text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
              <li>• Real-world projects</li>
              <li>• Industry best practices</li>
              <li>• Current technologies</li>
              <li>• Problem-solving skills</li>
              <li>• Portfolio building</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Resource Categories */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Resource Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resourceCategories.map((category, index) => (
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

      {/* Learning Styles */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Find Your Learning Style
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learningTypes.map((style, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {style.type}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {style.description}
              </p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Best Resources:</h4>
                <div className="flex flex-wrap gap-1 mb-3">
                  {style.resources.map((resource, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">
                      {resource}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Learning Tips:</h4>
                <ul className="text-gray-600 dark:text-gray-300 text-xs space-y-1">
                  {style.tips.map((tip, i) => (
                    <li key={i}>• {tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Getting Help Online */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Essential Skills: Getting Help Online
        </h2>
        
        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 border border-red-200 dark:border-red-800">
          <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-4">
            🆘 How to Ask Questions Effectively
          </h3>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-red-200 dark:border-red-700">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">📋 Before You Ask:</h4>
              <ul className="text-red-800 dark:text-red-200 text-sm space-y-1">
                <li>• Search for existing solutions (Google, Stack Overflow, documentation)</li>
                <li>• Try to solve it yourself first - show your attempts</li>
                <li>• Read the error message carefully</li>
                <li>• Create a minimal reproducible example</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-red-200 dark:border-red-700">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">✅ When You Ask:</h4>
              <ul className="text-red-800 dark:text-red-200 text-sm space-y-1">
                <li>• Be specific about what you're trying to achieve</li>
                <li>• Include relevant code, error messages, and context</li>
                <li>• Mention what you've already tried</li>
                <li>• Use proper formatting (code blocks, etc.)</li>
                <li>• Be patient and respectful</li>
              </ul>
            </div>
            
            <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded border border-yellow-300 dark:border-yellow-700">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">🚫 Don't Ask to Ask!</h4>
              <p className="text-yellow-800 dark:text-yellow-200 text-sm mb-2">
                Instead of "Can someone help me with JavaScript?" or "Is anyone here good with Python?", 
                just ask your specific question directly.
              </p>
              <a
                href="https://dontasktoask.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-yellow-700 dark:text-yellow-300 hover:underline text-sm font-medium"
              >
                📖 Read "Don't Ask to Ask" →
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Code Sharing */}
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
              💻 How to Share Code Online
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Quick Code Snippets:</h4>
                <div className="space-y-2">
                  <a
                    href="https://codepen.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-white dark:bg-gray-800 rounded border border-blue-200 dark:border-blue-700 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-medium text-gray-900 dark:text-white">CodePen</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-xs">HTML, CSS, JavaScript</p>
                      </div>
                      <span className="text-blue-600 dark:text-blue-400 text-xs">→</span>
                    </div>
                  </a>
                  
                  <a
                    href="https://jsfiddle.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-white dark:bg-gray-800 rounded border border-blue-200 dark:border-blue-700 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-medium text-gray-900 dark:text-white">JSFiddle</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-xs">Web development playground</p>
                      </div>
                      <span className="text-blue-600 dark:text-blue-400 text-xs">→</span>
                    </div>
                  </a>
                  
                  <a
                    href="https://replit.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-white dark:bg-gray-800 rounded border border-blue-200 dark:border-blue-700 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-medium text-gray-900 dark:text-white">Replit</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-xs">Full development environment</p>
                      </div>
                      <span className="text-blue-600 dark:text-blue-400 text-xs">→</span>
                    </div>
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Longer Code/Projects:</h4>
                <div className="space-y-2">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-white dark:bg-gray-800 rounded border border-blue-200 dark:border-blue-700 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-medium text-gray-900 dark:text-white">GitHub</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-xs">Full projects, version control</p>
                      </div>
                      <span className="text-blue-600 dark:text-blue-400 text-xs">→</span>
                    </div>
                  </a>
                  
                  <a
                    href="https://pastebin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-white dark:bg-gray-800 rounded border border-blue-200 dark:border-blue-700 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-medium text-gray-900 dark:text-white">Pastebin</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-xs">Simple text/code sharing</p>
                      </div>
                      <span className="text-blue-600 dark:text-blue-400 text-xs">→</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Search Tips */}
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
              🔍 How to Google Programming Problems
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Search Strategies:</h4>
                <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
                  <li>• Include the programming language in your search</li>
                  <li>• Use specific error messages (in quotes)</li>
                  <li>• Add "stackoverflow" or "github" to your search</li>
                  <li>• Search for the concept, not just the code</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Example Searches:</h4>
                <div className="space-y-2">
                  <div className="bg-white dark:bg-gray-800 p-2 rounded text-xs">
                    <strong>Bad:</strong> "code not working"
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-2 rounded text-xs">
                    <strong>Good:</strong> "python list comprehension syntax error"
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-2 rounded text-xs">
                    <strong>Better:</strong> "python 'SyntaxError: invalid syntax' list comprehension"
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Useful Search Operators:</h4>
                <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
                  <li>• <code className="bg-green-100 dark:bg-green-900/30 px-1 rounded">"exact phrase"</code> - Search exact text</li>
                  <li>• <code className="bg-green-100 dark:bg-green-900/30 px-1 rounded">site:stackoverflow.com</code> - Search specific site</li>
                  <li>• <code className="bg-green-100 dark:bg-green-900/30 px-1 rounded">-word</code> - Exclude a word</li>
                  <li>• <code className="bg-green-100 dark:bg-green-900/30 px-1 rounded">filetype:pdf</code> - Search file types</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path Recommendations */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
          🗺️ Recommended Learning Path
        </h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">Choose a Learning Platform</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">Start with structured courses on platforms like freeCodeCamp or Codecademy</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">Supplement with Documentation</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">Read official docs and quality books to deepen understanding</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">Practice Regularly</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">Solve coding challenges on platforms like LeetCode or HackerRank</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">Join Communities</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">Connect with other learners for support, motivation, and knowledge sharing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Free vs Paid Resources */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
          💰 Free vs Paid Resources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">🆓 Free Resources:</h4>
            <div className="space-y-2 text-green-800 dark:text-green-200 text-sm">
              <p><strong>Pros:</strong> No cost, often high quality, large communities</p>
              <p><strong>Cons:</strong> Less structured, no certificates, limited support</p>
              <p><strong>Best for:</strong> Self-motivated learners, exploring new topics</p>
              <p><strong>Examples:</strong> freeCodeCamp, MDN Docs, YouTube, Stack Overflow</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">💳 Paid Resources:</h4>
            <div className="space-y-2 text-green-800 dark:text-green-200 text-sm">
              <p><strong>Pros:</strong> Structured curriculum, certificates, instructor support</p>
              <p><strong>Cons:</strong> Cost, may become outdated, subscription models</p>
              <p><strong>Best for:</strong> Career advancement, comprehensive learning paths</p>
              <p><strong>Examples:</strong> Udemy, Pluralsight, LinkedIn Learning, Coursera</p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Tips */}
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
          🏆 Tips for Learning Success
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Study Habits:</h4>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
              <li>• Set aside dedicated learning time daily</li>
              <li>• Use the Pomodoro Technique (25-min focused sessions)</li>
              <li>• Take regular breaks to avoid burnout</li>
              <li>• Review and practice previous concepts regularly</li>
              <li>• Set specific, achievable goals</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Active Learning:</h4>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
              <li>• Code along with tutorials, don't just watch</li>
              <li>• Explain concepts to others (rubber duck debugging)</li>
              <li>• Build projects to apply what you learn</li>
              <li>• Participate in coding challenges and hackathons</li>
              <li>• Contribute to open source projects</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Staying Motivated:</h4>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
              <li>• Track your progress and celebrate small wins</li>
              <li>• Find an accountability partner or study group</li>
              <li>• Focus on building projects you're passionate about</li>
              <li>• Don't compare yourself to others</li>
              <li>• Remember that everyone learns at their own pace</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Problem Solving:</h4>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
              <li>• Read error messages carefully</li>
              <li>• Break complex problems into smaller parts</li>
              <li>• Use debugging tools and print statements</li>
              <li>• Search for solutions but understand them first</li>
              <li>• Don't be afraid to ask for help</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quick Access */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {resourceCategories.map((category, index) => (
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
