'use client';

import { PageLayout } from '@/components/PageLayout';
import { DataTable } from '@/components/DataTable';
import { Code, ExternalLink } from 'lucide-react';

interface ProgrammingLanguage {
  name: string;
  paradigm: string[];
  difficulty: string;
  popularity: string;
  firstAppeared: number;
  creator: string;
  typing: string;
  compilation: string;
  useCases: string[];
  companies: string[];
  documentation: string;
  officialSite: string;
  github: string;
  packageManager: string;
  fileExtension: string;
  description: string;
}

const programmingLanguagesData: ProgrammingLanguage[] = [
  {
    name: 'JavaScript',
    paradigm: ['Multi-paradigm', 'Functional', 'Object-oriented'],
    difficulty: 'Beginner',
    popularity: 'Very High',
    firstAppeared: 1995,
    creator: 'Brendan Eich',
    typing: 'Dynamic',
    compilation: 'Interpreted',
    useCases: ['Web Development', 'Server-side', 'Mobile Apps', 'Desktop Apps'],
    companies: ['Google', 'Facebook', 'Netflix', 'Airbnb'],
    documentation: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    officialSite: 'https://www.javascript.com/',
    github: 'https://github.com/tc39',
    packageManager: 'npm/yarn',
    fileExtension: '.js, .mjs',
    description: 'High-level, interpreted programming language that is a core technology of the World Wide Web'
  },
  {
    name: 'Python',
    paradigm: ['Multi-paradigm', 'Object-oriented', 'Functional', 'Procedural'],
    difficulty: 'Beginner',
    popularity: 'Very High',
    firstAppeared: 1991,
    creator: 'Guido van Rossum',
    typing: 'Dynamic',
    compilation: 'Interpreted',
    useCases: ['Data Science', 'Web Development', 'AI/ML', 'Automation', 'Scientific Computing'],
    companies: ['Google', 'Instagram', 'Spotify', 'Dropbox'],
    documentation: 'https://docs.python.org/',
    officialSite: 'https://www.python.org/',
    github: 'https://github.com/python/cpython',
    packageManager: 'pip',
    fileExtension: '.py',
    description: 'High-level, general-purpose programming language with emphasis on code readability'
  },
  {
    name: 'Java',
    paradigm: ['Object-oriented', 'Class-based'],
    difficulty: 'Intermediate',
    popularity: 'Very High',
    firstAppeared: 1995,
    creator: 'James Gosling',
    typing: 'Static',
    compilation: 'Compiled to bytecode',
    useCases: ['Enterprise Applications', 'Android Development', 'Web Backend', 'Desktop Applications'],
    companies: ['Oracle', 'Google', 'Amazon', 'LinkedIn'],
    documentation: 'https://docs.oracle.com/en/java/',
    officialSite: 'https://www.oracle.com/java/',
    github: 'https://github.com/openjdk/jdk',
    packageManager: 'Maven/Gradle',
    fileExtension: '.java',
    description: 'Class-based, object-oriented programming language designed to have as few implementation dependencies as possible'
  },
  {
    name: 'TypeScript',
    paradigm: ['Multi-paradigm', 'Object-oriented', 'Functional'],
    difficulty: 'Intermediate',
    popularity: 'High',
    firstAppeared: 2012,
    creator: 'Microsoft',
    typing: 'Static',
    compilation: 'Transpiled to JavaScript',
    useCases: ['Web Development', 'Large-scale Applications', 'Node.js'],
    companies: ['Microsoft', 'Slack', 'Asana', 'Lyft'],
    documentation: 'https://www.typescriptlang.org/docs/',
    officialSite: 'https://www.typescriptlang.org/',
    github: 'https://github.com/microsoft/TypeScript',
    packageManager: 'npm/yarn',
    fileExtension: '.ts, .tsx',
    description: 'Strongly typed programming language that builds on JavaScript'
  },
  {
    name: 'C++',
    paradigm: ['Multi-paradigm', 'Object-oriented', 'Generic', 'Procedural'],
    difficulty: 'Advanced',
    popularity: 'High',
    firstAppeared: 1985,
    creator: 'Bjarne Stroustrup',
    typing: 'Static',
    compilation: 'Compiled',
    useCases: ['System Programming', 'Game Development', 'Embedded Systems', 'High-performance Applications'],
    companies: ['Google', 'Microsoft', 'Adobe', 'Facebook'],
    documentation: 'https://en.cppreference.com/',
    officialSite: 'https://isocpp.org/',
    github: 'https://github.com/cplusplus',
    packageManager: 'Conan/vcpkg',
    fileExtension: '.cpp, .cc, .cxx',
    description: 'General-purpose programming language created as an extension of the C programming language'
  },
  {
    name: 'C#',
    paradigm: ['Multi-paradigm', 'Object-oriented', 'Component-oriented'],
    difficulty: 'Intermediate',
    popularity: 'High',
    firstAppeared: 2000,
    creator: 'Microsoft',
    typing: 'Static',
    compilation: 'Compiled to bytecode',
    useCases: ['Web Development', 'Desktop Applications', 'Game Development', 'Mobile Apps'],
    companies: ['Microsoft', 'Stack Overflow', 'Alibaba', 'Accenture'],
    documentation: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    officialSite: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    github: 'https://github.com/dotnet/csharplang',
    packageManager: 'NuGet',
    fileExtension: '.cs',
    description: 'General-purpose, multi-paradigm programming language encompassing static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines'
  },
  {
    name: 'Go',
    paradigm: ['Procedural', 'Concurrent'],
    difficulty: 'Intermediate',
    popularity: 'Medium',
    firstAppeared: 2009,
    creator: 'Google',
    typing: 'Static',
    compilation: 'Compiled',
    useCases: ['Backend Development', 'Cloud Services', 'DevOps Tools', 'Microservices'],
    companies: ['Google', 'Uber', 'Twitch', 'SoundCloud'],
    documentation: 'https://golang.org/doc/',
    officialSite: 'https://golang.org/',
    github: 'https://github.com/golang/go',
    packageManager: 'Go Modules',
    fileExtension: '.go',
    description: 'Statically typed, compiled programming language designed at Google'
  },
  {
    name: 'Rust',
    paradigm: ['Multi-paradigm', 'Functional', 'Imperative'],
    difficulty: 'Advanced',
    popularity: 'Medium',
    firstAppeared: 2010,
    creator: 'Mozilla',
    typing: 'Static',
    compilation: 'Compiled',
    useCases: ['System Programming', 'Web Assembly', 'Blockchain', 'Operating Systems'],
    companies: ['Mozilla', 'Dropbox', 'Coursera', 'Figma'],
    documentation: 'https://doc.rust-lang.org/',
    officialSite: 'https://www.rust-lang.org/',
    github: 'https://github.com/rust-lang/rust',
    packageManager: 'Cargo',
    fileExtension: '.rs',
    description: 'Multi-paradigm, general-purpose programming language designed for performance and safety'
  },
  {
    name: 'PHP',
    paradigm: ['Multi-paradigm', 'Object-oriented', 'Procedural'],
    difficulty: 'Beginner',
    popularity: 'High',
    firstAppeared: 1995,
    creator: 'Rasmus Lerdorf',
    typing: 'Dynamic',
    compilation: 'Interpreted',
    useCases: ['Web Development', 'Server-side Scripting', 'Command Line'],
    companies: ['Facebook', 'Wikipedia', 'WordPress', 'Slack'],
    documentation: 'https://www.php.net/docs.php',
    officialSite: 'https://www.php.net/',
    github: 'https://github.com/php/php-src',
    packageManager: 'Composer',
    fileExtension: '.php',
    description: 'General-purpose scripting language geared towards web development'
  },
  {
    name: 'Swift',
    paradigm: ['Multi-paradigm', 'Object-oriented', 'Functional', 'Protocol-oriented'],
    difficulty: 'Intermediate',
    popularity: 'Medium',
    firstAppeared: 2014,
    creator: 'Apple',
    typing: 'Static',
    compilation: 'Compiled',
    useCases: ['iOS Development', 'macOS Development', 'Server-side Development'],
    companies: ['Apple', 'IBM', 'Uber', 'Slack'],
    documentation: 'https://swift.org/documentation/',
    officialSite: 'https://swift.org/',
    github: 'https://github.com/apple/swift',
    packageManager: 'Swift Package Manager',
    fileExtension: '.swift',
    description: 'General-purpose, multi-paradigm, compiled programming language developed by Apple'
  },
  {
    name: 'Kotlin',
    paradigm: ['Multi-paradigm', 'Object-oriented', 'Functional'],
    difficulty: 'Intermediate',
    popularity: 'Medium',
    firstAppeared: 2011,
    creator: 'JetBrains',
    typing: 'Static',
    compilation: 'Compiled to bytecode',
    useCases: ['Android Development', 'Server-side Development', 'Web Development'],
    companies: ['Google', 'Pinterest', 'Coursera', 'Postmates'],
    documentation: 'https://kotlinlang.org/docs/',
    officialSite: 'https://kotlinlang.org/',
    github: 'https://github.com/JetBrains/kotlin',
    packageManager: 'Gradle/Maven',
    fileExtension: '.kt, .kts',
    description: 'Cross-platform, statically typed, general-purpose programming language with type inference'
  },
  {
    name: 'Ruby',
    paradigm: ['Multi-paradigm', 'Object-oriented', 'Functional'],
    difficulty: 'Beginner',
    popularity: 'Medium',
    firstAppeared: 1995,
    creator: 'Yukihiro Matsumoto',
    typing: 'Dynamic',
    compilation: 'Interpreted',
    useCases: ['Web Development', 'Automation', 'Data Processing'],
    companies: ['GitHub', 'Shopify', 'Airbnb', 'Hulu'],
    documentation: 'https://ruby-doc.org/',
    officialSite: 'https://www.ruby-lang.org/',
    github: 'https://github.com/ruby/ruby',
    packageManager: 'RubyGems',
    fileExtension: '.rb',
    description: 'Dynamic, open source programming language with a focus on simplicity and productivity'
  }
];

