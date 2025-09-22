import Link from 'next/link';
import { ArrowLeft, ArrowRight, Code, Trophy, Target, Zap } from 'lucide-react';

const practicePlatforms = [
  {
    name: 'LeetCode',
    type: 'Algorithm Focus',
    difficulty: 'Beginner to Expert',
    rating: 5,
    description: 'Premier platform for coding interviews and algorithmic problem solving',
    strengths: ['Interview preparation', 'Company-specific questions', 'Discussion forums', 'Mock interviews'],
    weaknesses: ['Can be intimidating', 'Limited real-world relevance', 'Subscription for premium'],
    bestFor: ['Job interviews', 'Algorithm practice', 'Competitive programming'],
    problemCount: '2500+',
    languages: ['Python', 'Java', 'C++', 'JavaScript', 'Go', '20+ more'],
    url: 'https://leetcode.com'
  },
  {
    name: 'HackerRank',
    type: 'Comprehensive',
    difficulty: 'Beginner to Advanced',
    rating: 4,
    description: 'Broad platform covering algorithms, data structures, and domain-specific skills',
    strengths: ['Diverse topics', 'Skill certifications', 'Company challenges', 'Good for beginners'],
    weaknesses: ['Interface can be clunky', 'Some outdated content', 'Less interview focus'],
    bestFor: ['Skill development', 'Certifications', 'Broad practice'],
    problemCount: '1000+',
    languages: ['Python', 'Java', 'C++', 'JavaScript', 'Ruby', '30+ more'],
    url: 'https://hackerrank.com'
  },
  {
    name: 'Codewars',
    type: 'Gamified',
    difficulty: 'Beginner to Advanced',
    rating: 4,
    description: 'Martial arts-themed platform with community-created challenges',
    strengths: ['Gamification', 'Community solutions', 'Progressive difficulty', 'Fun approach'],
    weaknesses: ['Less structured', 'Variable quality', 'Not interview-focused'],
    bestFor: ['Daily practice', 'Learning from others', 'Motivation through gamification'],
    problemCount: '8000+',
    languages: ['JavaScript', 'Python', 'Java', 'C#', 'Ruby', '50+ more'],
    url: 'https://codewars.com'
  },
  {
    name: 'Project Euler',
    type: 'Mathematical',
    difficulty: 'Intermediate to Expert',
    rating: 4,
    description: 'Mathematical and computational problems requiring creative solutions',
    strengths: ['Mathematical focus', 'Creative thinking', 'No time limits', 'Educational'],
    weaknesses: ['Math-heavy', 'Not practical', 'Can be very difficult'],
    bestFor: ['Mathematical programming', 'Algorithm design', 'Academic challenges'],
    problemCount: '800+',
    languages: ['Any language', 'Language agnostic'],
    url: 'https://projecteuler.net'
  },
  {
    name: 'Exercism',
    type: 'Mentored Learning',
    difficulty: 'Beginner to Intermediate',
    rating: 4,
    description: 'Free platform with mentor feedback and language-specific tracks',
    strengths: ['Free mentoring', 'Language tracks', 'Community feedback', 'Learning-focused'],
    weaknesses: ['Slower feedback', 'Limited advanced problems', 'Less competitive'],
    bestFor: ['Learning new languages', 'Getting feedback', 'Structured practice'],
    problemCount: '3000+',
    languages: ['60+ languages', 'Language-specific tracks'],
    url: 'https://exercism.org'
  },
  {
    name: 'AtCoder',
    type: 'Competitive Programming',
    difficulty: 'Intermediate to Expert',
    rating: 4,
    description: 'Japanese competitive programming platform with regular contests',
    strengths: ['High-quality problems', 'Regular contests', 'Educational content', 'Strong community'],
    weaknesses: ['More advanced', 'Contest-focused', 'Less beginner content'],
    bestFor: ['Competitive programming', 'Contest participation', 'Advanced algorithms'],
    problemCount: '2000+',
    languages: ['C++', 'Python', 'Java', 'JavaScript', 'Go', '20+ more'],
    url: 'https://atcoder.jp'
  }
];

const practiceTypes = [
  {
    type: 'Algorithm & Data Structures',
    description: 'Core computer science concepts and problem-solving',
    skills: ['Arrays & Strings', 'Linked Lists', 'Trees & Graphs', 'Dynamic Programming', 'Sorting & Searching'],
    platforms: ['LeetCode', 'HackerRank', 'AtCoder'],
    timeCommitment: '1-2 hours daily',
    difficulty: 'Beginner to Expert'
  },
  {
    type: 'Web Development Projects',
    description: 'Build real applications to practice full-stack development',
    skills: ['Frontend frameworks', 'Backend APIs', 'Database design', 'Authentication', 'Deployment'],
    platforms: ['GitHub', 'CodePen', 'Netlify', 'Vercel'],
    timeCommitment: '5-20 hours per project',
    difficulty: 'Beginner to Advanced'
  },
  {
    type: 'Competitive Programming',
    description: 'Timed contests focusing on algorithmic problem solving',
    skills: ['Speed coding', 'Algorithm optimization', 'Mathematical thinking', 'Contest strategies'],
    platforms: ['Codeforces', 'AtCoder', 'TopCoder', 'Google Code Jam'],
    timeCommitment: '2-4 hours per contest',
    difficulty: 'Intermediate to Expert'
  },
  {
    type: 'Domain-Specific Challenges',
    description: 'Specialized problems in specific fields',
    skills: ['Machine Learning', 'Cybersecurity', 'Game Development', 'Mobile Apps'],
    platforms: ['Kaggle', 'HackerRank', 'Unity Learn', 'Android Codelabs'],
    timeCommitment: 'Varies by domain',
    difficulty: 'Intermediate to Advanced'
  }
];

