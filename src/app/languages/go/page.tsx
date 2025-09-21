import Link from 'next/link';
import { ArrowLeft, ArrowRight, Code, BookOpen, Users, Zap, Star, ExternalLink } from 'lucide-react';

const goFeatures = [
  {
    title: 'Fast Compilation',
    description: 'Extremely fast compilation times make development cycles quick and efficient',
    icon: <Zap className="w-5 h-5" />
  },
  {
    title: 'Built-in Concurrency',
    description: 'Goroutines and channels make concurrent programming simple and powerful',
    icon: <Code className="w-5 h-5" />
  },
  {
    title: 'Simple Syntax',
    description: 'Clean, minimalist syntax that\'s easy to learn and read',
    icon: <Users className="w-5 h-5" />
  },
  {
    title: 'Static Binaries',
    description: 'Compile to single, statically-linked binaries with no dependencies',
    icon: <Star className="w-5 h-5" />
  }
];

const goUseCases = [
  {
    category: 'Cloud & DevOps',
    description: 'Cloud-native applications and DevOps tools',
    examples: ['Docker', 'Kubernetes', 'Terraform', 'Prometheus'],
    popularity: 'Very High'
  },
  {
    category: 'Web Services',
    description: 'High-performance web servers and APIs',
    examples: ['REST APIs', 'Microservices', 'Web servers', 'gRPC services'],
    popularity: 'Very High'
  },
  {
    category: 'System Programming',
    description: 'System tools and network programming',
    examples: ['CLI tools', 'Network services', 'System utilities', 'Database systems'],
    popularity: 'High'
  },
  {
    category: 'Distributed Systems',
    description: 'Scalable distributed applications',
    examples: ['Message queues', 'Load balancers', 'Distributed databases', 'Blockchain'],
    popularity: 'High'
  }
];

const goLearningPath = [
  {
    phase: 'Go Fundamentals',
    duration: '2-3 weeks',
    topics: ['Basic syntax', 'Variables and types', 'Functions', 'Control structures', 'Packages'],
    projects: ['Hello World', 'Calculator', 'File reader']
  },
  {
    phase: 'Go Concepts',
    duration: '3-4 weeks',
    topics: ['Structs and methods', 'Interfaces', 'Error handling', 'Pointers', 'Slices and maps'],
    projects: ['Todo CLI', 'JSON processor', 'Simple web server']
  },
  {
    phase: 'Concurrency',
    duration: '3-5 weeks',
    topics: ['Goroutines', 'Channels', 'Select statement', 'Sync package', 'Context'],
    projects: ['Concurrent downloader', 'Chat server', 'Worker pool']
  },
  {
    phase: 'Advanced Go',
    duration: '4-6 weeks',
    topics: ['HTTP servers', 'Database integration', 'Testing', 'Modules', 'Reflection'],
    projects: ['REST API', 'Web application', 'CLI tool with database']
  }
];

const goResources = [
  {
    category: 'Official Documentation',
    resources: [
      { name: 'Go Documentation', url: 'https://golang.org/doc/', description: 'Official Go documentation' },
      { name: 'A Tour of Go', url: 'https://tour.golang.org/', description: 'Interactive Go tutorial' },
      { name: 'Effective Go', url: 'https://golang.org/doc/effective_go.html', description: 'Best practices guide' }
    ]
  },
  {
    category: 'Learning Platforms',
    resources: [
      { name: 'Go by Example', url: 'https://gobyexample.com/', description: 'Hands-on introduction using examples' },
      { name: 'Codecademy Go Course', url: 'https://www.codecademy.com/learn/learn-go', description: 'Interactive Go programming course' },
      { name: 'Udemy Go Courses', url: 'https://www.udemy.com/courses/search/?q=golang', description: 'Comprehensive Go courses' }
    ]
  },
  {
    category: 'Books & References',
    resources: [
      { name: 'The Go Programming Language', url: 'https://www.gopl.io/', description: 'Comprehensive Go book by Alan Donovan' },
      { name: 'Go in Action', url: 'https://www.manning.com/books/go-in-action', description: 'Practical Go programming guide' },
      { name: 'Concurrency in Go', url: 'https://www.oreilly.com/library/view/concurrency-in-go/9781491941294/', description: 'Mastering Go concurrency patterns' }
    ]
  },
  {
    category: 'Tools & IDEs',
    resources: [
      { name: 'Visual Studio Code', url: 'https://code.visualstudio.com/', description: 'Lightweight editor with Go extension' },
      { name: 'GoLand', url: 'https://www.jetbrains.com/go/', description: 'JetBrains IDE for Go development' },
      { name: 'Vim-go', url: 'https://github.com/fatih/vim-go', description: 'Go development plugin for Vim' }
    ]
  }
];

