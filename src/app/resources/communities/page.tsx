import Link from 'next/link';
import { ArrowLeft, Users, ExternalLink } from 'lucide-react';

const communities = [
  {
    name: 'Stack Overflow',
    type: 'Q&A Platform',
    description: 'The largest programming Q&A community with expert answers',
    topics: ['All programming languages', 'Frameworks', 'Tools', 'Best practices'],
    url: 'https://stackoverflow.com'
  },
  {
    name: 'r/Programming',
    type: 'Discussion Forum',
    description: 'General programming discussion and news',
    topics: ['Programming news', 'Industry trends', 'General discussion'],
    url: 'https://reddit.com/r/programming'
  },
  {
    name: 'r/LearnProgramming',
    type: 'Learning Community',
    description: 'Reddit community for learning programming from scratch',
    topics: ['Beginner questions', 'Learning resources', 'Career advice'],
    url: 'https://reddit.com/r/learnprogramming'
  },
  {
    name: 'r/CodingHelp',
    type: 'Help Community',
    description: 'Get help with coding problems and debugging',
    topics: ['Debugging help', 'Code review', 'Programming assistance'],
    url: 'https://reddit.com/r/codinghelp'
  },
  {
    name: 'CodingHelp Discord',
    type: 'Real-time Chat',
    description: 'Real-time programming help and community chat',
    topics: ['Live coding help', 'Voice chat', 'Screen sharing'],
    url: 'https://discord.gg/geQEUBm'
  },
  {
    name: 'The Programmers Hangout',
    type: 'Discord Community',
    description: 'Large programming Discord with active help channels',
    topics: ['Programming help', 'Project collaboration', 'Career advice'],
    url: 'https://discord.gg/programming'
  },
  {
    name: 'Dev.to',
    type: 'Blogging Platform',
    description: 'Developer blogging platform with supportive community',
    topics: ['Technical articles', 'Career advice', 'Tutorials'],
    url: 'https://dev.to'
  },
  {
    name: 'Hashnode',
    type: 'Developer Blogging',
    description: 'Developer-focused blogging platform',
    topics: ['Technical tutorials', 'Project showcases', 'Learning journeys'],
    url: 'https://hashnode.com'
  },
  {
    name: 'GitHub Discussions',
    type: 'Project Communities',
    description: 'Community discussions around open source projects',
    topics: ['Open source', 'Project discussions', 'Feature requests'],
    url: 'https://github.com'
  },
  {
    name: 'Hacker News',
    type: 'Tech News',
    description: 'Tech news and discussion community',
    topics: ['Tech news', 'Startup culture', 'Programming trends'],
    url: 'https://news.ycombinator.com'
  },
  {
    name: 'IndieHackers',
    type: 'Entrepreneur Community',
    description: 'Community for indie developers and entrepreneurs',
    topics: ['Indie development', 'Business advice', 'Product launches'],
    url: 'https://indiehackers.com'
  },
  {
    name: 'Lobsters',
    type: 'Tech Discussion',
    description: 'Computing-focused community with high-quality discussions',
    topics: ['Computer science', 'Programming', 'Technology'],
    url: 'https://lobste.rs'
  },
  {
    name: 'CodeNewbie Community',
    type: 'Beginner-Friendly',
    description: 'Supportive community for new programmers',
    topics: ['Beginner programming', 'Career transitions', 'Learning support'],
    url: 'https://community.codenewbie.org'
  },
  {
    name: 'FreeCodeCamp Forum',
    type: 'Learning Forum',
    description: 'Official forum for FreeCodeCamp learners',
    topics: ['Web development', 'Curriculum help', 'Project feedback'],
    url: 'https://forum.freecodecamp.org'
  },
  {
    name: 'The Odin Project Discord',
    type: 'Learning Community',
    description: 'Community for The Odin Project curriculum',
    topics: ['Full-stack development', 'Project help', 'Study groups'],
    url: 'https://discord.gg/fbFCkYabZB'
  },
  {
    name: 'Codecademy Forums',
    type: 'Learning Platform',
    description: 'Official Codecademy community forums',
    topics: ['Course help', 'Programming exercises', 'Career advice'],
    url: 'https://discuss.codecademy.com'
  },
  {
    name: 'Women Who Code',
    type: 'Diversity Community',
    description: 'Global community supporting women in tech',
    topics: ['Career development', 'Technical skills', 'Networking'],
    url: 'https://womenwhocode.com'
  },
  {
    name: 'Black Girls CODE',
    type: 'Diversity Community',
    description: 'Community empowering young women of color in tech',
    topics: ['Programming education', 'Mentorship', 'Career support'],
    url: 'https://blackgirlscode.com'
  },
  {
    name: 'Tech Twitter',
    type: 'Social Network',
    description: 'Programming community on Twitter/X',
    topics: ['Quick tips', 'Industry news', 'Networking'],
    url: 'https://twitter.com'
  },
  {
    name: 'LinkedIn Tech Groups',
    type: 'Professional Network',
    description: 'Professional programming communities on LinkedIn',
    topics: ['Career networking', 'Industry insights', 'Job opportunities'],
    url: 'https://linkedin.com'
  }
];

export default function CommunitiesPage() {
  return (
    <div className="flex flex-col gap-8 md:gap-12">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/resources/practice-platforms"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Practice Platforms</span>
        </Link>
        <Link
          href="/resources"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>Back to Resources</span>
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
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          🤝 Why Programming Communities Are Essential
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Learning Support:</h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 [&>li]:mb-2">
              <li>Get help when you're stuck</li>
              <li>Learn from others' experiences</li>
              <li>Discover new tools and techniques</li>
              <li>Avoid common pitfalls</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Career Growth:</h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 [&>li]:mb-2">
              <li>Network with professionals</li>
              <li>Find job opportunities</li>
              <li>Get career advice</li>
              <li>Build your reputation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Motivation:</h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 [&>li]:mb-2">
              <li>Stay motivated during challenges</li>
              <li>Celebrate achievements</li>
              <li>Find accountability partners</li>
              <li>Combat imposter syndrome</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Programming Communities */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Programming Communities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map((community, index) => (
            <div key={index} className="p-6 transition-all hover:opacity-80">
              <div className="mb-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{community.name}</h3>
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  {community.type}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">{community.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Topics:</h4>
                <div className="flex flex-wrap gap-2">
                  {community.topics.map((topic, i) => (
                    <span key={i} className="text-gray-600 dark:text-gray-300">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              
              <a
                href={community.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition-colors w-full justify-center"
              >
                <span>Visit Community</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/resources/practice-platforms"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Practice Platforms</span>
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
