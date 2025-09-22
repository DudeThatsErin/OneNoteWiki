import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen, Star, ExternalLink } from 'lucide-react';

const programmingBooks = [
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    category: 'Best Practices',
    difficulty: 'Intermediate',
    rating: 5,
    description: 'Essential principles for writing maintainable, readable code',
    keyTopics: ['Code quality', 'Refactoring', 'Functions', 'Classes', 'Error handling'],
    whyRead: 'Transforms how you think about code quality and maintainability',
    bestFor: ['Mid-level developers', 'Code review skills', 'Professional development'],
    price: '$25-35'
  },
  {
    title: 'You Don\'t Know JS (Series)',
    author: 'Kyle Simpson',
    category: 'JavaScript',
    difficulty: 'Beginner to Advanced',
    rating: 5,
    description: 'Deep dive into JavaScript fundamentals and advanced concepts',
    keyTopics: ['Scope & Closures', 'this & Object Prototypes', 'Types & Grammar', 'Async & Performance'],
    whyRead: 'Master JavaScript from the ground up with deep understanding',
    bestFor: ['JavaScript developers', 'Web developers', 'Understanding fundamentals'],
    price: 'Free online / $20-30 print'
  },
  {
    title: 'Automate the Boring Stuff with Python',
    author: 'Al Sweigart',
    category: 'Python',
    difficulty: 'Beginner',
    rating: 5,
    description: 'Practical Python programming for everyday tasks',
    keyTopics: ['File manipulation', 'Web scraping', 'Excel automation', 'Email automation'],
    whyRead: 'Learn Python through practical, real-world projects',
    bestFor: ['Python beginners', 'Automation enthusiasts', 'Non-programmers'],
    price: 'Free online / $25-30 print'
  },
  {
    title: 'Design Patterns',
    author: 'Gang of Four',
    category: 'Software Design',
    difficulty: 'Advanced',
    rating: 4,
    description: 'Classic book on reusable object-oriented design patterns',
    keyTopics: ['Creational patterns', 'Structural patterns', 'Behavioral patterns', 'OOP design'],
    whyRead: 'Learn proven solutions to common programming problems',
    bestFor: ['Experienced developers', 'Software architects', 'OOP practitioners'],
    price: '$35-45'
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'David Thomas & Andrew Hunt',
    category: 'Career Development',
    difficulty: 'Intermediate',
    rating: 5,
    description: 'Timeless advice for becoming a better programmer',
    keyTopics: ['Problem solving', 'Code craftsmanship', 'Career advice', 'Best practices'],
    whyRead: 'Develop the mindset and habits of successful programmers',
    bestFor: ['All developers', 'Career growth', 'Professional mindset'],
    price: '$30-40'
  },
  {
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke',
    category: 'JavaScript',
    difficulty: 'Beginner to Intermediate',
    rating: 4,
    description: 'Modern introduction to programming with JavaScript',
    keyTopics: ['JavaScript fundamentals', 'DOM manipulation', 'Node.js', 'Project-based learning'],
    whyRead: 'Comprehensive JavaScript learning with hands-on projects',
    bestFor: ['JavaScript beginners', 'Web development', 'Interactive learning'],
    price: 'Free online / $25-35 print'
  }
];

