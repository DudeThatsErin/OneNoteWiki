'use client';

import { PageLayout } from '@/components/PageLayout';
import { DataTable } from '@/components/DataTable';
import { BookOpen, ExternalLink, Star } from 'lucide-react';

interface ProgrammingBook {
  title: string;
  author: string;
  isbn: string;
  category: string;
  difficulty: string;
  rating: number;
  price: string;
  publishYear: number;
  pages: number;
  publisher: string;
  language: string[];
  format: string[];
  description: string;
  amazonUrl: string;
  goodreadsUrl: string;
  freeVersion?: string;
  keyTopics: string[];
}

const programmingBooksData: ProgrammingBook[] = [
  {
    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    author: 'Robert C. Martin',
    isbn: '978-0132350884',
    category: 'Best Practices',
    difficulty: 'Intermediate',
    rating: 5,
    price: '$25-35',
    publishYear: 2008,
    pages: 464,
    publisher: 'Prentice Hall',
    language: ['All Languages'],
    format: ['Paperback', 'Kindle', 'Audiobook'],
    description: 'Essential principles for writing maintainable, readable code',
    amazonUrl: 'https://amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350884',
    goodreadsUrl: 'https://www.goodreads.com/book/show/3735293-clean-code',
    keyTopics: ['Code Quality', 'Refactoring', 'Functions', 'Classes', 'Error Handling']
  },
  {
    title: 'You Don\'t Know JS: Scope & Closures',
    author: 'Kyle Simpson',
    isbn: '978-1449335588',
    category: 'JavaScript',
    difficulty: 'Beginner',
    rating: 5,
    price: 'Free online / $20-25',
    publishYear: 2014,
    pages: 98,
    publisher: 'O\'Reilly Media',
    language: ['JavaScript'],
    format: ['Paperback', 'Kindle', 'Free Online'],
    description: 'Deep dive into JavaScript scope and closures',
    amazonUrl: 'https://amazon.com/You-Dont-Know-JS-Closures/dp/1449335586',
    goodreadsUrl: 'https://www.goodreads.com/book/show/20901022-you-don-t-know-js',
    freeVersion: 'https://github.com/getify/You-Dont-Know-JS',
    keyTopics: ['Scope', 'Closures', 'Hoisting', 'IIFE', 'Modules']
  },
  {
    title: 'Automate the Boring Stuff with Python',
    author: 'Al Sweigart',
    isbn: '978-1593279929',
    category: 'Python',
    difficulty: 'Beginner',
    rating: 5,
    price: 'Free online / $25-30',
    publishYear: 2019,
    pages: 592,
    publisher: 'No Starch Press',
    language: ['Python'],
    format: ['Paperback', 'Kindle', 'Free Online'],
    description: 'Practical Python programming for everyday tasks',
    amazonUrl: 'https://amazon.com/Automate-Boring-Stuff-Python-Programming/dp/1593279922',
    goodreadsUrl: 'https://www.goodreads.com/book/show/22514127-automate-the-boring-stuff-with-python',
    freeVersion: 'https://automatetheboringstuff.com/',
    keyTopics: ['File Manipulation', 'Web Scraping', 'Excel Automation', 'Email', 'GUI Automation']
  },
  {
    title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
    author: 'Gang of Four',
    isbn: '978-0201633610',
    category: 'Software Design',
    difficulty: 'Advanced',
    rating: 4,
    price: '$35-45',
    publishYear: 1994,
    pages: 395,
    publisher: 'Addison-Wesley',
    language: ['C++', 'Smalltalk'],
    format: ['Paperback', 'Kindle'],
    description: 'Classic book on reusable object-oriented design patterns',
    amazonUrl: 'https://amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612',
    goodreadsUrl: 'https://www.goodreads.com/book/show/85009.Design_Patterns',
    keyTopics: ['Creational Patterns', 'Structural Patterns', 'Behavioral Patterns', 'OOP Design']
  },
  {
    title: 'The Pragmatic Programmer: Your Journey to Mastery',
    author: 'David Thomas & Andrew Hunt',
    isbn: '978-0135957059',
    category: 'Career Development',
    difficulty: 'Intermediate',
    rating: 5,
    price: '$30-40',
    publishYear: 2019,
    pages: 352,
    publisher: 'Addison-Wesley',
    language: ['All Languages'],
    format: ['Paperback', 'Kindle', 'Audiobook'],
    description: 'Timeless advice for becoming a better programmer',
    amazonUrl: 'https://amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052',
    goodreadsUrl: 'https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer',
    keyTopics: ['Problem Solving', 'Code Craftsmanship', 'Career Advice', 'Best Practices']
  },
  {
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Marijn Haverbeke',
    isbn: '978-1593279509',
    category: 'JavaScript',
    difficulty: 'Beginner',
    rating: 4,
    price: 'Free online / $25-35',
    publishYear: 2018,
    pages: 472,
    publisher: 'No Starch Press',
    language: ['JavaScript'],
    format: ['Paperback', 'Kindle', 'Free Online'],
    description: 'Modern introduction to programming with JavaScript',
    amazonUrl: 'https://amazon.com/Eloquent-JavaScript-3rd-Introduction-Programming/dp/1593279507',
    goodreadsUrl: 'https://www.goodreads.com/book/show/8910666-eloquent-javascript',
    freeVersion: 'https://eloquentjavascript.net/',
    keyTopics: ['JavaScript Fundamentals', 'DOM Manipulation', 'Node.js', 'Project-based Learning']
  },
  {
    title: 'Effective Java',
    author: 'Joshua Bloch',
    isbn: '978-0134685991',
    category: 'Java',
    difficulty: 'Intermediate',
    rating: 5,
    price: '$35-45',
    publishYear: 2017,
    pages: 412,
    publisher: 'Addison-Wesley',
    language: ['Java'],
    format: ['Paperback', 'Kindle'],
    description: 'Best practices for Java programming',
    amazonUrl: 'https://amazon.com/Effective-Java-Joshua-Bloch/dp/0134685997',
    goodreadsUrl: 'https://www.goodreads.com/book/show/34927404-effective-java',
    keyTopics: ['Java Best Practices', 'API Design', 'Concurrency', 'Generics', 'Enums']
  },
  {
    title: 'Python Crash Course: A Hands-On, Project-Based Introduction',
    author: 'Eric Matthes',
    isbn: '978-1593279288',
    category: 'Python',
    difficulty: 'Beginner',
    rating: 5,
    price: '$25-35',
    publishYear: 2019,
    pages: 544,
    publisher: 'No Starch Press',
    language: ['Python'],
    format: ['Paperback', 'Kindle'],
    description: 'Hands-on introduction to Python programming',
    amazonUrl: 'https://amazon.com/Python-Crash-Course-Hands-Project-Based/dp/1593279280',
    goodreadsUrl: 'https://www.goodreads.com/book/show/23241059-python-crash-course',
    keyTopics: ['Python Basics', 'Data Visualization', 'Web Applications', 'Game Development']
  },
  {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    isbn: '978-0596517748',
    category: 'JavaScript',
    difficulty: 'Intermediate',
    rating: 4,
    price: '$20-30',
    publishYear: 2008,
    pages: 176,
    publisher: 'O\'Reilly Media',
    language: ['JavaScript'],
    format: ['Paperback', 'Kindle'],
    description: 'Identifies and explains the good parts of JavaScript',
    amazonUrl: 'https://amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742',
    goodreadsUrl: 'https://www.goodreads.com/book/show/2998152-javascript',
    keyTopics: ['JavaScript Core', 'Functions', 'Objects', 'Arrays', 'Regular Expressions']
  },
  {
    title: 'Code Complete: A Practical Handbook of Software Construction',
    author: 'Steve McConnell',
    isbn: '978-0735619678',
    category: 'Best Practices',
    difficulty: 'Intermediate',
    rating: 5,
    price: '$35-45',
    publishYear: 2004,
    pages: 960,
    publisher: 'Microsoft Press',
    language: ['All Languages'],
    format: ['Paperback', 'Kindle'],
    description: 'Comprehensive guide to software construction',
    amazonUrl: 'https://amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670',
    goodreadsUrl: 'https://www.goodreads.com/book/show/4845.Code_Complete',
    keyTopics: ['Software Construction', 'Code Quality', 'Debugging', 'Testing', 'Refactoring']
  },
  {
    title: 'Learning React: Modern Patterns for Developing React Apps',
    author: 'Alex Banks & Eve Porcello',
    isbn: '978-1492051718',
    category: 'React',
    difficulty: 'Beginner',
    rating: 4,
    price: '$30-40',
    publishYear: 2020,
    pages: 310,
    publisher: 'O\'Reilly Media',
    language: ['JavaScript', 'React'],
    format: ['Paperback', 'Kindle'],
    description: 'Modern patterns for developing React applications',
    amazonUrl: 'https://amazon.com/Learning-React-Modern-Patterns-Developing/dp/1492051713',
    goodreadsUrl: 'https://www.goodreads.com/book/show/48635471-learning-react',
    keyTopics: ['React Fundamentals', 'Hooks', 'State Management', 'Testing', 'Performance']
  },
  {
    title: 'The Rust Programming Language',
    author: 'Steve Klabnik & Carol Nichols',
    isbn: '978-1718500440',
    category: 'Rust',
    difficulty: 'Intermediate',
    rating: 5,
    price: 'Free online / $30-40',
    publishYear: 2019,
    pages: 560,
    publisher: 'No Starch Press',
    language: ['Rust'],
    format: ['Paperback', 'Kindle', 'Free Online'],
    description: 'The official book on the Rust programming language',
    amazonUrl: 'https://amazon.com/Rust-Programming-Language-Steve-Klabnik/dp/1718500440',
    goodreadsUrl: 'https://www.goodreads.com/book/show/25550614-the-rust-programming-language',
    freeVersion: 'https://doc.rust-lang.org/book/',
    keyTopics: ['Ownership', 'Memory Safety', 'Concurrency', 'Error Handling', 'Cargo']
  },
  {
    title: 'Head First Design Patterns',
    author: 'Eric Freeman & Elisabeth Robson',
    isbn: '978-0596007126',
    category: 'Software Design',
    difficulty: 'Beginner',
    rating: 4,
    price: '$35-45',
    publishYear: 2004,
    pages: 694,
    publisher: 'O\'Reilly Media',
    language: ['Java'],
    format: ['Paperback', 'Kindle'],
    description: 'Brain-friendly guide to design patterns',
    amazonUrl: 'https://amazon.com/Head-First-Design-Patterns-Brain-Friendly/dp/0596007124',
    goodreadsUrl: 'https://www.goodreads.com/book/show/58128.Head_First_Design_Patterns',
    keyTopics: ['Design Patterns', 'OOP', 'Strategy Pattern', 'Observer Pattern', 'Decorator Pattern']
  },
  {
    title: 'Cracking the Coding Interview',
    author: 'Gayle Laakmann McDowell',
    isbn: '978-0984782857',
    category: 'Interview Prep',
    difficulty: 'Intermediate',
    rating: 4,
    price: '$25-35',
    publishYear: 2015,
    pages: 687,
    publisher: 'CareerCup',
    language: ['Java', 'C++', 'Python'],
    format: ['Paperback', 'Kindle'],
    description: '189 programming questions and solutions for coding interviews',
    amazonUrl: 'https://amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850',
    goodreadsUrl: 'https://www.goodreads.com/book/show/25707092-cracking-the-coding-interview',
    keyTopics: ['Data Structures', 'Algorithms', 'System Design', 'Interview Strategy', 'Big O']
  },
  {
    title: 'System Design Interview',
    author: 'Alex Xu',
    isbn: '978-1736049112',
    category: 'System Design',
    difficulty: 'Advanced',
    rating: 5,
    price: '$30-40',
    publishYear: 2020,
    pages: 322,
    publisher: 'Independently published',
    language: ['All Languages'],
    format: ['Paperback', 'Kindle'],
    description: 'An insider\'s guide to system design interviews',
    amazonUrl: 'https://amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF',
    goodreadsUrl: 'https://www.goodreads.com/book/show/54109255-system-design-interview-an-insider-s-guide',
    keyTopics: ['Scalability', 'Load Balancing', 'Database Design', 'Caching', 'Microservices']
  },
  {
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen',
    isbn: '978-0262033848',
    category: 'Algorithms',
    difficulty: 'Advanced',
    rating: 5,
    price: '$80-100',
    publishYear: 2009,
    pages: 1312,
    publisher: 'MIT Press',
    language: ['Pseudocode'],
    format: ['Hardcover', 'Kindle'],
    description: 'Comprehensive introduction to algorithms and data structures',
    amazonUrl: 'https://amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844',
    goodreadsUrl: 'https://www.goodreads.com/book/show/108986.Introduction_to_Algorithms',
    keyTopics: ['Sorting', 'Graph Algorithms', 'Dynamic Programming', 'Data Structures', 'Complexity Analysis']
  },
  {
    title: 'Refactoring: Improving the Design of Existing Code',
    author: 'Martin Fowler',
    isbn: '978-0134757599',
    category: 'Best Practices',
    difficulty: 'Intermediate',
    rating: 5,
    price: '$35-45',
    publishYear: 2018,
    pages: 448,
    publisher: 'Addison-Wesley',
    language: ['JavaScript'],
    format: ['Paperback', 'Kindle'],
    description: 'Systematic approach to improving code without changing functionality',
    amazonUrl: 'https://amazon.com/Refactoring-Improving-Existing-Addison-Wesley-Signature/dp/0134757599',
    goodreadsUrl: 'https://www.goodreads.com/book/show/44936.Refactoring',
    keyTopics: ['Code Smells', 'Refactoring Techniques', 'Testing', 'Legacy Code', 'Code Quality']
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: 'Harold Abelson & Gerald Jay Sussman',
    isbn: '978-0262510875',
    category: 'Computer Science',
    difficulty: 'Advanced',
    rating: 5,
    price: 'Free online / $60-80',
    publishYear: 1996,
    pages: 657,
    publisher: 'MIT Press',
    language: ['Scheme', 'Lisp'],
    format: ['Paperback', 'Free Online'],
    description: 'Classic computer science textbook on programming concepts',
    amazonUrl: 'https://amazon.com/Structure-Interpretation-Computer-Programs-Engineering/dp/0262510871',
    goodreadsUrl: 'https://www.goodreads.com/book/show/43713.Structure_and_Interpretation_of_Computer_Programs',
    freeVersion: 'https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book.html',
    keyTopics: ['Functional Programming', 'Recursion', 'Data Abstraction', 'Metalinguistic Abstraction', 'Computing Theory']
  },
  {
    title: 'Grokking Algorithms',
    author: 'Aditya Bhargava',
    isbn: '978-1617292231',
    category: 'Algorithms',
    difficulty: 'Beginner',
    rating: 5,
    price: '$25-35',
    publishYear: 2016,
    pages: 256,
    publisher: 'Manning Publications',
    language: ['Python'],
    format: ['Paperback', 'Kindle'],
    description: 'Illustrated guide to algorithms and data structures',
    amazonUrl: 'https://amazon.com/Grokking-Algorithms-illustrated-programmers-curious/dp/1617292230',
    goodreadsUrl: 'https://www.goodreads.com/book/show/22847284-grokking-algorithms-an-illustrated-guide-for-programmers-and-other-curio',
    keyTopics: ['Binary Search', 'Big O Notation', 'Sorting', 'Graph Algorithms', 'Dynamic Programming']
  }
];

