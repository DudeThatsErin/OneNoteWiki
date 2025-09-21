import Link from 'next/link';
import { ArrowLeft, ArrowRight, Code, BookOpen, Users, Zap, Star, ExternalLink, Shield, Layers } from 'lucide-react';

const javaFeatures = [
  {
    title: 'Platform Independent',
    description: 'Write once, run anywhere (WORA) - Java code runs on any device with JVM',
    icon: <Zap className="w-5 h-5" />
  },
  {
    title: 'Object-Oriented',
    description: 'Strong OOP principles with classes, inheritance, polymorphism, and encapsulation',
    icon: <Code className="w-5 h-5" />
  },
  {
    title: 'Memory Management',
    description: 'Automatic garbage collection handles memory allocation and deallocation',
    icon: <Users className="w-5 h-5" />
  },
  {
    title: 'Enterprise Ready',
    description: 'Robust, secure, and scalable - perfect for large enterprise applications',
    icon: <Star className="w-5 h-5" />
  }
];

const javaUseCases = [
  {
    category: 'Enterprise Applications',
    description: 'Large-scale business applications and web services',
    examples: ['Banking systems', 'E-commerce platforms', 'CRM systems', 'ERP solutions'],
    popularity: 'Very High'
  },
  {
    category: 'Android Development',
    description: 'Native Android mobile app development',
    examples: ['Mobile apps', 'Games', 'Utilities', 'Business apps'],
    popularity: 'High'
  },
  {
    category: 'Web Backend',
    description: 'Server-side development with Spring and other frameworks',
    examples: ['REST APIs', 'Microservices', 'Web applications', 'Cloud services'],
    popularity: 'Very High'
  },
  {
    category: 'Desktop Applications',
    description: 'Cross-platform desktop applications using Swing or JavaFX',
    examples: ['IDE tools', 'Business software', 'Scientific applications', 'Games'],
    popularity: 'Medium'
  }
];

const javaLearningPath = [
  {
    phase: 'Fundamentals',
    duration: '2-4 weeks',
    topics: ['Java syntax', 'Variables and data types', 'Control structures', 'Methods', 'Arrays'],
    projects: ['Calculator', 'Number guessing game', 'Simple text processor']
  },
  {
    phase: 'Object-Oriented Programming',
    duration: '3-5 weeks',
    topics: ['Classes and objects', 'Inheritance', 'Polymorphism', 'Encapsulation', 'Interfaces'],
    projects: ['Library management system', 'Bank account simulator', 'Shape calculator']
  },
  {
    phase: 'Advanced Concepts',
    duration: '4-6 weeks',
    topics: ['Collections', 'Exception handling', 'File I/O', 'Multithreading', 'Generics'],
    projects: ['File organizer', 'Multi-threaded downloader', 'Data structure implementations']
  },
  {
    phase: 'Frameworks & Tools',
    duration: '6-8 weeks',
    topics: ['Spring Framework', 'Maven/Gradle', 'JUnit testing', 'Database connectivity', 'REST APIs'],
    projects: ['Web application', 'REST API service', 'Database-driven application']
  }
];

const javaResources = [
  {
    category: 'Official Documentation',
    resources: [
      { name: 'Oracle Java Documentation', url: 'https://docs.oracle.com/javase/', description: 'Official Java SE documentation' },
      { name: 'Java Tutorials', url: 'https://docs.oracle.com/javase/tutorial/', description: 'Official Oracle Java tutorials' },
      { name: 'OpenJDK', url: 'https://openjdk.org/', description: 'Open source Java development kit' }
    ]
  },
  {
    category: 'Learning Platforms',
    resources: [
      { name: 'Codecademy Java Course', url: 'https://www.codecademy.com/learn/learn-java', description: 'Interactive Java programming course' },
      { name: 'Java MOOC', url: 'https://java-programming.mooc.fi/', description: 'University of Helsinki\'s Java course' },
      { name: 'Coursera Java Courses', url: 'https://www.coursera.org/courses?query=java', description: 'University-level Java courses' }
    ]
  },
  {
    category: 'Books & References',
    resources: [
      { name: 'Effective Java', url: 'https://www.oreilly.com/library/view/effective-java/9780134686097/', description: 'Best practices by Joshua Bloch' },
      { name: 'Java: The Complete Reference', url: 'https://www.oracle.com/java/technologies/javase/codeconventions-contents.html', description: 'Comprehensive Java reference' },
      { name: 'Head First Java', url: 'https://www.oreilly.com/library/view/head-first-java/0596009208/', description: 'Beginner-friendly Java book' }
    ]
  },
  {
    category: 'Tools & IDEs',
    resources: [
      { name: 'IntelliJ IDEA', url: 'https://www.jetbrains.com/idea/', description: 'Popular Java IDE by JetBrains' },
      { name: 'Eclipse IDE', url: 'https://www.eclipse.org/', description: 'Free, open-source Java IDE' },
      { name: 'Visual Studio Code', url: 'https://code.visualstudio.com/', description: 'Lightweight editor with Java extensions' }
    ]
  }
];