const practiceStrategies = [
  {
    strategy: 'Daily Coding Practice',
    description: 'Solve 1-2 problems every day consistently',
    benefits: ['Builds habits', 'Steady improvement', 'Maintains skills'],
    timeRequired: '30-60 minutes daily',
    bestFor: 'Long-term skill development'
  },
  {
    strategy: 'Topic-Focused Sprints',
    description: 'Spend 1-2 weeks focusing on one specific topic',
    benefits: ['Deep understanding', 'Pattern recognition', 'Mastery'],
    timeRequired: '5-10 hours per week',
    bestFor: 'Learning new concepts'
  },
  {
    strategy: 'Mock Interview Practice',
    description: 'Simulate real interview conditions with timed problems',
    benefits: ['Interview readiness', 'Time management', 'Pressure handling'],
    timeRequired: '1-2 hours per session',
    bestFor: 'Job interview preparation'
  },
  {
    strategy: 'Project-Based Learning',
    description: 'Build complete applications from start to finish',
    benefits: ['Real-world skills', 'Portfolio building', 'End-to-end experience'],
    timeRequired: '10-50 hours per project',
    bestFor: 'Practical skill development'
  }
];

const difficultyProgression = [
  {
    level: 'Beginner (0-6 months)',
    focus: 'Basic syntax and simple problem solving',
    topics: ['Variables and loops', 'Basic arrays', 'Simple string manipulation', 'Basic math problems'],
    platforms: ['HackerRank Easy', 'Codewars 8-7 kyu', 'Exercism'],
    goals: ['Solve 50+ easy problems', 'Learn basic patterns', 'Build confidence']
  },
  {
    level: 'Intermediate (6-18 months)',
    focus: 'Data structures and common algorithms',
    topics: ['Hash tables', 'Linked lists', 'Binary trees', 'Basic dynamic programming', 'Graph traversal'],
    platforms: ['LeetCode Easy/Medium', 'HackerRank Medium', 'Codewars 6-5 kyu'],
    goals: ['Solve 200+ problems', 'Master common patterns', 'Improve time complexity']
  },
  {
    level: 'Advanced (18+ months)',
    focus: 'Complex algorithms and optimization',
    topics: ['Advanced DP', 'Graph algorithms', 'Tree algorithms', 'System design', 'Mathematical algorithms'],
    platforms: ['LeetCode Hard', 'AtCoder', 'Codeforces', 'TopCoder'],
    goals: ['Solve hard problems', 'Optimize solutions', 'Compete in contests']
  }
];

