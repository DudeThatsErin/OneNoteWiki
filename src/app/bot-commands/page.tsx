'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, Bot, Code, HelpCircle, Users, Settings, Github } from 'lucide-react';

const commandCategories = [
  {
    id: 'help',
    title: 'Help & Support Commands',
    icon: <HelpCircle className="w-5 h-5" />,
    description: 'Get help with coding questions and find resources',
    commands: [
      {
        name: '/ask',
        description: 'Ask a coding question and get help from the community',
        usage: '/ask [language] [question]',
        example: '/ask javascript How do I create a function?',
        parameters: [
          { name: 'language', type: 'string', required: true, description: 'Programming language (javascript, python, java, etc.)' },
          { name: 'question', type: 'string', required: true, description: 'Your coding question' }
        ]
      },
      {
        name: '/resources',
        description: 'Get learning resources for a specific programming language',
        usage: '/resources [language]',
        example: '/resources python',
        parameters: [
          { name: 'language', type: 'string', required: true, description: 'Programming language' }
        ]
      },
      {
        name: '/docs',
        description: 'Get official documentation links for programming languages and frameworks',
        usage: '/docs [technology]',
        example: '/docs react',
        parameters: [
          { name: 'technology', type: 'string', required: true, description: 'Technology or framework name' }
        ]
      }
    ]
  },
  {
    id: 'code',
    title: 'Code Utility Commands',
    icon: <Code className="w-5 h-5" />,
    description: 'Useful tools for code formatting, analysis, and snippets',
    commands: [
      {
        name: '/format',
        description: 'Format and beautify code snippets',
        usage: '/format [language] [code]',
        example: '/format javascript const x=1;console.log(x);',
        parameters: [
          { name: 'language', type: 'string', required: true, description: 'Programming language for syntax highlighting' },
          { name: 'code', type: 'string', required: true, description: 'Code to format' }
        ]
      },
      {
        name: '/explain',
        description: 'Get an explanation of what a code snippet does',
        usage: '/explain [language] [code]',
        example: '/explain python def fibonacci(n): return n if n <= 1 else fibonacci(n-1) + fibonacci(n-2)',
        parameters: [
          { name: 'language', type: 'string', required: true, description: 'Programming language' },
          { name: 'code', type: 'string', required: true, description: 'Code snippet to explain' }
        ]
      },
      {
        name: '/snippet',
        description: 'Get common code snippets for various tasks',
        usage: '/snippet [language] [task]',
        example: '/snippet javascript array sort',
        parameters: [
          { name: 'language', type: 'string', required: true, description: 'Programming language' },
          { name: 'task', type: 'string', required: true, description: 'What you want to accomplish' }
        ]
      }
    ]
  },
  {
    id: 'community',
    title: 'Community Commands',
    icon: <Users className="w-5 h-5" />,
    description: 'Interact with the community and manage your profile',
    commands: [
      {
        name: '/profile',
        description: 'View or update your coding profile',
        usage: '/profile [action] [details]',
        example: '/profile set languages javascript,python,java',
        parameters: [
          { name: 'action', type: 'string', required: true, description: 'Action: view, set, or update' },
          { name: 'details', type: 'string', required: false, description: 'Profile details to update' }
        ]
      },
      {
        name: '/leaderboard',
        description: 'View community leaderboards for helpful members',
        usage: '/leaderboard [type]',
        example: '/leaderboard weekly',
        parameters: [
          { name: 'type', type: 'string', required: false, description: 'Leaderboard type: daily, weekly, monthly, all-time' }
        ]
      },
      {
        name: '/thanks',
        description: 'Thank someone for their help',
        usage: '/thanks @user [message]',
        example: '/thanks @helper Thanks for the JavaScript help!',
        parameters: [
          { name: 'user', type: 'user', required: true, description: 'User to thank' },
          { name: 'message', type: 'string', required: false, description: 'Optional thank you message' }
        ]
      }
    ]
  },
  {
    id: 'utility',
    title: 'Utility Commands',
    icon: <Settings className="w-5 h-5" />,
    description: 'General utility commands for server management and information',
    commands: [
      {
        name: '/ping',
        description: 'Check bot response time and status',
        usage: '/ping',
        example: '/ping',
        parameters: []
      },
      {
        name: '/stats',
        description: 'View server statistics and bot information',
        usage: '/stats [type]',
        example: '/stats server',
        parameters: [
          { name: 'type', type: 'string', required: false, description: 'Stats type: server, bot, or user' }
        ]
      },
      {
        name: '/suggest',
        description: 'Suggest new features or improvements for the bot',
        usage: '/suggest [suggestion]',
        example: '/suggest Add support for Rust programming language',
        parameters: [
          { name: 'suggestion', type: 'string', required: true, description: 'Your suggestion or feature request' }
        ]
      }
    ]
  }
];

