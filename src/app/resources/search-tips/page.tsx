import { Search, Target, Lightbulb, ExternalLink } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';

const searchExamples = [
  {
    category: 'Error Messages',
    bad: 'code not working',
    good: 'python list comprehension syntax error',
    better: 'python "SyntaxError: invalid syntax" list comprehension',
    explanation: 'Include the exact error message in quotes and the programming language'
  },
  {
    category: 'Concepts',
    bad: 'how to loop',
    good: 'javascript for loop array',
    better: 'javascript iterate array forEach vs for loop performance',
    explanation: 'Be specific about the language and include context about your use case'
  },
  {
    category: 'Libraries/Frameworks',
    bad: 'react problem',
    good: 'react component not updating',
    better: 'react useState not triggering re-render useEffect',
    explanation: 'Include specific function names and describe the behavior you\'re seeing'
  }
];

const searchOperators = [
  {
    operator: '"exact phrase"',
    description: 'Search for exact text',
    example: '"cannot read property of undefined"',
    useCase: 'Perfect for error messages'
  },
  {
    operator: 'site:stackoverflow.com',
    description: 'Search specific website',
    example: 'site:stackoverflow.com react hooks',
    useCase: 'Focus on trusted sources'
  },
  {
    operator: '-word',
    description: 'Exclude a word',
    example: 'javascript promises -jquery',
    useCase: 'Remove irrelevant results'
  },
  {
    operator: 'filetype:pdf',
    description: 'Search specific file types',
    example: 'python tutorial filetype:pdf',
    useCase: 'Find documentation or books'
  },
  {
    operator: 'intitle:',
    description: 'Search in page titles',
    example: 'intitle:"react tutorial"',
    useCase: 'Find specific tutorials'
  },
  {
    operator: 'OR',
    description: 'Search for either term',
    example: 'javascript OR typescript arrays',
    useCase: 'Broaden your search'
  }
];

export default function SearchTipsPage() {
  return (
    <PageLayout
      title="Search Tips"
      description="Master the art of googling programming problems and find solutions faster."
      icon={<Search className="w-8 h-8 text-indigo-600" />}
      previousLink={{
        href: "/resources/getting-help",
        label: "Previous: Getting Help"
      }}
      nextLink={{
        href: "/resources",
        label: "Back to Resources"
      }}
    >

      {/* Search Strategies */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-6 h-6 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Effective Search Strategies
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🎯 Be Specific:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-1">
              <li>Include the programming language</li>
              <li>Use exact error messages in quotes</li>
              <li>Mention specific functions or methods</li>
              <li>Add version numbers when relevant</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🔍 Use Keywords:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-1">
              <li>Add "tutorial", "example", or "how to"</li>
              <li>Include "stackoverflow" or "github"</li>
              <li>Search for concepts, not just code</li>
              <li>Use technical terms over casual language</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Search Examples */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Search Examples: Bad vs Good vs Better
        </h2>
        <div className="flex flex-col gap-6">
          {searchExamples.map((example, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{example.category}</h3>
              <div className="flex flex-col gap-3">
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded border border-red-200 dark:border-red-800">
                  <span className="text-red-700 dark:text-red-300 font-semibold">❌ Bad: </span>
                  <code className="text-red-800 dark:text-red-200">{example.bad}</code>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded border border-yellow-200 dark:border-yellow-800">
                  <span className="text-yellow-700 dark:text-yellow-300 font-semibold">⚠️ Good: </span>
                  <code className="text-yellow-800 dark:text-yellow-200">{example.good}</code>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded border border-green-200 dark:border-green-800">
                  <span className="text-green-700 dark:text-green-300 font-semibold">✅ Better: </span>
                  <code className="text-green-800 dark:text-green-200">{example.better}</code>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  <strong>Why it works:</strong> {example.explanation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Search Operators */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Google Search Operators
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {searchOperators.map((op, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-2">
                <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm font-mono">
                  {op.operator}
                </code>
                <span className="text-gray-600 dark:text-gray-300 text-sm">{op.description}</span>
              </div>
              <div className="mb-2">
                <span className="text-gray-700 dark:text-gray-300 text-sm font-semibold">Example: </span>
                <code className="text-blue-600 dark:text-blue-400 text-sm">{op.example}</code>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-xs">{op.useCase}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Best Practices */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="w-6 h-6 text-yellow-600" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Search Best Practices
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🔄 Iterate Your Search:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-1">
              <li>Start broad, then get specific</li>
              <li>Try different keyword combinations</li>
              <li>Remove or add terms based on results</li>
              <li>Use synonyms if stuck</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">📚 Check Multiple Sources:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-1">
              <li>Stack Overflow for Q&A</li>
              <li>Official documentation</li>
              <li>GitHub for code examples</li>
              <li>Medium/Dev.to for tutorials</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">⏰ Consider Recency:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-1">
              <li>Use Tools → Any time → Past year</li>
              <li>Check answer dates on Stack Overflow</li>
              <li>Prefer recent tutorials for frameworks</li>
              <li>Verify if solutions are still valid</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Useful Resources */}
      <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6 border border-indigo-200 dark:border-indigo-800">
        <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-4">
          🔗 Useful Search Resources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Search Engines:</h4>
            <ul className="text-indigo-800 dark:text-indigo-200 text-sm [&>li]:mb-1">
              <li>
                <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  Google <ExternalLink className="w-3 h-3" />
                </a> - Best overall results
              </li>
              <li>
                <a href="https://duckduckgo.com" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  DuckDuckGo <ExternalLink className="w-3 h-3" />
                </a> - Privacy-focused
              </li>
              <li>
                <a href="https://searchcode.com" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  SearchCode <ExternalLink className="w-3 h-3" />
                </a> - Code-specific search
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Developer Tools:</h4>
            <ul className="text-indigo-800 dark:text-indigo-200 text-sm [&>li]:mb-1">
              <li>
                <a href="https://github.com/search" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  GitHub Search <ExternalLink className="w-3 h-3" />
                </a> - Find code examples
              </li>
              <li>
                <a href="https://devdocs.io" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  DevDocs <ExternalLink className="w-3 h-3" />
                </a> - API documentation
              </li>
              <li>
                <a href="https://caniuse.com" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  Can I Use <ExternalLink className="w-3 h-3" />
                </a> - Browser support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
