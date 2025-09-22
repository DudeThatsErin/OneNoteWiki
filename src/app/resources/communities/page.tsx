import Link from 'next/link';
import { ArrowLeft, Users, MessageSquare, ExternalLink, Heart } from 'lucide-react';

const communities = [
  {
    name: 'Stack Overflow',
    type: 'Q&A Platform',
    size: '20M+ users',
    description: 'The largest programming Q&A community with expert answers',
    strengths: ['Vast knowledge base', 'Expert answers', 'Voting system', 'Searchable'],
    weaknesses: ['Can be intimidating', 'Strict moderation', 'Duplicate questions'],
    bestFor: ['Getting help with specific problems', 'Learning from others\' questions', 'Building reputation'],
    topics: ['All programming languages', 'Frameworks', 'Tools', 'Best practices'],
    url: 'https://stackoverflow.com',
    tips: ['Search before asking', 'Provide minimal reproducible examples', 'Be specific and clear']
  },
  {
    name: 'Reddit Programming Communities',
    type: 'Discussion Forums',
    size: '5M+ subscribers',
    description: 'Various programming subreddits for discussion and learning',
    strengths: ['Casual atmosphere', 'Diverse topics', 'Community support', 'Memes and humor'],
    weaknesses: ['Variable quality', 'Can be off-topic', 'Less formal'],
    bestFor: ['General discussion', 'Career advice', 'Industry news', 'Community support'],
    topics: ['r/programming', 'r/learnprogramming', 'r/webdev', 'r/cscareerquestions'],
    url: 'https://reddit.com/r/programming',
    tips: ['Follow subreddit rules', 'Use appropriate subreddits', 'Engage respectfully']
  },
  {
    name: 'Discord Programming Servers',
    type: 'Real-time Chat',
    size: 'Varies by server',
    description: 'Real-time chat communities for immediate help and discussion',
    strengths: ['Real-time help', 'Voice chat', 'Screen sharing', 'Close-knit communities'],
    weaknesses: ['Messages disappear', 'Time zone dependent', 'Can be overwhelming'],
    bestFor: ['Immediate help', 'Pair programming', 'Study groups', 'Networking'],
    topics: ['Language-specific servers', 'Framework communities', 'Study groups'],
    url: 'https://discord.gg/geQEUBm',
    tips: ['Read server rules', 'Use appropriate channels', 'Be patient for responses']
  },
  {
    name: 'GitHub Community',
    type: 'Code Collaboration',
    size: '100M+ users',
    description: 'Collaborate on open source projects and learn from code',
    strengths: ['Real code examples', 'Collaboration', 'Version control', 'Portfolio building'],
    weaknesses: ['Can be intimidating', 'Requires Git knowledge', 'Quality varies'],
    bestFor: ['Contributing to projects', 'Learning from code', 'Building portfolio', 'Networking'],
    topics: ['Open source projects', 'Code reviews', 'Issue discussions'],
    url: 'https://github.com',
    tips: ['Start with good first issues', 'Read contribution guidelines', 'Be respectful in discussions']
  },
  {
    name: 'Dev.to',
    type: 'Blogging Platform',
    size: '1M+ users',
    description: 'Developer blogging platform with supportive community',
    strengths: ['Supportive community', 'Quality articles', 'Easy publishing', 'Career focus'],
    weaknesses: ['Less Q&A focused', 'Can be promotional', 'Newer platform'],
    bestFor: ['Reading articles', 'Sharing knowledge', 'Building personal brand', 'Career advice'],
    topics: ['Tutorials', 'Career advice', 'Technology trends', 'Personal experiences'],
    url: 'https://dev.to',
    tips: ['Engage with articles', 'Share your experiences', 'Follow interesting developers']
  },
  {
    name: 'Hashnode',
    type: 'Developer Blogging',
    size: '500K+ users',
    description: 'Developer-focused blogging platform with built-in community',
    strengths: ['Developer-focused', 'Custom domains', 'Good SEO', 'Clean interface'],
    weaknesses: ['Smaller community', 'Less interactive', 'Newer platform'],
    bestFor: ['Technical blogging', 'Building authority', 'Sharing tutorials'],
    topics: ['Technical tutorials', 'Project showcases', 'Learning journeys'],
    url: 'https://hashnode.com',
    tips: ['Write detailed tutorials', 'Share your learning journey', 'Engage with other bloggers']
  }
];