const javaFrameworks = [
  {
    name: 'Spring Framework',
    description: 'Comprehensive framework for enterprise Java development',
    useCases: ['Web applications', 'REST APIs', 'Microservices', 'Enterprise apps'],
    difficulty: 'Intermediate',
    popularity: 'Very High'
  },
  {
    name: 'Spring Boot',
    description: 'Opinionated framework for rapid Spring application development',
    useCases: ['Microservices', 'Web APIs', 'Standalone applications'],
    difficulty: 'Beginner',
    popularity: 'Very High'
  },
  {
    name: 'Hibernate',
    description: 'Object-relational mapping (ORM) framework for database operations',
    useCases: ['Database applications', 'Enterprise systems', 'Data persistence'],
    difficulty: 'Intermediate',
    popularity: 'High'
  },
  {
    name: 'Apache Struts',
    description: 'MVC framework for building web applications',
    useCases: ['Web applications', 'Enterprise portals', 'Content management'],
    difficulty: 'Intermediate',
    popularity: 'Medium'
  }
];

export default function JavaPage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/languages"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Languages</span>
        </Link>
        <Link
          href="/languages/cpp"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>Next: C++</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="text-4xl">☕</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Java</h1>
            <p className="text-gray-600 dark:text-gray-300">Enterprise-grade programming language</p>
          </div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Java is a robust, object-oriented programming language known for its platform independence, 
          security, and scalability. It's the backbone of enterprise applications and Android development.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <div className="text-2xl font-bold text-red-600 dark:text-red-400">1995</div>
          <div className="text-sm text-red-700 dark:text-red-300">First Released</div>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <div className="text-2xl font-bold text-red-600 dark:text-red-400">Intermediate</div>
          <div className="text-sm text-red-700 dark:text-red-300">Difficulty Level</div>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <div className="text-2xl font-bold text-red-600 dark:text-red-400">#3</div>
          <div className="text-sm text-red-700 dark:text-red-300">TIOBE Index</div>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <div className="text-2xl font-bold text-red-600 dark:text-red-400">9M+</div>
          <div className="text-sm text-red-700 dark:text-red-300">Developers</div>
        </div>
      </div>

      {/* Key Features */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Why Choose Java?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {javaFeatures.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-3">
                <div className="text-red-600">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          What Can You Build with Java?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {javaUseCases.map((useCase, index) => (
            <div key={index} className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-red-900 dark:text-red-100">{useCase.category}</h3>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  useCase.popularity === 'Very High' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                  useCase.popularity === 'High' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                  'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300'
                }`}>
                  {useCase.popularity}
                </span>
              </div>
              <p className="text-red-800 dark:text-red-200 text-sm mb-3">{useCase.description}</p>
              <div className="flex flex-wrap gap-1">
                {useCase.examples.map((example, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full">
                    {example}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Code Example */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Java Code Example
        </h2>
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
            Hello World & Basic Class Example
          </h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`// Hello World
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}

// Basic Class Example
public class Person {
    private String name;
    private int age;
    
    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Getter methods
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    // Method
    public void introduce() {
        System.out.println("Hi, I'm " + name + " and I'm " + age + " years old.");
    }
    
    // Main method to test the class
    public static void main(String[] args) {
        Person person = new Person("Alice", 25);
        person.introduce();
    }
}`}
          </pre>
        </div>
      </section>

      {/* Learning Path */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Java Learning Path
        </h2>
        <div className="space-y-6">
          {javaLearningPath.map((phase, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{phase.phase}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{phase.duration}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Topics to Learn:</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                    {phase.topics.map((topic, i) => (
                      <li key={i}>• {topic}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Practice Projects:</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                    {phase.projects.map((project, i) => (
                      <li key={i}>• {project}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Frameworks */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Popular Java Frameworks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {javaFrameworks.map((framework, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900 dark:text-white">{framework.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    framework.difficulty === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                    framework.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                    'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                  }`}>
                    {framework.difficulty}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    framework.popularity === 'Very High' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                    framework.popularity === 'High' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                    'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300'
                  }`}>
                    {framework.popularity}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{framework.description}</p>
              <div className="flex flex-wrap gap-1">
                {framework.useCases.map((useCase, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full">
                    {useCase}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Resources */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Java Learning Resources
        </h2>
        <div className="space-y-6">
          {javaResources.map((category, index) => (
            <div key={index} className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-4">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {category.resources.map((resource, i) => (
                  <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{resource.name}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{resource.description}</p>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                    >
                      Visit Resource <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Ideas */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Java Project Ideas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Beginner Projects */}
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">🟢 Beginner Projects</h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
              <li>• <strong>Student Management System:</strong> CRUD operations with file storage</li>
              <li>• <strong>Banking System:</strong> Account management with basic transactions</li>
              <li>• <strong>Library Management:</strong> Book checkout system with OOP principles</li>
              <li>• <strong>Calculator GUI:</strong> Swing-based calculator with advanced operations</li>
              <li>• <strong>Tic-Tac-Toe Game:</strong> Console or GUI-based game with AI</li>
              <li>• <strong>Address Book:</strong> Contact management with search functionality</li>
            </ul>
          </div>

          {/* Intermediate Projects */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-3">🟡 Intermediate Projects</h3>
            <ul className="space-y-2 text-yellow-800 dark:text-yellow-200 text-sm">
              <li>• <strong>E-commerce Backend:</strong> REST API with Spring Boot and JPA</li>
              <li>• <strong>Chat Application:</strong> Multi-client chat using sockets</li>
              <li>• <strong>Employee Management:</strong> Full CRUD with database integration</li>
              <li>• <strong>File Compression Tool:</strong> Implement compression algorithms</li>
              <li>• <strong>Web Crawler:</strong> Extract data from websites with multithreading</li>
              <li>• <strong>Online Quiz System:</strong> Web-based quiz with user authentication</li>
            </ul>
          </div>

          {/* Advanced Projects */}
          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
            <h3 className="font-semibold text-red-900 dark:text-red-100 mb-3">🔴 Advanced Projects</h3>
            <ul className="space-y-2 text-red-800 dark:text-red-200 text-sm">
              <li>• <strong>Microservices Architecture:</strong> Distributed system with Spring Cloud</li>
              <li>• <strong>Real-time Trading System:</strong> High-frequency trading platform</li>
              <li>• <strong>Content Management System:</strong> Full-featured CMS with security</li>
              <li>• <strong>Distributed Cache:</strong> Build a Redis-like caching system</li>
              <li>• <strong>Android App:</strong> Native Android application with backend</li>
              <li>• <strong>Search Engine:</strong> Build a web search engine with indexing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
          🚀 Getting Started with Java
        </h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Install Java Development Kit (JDK)</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Download and install the latest JDK from Oracle or use OpenJDK</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Choose an IDE</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">IntelliJ IDEA, Eclipse, or VS Code with Java extensions</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Write Your First Program</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Start with the classic "Hello, World!" program to test your setup</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Learn the Fundamentals</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Master variables, data types, control structures, and methods</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/languages"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Languages</span>
        </Link>
        <Link
          href="/languages/cpp"
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Next: C++</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
