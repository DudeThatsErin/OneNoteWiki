import Link from 'next/link';
import { ArrowLeft, ArrowRight, Monitor, Download, Settings, CheckCircle } from 'lucide-react';

const setupSteps = [
  {
    title: 'Choose Your Operating System',
    description: 'Most programming can be done on any OS, but some have advantages',
    details: [
      'Windows: Great for .NET development, gaming, general use',
      'macOS: Preferred for iOS development, Unix-based',
      'Linux: Popular among developers, free, highly customizable'
    ]
  },
  {
    title: 'Install a Code Editor',
    description: 'A good editor makes coding much more enjoyable and productive',
    details: [
      'VS Code: Free, popular, tons of extensions',
      'Sublime Text: Fast, lightweight, paid',
      'Atom: Free, hackable, GitHub-made (discontinued but still usable)'
    ]
  },
  {
    title: 'Install Your Programming Language',
    description: 'Download and install the runtime/compiler for your chosen language',
    details: [
      'Python: Download from python.org',
      'JavaScript: Built into browsers, Node.js for backend',
      'Java: Install JDK from Oracle or OpenJDK'
    ]
  },
  {
    title: 'Set Up Version Control',
    description: 'Git is essential for tracking changes and collaboration',
    details: [
      'Install Git from git-scm.com',
      'Create a GitHub account',
      'Configure Git with your name and email'
    ]
  }
];

const editorComparison = [
  {
    name: 'VS Code',
    price: 'Free',
    pros: ['Huge extension library', 'Great debugging', 'Integrated terminal', 'Git integration'],
    cons: ['Can be resource-heavy', 'Microsoft product'],
    bestFor: 'Most beginners and professionals',
    downloadUrl: 'https://code.visualstudio.com/'
  },
  {
    name: 'IntelliJ IDEA',
    price: 'Free Community / Paid Ultimate',
    pros: ['Excellent for Java', 'Smart code completion', 'Powerful refactoring', 'Built-in tools'],
    cons: ['Heavy resource usage', 'Complex interface', 'Paid for full features'],
    bestFor: 'Java developers, enterprise development',
    downloadUrl: 'https://www.jetbrains.com/idea/'
  },
  {
    name: 'Sublime Text',
    price: 'Paid ($99)',
    pros: ['Very fast', 'Lightweight', 'Great performance', 'Customizable'],
    cons: ['Paid license', 'Fewer features out of box', 'Less beginner-friendly'],
    bestFor: 'Developers who want speed and simplicity',
    downloadUrl: 'https://www.sublimetext.com/'
  },
  {
    name: 'Vim/Neovim',
    price: 'Free',
    pros: ['Extremely powerful', 'Keyboard-driven', 'Available everywhere', 'Highly customizable'],
    cons: ['Steep learning curve', 'Not beginner-friendly', 'Requires configuration'],
    bestFor: 'Advanced developers, terminal enthusiasts',
    downloadUrl: 'https://www.vim.org/'
  }
];

const languageSetup = [
  {
    language: 'Python',
    icon: '🐍',
    steps: [
      'Go to python.org and download Python 3.x',
      'Run the installer (check "Add Python to PATH")',
      'Open terminal/command prompt and type: python --version',
      'Install pip (usually comes with Python): pip --version',
      'Optional: Install a virtual environment manager like venv'
    ],
    verifyCommand: 'python --version',
    packageManager: 'pip'
  },
  {
    language: 'JavaScript',
    icon: '🟨',
    steps: [
      'JavaScript runs in browsers by default',
      'For backend development, install Node.js from nodejs.org',
      'Download the LTS (Long Term Support) version',
      'Open terminal and verify: node --version',
      'npm (package manager) comes with Node.js: npm --version'
    ],
    verifyCommand: 'node --version',
    packageManager: 'npm'
  },
  {
    language: 'Java',
    icon: '☕',
    steps: [
      'Download JDK from Oracle or use OpenJDK',
      'Install the JDK (Java Development Kit)',
      'Set JAVA_HOME environment variable',
      'Add Java to your PATH',
      'Verify installation: java --version and javac --version'
    ],
    verifyCommand: 'java --version',
    packageManager: 'Maven/Gradle'
  }
];