const communityTypes = [
  {
    type: 'Q&A Platforms',
    description: 'Get specific answers to programming questions',
    examples: ['Stack Overflow', 'Quora Programming', 'Reddit AskProgramming'],
    pros: ['Expert answers', 'Searchable', 'Voting system', 'Permanent record'],
    cons: ['Can be intimidating', 'Strict rules', 'May get downvoted'],
    bestFor: 'Specific technical problems, debugging help'
  },
  {
    type: 'Real-time Chat',
    description: 'Immediate help and casual conversation',
    examples: ['Discord servers', 'Slack communities', 'IRC channels'],
    pros: ['Immediate responses', 'Casual atmosphere', 'Voice/video chat', 'Screen sharing'],
    cons: ['Time zone dependent', 'Messages disappear', 'Can be noisy'],
    bestFor: 'Quick questions, pair programming, networking'
  },
  {
    type: 'Forums & Discussion',
    description: 'Longer-form discussions and community building',
    examples: ['Reddit', 'HackerNews', 'Dev.to', 'Indie Hackers'],
    pros: ['Diverse topics', 'Community building', 'Industry news', 'Career advice'],
    cons: ['Can go off-topic', 'Variable quality', 'Less focused'],
    bestFor: 'General discussion, career advice, industry trends'
  },
  {
    type: 'Code Collaboration',
    description: 'Work together on actual code projects',
    examples: ['GitHub', 'GitLab', 'CodePen', 'Repl.it'],
    pros: ['Real code experience', 'Portfolio building', 'Learning from others', 'Networking'],
    cons: ['Requires Git knowledge', 'Can be intimidating', 'Time commitment'],
    bestFor: 'Open source contribution, portfolio building, learning'
  }
];

const participationTips = [
  {
    category: 'Asking Questions',
    tips: [
      'Search existing questions first',
      'Provide minimal reproducible examples',
      'Be specific about your problem',
      'Show what you\'ve already tried',
      'Use proper formatting and code blocks',
      'Accept and upvote helpful answers'
    ]
  },
  {
    category: 'Helping Others',
    tips: [
      'Start with questions you can confidently answer',
      'Provide clear, well-explained solutions',
      'Include code examples when helpful',
      'Be patient and encouraging',
      'Link to relevant documentation',
      'Follow up if needed'
    ]
  },
  {
    category: 'Building Reputation',
    tips: [
      'Be consistent in your participation',
      'Focus on quality over quantity',
      'Specialize in areas you know well',
      'Help newcomers feel welcome',
      'Share your learning experiences',
      'Contribute to open source projects'
    ]
  },
  {
    category: 'Networking',
    tips: [
      'Engage genuinely with others\' content',
      'Share your projects and progress',
      'Attend virtual meetups and events',
      'Follow developers you admire',
      'Collaborate on projects',
      'Be helpful without expecting returns'
    ]
  }
];

const communityBenefits = [
  {
    benefit: 'Learning Acceleration',
    description: 'Get answers faster than searching alone',
    examples: ['Quick debugging help', 'Best practice advice', 'Code reviews', 'Learning resources']
  },
  {
    benefit: 'Career Opportunities',
    description: 'Network with professionals and discover opportunities',
    examples: ['Job referrals', 'Freelance opportunities', 'Mentorship', 'Industry connections']
  },
  {
    benefit: 'Skill Validation',
    description: 'Get feedback on your skills and knowledge',
    examples: ['Code reviews', 'Technical discussions', 'Peer feedback', 'Recognition']
  },
  {
    benefit: 'Staying Current',
    description: 'Keep up with industry trends and new technologies',
    examples: ['Technology news', 'Tool recommendations', 'Industry insights', 'Best practices']
  }
];

