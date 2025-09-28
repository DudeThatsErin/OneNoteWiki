'use client';

import { PageLayout } from '@/components/PageLayout';
import { DataTable } from '@/components/DataTable';
import { BookOpen, ExternalLink, Star, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

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
    title: 'You Don\'t Know JS (Series)',
    author: 'Kyle Simpson',
    isbn: '978-1491950357',
    category: 'JavaScript',
    difficulty: 'Beginner to Advanced',
    rating: 5,
    price: 'Free online / $20-30 print',
    publishYear: 2014,
    pages: 278,
    publisher: 'O\'Reilly Media',
    language: ['JavaScript'],
    format: ['Paperback', 'Kindle', 'Free Online'],
    description: 'Deep dive into JavaScript fundamentals and advanced concepts',
    amazonUrl: 'https://amazon.com/You-Dont-Know-JS-Scope/dp/1449335586',
    goodreadsUrl: 'https://www.goodreads.com/series/139311-you-don-t-know-js',
    freeVersion: 'https://github.com/getify/You-Dont-Know-JS',
    keyTopics: ['Scope & Closures', 'this & Object Prototypes', 'Types & Grammar', 'Async & Performance']
  },
  {
    title: 'Automate the Boring Stuff with Python',
    author: 'Al Sweigart',
    isbn: '978-1593279929',
    category: 'Python',
    difficulty: 'Beginner',
    rating: 5,
    price: 'Free online / $25-30 print',
    publishYear: 2019,
    pages: 592,
    publisher: 'No Starch Press',
    language: ['Python'],
    format: ['Paperback', 'Kindle', 'Free Online'],
    description: 'Practical Python programming for everyday tasks',
    amazonUrl: 'https://amazon.com/Automate-Boring-Stuff-Python-Programming/dp/1593279922',
    goodreadsUrl: 'https://www.goodreads.com/book/show/22514127-automate-the-boring-stuff-with-python',
    freeVersion: 'https://automatetheboringstuff.com/',
    keyTopics: ['File manipulation', 'Web scraping', 'Excel automation', 'Email automation']
  },
  {
    title: 'Design Patterns',
    author: 'Gang of Four',
    isbn: '978-0201633610',
    category: 'Software Design',
    difficulty: 'Advanced',
    rating: 4,
    price: '$35-45',
    publishYear: 1994,
    pages: 395,
    publisher: 'Addison-Wesley Professional',
    language: ['All Languages'],
    format: ['Paperback', 'Kindle'],
    description: 'Classic book on reusable object-oriented design patterns',
    amazonUrl: 'https://amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612',
    goodreadsUrl: 'https://www.goodreads.com/book/show/85009.Design_Patterns',
    keyTopics: ['Creational patterns', 'Structural patterns', 'Behavioral patterns', 'OOP design']
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'David Thomas & Andrew Hunt',
    isbn: '978-0135957059',
    category: 'Career Development',
    difficulty: 'Intermediate',
    rating: 5,
    price: '$30-40',
    publishYear: 2019,
    pages: 352,
    publisher: 'Addison-Wesley Professional',
    language: ['All Languages'],
    format: ['Paperback', 'Kindle', 'Audiobook'],
    description: 'Timeless advice for becoming a better programmer',
    amazonUrl: 'https://amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052',
    goodreadsUrl: 'https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer',
    keyTopics: ['Problem solving', 'Code craftsmanship', 'Career advice', 'Best practices']
  },
  {
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke',
    isbn: '978-1593279509',
    category: 'JavaScript',
    difficulty: 'Beginner to Intermediate',
    rating: 4,
    price: 'Free online / $25-35 print',
    publishYear: 2018,
    pages: 472,
    publisher: 'No Starch Press',
    language: ['JavaScript'],
    format: ['Paperback', 'Kindle', 'Free Online'],
    description: 'Modern introduction to programming with JavaScript',
    amazonUrl: 'https://amazon.com/Eloquent-JavaScript-3rd-Introduction-Programming/dp/1593279507',
    goodreadsUrl: 'https://www.goodreads.com/book/show/8910666-eloquent-javascript',
    freeVersion: 'https://eloquentjavascript.net/',
    keyTopics: ['JavaScript fundamentals', 'DOM manipulation', 'Node.js', 'Project-based learning']
  },
  {
    title: 'Python For Dummies',
    author: 'Stef Maruch & Aahz Maruch',
    isbn: '978-1119907947',
    category: 'Python',
    difficulty: 'Beginner',
    rating: 4,
    price: '$20-30',
    publishYear: 2022,
    pages: 432,
    publisher: 'For Dummies',
    language: ['Python'],
    format: ['Paperback', 'Kindle'],
    description: 'Easy-to-follow guide to Python programming for absolute beginners',
    amazonUrl: 'https://amazon.com/Python-Dummies-Stef-Maruch/dp/1119907942',
    goodreadsUrl: 'https://www.goodreads.com/book/show/58724923-python-for-dummies',
    keyTopics: ['Python basics', 'Variables', 'Functions', 'Object-oriented programming', 'Web development']
  },
  {
    title: 'Java For Dummies',
    author: 'Barry Burd',
    isbn: '978-1119986645',
    category: 'Java',
    difficulty: 'Beginner',
    rating: 4,
    price: '$25-35',
    publishYear: 2022,
    pages: 512,
    publisher: 'For Dummies',
    language: ['Java'],
    format: ['Paperback', 'Kindle'],
    description: 'Comprehensive introduction to Java programming with hands-on examples',
    amazonUrl: 'https://amazon.com/Java-Dummies-Barry-Burd/dp/1119986648',
    goodreadsUrl: 'https://www.goodreads.com/book/show/59808234-java-for-dummies',
    keyTopics: ['Java syntax', 'Object-oriented programming', 'Collections', 'Exception handling', 'GUI development']
  },
  {
    title: 'JavaScript For Dummies',
    author: 'Chris Minnick & Eva Holland',
    isbn: '978-1119916857',
    category: 'JavaScript',
    difficulty: 'Beginner',
    rating: 4,
    price: '$20-30',
    publishYear: 2022,
    pages: 480,
    publisher: 'For Dummies',
    language: ['JavaScript'],
    format: ['Paperback', 'Kindle'],
    description: 'Learn JavaScript programming from scratch with practical examples',
    amazonUrl: 'https://amazon.com/JavaScript-Dummies-Chris-Minnick/dp/1119916852',
    goodreadsUrl: 'https://www.goodreads.com/book/show/59808235-javascript-for-dummies',
    keyTopics: ['JavaScript basics', 'DOM manipulation', 'Events', 'AJAX', 'Modern JavaScript']
  },
  {
    title: 'C++ For Dummies',
    author: 'Stephen R. Davis',
    isbn: '978-1119823087',
    category: 'C++',
    difficulty: 'Beginner to Intermediate',
    rating: 4,
    price: '$25-35',
    publishYear: 2021,
    pages: 432,
    publisher: 'For Dummies',
    language: ['C++'],
    format: ['Paperback', 'Kindle'],
    description: 'Master C++ programming with clear explanations and practical examples',
    amazonUrl: 'https://amazon.com/C-Dummies-Stephen-R-Davis/dp/1119823080',
    goodreadsUrl: 'https://www.goodreads.com/book/show/56898234-c-for-dummies',
    keyTopics: ['C++ syntax', 'Object-oriented programming', 'Memory management', 'STL', 'Templates']
  },
  {
    title: 'HTML and CSS For Dummies',
    author: 'Ed Tittel & Chris Minnick',
    isbn: '978-1119907978',
    category: 'Web Development',
    difficulty: 'Beginner',
    rating: 4,
    price: '$20-30',
    publishYear: 2021,
    pages: 416,
    publisher: 'For Dummies',
    language: ['HTML', 'CSS'],
    format: ['Paperback', 'Kindle'],
    description: 'Learn to build websites with HTML and CSS from the ground up',
    amazonUrl: 'https://amazon.com/HTML-CSS-Dummies-Ed-Tittel/dp/1119907977',
    goodreadsUrl: 'https://www.goodreads.com/book/show/56898235-html-and-css-for-dummies',
    keyTopics: ['HTML structure', 'CSS styling', 'Responsive design', 'Forms', 'Web standards']
  },
  {
    title: 'SQL For Dummies',
    author: 'Allen G. Taylor',
    isbn: '978-1119527077',
    category: 'Database',
    difficulty: 'Beginner',
    rating: 4,
    price: '$25-35',
    publishYear: 2018,
    pages: 480,
    publisher: 'For Dummies',
    language: ['SQL'],
    format: ['Paperback', 'Kindle'],
    description: 'Master database querying and management with SQL',
    amazonUrl: 'https://amazon.com/SQL-Dummies-Allen-G-Taylor/dp/1119527074',
    goodreadsUrl: 'https://www.goodreads.com/book/show/39644234-sql-for-dummies',
    keyTopics: ['Database design', 'SELECT queries', 'JOIN operations', 'Data manipulation', 'Database administration']
  },
  {
    title: 'PHP & MySQL For Dummies',
    author: 'Janet Valade',
    isbn: '978-1119149217',
    category: 'Web Development',
    difficulty: 'Beginner to Intermediate',
    rating: 4,
    price: '$30-40',
    publishYear: 2018,
    pages: 456,
    publisher: 'For Dummies',
    language: ['PHP', 'MySQL'],
    format: ['Paperback', 'Kindle'],
    description: 'Build dynamic web applications with PHP and MySQL databases',
    amazonUrl: 'https://amazon.com/PHP-MySQL-Dummies-Janet-Valade/dp/1119149215',
    goodreadsUrl: 'https://www.goodreads.com/book/show/39644235-php-mysql-for-dummies',
    keyTopics: ['PHP programming', 'MySQL databases', 'Web forms', 'Sessions', 'Security']
  },
  {
    title: 'Android App Development For Dummies',
    author: 'Michael Burton',
    isbn: '978-1119286080',
    category: 'Mobile Development',
    difficulty: 'Beginner to Intermediate',
    rating: 4,
    price: '$25-35',
    publishYear: 2017,
    pages: 384,
    publisher: 'For Dummies',
    language: ['Java', 'Kotlin'],
    format: ['Paperback', 'Kindle'],
    description: 'Create Android apps from scratch with step-by-step guidance',
    amazonUrl: 'https://amazon.com/Android-App-Development-Dummies-Burton/dp/1119286085',
    goodreadsUrl: 'https://www.goodreads.com/book/show/39644236-android-app-development-for-dummies',
    keyTopics: ['Android Studio', 'Activities', 'Layouts', 'Intents', 'Publishing apps']
  },
  {
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen',
    isbn: '978-0262033848',
    category: 'Computer Science',
    difficulty: 'Advanced',
    rating: 5,
    price: '$80-100',
    publishYear: 2009,
    pages: 1312,
    publisher: 'MIT Press',
    language: ['All Languages'],
    format: ['Hardcover', 'Kindle'],
    description: 'Comprehensive introduction to algorithms and data structures',
    amazonUrl: 'https://amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844',
    goodreadsUrl: 'https://www.goodreads.com/book/show/108986.Introduction_to_Algorithms',
    keyTopics: ['Algorithms', 'Data structures', 'Complexity analysis', 'Graph algorithms', 'Dynamic programming']
  },
  {
    title: 'Cracking the Coding Interview',
    author: 'Gayle Laakmann McDowell',
    isbn: '978-0984782857',
    category: 'Interview Prep',
    difficulty: 'Intermediate to Advanced',
    rating: 5,
    price: '$35-45',
    publishYear: 2015,
    pages: 687,
    publisher: 'CareerCup',
    language: ['Java', 'C++', 'Python'],
    format: ['Paperback', 'Kindle'],
    description: 'Essential guide for technical programming interviews',
    amazonUrl: 'https://amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782857',
    goodreadsUrl: 'https://www.goodreads.com/book/show/25707092-cracking-the-coding-interview',
    keyTopics: ['Interview questions', 'Data structures', 'Algorithms', 'System design', 'Behavioral questions']
  },
  {
    title: 'System Design Interview',
    author: 'Alex Xu',
    isbn: '978-1736049112',
    category: 'System Design',
    difficulty: 'Intermediate to Advanced',
    rating: 5,
    price: '$40-50',
    publishYear: 2020,
    pages: 322,
    publisher: 'Independently published',
    language: ['All Languages'],
    format: ['Paperback', 'Kindle'],
    description: 'Comprehensive guide to system design interviews',
    amazonUrl: 'https://amazon.com/System-Design-Interview-insiders-Second/dp/1736049119',
    goodreadsUrl: 'https://www.goodreads.com/book/show/54109255-system-design-interview-an-insider-s-guide',
    keyTopics: ['Scalability', 'Load balancing', 'Database design', 'Caching', 'Microservices']
  },
  {
    title: 'Effective Java',
    author: 'Joshua Bloch',
    isbn: '978-0134685991',
    category: 'Java',
    difficulty: 'Intermediate to Advanced',
    rating: 5,
    price: '$45-55',
    publishYear: 2017,
    pages: 412,
    publisher: 'Addison-Wesley Professional',
    language: ['Java'],
    format: ['Paperback', 'Kindle'],
    description: 'Best practices for Java programming',
    amazonUrl: 'https://amazon.com/Effective-Java-Joshua-Bloch/dp/0134685997',
    goodreadsUrl: 'https://www.goodreads.com/book/show/34927404-effective-java',
    keyTopics: ['Java best practices', 'Object-oriented design', 'Generics', 'Concurrency', 'Performance']
  },
  {
    title: 'Learning React',
    author: 'Alex Banks & Eve Porcello',
    isbn: '978-1492051718',
    category: 'JavaScript',
    difficulty: 'Beginner to Intermediate',
    rating: 4,
    price: '$35-45',
    publishYear: 2020,
    pages: 310,
    publisher: 'O\'Reilly Media',
    language: ['JavaScript'],
    format: ['Paperback', 'Kindle'],
    description: 'Modern patterns for developing React apps',
    amazonUrl: 'https://amazon.com/Learning-React-Modern-Patterns-Developing/dp/1492051713',
    goodreadsUrl: 'https://www.goodreads.com/book/show/50435652-learning-react',
    keyTopics: ['React fundamentals', 'Hooks', 'State management', 'Testing', 'Performance optimization']
  },
  {
    title: 'Hands-On Machine Learning',
    author: 'Aurélien Géron',
    isbn: '978-1492032649',
    category: 'Machine Learning',
    difficulty: 'Intermediate',
    rating: 5,
    price: '$50-60',
    publishYear: 2019,
    pages: 851,
    publisher: 'O\'Reilly Media',
    language: ['Python'],
    format: ['Paperback', 'Kindle'],
    description: 'Practical machine learning with Scikit-Learn and TensorFlow',
    amazonUrl: 'https://amazon.com/Hands-Machine-Learning-Scikit-Learn-TensorFlow/dp/1492032646',
    goodreadsUrl: 'https://www.goodreads.com/book/show/40363665-hands-on-machine-learning-with-scikit-learn-keras-and-tensorflow',
    keyTopics: ['Machine learning', 'Deep learning', 'TensorFlow', 'Scikit-Learn', 'Neural networks']
  },
  {
    title: 'The Rust Programming Language',
    author: 'Steve Klabnik & Carol Nichols',
    isbn: '978-1593278281',
    category: 'Rust',
    difficulty: 'Beginner to Intermediate',
    rating: 5,
    price: 'Free online / $30-40 print',
    publishYear: 2018,
    pages: 552,
    publisher: 'No Starch Press',
    language: ['Rust'],
    format: ['Paperback', 'Kindle', 'Free Online'],
    description: 'The official guide to Rust programming',
    amazonUrl: 'https://amazon.com/Rust-Programming-Language-Steve-Klabnik/dp/1593278284',
    goodreadsUrl: 'https://www.goodreads.com/book/show/25550614-the-rust-programming-language',
    freeVersion: 'https://doc.rust-lang.org/book/',
    keyTopics: ['Memory safety', 'Ownership', 'Concurrency', 'Systems programming', 'Performance']
  },
  {
    title: 'Go in Action',
    author: 'William Kennedy',
    isbn: '978-1617291784',
    category: 'Go',
    difficulty: 'Beginner to Intermediate',
    rating: 4,
    price: '$35-45',
    publishYear: 2015,
    pages: 264,
    publisher: 'Manning Publications',
    language: ['Go'],
    format: ['Paperback', 'Kindle'],
    description: 'Comprehensive guide to Go programming',
    amazonUrl: 'https://amazon.com/Go-Action-William-Kennedy/dp/1617291781',
    goodreadsUrl: 'https://www.goodreads.com/book/show/25080953-go-in-action',
    keyTopics: ['Go fundamentals', 'Concurrency', 'Web development', 'Testing', 'Deployment']
  },
  {
    title: 'Learning Python',
    author: 'Mark Lutz',
    isbn: '978-1449355739',
    category: 'Python',
    difficulty: 'Beginner to Intermediate',
    rating: 4,
    price: '$50-60',
    publishYear: 2013,
    pages: 1648,
    publisher: 'O\'Reilly Media',
    language: ['Python'],
    format: ['Paperback', 'Kindle'],
    description: 'Comprehensive Python programming guide',
    amazonUrl: 'https://amazon.com/Learning-Python-5th-Mark-Lutz/dp/1449355730',
    goodreadsUrl: 'https://www.goodreads.com/book/show/80435.Learning_Python',
    keyTopics: ['Python fundamentals', 'Object-oriented programming', 'Modules', 'Exception handling', 'Advanced features']
  },
  {
    title: 'Head First Design Patterns',
    author: 'Eric Freeman & Elisabeth Robson',
    isbn: '978-0596007126',
    category: 'Software Design',
    difficulty: 'Intermediate',
    rating: 4,
    price: '$40-50',
    publishYear: 2004,
    pages: 694,
    publisher: 'O\'Reilly Media',
    language: ['Java'],
    format: ['Paperback', 'Kindle'],
    description: 'Brain-friendly guide to design patterns',
    amazonUrl: 'https://amazon.com/Head-First-Design-Patterns-Brain-Friendly/dp/0596007124',
    goodreadsUrl: 'https://www.goodreads.com/book/show/58128.Head_First_Design_Patterns',
    keyTopics: ['Design patterns', 'Object-oriented design', 'Strategy pattern', 'Observer pattern', 'Decorator pattern']
  },
  {
    title: 'Refactoring',
    author: 'Martin Fowler',
    isbn: '978-0134757599',
    category: 'Software Engineering',
    difficulty: 'Intermediate to Advanced',
    rating: 5,
    price: '$45-55',
    publishYear: 2018,
    pages: 448,
    publisher: 'Addison-Wesley Professional',
    language: ['JavaScript'],
    format: ['Paperback', 'Kindle'],
    description: 'Improving the design of existing code',
    amazonUrl: 'https://amazon.com/Refactoring-Improving-Existing-Addison-Wesley-Signature/dp/0134757599',
    goodreadsUrl: 'https://www.goodreads.com/book/show/44936.Refactoring',
    keyTopics: ['Code refactoring', 'Code smells', 'Testing', 'Design improvement', 'Legacy code']
  },
  {
    title: 'Code Complete',
    author: 'Steve McConnell',
    isbn: '978-0735619678',
    category: 'Software Engineering',
    difficulty: 'Intermediate',
    rating: 5,
    price: '$40-50',
    publishYear: 2004,
    pages: 960,
    publisher: 'Microsoft Press',
    language: ['All Languages'],
    format: ['Paperback', 'Kindle'],
    description: 'A practical handbook of software construction',
    amazonUrl: 'https://amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670',
    goodreadsUrl: 'https://www.goodreads.com/book/show/4845.Code_Complete',
    keyTopics: ['Software construction', 'Code quality', 'Debugging', 'Testing', 'Project management']
  },
  {
    title: 'Working Effectively with Legacy Code',
    author: 'Michael Feathers',
    isbn: '978-0131177055',
    category: 'Software Engineering',
    difficulty: 'Intermediate to Advanced',
    rating: 4,
    price: '$40-50',
    publishYear: 2004,
    pages: 456,
    publisher: 'Prentice Hall',
    language: ['All Languages'],
    format: ['Paperback', 'Kindle'],
    description: 'Strategies for improving legacy codebases',
    amazonUrl: 'https://amazon.com/Working-Effectively-Legacy-Michael-Feathers/dp/0131177052',
    goodreadsUrl: 'https://www.goodreads.com/book/show/44919.Working_Effectively_with_Legacy_Code',
    keyTopics: ['Legacy code', 'Refactoring', 'Testing', 'Code dependencies', 'Risk management']
  },
  {
    title: 'Building Microservices',
    author: 'Sam Newman',
    isbn: '978-1491950357',
    category: 'Architecture',
    difficulty: 'Intermediate to Advanced',
    rating: 4,
    price: '$45-55',
    publishYear: 2015,
    pages: 280,
    publisher: 'O\'Reilly Media',
    language: ['All Languages'],
    format: ['Paperback', 'Kindle'],
    description: 'Designing fine-grained systems',
    amazonUrl: 'https://amazon.com/Building-Microservices-Designing-Fine-Grained-Systems/dp/1491950358',
    goodreadsUrl: 'https://www.goodreads.com/book/show/22512931-building-microservices',
    keyTopics: ['Microservices', 'Service architecture', 'Deployment', 'Monitoring', 'Security']
  },
  {
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    isbn: '978-1449373320',
    category: 'Database',
    difficulty: 'Advanced',
    rating: 5,
    price: '$50-60',
    publishYear: 2017,
    pages: 616,
    publisher: 'O\'Reilly Media',
    language: ['All Languages'],
    format: ['Paperback', 'Kindle'],
    description: 'The big ideas behind reliable, scalable, and maintainable systems',
    amazonUrl: 'https://amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373320',
    goodreadsUrl: 'https://www.goodreads.com/book/show/23463279-designing-data-intensive-applications',
    keyTopics: ['Data systems', 'Distributed systems', 'Consistency', 'Scalability', 'Data modeling']
  },
  {
    title: 'The Art of Computer Programming',
    author: 'Donald E. Knuth',
    isbn: '978-0201896831',
    category: 'Computer Science',
    difficulty: 'Advanced',
    rating: 5,
    price: '$200-250',
    publishYear: 1997,
    pages: 3168,
    publisher: 'Addison-Wesley Professional',
    language: ['All Languages'],
    format: ['Hardcover'],
    description: 'Comprehensive multi-volume work on algorithms',
    amazonUrl: 'https://amazon.com/Computer-Programming-Volumes-1-4A-Boxed/dp/0321751043',
    goodreadsUrl: 'https://www.goodreads.com/book/show/112247.The_Art_of_Computer_Programming_Volume_1',
    keyTopics: ['Fundamental algorithms', 'Sorting', 'Searching', 'Mathematical analysis', 'Data structures']
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: 'Harold Abelson & Gerald Jay Sussman',
    isbn: '978-0262510875',
    category: 'Computer Science',
    difficulty: 'Advanced',
    rating: 5,
    price: 'Free online / $60-70 print',
    publishYear: 1996,
    pages: 657,
    publisher: 'MIT Press',
    language: ['Scheme', 'Lisp'],
    format: ['Paperback', 'Free Online'],
    description: 'Classic computer science textbook',
    amazonUrl: 'https://amazon.com/Structure-Interpretation-Computer-Programs-Engineering/dp/0262510871',
    goodreadsUrl: 'https://www.goodreads.com/book/show/43713.Structure_and_Interpretation_of_Computer_Programs',
    freeVersion: 'https://mitpress.mit.edu/sites/default/files/sicp/index.html',
    keyTopics: ['Programming fundamentals', 'Functional programming', 'Recursion', 'Data abstraction', 'Metalinguistic abstraction']
  },
  {
    title: 'Kubernetes in Action',
    author: 'Marko Lukša',
    isbn: '978-1617293726',
    category: 'DevOps',
    difficulty: 'Intermediate',
    rating: 4,
    price: '$45-55',
    publishYear: 2017,
    pages: 624,
    publisher: 'Manning Publications',
    language: ['All Languages'],
    format: ['Paperback', 'Kindle'],
    description: 'Comprehensive guide to Kubernetes',
    amazonUrl: 'https://amazon.com/Kubernetes-Action-Marko-Luksa/dp/1617293725',
    goodreadsUrl: 'https://www.goodreads.com/book/show/34013922-kubernetes-in-action',
    keyTopics: ['Container orchestration', 'Kubernetes architecture', 'Deployments', 'Services', 'Monitoring']
  },
  {
    title: 'Docker Deep Dive',
    author: 'Nigel Poulton',
    isbn: '978-1521822807',
    category: 'DevOps',
    difficulty: 'Beginner to Intermediate',
    rating: 4,
    price: '$30-40',
    publishYear: 2017,
    pages: 280,
    publisher: 'Independently published',
    language: ['All Languages'],
    format: ['Paperback', 'Kindle'],
    description: 'Zero to Docker in a single book',
    amazonUrl: 'https://amazon.com/Docker-Deep-Dive-Nigel-Poulton/dp/1521822808',
    goodreadsUrl: 'https://www.goodreads.com/book/show/36411996-docker-deep-dive',
    keyTopics: ['Containerization', 'Docker fundamentals', 'Images', 'Networking', 'Orchestration']
  },
  {
    title: 'Pro Git',
    author: 'Scott Chacon & Ben Straub',
    isbn: '978-1484200773',
    category: 'Version Control',
    difficulty: 'Beginner to Intermediate',
    rating: 4,
    price: 'Free online / $35-45 print',
    publishYear: 2014,
    pages: 456,
    publisher: 'Apress',
    language: ['All Languages'],
    format: ['Paperback', 'Kindle', 'Free Online'],
    description: 'Everything you need to know about Git',
    amazonUrl: 'https://amazon.com/Pro-Git-Scott-Chacon/dp/1484200772',
    goodreadsUrl: 'https://www.goodreads.com/book/show/6518085-pro-git',
    freeVersion: 'https://git-scm.com/book',
    keyTopics: ['Version control', 'Git fundamentals', 'Branching', 'Merging', 'Collaboration']
  },
  {
    title: 'High Performance Python',
    author: 'Micha Gorelick & Ian Ozsvald',
    isbn: '978-1492055013',
    category: 'Python',
    difficulty: 'Intermediate to Advanced',
    rating: 4,
    price: '$45-55',
    publishYear: 2020,
    pages: 468,
    publisher: 'O\'Reilly Media',
    language: ['Python'],
    format: ['Paperback', 'Kindle'],
    description: 'Practical performant programming for humans',
    amazonUrl: 'https://amazon.com/High-Performance-Python-Performant-Programming/dp/1492055026',
    goodreadsUrl: 'https://www.goodreads.com/book/show/50489335-high-performance-python',
    keyTopics: ['Performance optimization', 'Profiling', 'Concurrency', 'Memory management', 'Cython']
  },
  {
    title: 'Fluent Python',
    author: 'Luciano Ramalho',
    isbn: '978-1491946008',
    category: 'Python',
    difficulty: 'Intermediate to Advanced',
    rating: 5,
    price: '$45-55',
    publishYear: 2015,
    pages: 792,
    publisher: 'O\'Reilly Media',
    language: ['Python'],
    format: ['Paperback', 'Kindle'],
    description: 'Clear, concise, and effective programming',
    amazonUrl: 'https://amazon.com/Fluent-Python-Concise-Effective-Programming/dp/1491946008',
    goodreadsUrl: 'https://www.goodreads.com/book/show/22800567-fluent-python',
    keyTopics: ['Python idioms', 'Data model', 'Functions', 'Object-oriented programming', 'Metaprogramming']
  },
  {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    isbn: '978-0596517748',
    category: 'JavaScript',
    difficulty: 'Intermediate',
    rating: 4,
    price: '$25-35',
    publishYear: 2008,
    pages: 176,
    publisher: 'O\'Reilly Media',
    language: ['JavaScript'],
    format: ['Paperback', 'Kindle'],
    description: 'Unearthing the excellence in JavaScript',
    amazonUrl: 'https://amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742',
    goodreadsUrl: 'https://www.goodreads.com/book/show/2998152-javascript',
    keyTopics: ['JavaScript fundamentals', 'Functions', 'Objects', 'Arrays', 'Regular expressions']
  },
  {
    title: 'Node.js in Action',
    author: 'Alex Young',
    isbn: '978-1617292576',
    category: 'JavaScript',
    difficulty: 'Intermediate',
    rating: 4,
    price: '$40-50',
    publishYear: 2017,
    pages: 392,
    publisher: 'Manning Publications',
    language: ['JavaScript'],
    format: ['Paperback', 'Kindle'],
    description: 'Server-side JavaScript development',
    amazonUrl: 'https://amazon.com/Node-js-Action-Alex-Young/dp/1617292575',
    goodreadsUrl: 'https://www.goodreads.com/book/show/25667662-node-js-in-action',
    keyTopics: ['Node.js fundamentals', 'Express.js', 'Database integration', 'Testing', 'Deployment']
  },
  {
    title: 'CSS: The Definitive Guide',
    author: 'Eric A. Meyer',
    isbn: '978-1449393199',
    category: 'Web Development',
    difficulty: 'Intermediate',
    rating: 4,
    price: '$50-60',
    publishYear: 2017,
    pages: 1090,
    publisher: 'O\'Reilly Media',
    language: ['CSS'],
    format: ['Paperback', 'Kindle'],
    description: 'Visual presentation for the web',
    amazonUrl: 'https://amazon.com/CSS-Definitive-Guide-Visual-Presentation/dp/1449393195',
    goodreadsUrl: 'https://www.goodreads.com/book/show/35957942-css',
    keyTopics: ['CSS fundamentals', 'Selectors', 'Layout', 'Responsive design', 'Animations']
  },
  {
    title: 'React: Up & Running',
    author: 'Stoyan Stefanov',
    isbn: '978-1491931820',
    category: 'JavaScript',
    difficulty: 'Beginner to Intermediate',
    rating: 4,
    price: '$35-45',
    publishYear: 2016,
    pages: 222,
    publisher: 'O\'Reilly Media',
    language: ['JavaScript'],
    format: ['Paperback', 'Kindle'],
    description: 'Building web applications',
    amazonUrl: 'https://amazon.com/React-Running-Building-Web-Applications/dp/1491931825',
    goodreadsUrl: 'https://www.goodreads.com/book/show/26395564-react',
    keyTopics: ['React fundamentals', 'Components', 'JSX', 'State management', 'Build tools']
  },
  {
    title: 'Learning SQL',
    author: 'Alan Beaulieu',
    isbn: '978-0596520830',
    category: 'Database',
    difficulty: 'Beginner',
    rating: 4,
    price: '$35-45',
    publishYear: 2009,
    pages: 338,
    publisher: 'O\'Reilly Media',
    language: ['SQL'],
    format: ['Paperback', 'Kindle'],
    description: 'Master SQL fundamentals',
    amazonUrl: 'https://amazon.com/Learning-SQL-Alan-Beaulieu/dp/0596520832',
    goodreadsUrl: 'https://www.goodreads.com/book/show/2253922.Learning_SQL',
    keyTopics: ['SQL basics', 'Database design', 'Queries', 'Joins', 'Stored procedures']
  },
  {
    title: 'MongoDB: The Definitive Guide',
    author: 'Kristina Chodorow',
    isbn: '978-1449344689',
    category: 'Database',
    difficulty: 'Intermediate',
    rating: 4,
    price: '$40-50',
    publishYear: 2013,
    pages: 432,
    publisher: 'O\'Reilly Media',
    language: ['JavaScript', 'Python'],
    format: ['Paperback', 'Kindle'],
    description: 'Powerful and scalable data storage',
    amazonUrl: 'https://amazon.com/MongoDB-Definitive-Guide-Powerful-Scalable/dp/1449344682',
    goodreadsUrl: 'https://www.goodreads.com/book/show/9418297-mongodb',
    keyTopics: ['NoSQL databases', 'Document storage', 'Querying', 'Indexing', 'Replication']
  },
  {
    title: 'iOS Programming: The Big Nerd Ranch Guide',
    author: 'Christian Keur & Aaron Hillegass',
    isbn: '978-0135264027',
    category: 'Mobile Development',
    difficulty: 'Beginner to Intermediate',
    rating: 4,
    price: '$45-55',
    publishYear: 2019,
    pages: 640,
    publisher: 'Big Nerd Ranch Guides',
    language: ['Swift'],
    format: ['Paperback', 'Kindle'],
    description: 'Learn iOS development with Swift',
    amazonUrl: 'https://amazon.com/iOS-Programming-Ranch-Guide-Guides/dp/0135264022',
    goodreadsUrl: 'https://www.goodreads.com/book/show/44318092-ios-programming',
    keyTopics: ['iOS development', 'Swift programming', 'UIKit', 'Core Data', 'App Store']
  },
  {
    title: 'Swift Programming: The Big Nerd Ranch Guide',
    author: 'Matthew Mathias & John Gallagher',
    isbn: '978-0135264140',
    category: 'Swift',
    difficulty: 'Beginner',
    rating: 4,
    price: '$40-50',
    publishYear: 2019,
    pages: 384,
    publisher: 'Big Nerd Ranch Guides',
    language: ['Swift'],
    format: ['Paperback', 'Kindle'],
    description: 'Learn Swift programming fundamentals',
    amazonUrl: 'https://amazon.com/Swift-Programming-Ranch-Guide-Guides/dp/0135264146',
    goodreadsUrl: 'https://www.goodreads.com/book/show/44318093-swift-programming',
    keyTopics: ['Swift syntax', 'Optionals', 'Protocols', 'Generics', 'Memory management']
  },
  {
    title: 'Game Programming Patterns',
    author: 'Robert Nystrom',
    isbn: '978-0990582908',
    category: 'Game Development',
    difficulty: 'Intermediate',
    rating: 5,
    price: 'Free online / $35-45 print',
    publishYear: 2014,
    pages: 354,
    publisher: 'Genever Benning',
    language: ['C++', 'All Languages'],
    format: ['Paperback', 'Free Online'],
    description: 'Design patterns for game development',
    amazonUrl: 'https://amazon.com/Game-Programming-Patterns-Robert-Nystrom/dp/0990582906',
    goodreadsUrl: 'https://www.goodreads.com/book/show/22514914-game-programming-patterns',
    freeVersion: 'https://gameprogrammingpatterns.com/',
    keyTopics: ['Game architecture', 'Design patterns', 'Performance', 'Memory management', 'Game loops']
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

const columns = [
  {
    key: 'title' as keyof ProgrammingBook,
    header: 'Title',
    render: (value: string, item: ProgrammingBook) => (
      <div className="flex flex-col gap-1">
        <span className="font-medium">{value}</span>
        <span className="text-xs text-gray-500">by {item.author}</span>
      </div>
    )
  },
  {
    key: 'category' as keyof ProgrammingBook,
    header: 'Category',
    render: (value: string) => (
      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full font-medium">
        {value}
      </span>
    )
  },
  {
    key: 'difficulty' as keyof ProgrammingBook,
    header: 'Difficulty',
    render: (value: string) => (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
        value === 'Beginner' || value.includes('Beginner') ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
        value === 'Intermediate' || value.includes('Intermediate') ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
        value === 'Advanced' || value.includes('Advanced') ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
        'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
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
    key: 'publishYear' as keyof ProgrammingBook,
    header: 'Published',
    render: (value: number, item: ProgrammingBook) => (
      <div className="text-sm">
        <div>{value}</div>
        <div className="text-xs text-gray-500">{item.pages} pages</div>
      </div>
    )
  },
  {
    key: 'format' as keyof ProgrammingBook,
    header: 'Format',
    type: 'tags' as const
  },
  {
    key: 'keyTopics' as keyof ProgrammingBook,
    header: 'Key Topics',
    type: 'tags' as const
  },
  {
    key: 'amazonUrl' as keyof ProgrammingBook,
    header: 'Links',
    render: (value: string, item: ProgrammingBook) => (
      <div className="flex gap-2">
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          title="Amazon"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
        {item.freeVersion && (
          <a
            href={item.freeVersion}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300"
            title="Free Version"
          >
            <BookOpen className="w-4 h-4" />
          </a>
        )}
      </div>
    )
  }
];

export default function BooksPage() {
  return (
    <PageLayout
      title="Programming Books Database"
      description="Comprehensive database of essential programming books with ratings, pricing, and detailed information to guide your learning journey."
      icon={<BookOpen className="w-8 h-8 text-blue-600" />}
    >
      {/* Why Books Matter */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800 mb-8">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
          📚 Why Programming Books Still Matter
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Deep Learning:</h4>
            <ul className="list-disc list-inside text-green-800 dark:text-green-200 text-sm [&>li]:mb-1">
              <li>Comprehensive coverage of topics</li>
              <li>Structured learning progression</li>
              <li>Expert insights and experience</li>
              <li>Timeless principles and concepts</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Quality Content:</h4>
            <ul className="list-disc list-inside text-green-800 dark:text-green-200 text-sm [&>li]:mb-1">
              <li>Peer-reviewed and edited</li>
              <li>Well-researched information</li>
              <li>Proven methodologies</li>
              <li>Less noise than online content</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Focused Study:</h4>
            <ul className="list-disc list-inside text-green-800 dark:text-green-200 text-sm [&>li]:mb-1">
              <li>No distractions or ads</li>
              <li>Offline accessibility</li>
              <li>Encourages deep reading</li>
              <li>Better retention and understanding</li>
            </ul>
          </div>
        </div>
      </div>

      <DataTable
        data={programmingBooksData}
        columns={columns}
        searchableColumns={['title', 'author', 'category', 'keyTopics', 'description']}
        defaultSortColumn="rating"
        title="Programming Books"
        description="Discover essential programming books with comprehensive information about difficulty, pricing, formats, and key topics covered."
      />
    </PageLayout>
  );
}
