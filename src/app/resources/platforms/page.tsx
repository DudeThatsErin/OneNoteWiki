import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen, Star, DollarSign, Clock } from 'lucide-react';

const platforms = [
  {
    name: 'freeCodeCamp',
    type: 'Free',
    rating: 5,
    description: 'Comprehensive full-stack web development curriculum with hands-on projects',
    strengths: ['Completely free', 'Project-based learning', 'Strong community', 'Certificates'],
    weaknesses: ['Limited non-web topics', 'Can be overwhelming', 'Self-paced only'],
    bestFor: ['Complete beginners', 'Web development', 'Career changers', 'Budget-conscious learners'],
    topics: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'Data Analysis'],
    timeCommitment: '300+ hours per certification',
    url: 'https://freecodecamp.org'
  },
  {
    name: 'Codecademy',
    type: 'Freemium',
    rating: 4,
    description: 'Interactive coding lessons with immediate feedback and guided projects',
    strengths: ['Interactive environment', 'Immediate feedback', 'Good for beginners', 'Multiple languages'],
    weaknesses: ['Limited free content', 'Less depth', 'Subscription required for projects'],
    bestFor: ['Interactive learners', 'Beginners', 'Multiple language exploration'],
    topics: ['Python', 'JavaScript', 'Java', 'C++', 'SQL', 'Data Science'],
    timeCommitment: '2-4 hours per week',
    url: 'https://codecademy.com'
  },
  {
    name: 'Coursera',
    type: 'Paid',
    rating: 5,
    description: 'University-level courses from top institutions with academic rigor',
    strengths: ['University quality', 'Certificates/degrees', 'Expert instructors', 'Comprehensive'],
    weaknesses: ['Can be expensive', 'Academic pace', 'Less hands-on'],
    bestFor: ['Academic learners', 'Career advancement', 'Structured learning'],
    topics: ['Computer Science', 'Machine Learning', 'Data Science', 'Software Engineering'],
    timeCommitment: '4-10 hours per week',
    url: 'https://coursera.org'
  },
  {
    name: 'Udemy',
    type: 'Paid',
    rating: 4,
    description: 'Marketplace of courses from individual instructors on specific topics',
    strengths: ['Affordable courses', 'Specific topics', 'Lifetime access', 'Frequent sales'],
    weaknesses: ['Variable quality', 'No standardization', 'Outdated content risk'],
    bestFor: ['Specific skills', 'Budget learners', 'Self-directed study'],
    topics: ['Web Development', 'Mobile Apps', 'Game Development', 'DevOps'],
    timeCommitment: '10-50 hours per course',
    url: 'https://udemy.com'
  },
  {
    name: 'Pluralsight',
    type: 'Paid',
    rating: 4,
    description: 'Technology-focused platform with skill assessments and learning paths',
    strengths: ['Tech-focused', 'Skill assessments', 'Learning paths', 'High quality'],
    weaknesses: ['Expensive', 'Tech-only', 'Corporate-focused'],
    bestFor: ['Professional developers', 'Enterprise teams', 'Skill advancement'],
    topics: ['Cloud Computing', 'DevOps', 'Cybersecurity', 'Software Development'],
    timeCommitment: '3-6 hours per week',
    url: 'https://pluralsight.com'
  },
  {
    name: 'Khan Academy',
    type: 'Free',
    rating: 4,
    description: 'Educational platform with computer programming and computer science courses',
    strengths: ['Completely free', 'Beginner-friendly', 'Good fundamentals', 'No ads'],
    weaknesses: ['Limited advanced topics', 'Slower pace', 'Less industry focus'],
    bestFor: ['Complete beginners', 'Young learners', 'Fundamentals'],
    topics: ['JavaScript', 'HTML/CSS', 'SQL', 'Algorithms', 'Computer Science'],
    timeCommitment: '1-3 hours per week',
    url: 'https://khanacademy.org'
  }
];

const platformTypes = [
  {
    type: 'Interactive Coding Platforms',
    description: 'Hands-on coding with immediate feedback',
    examples: ['Codecademy', 'freeCodeCamp', 'Khan Academy'],
    pros: ['Learn by doing', 'Immediate feedback', 'No setup required'],
    cons: ['Limited to web-based coding', 'May not reflect real development']
  },
  {
    type: 'Video Course Platforms',
    description: 'Structured video lessons with projects',
    examples: ['Udemy', 'Coursera', 'Pluralsight'],
    pros: ['Comprehensive coverage', 'Expert instructors', 'Flexible pacing'],
    cons: ['Passive learning', 'Requires self-discipline', 'Can become outdated']
  },
  {
    type: 'University/Academic Platforms',
    description: 'Formal education with certificates or degrees',
    examples: ['Coursera', 'edX', 'MIT OpenCourseWare'],
    pros: ['Academic rigor', 'Recognized credentials', 'Comprehensive theory'],
    cons: ['Slower pace', 'More expensive', 'Less practical focus']
  },
  {
    type: 'Bootcamp-Style Platforms',
    description: 'Intensive, career-focused programs',
    examples: ['Lambda School', 'App Academy', 'General Assembly'],
    pros: ['Job-focused', 'Intensive learning', 'Career support'],
    cons: ['Very expensive', 'High time commitment', 'High pressure']
  }
];

