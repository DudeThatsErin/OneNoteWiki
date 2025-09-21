import Link from 'next/link';
import { ArrowLeft, ArrowRight, GitBranch, Users, Shield, Zap } from 'lucide-react';

const gitConcepts = [
  {
    title: 'Repository',
    description: 'A project folder tracked by Git with complete history',
    icon: <GitBranch className="w-5 h-5" />
  },
  {
    title: 'Commits',
    description: 'Snapshots of your code at specific points in time',
    icon: <Zap className="w-5 h-5" />
  },
  {
    title: 'Branches',
    description: 'Parallel versions of your code for different features',
    icon: <GitBranch className="w-5 h-5" />
  },
  {
    title: 'Collaboration',
    description: 'Work with teams using push, pull, and merge operations',
    icon: <Users className="w-5 h-5" />
  }
];

const gitPlatforms = [
  {
    name: 'GitHub',
    description: 'The world\'s largest code hosting platform',
    features: ['Public/private repos', 'Actions CI/CD', 'Issues & PRs', 'GitHub Pages'],
    bestFor: 'Open source projects, collaboration, portfolio'
  },
  {
    name: 'GitLab',
    description: 'Complete DevOps platform with built-in CI/CD',
    features: ['Integrated CI/CD', 'Issue tracking', 'Wiki', 'Container registry'],
    bestFor: 'Enterprise teams, complete DevOps workflow'
  },
  {
    name: 'Bitbucket',
    description: 'Atlassian\'s Git solution integrated with Jira',
    features: ['Jira integration', 'Pipelines', 'Pull requests', 'Code insights'],
    bestFor: 'Teams using Atlassian tools, enterprise'
  }
];

export default function GitPage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/devops-tools"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to DevOps & Tools</span>
        </Link>
        <Link
          href="/devops-tools/editors"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>Next: IDEs & Editors</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <GitBranch className="w-8 h-8 text-orange-600" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Version Control (Git)
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Master Git, the essential version control system for tracking changes, 
          collaborating with teams, and managing your code history effectively.
        </p>
      </div>

      {/* What is Git */}
      <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 border border-orange-200 dark:border-orange-800">
        <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-4">
          🌳 What is Git?
        </h3>
        <div className="space-y-4 text-orange-800 dark:text-orange-200">
          <p>
            <strong>Git</strong> is a distributed version control system that tracks changes in your 
            code over time. It allows multiple developers to work on the same project simultaneously 
            while maintaining a complete history of all changes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Why Use Git?</h4>
              <ul className="text-sm space-y-1">
                <li>• Track every change to your code</li>
                <li>• Collaborate safely with team members</li>
                <li>• Revert to previous versions easily</li>
                <li>• Work on features in isolation (branches)</li>
                <li>• Backup your code in multiple locations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Key Benefits:</h4>
              <ul className="text-sm space-y-1">
                <li>• Distributed (works offline)</li>
                <li>• Fast and lightweight</li>
                <li>• Industry standard</li>
                <li>• Powerful branching and merging</li>
                <li>• Complete project history</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Core Concepts */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Core Git Concepts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gitConcepts.map((concept, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-3">
                <div className="text-orange-600">{concept.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{concept.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{concept.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Essential Git Commands */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Essential Git Commands
        </h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
            🚀 Getting Started
          </h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`# Configure Git (first time setup)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Initialize a new repository
git init

# Clone an existing repository
git clone https://github.com/username/repository.git

# Check repository status
git status

# Add files to staging area
git add filename.txt        # Add specific file
git add .                   # Add all files
git add *.js               # Add all JavaScript files

# Commit changes
git commit -m "Add new feature"
git commit -am "Add and commit in one step"

# View commit history
git log
git log --oneline          # Compact view
git log --graph            # Visual branch representation`}
          </pre>
        </div>
      </section>

      {/* Branching and Merging */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Branching and Merging
        </h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
            🌿 Working with Branches
          </h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`# List branches
git branch                 # Local branches
git branch -r              # Remote branches
git branch -a              # All branches

# Create and switch to new branch
git checkout -b feature-branch
git switch -c feature-branch    # Modern alternative

# Switch between branches
git checkout main
git switch main            # Modern alternative

# Merge branch into current branch
git merge feature-branch

# Delete branch
git branch -d feature-branch    # Safe delete
git branch -D feature-branch    # Force delete

# Push branch to remote
git push origin feature-branch

# Pull latest changes
git pull origin main`}
          </pre>
        </div>
      </section>

      {/* Git Workflow */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Common Git Workflow
        </h2>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
            📋 Feature Branch Workflow
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Create Feature Branch</h4>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">git checkout -b feature/user-authentication</code>
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Make Changes and Commit</h4>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">git add . && git commit -m "Add login functionality"</code>
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Push to Remote</h4>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">git push origin feature/user-authentication</code>
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Create Pull Request</h4>
                <p className="text-blue-800 dark:text-blue-200 text-sm">Open PR on GitHub/GitLab for code review</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
              <div>
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Merge and Clean Up</h4>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">git checkout main && git pull && git branch -d feature/user-authentication</code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Git Platforms */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Popular Git Platforms
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gitPlatforms.map((platform, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {platform.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                {platform.description}
              </p>
              <div className="mb-3">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">Features:</h4>
                <div className="flex flex-wrap gap-1">
                  {platform.features.map((feature, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">Best For:</h4>
                <p className="text-gray-600 dark:text-gray-300 text-xs">{platform.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Best Practices */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
          ✅ Git Best Practices
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Commit Messages:</h4>
            <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
              <li>• Use present tense ("Add feature" not "Added feature")</li>
              <li>• Keep first line under 50 characters</li>
              <li>• Be descriptive and specific</li>
              <li>• Reference issue numbers when applicable</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Branching:</h4>
            <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
              <li>• Use descriptive branch names</li>
              <li>• Keep branches focused on single features</li>
              <li>• Delete merged branches</li>
              <li>• Regularly sync with main branch</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Collaboration:</h4>
            <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
              <li>• Always pull before pushing</li>
              <li>• Use pull requests for code review</li>
              <li>• Don't commit directly to main branch</li>
              <li>• Communicate with your team</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Security:</h4>
            <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
              <li>• Never commit passwords or API keys</li>
              <li>• Use .gitignore for sensitive files</li>
              <li>• Enable two-factor authentication</li>
              <li>• Review public repository contents</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Learning Resources */}
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
          📚 Git Learning Resources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Interactive Learning:</h4>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
              <li>• Learn Git Branching (interactive tutorial)</li>
              <li>• GitHub Skills (hands-on courses)</li>
              <li>• Git Immersion (step-by-step walkthrough)</li>
              <li>• Atlassian Git Tutorials</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Documentation & Books:</h4>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
              <li>• Pro Git Book (free online)</li>
              <li>• Git Official Documentation</li>
              <li>• GitHub Docs</li>
              <li>• Git Cheat Sheets</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/devops-tools"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to DevOps & Tools</span>
        </Link>
        <Link
          href="/devops-tools/editors"
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Next: IDEs & Editors</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