const columns = [
  {
    key: 'name' as keyof ProgrammingLanguage,
    header: 'Language',
    render: (value: string, item: ProgrammingLanguage) => (
      <div className="flex items-center gap-2">
        <span className="font-medium">{value}</span>
        <a
          href={item.officialSite}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
        >
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    )
  },
  {
    key: 'difficulty' as keyof ProgrammingLanguage,
    header: 'Difficulty',
    render: (value: string) => (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
        value === 'Beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
        value === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
        'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      }`}>
        {value}
      </span>
    )
  },
  {
    key: 'popularity' as keyof ProgrammingLanguage,
    header: 'Popularity',
    render: (value: string) => (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
        value === 'Very High' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
        value === 'High' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
        'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
      }`}>
        {value}
      </span>
    )
  },
  {
    key: 'firstAppeared' as keyof ProgrammingLanguage,
    header: 'Year',
    type: 'number' as const
  },
  {
    key: 'typing' as keyof ProgrammingLanguage,
    header: 'Typing'
  },
  {
    key: 'paradigm' as keyof ProgrammingLanguage,
    header: 'Paradigm',
    type: 'tags' as const
  },
  {
    key: 'useCases' as keyof ProgrammingLanguage,
    header: 'Use Cases',
    type: 'tags' as const
  },
  {
    key: 'companies' as keyof ProgrammingLanguage,
    header: 'Used By',
    type: 'tags' as const
  },
  {
    key: 'documentation' as keyof ProgrammingLanguage,
    header: 'Docs',
    type: 'link' as const
  }
];

export default function ProgrammingLanguagesPage() {
  return (
    <PageLayout
      title="Programming Languages Database"
      description="Comprehensive database of programming languages with filtering, sorting, and detailed information about each language."
      icon={<Code className="w-8 h-8 text-blue-600" />}
    >
      {/* Why This Database Matters */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800 mb-8">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
          🔍 Why Use This Database?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Compare Languages:</h4>
            <ul className="list-disc list-inside text-blue-800 dark:text-blue-200 text-sm [&>li]:mb-1">
              <li>Difficulty levels and learning curves</li>
              <li>Industry popularity and job market</li>
              <li>Use cases and applications</li>
              <li>Company adoption and demand</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Make Informed Decisions:</h4>
            <ul className="list-disc list-inside text-blue-800 dark:text-blue-200 text-sm [&>li]:mb-1">
              <li>Choose the right language for projects</li>
              <li>Plan your learning roadmap</li>
              <li>Understand market trends</li>
              <li>Find official documentation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Advanced Features:</h4>
            <ul className="list-disc list-inside text-blue-800 dark:text-blue-200 text-sm [&>li]:mb-1">
              <li>Sort by any column</li>
              <li>Search across all fields</li>
              <li>Fullscreen mode for detailed view</li>
              <li>Direct links to documentation</li>
            </ul>
          </div>
        </div>
      </div>

      <DataTable
        data={programmingLanguagesData}
        columns={columns}
        searchableColumns={['name', 'paradigm', 'useCases', 'companies', 'creator']}
        defaultSortColumn="popularity"
        title="Programming Languages"
        description="Explore and compare programming languages by difficulty, popularity, use cases, and more."
      />
    </PageLayout>
  );
}