export default function CommunitiesPage() {
  return (
    <div className="flex flex-col gap-8 md:gap-12">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/resources/practice"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Practice Problems</span>
        </Link>
        <Link
          href="/resources"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>Back to Resources</span>
          <ArrowLeft className="w-4 h-4 rotate-180" />
        </Link>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex items-center gap-3">
          <Users className="w-8 h-8 text-orange-600" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Programming Communities
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Connect with fellow developers, get help when you're stuck, and accelerate your learning 
          through supportive programming communities.
        </p>
      </div>

      {/* Why Communities Matter */}
      <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 border border-orange-200 dark:border-orange-800">
        <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-4">
          🤝 Why Programming Communities Are Essential
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Learning Support:</h4>
            <ul className="text-orange-800 dark:text-orange-200 text-sm [&>li]:mb-1">
              <li>• Get help when you're stuck</li>
              <li>• Learn from others' experiences</li>
              <li>• Discover new tools and techniques</li>
              <li>• Avoid common pitfalls</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Career Growth:</h4>
            <ul className="text-orange-800 dark:text-orange-200 text-sm [&>li]:mb-1">
              <li>• Network with professionals</li>
              <li>• Find job opportunities</li>
              <li>• Get career advice</li>
              <li>• Build your reputation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Motivation:</h4>
            <ul className="text-orange-800 dark:text-orange-200 text-sm [&>li]:mb-1">
              <li>• Stay motivated during challenges</li>
              <li>• Celebrate achievements</li>
              <li>• Find accountability partners</li>
              <li>• Combat imposter syndrome</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Popular Communities */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Popular Programming Communities
        </h2>
        <div className="flex flex-col gap-6 md:gap-8">
          {communities.map((community, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{community.name}</h3>
                  <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full font-medium">
                    {community.type}
                  </span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{community.size}</span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{community.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">✅ Strengths:</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-xs [&>li]:mb-1">
                    {community.strengths.map((strength, i) => (
                      <li key={i}>• {strength}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">❌ Weaknesses:</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-xs [&>li]:mb-1">
                    {community.weaknesses.map((weakness, i) => (
                      <li key={i}>• {weakness}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">🎯 Best For:</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-xs [&>li]:mb-1">
                    {community.bestFor.map((use, i) => (
                      <li key={i}>• {use}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">💡 Pro Tips:</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-xs [&>li]:mb-1">
                    {community.tips.map((tip, i) => (
                      <li key={i}>• {tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {Array.isArray(community.topics) ? community.topics.slice(0, 4).map((topic, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300">
                      {topic}
                    </span>
                  )) : (
                    <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300">
                      {community.topics}
                    </span>
                  )}
                </div>
                <a
                  href={community.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded text-sm font-medium transition-colors"
                >
                  <span>Visit Community</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Types */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Types of Programming Communities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {communityTypes.map((type, index) => (
            <div key={index} className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">{type.type}</h3>
              <p className="text-blue-800 dark:text-blue-200 text-sm mb-3">{type.description}</p>
              
              <div className="flex flex-col gap-3">
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1 text-sm">Examples:</h4>
                  <div className="flex flex-wrap gap-1">
                    {type.examples.map((example, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1 text-xs">Pros:</h4>
                    <ul className="text-blue-800 dark:text-blue-200 text-xs [&>li]:mb-1">
                      {type.pros.map((pro, i) => (
                        <li key={i}>• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1 text-xs">Cons:</h4>
                    <ul className="text-blue-800 dark:text-blue-200 text-xs [&>li]:mb-1">
                      {type.cons.map((con, i) => (
                        <li key={i}>• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <p className="text-blue-700 dark:text-blue-300 text-xs">
                  <strong>Best for:</strong> {type.bestFor}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Benefits */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Benefits of Community Participation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {communityBenefits.map((benefit, index) => (
            <div key={index} className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="w-5 h-5 text-green-600" />
                <h3 className="font-semibold text-green-900 dark:text-green-100">{benefit.benefit}</h3>
              </div>
              <p className="text-green-800 dark:text-green-200 text-sm mb-3">{benefit.description}</p>
              <div>
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1 text-sm">Examples:</h4>
                <div className="flex flex-wrap gap-1">
                  {benefit.examples.map((example, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 rounded-full text-green-700 dark:text-green-300">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Participation Tips */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          How to Participate Effectively
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {participationTips.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare className="w-5 h-5 text-purple-600" />
                <h3 className="font-semibold text-gray-900 dark:text-white">{category.category}</h3>
              </div>
              <ul className="text-gray-600 dark:text-gray-300 text-sm flex flex-col gap-2">
                {category.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Getting Started */}
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
          🚀 Getting Started with Communities
        </h3>
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100">Start as a Lurker</h4>
              <p className="text-purple-800 dark:text-purple-200 text-sm">Observe community norms and culture before actively participating</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100">Ask Your First Question</h4>
              <p className="text-purple-800 dark:text-purple-200 text-sm">Start with a well-researched, specific question in a beginner-friendly community</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100">Help Others</h4>
              <p className="text-purple-800 dark:text-purple-200 text-sm">Answer questions you know, even simple ones - teaching reinforces your learning</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100">Build Relationships</h4>
              <p className="text-purple-800 dark:text-purple-200 text-sm">Engage consistently and genuinely - communities are about people, not just code</p>
            </div>
          </div>
        </div>
      </div>

      {/* CodingHelp Community Highlight */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          💬 Join Our CodingHelp Community
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          Connect with fellow learners in our supportive programming community. Get help, share your progress, 
          and learn together in a welcoming environment.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://discord.gg/geQEUBm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
          >
            💬 Join Discord Server
          </a>
          <a
            href="https://reddit.com/r/CodingHelp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors"
          >
            🤝 Visit Subreddit
          </a>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/resources/practice"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Practice Problems</span>
        </Link>
        <Link
          href="/resources"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Back to Resources</span>
        </Link>
      </div>
    </div>
  );
}