export default function PracticePage() {
  return (
    <div className="flex flex-col gap-8 md:gap-12">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/resources/books"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Books & Documentation</span>
        </Link>
        <Link
          href="/resources/communities"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>Next: Communities</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex items-center gap-3">
          <Code className="w-8 h-8 text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Practice Problems
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Sharpen your programming skills through hands-on practice. From coding challenges 
          to real-world projects, find the right practice method for your goals.
        </p>
      </div>

      {/* Why Practice Matters */}
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
          🎯 Why Practice Problems Are Essential
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Skill Development:</h4>
            <ul className="text-purple-800 dark:text-purple-200 text-sm [&>li]:mb-1">
              <li>• Reinforce programming concepts</li>
              <li>• Improve problem-solving abilities</li>
              <li>• Learn new algorithms and patterns</li>
              <li>• Build coding speed and accuracy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Career Benefits:</h4>
            <ul className="text-purple-800 dark:text-purple-200 text-sm [&>li]:mb-1">
              <li>• Prepare for technical interviews</li>
              <li>• Demonstrate skills to employers</li>
              <li>• Build a strong portfolio</li>
              <li>• Stay current with industry trends</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Personal Growth:</h4>
            <ul className="text-purple-800 dark:text-purple-200 text-sm [&>li]:mb-1">
              <li>• Build confidence in coding</li>
              <li>• Develop persistence and grit</li>
              <li>• Learn from mistakes</li>
              <li>• Join programming communities</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Practice Platforms */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Top Practice Platforms
        </h2>
        <div className="flex flex-col gap-6 md:gap-8">
          {practicePlatforms.map((platform, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{platform.name}</h3>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Trophy key={i} className={`w-4 h-4 ${i < platform.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full font-medium">
                    {platform.type}
                  </span>
                  <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full font-medium">
                    {platform.difficulty}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{platform.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">✅ Strengths:</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-xs [&>li]:mb-1">
                    {platform.strengths.map((strength, i) => (
                      <li key={i}>• {strength}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">❌ Weaknesses:</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-xs [&>li]:mb-1">
                    {platform.weaknesses.map((weakness, i) => (
                      <li key={i}>• {weakness}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">🎯 Best For:</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-xs [&>li]:mb-1">
                    {platform.bestFor.map((use, i) => (
                      <li key={i}>• {use}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">📊 Details:</h4>
                  <div className="text-xs text-gray-600 dark:text-gray-300 [&>li]:mb-1">
                    <p><strong>Problems:</strong> {platform.problemCount}</p>
                    <p><strong>Languages:</strong> {platform.languages.slice(0, 3).join(', ')}...</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded text-sm font-medium transition-colors"
                >
                  Visit Platform
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Types of Practice */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Types of Programming Practice
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {practiceTypes.map((type, index) => (
            <div key={index} className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">{type.type}</h3>
              <p className="text-blue-800 dark:text-blue-200 text-sm mb-3">{type.description}</p>
              
              <div className="flex flex-col gap-3">
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1 text-sm">Key Skills:</h4>
                  <div className="flex flex-wrap gap-1">
                    {type.skills.map((skill, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1 text-sm">Recommended Platforms:</h4>
                  <p className="text-blue-800 dark:text-blue-200 text-xs">{type.platforms.join(', ')}</p>
                </div>
                
                <div className="flex justify-between text-xs">
                  <span className="text-blue-700 dark:text-blue-300">
                    <strong>Time:</strong> {type.timeCommitment}
                  </span>
                  <span className="text-blue-700 dark:text-blue-300">
                    <strong>Level:</strong> {type.difficulty}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Practice Strategies */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Effective Practice Strategies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {practiceStrategies.map((strategy, index) => (
            <div key={index} className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-green-600" />
                <h3 className="font-semibold text-green-900 dark:text-green-100">{strategy.strategy}</h3>
              </div>
              <p className="text-green-800 dark:text-green-200 text-sm mb-3">{strategy.description}</p>
              
              <div className="flex flex-col gap-2">
                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1 text-sm">Benefits:</h4>
                  <ul className="text-green-800 dark:text-green-200 text-xs [&>li]:mb-1">
                    {strategy.benefits.map((benefit, i) => (
                      <li key={i}>• {benefit}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between text-xs pt-2 border-t border-green-200 dark:border-green-700">
                  <span className="text-green-700 dark:text-green-300">
                    <strong>Time:</strong> {strategy.timeRequired}
                  </span>
                  <span className="text-green-700 dark:text-green-300">
                    <strong>Best for:</strong> {strategy.bestFor}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Difficulty Progression */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Practice Progression Guide
        </h2>
        <div className="flex flex-col gap-6 md:gap-8">
          {difficultyProgression.map((level, index) => (
            <div key={index} className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-orange-900 dark:text-orange-100">
                  {level.level}
                </h3>
              </div>
              
              <p className="text-orange-800 dark:text-orange-200 text-sm mb-4">{level.focus}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 text-sm">Key Topics:</h4>
                  <ul className="text-orange-800 dark:text-orange-200 text-xs [&>li]:mb-1">
                    {level.topics.map((topic, i) => (
                      <li key={i}>• {topic}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 text-sm">Platforms:</h4>
                  <ul className="text-orange-800 dark:text-orange-200 text-xs [&>li]:mb-1">
                    {level.platforms.map((platform, i) => (
                      <li key={i}>• {platform}</li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 text-sm">Goals:</h4>
                  <ul className="text-orange-800 dark:text-orange-200 text-xs [&>li]:mb-1">
                    {level.goals.map((goal, i) => (
                      <li key={i}>• {goal}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Getting Started */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
        <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-4">
          🚀 Getting Started with Practice
        </h3>
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100">Choose Your Platform</h4>
              <p className="text-yellow-800 dark:text-yellow-200 text-sm">Start with HackerRank or Codewars for beginners, LeetCode for interview prep</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100">Set a Schedule</h4>
              <p className="text-yellow-800 dark:text-yellow-200 text-sm">Commit to 30-60 minutes daily rather than long weekend sessions</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100">Start Easy</h4>
              <p className="text-yellow-800 dark:text-yellow-200 text-sm">Build confidence with easier problems before tackling harder ones</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100">Learn from Solutions</h4>
              <p className="text-yellow-800 dark:text-yellow-200 text-sm">Study other people's solutions to learn new approaches and patterns</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/resources/books"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Books & Documentation</span>
        </Link>
        <Link
          href="/resources/communities"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Next: Communities</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