export default function SetupPage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/getting-started/choosing-language"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Choosing Language</span>
        </Link>
        <Link
          href="/getting-started/first-program"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>Next: Your First Program</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Settings className="w-8 h-8 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Setting Up Your Environment
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Before you can start coding, you need to set up your development environment. 
          This includes installing a code editor, your programming language, and essential tools.
        </p>
      </div>

      {/* Setup Overview */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
          🛠️ What You'll Need
        </h3>
        <div className="space-y-4">
          {setupSteps.map((step, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              <div>
                <h4 className="font-semibold text-green-900 dark:text-green-100">{step.title}</h4>
                <p className="text-green-800 dark:text-green-200 text-sm mb-2">{step.description}</p>
                <ul className="text-green-700 dark:text-green-300 text-xs space-y-1">
                  {step.details.map((detail, i) => (
                    <li key={i}>• {detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Code Editor Comparison */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Choose Your Code Editor
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {editorComparison.map((editor, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {editor.name}
                </h3>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  editor.price === 'Free' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                  'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                }`}>
                  {editor.price}
                </span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">✅ Pros:</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-xs space-y-1">
                    {editor.pros.map((pro, i) => (
                      <li key={i}>• {pro}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">❌ Cons:</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-xs space-y-1">
                    {editor.cons.map((con, i) => (
                      <li key={i}>• {con}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">🎯 Best For:</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-xs">{editor.bestFor}</p>
                </div>
                
                <a
                  href={editor.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Language-Specific Setup */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Language-Specific Setup
        </h2>
        <div className="space-y-6">
          {languageSetup.map((lang, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl">{lang.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {lang.language} Setup
                </h3>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">Installation Steps:</h4>
                <ol className="space-y-2">
                  {lang.steps.map((step, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="w-5 h-5 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
                
                <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded mt-4">
                  <h5 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Verify Installation:</h5>
                  <code className="text-sm text-gray-700 dark:text-gray-300">{lang.verifyCommand}</code>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  <strong>Package Manager:</strong> {lang.packageManager}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Essential Extensions/Plugins */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Essential VS Code Extensions
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">General Extensions:</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-blue-900 dark:text-blue-100">Prettier</strong>
                    <p className="text-blue-800 dark:text-blue-200 text-sm">Code formatter</p>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-blue-900 dark:text-blue-100">GitLens</strong>
                    <p className="text-blue-800 dark:text-blue-200 text-sm">Enhanced Git capabilities</p>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-blue-900 dark:text-blue-100">Live Server</strong>
                    <p className="text-blue-800 dark:text-blue-200 text-sm">Local development server</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Language-Specific:</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-blue-900 dark:text-blue-100">Python</strong>
                    <p className="text-blue-800 dark:text-blue-200 text-sm">Python language support</p>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-blue-900 dark:text-blue-100">ES7+ React/Redux/React-Native</strong>
                    <p className="text-blue-800 dark:text-blue-200 text-sm">JavaScript/React snippets</p>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-blue-900 dark:text-blue-100">Extension Pack for Java</strong>
                    <p className="text-blue-800 dark:text-blue-200 text-sm">Complete Java development</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Setup */}
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
          💻 Terminal/Command Line Setup
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Windows:</h4>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
              <li>• Use PowerShell or Command Prompt</li>
              <li>• Consider Windows Terminal (modern)</li>
              <li>• WSL2 for Linux compatibility</li>
              <li>• Git Bash for Unix-like commands</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">macOS:</h4>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
              <li>• Built-in Terminal app</li>
              <li>• iTerm2 for advanced features</li>
              <li>• Zsh is default shell</li>
              <li>• Homebrew for package management</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Linux:</h4>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
              <li>• Built-in terminal emulator</li>
              <li>• Bash or Zsh shell</li>
              <li>• Package manager (apt, yum, pacman)</li>
              <li>• Highly customizable</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
        <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-4">
          🔧 Common Setup Issues
        </h3>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100">PATH Issues:</h4>
            <p className="text-yellow-800 dark:text-yellow-200 text-sm">
              If commands aren't recognized, you may need to add the installation directory to your system PATH.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100">Permission Errors:</h4>
            <p className="text-yellow-800 dark:text-yellow-200 text-sm">
              On macOS/Linux, you might need to use `sudo` for system-wide installations.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100">Version Conflicts:</h4>
            <p className="text-yellow-800 dark:text-yellow-200 text-sm">
              Use virtual environments (Python) or version managers (Node.js) to avoid conflicts.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/getting-started/choosing-language"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Choosing Language</span>
        </Link>
        <Link
          href="/getting-started/first-program"
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Next: Your First Program</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