export default function BotCommandsPage() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="text-4xl">🤖</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Discord Bot Commands</h1>
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300 rounded-full text-sm font-medium">
                Coming Soon
              </span>
              <p className="text-gray-600 dark:text-gray-300">CodingHelp Discord Bot command reference</p>
            </div>
          </div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          The CodingHelp Discord Bot is currently in development! Here's a preview of the commands 
          that will be available to help you with coding questions, resources, and community interaction.
        </p>
      </div>

      {/* Bot Info */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <div className="flex items-start space-x-4">
          <Bot className="w-8 h-8 text-blue-600 mt-1" />
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              About CodingHelp Bot
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our Discord bot is designed to enhance the coding help experience by providing instant access to 
              resources, code formatting, explanations, and community features. Built with modern Discord.js 
              and integrated with our wiki content.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/DudeThatsErin/CodingHelpBot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Open source and community-driven
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Command Categories */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Command Categories
        </h2>
        
        <div className="space-y-4">
          {commandCategories.map((category) => {
            const isExpanded = expandedCategories.includes(category.id);
            
            return (
              <div key={category.id} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-blue-600">{category.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {category.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {category.commands.length} commands
                      </span>
                      {isExpanded ? (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                </button>
                
                {isExpanded && (
                  <div className="border-t border-gray-200 dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-700/50">
                    <div className="space-y-6">
                      {category.commands.map((command, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                          <div className="mb-3">
                            <div className="flex items-center space-x-2 mb-2">
                              <code className="text-lg font-mono font-semibold text-blue-600 dark:text-blue-400">
                                {command.name}
                              </code>
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                Slash Command
                              </span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                              {command.description}
                            </p>
                          </div>
                          
                          <div className="space-y-3">
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                                Usage:
                              </h4>
                              <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-800 dark:text-gray-200">
                                {command.usage}
                              </code>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                                Example:
                              </h4>
                              <code className="text-sm bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded text-green-800 dark:text-green-200">
                                {command.example}
                              </code>
                            </div>
                            
                            {command.parameters.length > 0 && (
                              <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">
                                  Parameters:
                                </h4>
                                <div className="space-y-2">
                                  {command.parameters.map((param, paramIndex) => (
                                    <div key={paramIndex} className="flex items-start space-x-3 text-sm">
                                      <code className="text-blue-600 dark:text-blue-400 font-mono">
                                        {param.name}
                                      </code>
                                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                                        param.required 
                                          ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                                          : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                                      }`}>
                                        {param.required ? 'required' : 'optional'}
                                      </span>
                                      <span className="text-gray-600 dark:text-gray-300">
                                        {param.description}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Development Status */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
        <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
          🚧 Development Status
        </h3>
        <p className="text-yellow-800 dark:text-yellow-200 mb-4">
          The CodingHelp Discord Bot is currently under active development. We're working hard to bring 
          these features to the community as soon as possible!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
              What's Ready:
            </h4>
            <ul className="text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
              <li>• Bot architecture and framework</li>
              <li>• Command structure design</li>
              <li>• Database integration planning</li>
              <li>• Discord.js setup and configuration</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
              Coming Next:
            </h4>
            <ul className="text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
              <li>• Help and resource commands</li>
              <li>• Code formatting and explanation</li>
              <li>• Community interaction features</li>
              <li>• Beta testing with community</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Get Involved */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          🤝 Get Involved
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Want to help shape the CodingHelp Discord Bot? We welcome contributions and feedback from the community!
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/DudeThatsErin/CodingHelpBot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Contribute on GitHub</span>
          </a>
          <a
            href="https://discord.gg/geQEUBm"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Join Discord Community
          </a>
          <Link
            href="/faq"
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