const documentationSites = [
  {
    name: 'MDN Web Docs',
    category: 'Web Development',
    description: 'Comprehensive documentation for web technologies',
    topics: ['HTML', 'CSS', 'JavaScript', 'Web APIs', 'HTTP'],
    strengths: ['Authoritative', 'Up-to-date', 'Examples', 'Browser compatibility'],
    url: 'https://developer.mozilla.org',
    rating: 5
  },
  {
    name: 'Python.org Documentation',
    category: 'Python',
    description: 'Official Python documentation and tutorials',
    topics: ['Python syntax', 'Standard library', 'Language reference', 'Tutorials'],
    strengths: ['Official source', 'Comprehensive', 'Well-organized', 'Multiple formats'],
    url: 'https://docs.python.org',
    rating: 5
  },
  {
    name: 'React Documentation',
    category: 'React',
    description: 'Official React documentation with interactive examples',
    topics: ['Components', 'Hooks', 'State management', 'Best practices'],
    strengths: ['Interactive examples', 'Modern approach', 'Clear explanations', 'Regular updates'],
    url: 'https://react.dev',
    rating: 5
  },
  {
    name: 'Next.js Documentation',
    category: 'Next.js',
    description: 'Official Next.js documentation for React framework',
    topics: ['App Router', 'Server Components', 'API Routes', 'Deployment'],
    strengths: ['Excellent examples', 'Clear tutorials', 'Up-to-date', 'Interactive demos'],
    url: 'https://nextjs.org/docs',
    rating: 5
  },
  {
    name: 'Expo Documentation',
    category: 'React Native',
    description: 'Complete documentation for Expo and EAS services',
    topics: ['React Native', 'EAS Build', 'EAS Submit', 'Expo SDK'],
    strengths: ['Comprehensive guides', 'Code examples', 'Video tutorials', 'Active community'],
    url: 'https://docs.expo.dev',
    rating: 5
  },
  {
    name: 'Nuxt Documentation',
    category: 'Vue.js',
    description: 'Official Nuxt.js documentation for Vue framework',
    topics: ['Vue 3', 'Server-side rendering', 'Static generation', 'Modules'],
    strengths: ['Clear structure', 'Good examples', 'Migration guides', 'TypeScript support'],
    url: 'https://nuxt.com/docs',
    rating: 5
  },
  {
    name: 'TypeScript Documentation',
    category: 'TypeScript',
    description: 'Official TypeScript documentation and handbook',
    topics: ['Type system', 'Interfaces', 'Generics', 'Advanced types'],
    strengths: ['Comprehensive handbook', 'Playground examples', 'Migration guides', 'Best practices'],
    url: 'https://www.typescriptlang.org/docs',
    rating: 5
  },
  {
    name: 'Stack Overflow',
    category: 'Q&A',
    description: 'Community-driven programming Q&A platform',
    topics: ['All programming languages', 'Debugging', 'Best practices', 'Code examples'],
    strengths: ['Community answers', 'Real problems', 'Code examples', 'Voting system'],
    url: 'https://stackoverflow.com',
    rating: 4
  },
  {
    name: 'GitHub Documentation',
    category: 'Version Control',
    description: 'Comprehensive Git and GitHub documentation',
    topics: ['Git basics', 'GitHub features', 'Collaboration', 'CI/CD'],
    strengths: ['Practical examples', 'Visual guides', 'Regular updates', 'Community focus'],
    url: 'https://docs.github.com',
    rating: 4
  }
];

const bookCategories = [
  {
    category: 'Fundamentals',
    description: 'Core programming concepts and computer science basics',
    recommendedBooks: ['Clean Code', 'Code Complete', 'Structure and Interpretation of Computer Programs'],
    bestFor: 'Building strong foundation, understanding principles'
  },
  {
    category: 'Language-Specific',
    description: 'Deep dives into specific programming languages',
    recommendedBooks: ['You Don\'t Know JS', 'Effective Java', 'Python Crash Course'],
    bestFor: 'Mastering a particular language, advanced techniques'
  },
  {
    category: 'Software Design',
    description: 'Architecture, patterns, and system design',
    recommendedBooks: ['Design Patterns', 'Clean Architecture', 'System Design Interview'],
    bestFor: 'Senior developers, architects, system design'
  },
  {
    category: 'Career Development',
    description: 'Professional growth and soft skills',
    recommendedBooks: ['The Pragmatic Programmer', 'Soft Skills', 'The Complete Software Developer\'s Career Guide'],
    bestFor: 'Career advancement, leadership, professional skills'
  }
];

const readingTips = [
  {
    tip: 'Code Along',
    description: 'Don\'t just read - type out the examples and experiment with them',
    why: 'Active learning reinforces concepts and helps you understand implementation details'
  },
  {
    tip: 'Take Notes',
    description: 'Keep a programming journal with key concepts and insights',
    why: 'Writing helps retention and creates a personal reference for later'
  },
  {
    tip: 'Apply Immediately',
    description: 'Use new concepts in your current projects or create practice projects',
    why: 'Practical application solidifies learning and shows real-world relevance'
  },
  {
    tip: 'Discuss with Others',
    description: 'Join book clubs, forums, or discuss concepts with colleagues',
    why: 'Different perspectives deepen understanding and reveal new insights'
  }
];

