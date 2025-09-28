import { Target, Brain, Eye, Headphones, Hand } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';

const learningTypes = [
  {
    type: 'Visual Learners',
    description: 'Learn best through diagrams, videos, and visual content',
    resources: ['YouTube tutorials', 'Interactive diagrams', 'Infographics', 'Video courses'],
    tips: ['Use mind maps', 'Draw out concepts', 'Watch coding videos', 'Use visual debugging tools'],
    icon: <Eye className="w-6 h-6" />,
    color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
  },
  {
    type: 'Auditory Learners',
    description: 'Learn best through listening and discussion',
    resources: ['Podcasts', 'Audio courses', 'Study groups', 'Verbal explanations'],
    tips: ['Join coding meetups', 'Explain code out loud', 'Listen to tech podcasts', 'Participate in discussions'],
    icon: <Headphones className="w-6 h-6" />,
    color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
  },
  {
    type: 'Kinesthetic Learners',
    description: 'Learn best through hands-on practice and experimentation',
    resources: ['Coding challenges', 'Interactive tutorials', 'Project-based learning', 'Hackathons'],
    tips: ['Code along with tutorials', 'Build projects immediately', 'Experiment with code', 'Take frequent breaks'],
    icon: <Hand className="w-6 h-6" />,
    color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800'
  },
  {
    type: 'Reading/Writing Learners',
    description: 'Learn best through reading and taking notes',
    resources: ['Technical books', 'Documentation', 'Written tutorials', 'Code comments'],
    tips: ['Take detailed notes', 'Read documentation thoroughly', 'Write code comments', 'Keep a learning journal'],
    icon: <Brain className="w-6 h-6" />,
    color: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800'
  }
];

export default function LearningGuidesPage() {
  return (
    <PageLayout
      title="Learning Guides"
      description="Discover your learning style and get personalized tips to maximize your programming education."
      icon={<Target className="w-8 h-8 text-yellow-600" />}
      previousLink={{
        href: "/resources",
        label: "Back to Resources"
      }}
      nextLink={{
        href: "/resources/getting-help",
        label: "Next: Getting Help"
      }}
    >

      {/* Learning Styles */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Find Your Learning Style
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learningTypes.map((style, index) => (
            <div key={index} className={`p-6 rounded-lg border-2 ${style.color}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-gray-700 dark:text-gray-300">{style.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {style.type}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {style.description}
              </p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Best Resources:</h4>
                <div className="flex flex-wrap gap-1 mb-3">
                  {style.resources.map((resource, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600">
                      {resource}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Learning Tips:</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-xs [&>li]:mb-1">
                  {style.tips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Path */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🗺️ Recommended Learning Path
        </h3>
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Choose a Learning Platform</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Start with structured courses on platforms like freeCodeCamp or Codecademy</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Supplement with Documentation</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Read official docs and quality books to deepen understanding</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Practice Regularly</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Solve coding challenges on platforms like LeetCode or HackerRank</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Join Communities</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Connect with other learners for support, motivation, and knowledge sharing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Tips */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🏆 Tips for Learning Success
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Study Habits:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-1">
              <li>Set aside dedicated learning time daily</li>
              <li>Use the Pomodoro Technique (25-min focused sessions)</li>
              <li>Take regular breaks to avoid burnout</li>
              <li>Review and practice previous concepts regularly</li>
              <li>Set specific, achievable goals</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Active Learning:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-1">
              <li>Code along with tutorials, don't just watch</li>
              <li>Explain concepts to others (rubber duck debugging)</li>
              <li>Build projects to apply what you learn</li>
              <li>Participate in coding challenges and hackathons</li>
              <li>Contribute to open source projects</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Staying Motivated:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-1">
              <li>Track your progress and celebrate small wins</li>
              <li>Find an accountability partner or study group</li>
              <li>Focus on building projects you're passionate about</li>
              <li>Don't compare yourself to others</li>
              <li>Remember that everyone learns at their own pace</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Problem Solving:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-1">
              <li>Read error messages carefully</li>
              <li>Break complex problems into smaller parts</li>
              <li>Use debugging tools and print statements</li>
              <li>Search for solutions but understand them first</li>
              <li>Don't be afraid to ask for help</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Free vs Paid */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          💰 Free vs Paid Resources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

    </PageLayout>
  );
}
