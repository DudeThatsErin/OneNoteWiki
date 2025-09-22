import Link from 'next/link';
import { Lightbulb, ArrowRight, BookOpen, Users, Code } from 'lucide-react';

const resourceCategories = [
  {
    title: 'Learning Platforms',
    description: 'Interactive coding courses and structured learning paths',
    examples: ['freeCodeCamp', 'Codecademy', 'Coursera', 'Udemy'],
    href: '/resources/platforms',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
  },
  {
    title: 'Books & Documentation',
    description: 'Comprehensive guides, references, and official documentation',
    examples: ['MDN Docs', 'Programming Books', 'API References', 'Tutorials'],
    href: '/resources/books',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
  },
  {
    title: 'Practice Problems',
    description: 'Coding challenges and exercises to sharpen your skills',
    examples: ['LeetCode', 'HackerRank', 'Codewars', 'Project Euler'],
    href: '/resources/practice',
    icon: <Code className="w-6 h-6" />,
    color: 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
  },
  {
    title: 'Communities',
    description: 'Connect with other developers and get help when you need it',
    examples: ['Stack Overflow', 'Reddit', 'Discord', 'GitHub'],
    href: '/resources/communities',
    icon: <Users className="w-6 h-6" />,
    color: 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
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
    <div className="flex flex-col gap-8 md:gap-12">
      {/* Header */}
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex items-center gap-3">
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
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🎯 Why Good Resources Matter
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">📈 Accelerated Learning:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-1">
              <li>Structured learning paths</li>
              <li>Expert-curated content</li>
              <li>Progressive difficulty</li>
              <li>Immediate feedback</li>
              <li>Time-tested methods</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🤝 Community Support:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-1">
              <li>Get help when stuck</li>
              <li>Learn from others' mistakes</li>
              <li>Share your knowledge</li>
              <li>Find study partners</li>
              <li>Stay motivated</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🎯 Practical Skills:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-1">
              <li>Real-world projects</li>
              <li>Industry best practices</li>
              <li>Current technologies</li>
              <li>Problem-solving skills</li>
              <li>Portfolio building</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Resource Categories */}
      <section className="flex flex-col gap-6 md:gap-8">
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
      <section className="flex flex-col gap-6 md:gap-8">
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
                <ul className="text-gray-600 dark:text-gray-300 text-xs [&>li]:mb-1">
                  {style.tips.map((tip, i) => (
                    <li key={i}>• {tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Getting Help Online - Simplified */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Getting Help Online
        </h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            🆘 How to Ask Questions Effectively
          </h3>
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded border border-gray-200 dark:border-gray-600">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">📋 Before You Ask:</h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-1">
                <li>Search for existing solutions (Google, Stack Overflow, documentation)</li>
                <li>Try to solve it yourself first - show your attempts</li>
                <li>Read the error message carefully</li>
                <li>Create a minimal reproducible example</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded border border-gray-200 dark:border-gray-600">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✅ When You Ask:</h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-1">
                <li>Be specific about what you're trying to achieve</li>
                <li>Include relevant code, error messages, and context</li>
                <li>Mention what you've already tried</li>
                <li>Use proper formatting (code blocks, etc.)</li>
                <li>Be patient and respectful</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded border border-gray-200 dark:border-gray-600">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🚫 Don't Ask to Ask!</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                Instead of "Can someone help me with JavaScript?" or "Is anyone here good with Python?", 
                just ask your specific question directly.
              </p>
              <a
                href="https://dontasktoask.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
              >
                📖 Read "Don't Ask to Ask" →
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Code Sharing - Simplified */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              💻 Code Sharing Platforms
            </h3>
            <div className="flex flex-col gap-3">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Quick Snippets:</h4>
                <ul className="text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-1">
                  <li>• <a href="https://codepen.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CodePen</a> - HTML, CSS, JS</li>
                  <li>• <a href="https://jsfiddle.net" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JSFiddle</a> - Web playground</li>
                  <li>• <a href="https://replit.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Replit</a> - Full environment</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Full Projects:</h4>
                <ul className="text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-1">
                  <li>• <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a> - Version control</li>
                  <li>• <a href="https://pastebin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Pastebin</a> - Simple sharing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Google Search Tips */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              🔍 How to Google Programming Problems
            </h3>
            <div className="flex flex-col gap-4 md:gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Search Strategies:</h4>
                <ul className="text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-1">
                  <li>• Include the programming language in your search</li>
                  <li>• Use specific error messages (in quotes)</li>
                  <li>• Add "stackoverflow" or "github" to your search</li>
                  <li>• Search for the concept, not just the code</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Example Searches:</h4>
                <ul className="text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-1">
                  <li>• <strong>Bad:</strong> "code not working"</li>
                  <li>• <strong>Good:</strong> "python list comprehension syntax error"</li>
                  <li>• <strong>Better:</strong> "python 'SyntaxError: invalid syntax' list comprehension"</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Useful Search Operators:</h4>
                <ul className="text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-1">
                  <li>• <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">"exact phrase"</code> - Search exact text</li>
                  <li>• <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">site:stackoverflow.com</code> - Search specific site</li>
                  <li>• <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">-word</code> - Exclude a word</li>
                  <li>• <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">filetype:pdf</code> - Search file types</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path Recommendations */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🗺️ Recommended Learning Path
        </h3>
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Choose a Learning Platform</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Start with structured courses on platforms like freeCodeCamp or Codecademy</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Supplement with Documentation</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Read official docs and quality books to deepen understanding</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Practice Regularly</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Solve coding challenges on platforms like LeetCode or HackerRank</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Join Communities</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Connect with other learners for support, motivation, and knowledge sharing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Free vs Paid Resources */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          💰 Free vs Paid Resources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🆓 Free Resources:</h4>
            <div className="flex flex-col gap-2 text-gray-700 dark:text-gray-300 text-sm">
              <p><strong>Pros:</strong> No cost, often high quality, large communities</p>
              <p><strong>Cons:</strong> Less structured, no certificates, limited support</p>
              <p><strong>Best for:</strong> Self-motivated learners, exploring new topics</p>
              <p><strong>Examples:</strong> freeCodeCamp, MDN Docs, YouTube, Stack Overflow</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">💳 Paid Resources:</h4>
            <div className="flex flex-col gap-2 text-gray-700 dark:text-gray-300 text-sm">
              <p><strong>Pros:</strong> Structured curriculum, certificates, instructor support</p>
              <p><strong>Cons:</strong> Cost, may become outdated, subscription models</p>
              <p><strong>Best for:</strong> Career advancement, comprehensive learning paths</p>
              <p><strong>Examples:</strong> Udemy, Pluralsight, LinkedIn Learning, Coursera</p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Tips */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🏆 Tips for Learning Success
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Study Habits:</h4>
            <ul className="text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-1">
              <li>• Set aside dedicated learning time daily</li>
              <li>• Use the Pomodoro Technique (25-min focused sessions)</li>
              <li>• Take regular breaks to avoid burnout</li>
              <li>• Review and practice previous concepts regularly</li>
              <li>• Set specific, achievable goals</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Active Learning:</h4>
            <ul className="text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-1">
              <li>• Code along with tutorials, don't just watch</li>
              <li>• Explain concepts to others (rubber duck debugging)</li>
              <li>• Build projects to apply what you learn</li>
              <li>• Participate in coding challenges and hackathons</li>
              <li>• Contribute to open source projects</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Staying Motivated:</h4>
            <ul className="text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-1">
              <li>• Track your progress and celebrate small wins</li>
              <li>• Find an accountability partner or study group</li>
              <li>• Focus on building projects you're passionate about</li>
              <li>• Don't compare yourself to others</li>
              <li>• Remember that everyone learns at their own pace</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Problem Solving:</h4>
            <ul className="text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-1">
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