export default function BooksPage() {
  return (
    <div className="flex flex-col gap-8 md:gap-12">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/resources/platforms"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Learning Platforms</span>
        </Link>
        <Link
          href="/resources/practice"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>Next: Practice Problems</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Books & Documentation
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Discover essential programming books and authoritative documentation sources. 
          Build deep knowledge through comprehensive guides and official references.
        </p>
      </div>

      {/* Why Books Matter */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
          📚 Why Books Still Matter in Programming
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Deep Understanding:</h4>
            <ul className="text-green-800 dark:text-green-200 text-sm [&>li]:mb-1">
              <li>• Comprehensive coverage of topics</li>
              <li>• Structured learning progression</li>
              <li>• Expert insights and experience</li>
              <li>• Timeless principles and concepts</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Quality Content:</h4>
            <ul className="text-green-800 dark:text-green-200 text-sm [&>li]:mb-1">
              <li>• Peer-reviewed and edited</li>
              <li>• Well-researched information</li>
              <li>• Proven methodologies</li>
              <li>• Less noise than online content</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Focused Learning:</h4>
            <ul className="text-green-800 dark:text-green-200 text-sm [&>li]:mb-1">
              <li>• No distractions or ads</li>
              <li>• Offline accessibility</li>
              <li>• Encourages deep reading</li>
              <li>• Better retention</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Essential Programming Books */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Essential Programming Books
        </h2>
        <div className="flex flex-col gap-6 md:gap-8">
          {programmingBooks.map((book, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{book.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">by {book.author}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center flex flex-col gap-31">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < book.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    book.difficulty === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                    book.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                    book.difficulty === 'Advanced' ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300' :
                    'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                  }`}>
                    {book.difficulty}
                  </span>
                  <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full font-medium">
                    {book.category}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{book.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">📖 Key Topics:</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-xs [&>li]:mb-1">
                    {book.keyTopics.map((topic, i) => (
                      <li key={i}>• {topic}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">💡 Why Read:</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-xs">{book.whyRead}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">🎯 Best For:</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-xs [&>li]:mb-1">
                    {book.bestFor.map((use, i) => (
                      <li key={i}>• {use}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">💰 Price:</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-xs">{book.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Documentation Sources */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Essential Documentation Sources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documentationSites.map((site, index) => (
            <div key={index} className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100">{site.name}</h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center flex flex-col gap-31">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < site.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium">
                    {site.category}
                  </span>
                </div>
              </div>
              
              <p className="text-blue-800 dark:text-blue-200 text-sm mb-3">{site.description}</p>
              
              <div className="mb-3">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1 text-sm">Topics:</h4>
                <div className="flex flex-wrap gap-1">
                  {site.topics.map((topic, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1 text-sm">Strengths:</h4>
                <ul className="text-blue-800 dark:text-blue-200 text-xs [&>li]:mb-1">
                  {site.strengths.map((strength, i) => (
                    <li key={i}>• {strength}</li>
                  ))}
                </ul>
              </div>
              
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium transition-colors"
              >
                <span>Visit Documentation</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Book Categories */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Book Categories Guide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bookCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{category.category}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{category.description}</p>
              
              <div className="mb-3">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">Recommended Books:</h4>
                <ul className="text-gray-600 dark:text-gray-300 text-xs [&>li]:mb-1">
                  {category.recommendedBooks.map((book, i) => (
                    <li key={i}>• {book}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">Best For:</h4>
                <p className="text-gray-600 dark:text-gray-300 text-xs">{category.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reading Tips */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Effective Reading Strategies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {readingTips.map((tip, index) => (
            <div key={index} className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">{tip.tip}</h3>
              <p className="text-yellow-800 dark:text-yellow-200 text-sm mb-2">{tip.description}</p>
              <p className="text-yellow-700 dark:text-yellow-300 text-xs">
                <strong>Why it works:</strong> {tip.why}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Reading List Recommendations */}
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
          📋 Recommended Reading Order
        </h3>
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100">Start with Language-Specific Books</h4>
              <p className="text-purple-800 dark:text-purple-200 text-sm">Master your primary programming language first</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100">Learn Best Practices</h4>
              <p className="text-purple-800 dark:text-purple-200 text-sm">Read "Clean Code" and "The Pragmatic Programmer"</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100">Explore Design Patterns</h4>
              <p className="text-purple-800 dark:text-purple-200 text-sm">Understand common solutions to programming problems</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100">Focus on Career Development</h4>
              <p className="text-purple-800 dark:text-purple-200 text-sm">Read books on soft skills and professional growth</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/resources/platforms"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Learning Platforms</span>
        </Link>
        <Link
          href="/resources/practice"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Next: Practice Problems</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