const goFrameworks = [
  {
    name: 'Gin',
    description: 'High-performance HTTP web framework',
    useCases: ['REST APIs', 'Web services', 'Microservices', 'HTTP servers'],
    difficulty: 'Beginner',
    popularity: 'Very High'
  },
  {
    name: 'Echo',
    description: 'High performance, extensible, minimalist Go web framework',
    useCases: ['Web applications', 'REST APIs', 'Microservices', 'Real-time apps'],
    difficulty: 'Beginner',
    popularity: 'High'
  },
  {
    name: 'Fiber',
    description: 'Express-inspired web framework built on Fasthttp',
    useCases: ['Web APIs', 'High-performance apps', 'Microservices', 'Real-time services'],
    difficulty: 'Beginner',
    popularity: 'High'
  },
  {
    name: 'gRPC-Go',
    description: 'Go implementation of gRPC for building distributed systems',
    useCases: ['Microservices', 'Distributed systems', 'API services', 'Inter-service communication'],
    difficulty: 'Intermediate',
    popularity: 'High'
  }
];

export default function GoPage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/languages/csharp"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: C#</span>
        </Link>
        <Link
          href="/languages/rust"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>Next: Rust</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="text-4xl">🐹</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Go</h1>
            <p className="text-gray-600 dark:text-gray-300">Simple, fast, and reliable programming language</p>
          </div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Go is an open source programming language developed by Google that makes it easy to build 
          simple, reliable, and efficient software with built-in concurrency support.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg border border-cyan-200 dark:border-cyan-800">
          <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">2009</div>
          <div className="text-sm text-cyan-700 dark:text-cyan-300">First Released</div>
        </div>
        <div className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg border border-cyan-200 dark:border-cyan-800">
          <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">Beginner</div>
          <div className="text-sm text-cyan-700 dark:text-cyan-300">Difficulty Level</div>
        </div>
        <div className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg border border-cyan-200 dark:border-cyan-800">
          <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">#13</div>
          <div className="text-sm text-cyan-700 dark:text-cyan-300">TIOBE Index</div>
        </div>
        <div className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg border border-cyan-200 dark:border-cyan-800">
          <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">1.1M+</div>
          <div className="text-sm text-cyan-700 dark:text-cyan-300">Developers</div>
        </div>
      </div>

      {/* Key Features */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Why Choose Go?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {goFeatures.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-3">
                <div className="text-cyan-600">{feature.icon}</div>
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
          What Can You Build with Go?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {goUseCases.map((useCase, index) => (
            <div key={index} className="bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-lg border border-cyan-200 dark:border-cyan-800">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-cyan-900 dark:text-cyan-100">{useCase.category}</h3>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  useCase.popularity === 'Very High' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                  useCase.popularity === 'High' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                  'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300'
                }`}>
                  {useCase.popularity}
                </span>
              </div>
              <p className="text-cyan-800 dark:text-cyan-200 text-sm mb-3">{useCase.description}</p>
              <div className="flex flex-wrap gap-1">
                {useCase.examples.map((example, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full">
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
          Go Code Example
        </h2>
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
            Hello World & Concurrency Example
          </h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`// Hello World
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}

// Basic Struct and Methods
package main

import "fmt"

type Person struct {
    Name string
    Age  int
}

func (p Person) Introduce() {
    fmt.Printf("Hi, I'm %s and I'm %d years old.\\n", p.Name, p.Age)
}

func main() {
    person := Person{Name: "Alice", Age: 25}
    person.Introduce()
}

// Concurrency with Goroutines
package main

import (
    "fmt"
    "time"
)

func worker(id int, jobs <-chan int, results chan<- int) {
    for j := range jobs {
        fmt.Printf("Worker %d processing job %d\\n", id, j)
        time.Sleep(time.Second) // Simulate work
        results <- j * 2
    }
}

func main() {
    jobs := make(chan int, 100)
    results := make(chan int, 100)

    // Start 3 workers
    for w := 1; w <= 3; w++ {
        go worker(w, jobs, results)
    }

    // Send 5 jobs
    for j := 1; j <= 5; j++ {
        jobs <- j
    }
    close(jobs)

    // Collect results
    for a := 1; a <= 5; a++ {
        <-results
    }
}`}
          </pre>
        </div>
      </section>

      {/* Learning Path */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Go Learning Path
        </h2>
        <div className="space-y-6">
          {goLearningPath.map((phase, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
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
          Popular Go Frameworks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {goFrameworks.map((framework, index) => (
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
                  <span key={i} className="text-xs px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full">
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
          Go Learning Resources
        </h2>
        <div className="space-y-6">
          {goResources.map((category, index) => (
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

      {/* Getting Started */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
          🚀 Getting Started with Go
        </h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Install Go</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Download and install Go from golang.org</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Set Up Your Workspace</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Configure GOPATH and GOROOT environment variables</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Take the Tour</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Complete "A Tour of Go" interactive tutorial</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Build Your First Program</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Create a simple CLI tool or web server</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/languages/csharp"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: C#</span>
        </Link>
        <Link
          href="/languages/rust"
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Next: Rust</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