const columns = [
  {
    key: 'title' as keyof ProgrammingBook,
    header: 'Title',
    render: (value: string, item: ProgrammingBook) => (
      <div className="flex flex-col gap-1">
        <span className="font-medium text-sm">{value}</span>
        <span className="text-xs text-gray-500 dark:text-gray-400">by {item.author}</span>
      </div>
    )
  },
  {
    key: 'category' as keyof ProgrammingBook,
    header: 'Category',
    render: (value: string) => (
      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full font-medium">
        {value}
      </span>
    )
  },
  {
    key: 'difficulty' as keyof ProgrammingBook,
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
    key: 'rating' as keyof ProgrammingBook,
    header: 'Rating',
    render: (value: number) => (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-3 h-3 ${i < value ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
        ))}
        <span className="text-xs text-gray-500 ml-1">({value}/5)</span>
      </div>
    )
  },
  {
    key: 'publishYear' as keyof ProgrammingBook,
    header: 'Year',
    type: 'number' as const
  },
  {
    key: 'pages' as keyof ProgrammingBook,
    header: 'Pages',
    type: 'number' as const
  },
  {
    key: 'price' as keyof ProgrammingBook,
    header: 'Price',
    render: (value: string) => (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
        value.includes('Free') ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
        'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
      }`}>
        {value}
      </span>
    )
  },
  {
    key: 'language' as keyof ProgrammingBook,
    header: 'Languages',
    type: 'tags' as const
  },
  {
    key: 'isbn' as keyof ProgrammingBook,
    header: 'ISBN',
    render: (value: string) => (
      <span className="text-xs font-mono text-gray-600 dark:text-gray-400">{value}</span>
    )
  },
  {
    key: 'amazonUrl' as keyof ProgrammingBook,
    header: 'Buy',
    render: (value: string) => (
      <a
        href={value}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 text-xs"
      >
        Amazon
        <ExternalLink className="w-3 h-3" />
      </a>
    )
  }
];

export default function BooksDatabasePage() {
  return (
    <PageLayout
      title="Programming Books Database"
      description="Comprehensive database of programming books with detailed information, ratings, prices, and purchase links."
      icon={<BookOpen className="w-8 h-8 text-blue-600" />}
    >
      <DataTable
        data={programmingBooksData}
        columns={columns}
        searchableColumns={['title', 'author', 'category', 'language', 'keyTopics', 'publisher']}
        defaultSortColumn="rating"
        title="Programming Books"
        description="Explore and compare programming books by category, difficulty, rating, language, and more. Find the perfect book for your learning journey."
      />
    </PageLayout>
  );
}