const choosingCriteria = [
  {
    factor: 'Learning Style',
    considerations: [
      'Do you prefer interactive coding or video lectures?',
      'Do you need immediate feedback or can you self-assess?',
      'Do you learn better with structure or flexibility?'
    ]
  },
  {
    factor: 'Budget',
    considerations: [
      'Free options: freeCodeCamp, Khan Academy, YouTube',
      'Budget-friendly: Udemy courses ($10-50)',
      'Premium: Coursera, Pluralsight ($30-80/month)'
    ]
  },
  {
    factor: 'Time Commitment',
    considerations: [
      'Casual learning: 1-3 hours/week',
      'Serious learning: 5-10 hours/week',
      'Career change: 20+ hours/week'
    ]
  },
  {
    factor: 'Goals',
    considerations: [
      'Hobby/personal interest: Free platforms',
      'Career change: Comprehensive programs',
      'Skill advancement: Specialized courses'
    ]
  }
];

export default function PlatformsPage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/resources"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Resources</span>
        </Link>
        <Link
          href="/resources/books"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>Next: Books & Documentation</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <BookOpen className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Learning Platforms
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Discover the best online platforms for learning programming. From free interactive 
          courses to comprehensive university programs, find the right fit for your goals and learning style.
        </p>
      </div>

      {/* Platform Overview */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
          🎯 Choosing the Right Platform
        </h3>
        <div className="text-blue-800 dark:text-blue-200 space-y-2">
          <p>
            With hundreds of learning platforms available, choosing the right one can be overwhelming. 
            The key is matching the platform to your learning style, goals, and available time.
          </p>
          <p className="text-sm">
            <strong>Pro tip:</strong> Many successful developers use multiple platforms - start with one 
            for structured learning, then supplement with others for specific skills.
          </p>
        </div>
      </div>

      {/* Platform Comparison */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Popular Learning Platforms
        </h2>
        <div className="space-y-6">
          {platforms.map((platform, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{platform.name}</h3>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < platform.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    platform.type === 'Free' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                    platform.type === 'Freemium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                    'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                  }`}>
                    {platform.type}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{platform.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">✅ Strengths:</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-xs space-y-1">
                    {platform.strengths.map((strength, i) => (
                      <li key={i}>• {strength}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">❌ Weaknesses:</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-xs space-y-1">
                    {platform.weaknesses.map((weakness, i) => (
                      <li key={i}>• {weakness}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">🎯 Best For:</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-xs space-y-1">
                    {platform.bestFor.map((use, i) => (
                      <li key={i}>• {use}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">📚 Topics:</h4>
                  <div className="flex flex-wrap gap-1">
                    {platform.topics.map((topic, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{platform.timeCommitment}</span>
                  </div>
                </div>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium transition-colors"
                >
                  Visit Platform
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Types */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Types of Learning Platforms
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {platformTypes.map((type, index) => (
            <div key={index} className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
              <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">{type.type}</h3>
              <p className="text-purple-800 dark:text-purple-200 text-sm mb-3">{type.description}</p>
              
              <div className="mb-3">
                <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-1 text-sm">Examples:</h4>
                <div className="flex flex-wrap gap-1">
                  {type.examples.map((example, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-700 dark:text-purple-300">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-1 text-xs">Pros:</h4>
                  <ul className="text-purple-800 dark:text-purple-200 text-xs space-y-1">
                    {type.pros.map((pro, i) => (
                      <li key={i}>• {pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-1 text-xs">Cons:</h4>
                  <ul className="text-purple-800 dark:text-purple-200 text-xs space-y-1">
                    {type.cons.map((con, i) => (
                      <li key={i}>• {con}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Choosing Criteria */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          How to Choose the Right Platform
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {choosingCriteria.map((criteria, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{criteria.factor}</h3>
              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                {criteria.considerations.map((consideration, i) => (
                  <li key={i}>• {consideration}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Recommendations */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
          🎯 Our Recommendations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Complete Beginners:</h4>
            <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
              <li>• Start with <strong>freeCodeCamp</strong></li>
              <li>• Supplement with <strong>Khan Academy</strong></li>
              <li>• Join community forums</li>
              <li>• Focus on one language first</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Career Changers:</h4>
            <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
              <li>• <strong>Coursera</strong> for structured learning</li>
              <li>• <strong>Udemy</strong> for specific skills</li>
              <li>• Consider bootcamp programs</li>
              <li>• Build a portfolio</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Working Professionals:</h4>
            <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
              <li>• <strong>Pluralsight</strong> for tech skills</li>
              <li>• <strong>Udemy</strong> for specific topics</li>
              <li>• Focus on relevant technologies</li>
              <li>• Use company learning budgets</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/resources"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Resources</span>
        </Link>
        <Link
          href="/resources/books"
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Next: Books & Documentation</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
