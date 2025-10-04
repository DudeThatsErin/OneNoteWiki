'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, Bot, MessageCircle, Hash, Users, Settings, HelpCircle, Github } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';
import { InfoCard } from '@/components/InfoCard';

const commandCategories = [
  {
    id: 'help',
    title: 'Help & Support Commands',
    icon: <HelpCircle className="w-5 h-5" />,
    description: 'Get help with OneNote questions and find resources',
    commands: [
      {
        name: '/ask',
        description: 'Ask a OneNote question and get help from the community',
        usage: '/ask [category] [question]',
        example: '/ask organization How do I structure my notebooks?',
        parameters: [
          { name: 'category', type: 'string', required: true, description: 'OneNote category (organization, features, sync, mobile, etc.)' },
          { name: 'question', type: 'string', required: true, description: 'Your OneNote question' }
        ]
      },
      {
        name: '/resources',
        description: 'Get OneNote resources and tutorials for specific topics',
        usage: '/resources [topic]',
        example: '/resources templates',
        parameters: [
          { name: 'topic', type: 'string', required: true, description: 'OneNote topic (templates, organization, mobile, etc.)' }
        ]
      },
      {
        name: '/docs',
        description: 'Get official Microsoft OneNote documentation links',
        usage: '/docs [feature]',
        example: '/docs handwriting',
        parameters: [
          { name: 'feature', type: 'string', required: true, description: 'OneNote feature or topic' }
        ]
      }
    ]
  },
  {
    id: 'onenote',
    title: 'OneNote Utility Commands',
    icon: <MessageCircle className="w-5 h-5" />,
    description: 'Useful tools for OneNote tips, templates, and organization',
    commands: [
      {
        name: '/template',
        description: 'Get OneNote templates for various use cases',
        usage: '/template [category]',
        example: '/template meeting',
        parameters: [
          { name: 'category', type: 'string', required: true, description: 'Template category (meeting, academic, personal, etc.)' },
        ]
      },
      {
        name: '/tips',
        description: 'Get OneNote tips and best practices',
        usage: '/tips [topic]',
        example: '/tips organization',
        parameters: [
          { name: 'topic', type: 'string', required: true, description: 'OneNote topic for tips' }
        ]
      },
      {
        name: '/shortcuts',
        description: 'Get keyboard shortcuts for OneNote',
        usage: '/shortcuts [platform]',
        example: '/shortcuts windows',
        parameters: [
          { name: 'platform', type: 'string', required: false, description: 'Platform: windows, mac, mobile' }
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
        description: 'View or update your OneNote user profile',
        usage: '/profile [action] [details]',
        example: '/profile set experience advanced',
        parameters: [
          { name: 'action', type: 'string', required: true, description: 'Action: view, set, or update' },
          { name: 'details', type: 'string', required: false, description: 'Profile details to update' }
        ]
      },
      {
        name: '/leaderboard',
        description: 'View community leaderboards for helpful OneNote users',
        usage: '/leaderboard [type]',
        example: '/leaderboard weekly',
        parameters: [
          { name: 'type', type: 'string', required: false, description: 'Leaderboard type: daily, weekly, monthly, all-time' }
        ]
      },
      {
        name: '/thanks',
        description: 'Thank someone for their OneNote help',
        usage: '/thanks @user [message]',
        example: '/thanks @helper Thanks for the organization tips!',
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
        description: 'Suggest new features or improvements for the OneNote bot',
        usage: '/suggest [suggestion]',
        example: '/suggest Add more OneNote template categories',
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
    <PageLayout
      title="Bot Commands"
      description="Our Discord bot provides helpful commands for getting OneNote assistance, templates, tips, and accessing community resources."
      icon={<div className="text-4xl">🤖</div>}
    >
      {/* Header */}
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex items-center gap-3">
          <div className="text-4xl">🤖</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Discord Bot Commands</h1>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300 rounded-full text-sm font-medium">
                Coming Soon
              </span>
              <p className="text-gray-600 dark:text-gray-300">
                OneNote Discord Bot command reference
              </p>
            </div>
          </div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          The OneNote Discord Bot is currently in development! Here's a preview of the commands 
          that will be available to help you with OneNote questions, templates, tips, and community interaction.
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
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
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
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Command Categories
        </h2>
        
        <div className="flex flex-col gap-4 md:gap-6">
          {commandCategories.map((category) => {
            const isExpanded = expandedCategories.includes(category.id);
            
            return (
              <div key={category.id} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
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
                    <div className="flex items-center gap-2">
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
                    <div className="flex flex-col gap-6 md:gap-8">
                      {category.commands.map((command, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                          <div className="mb-3">
                            <div className="flex items-center gap-2 mb-2">
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
                          
                          <div className="flex flex-col gap-3">
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
                                <div className="flex flex-col gap-2">
                                  {command.parameters.map((param, paramIndex) => (
                                    <div key={paramIndex} className="flex items-start gap-3 text-sm">
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
            <ul className="text-yellow-800 dark:text-yellow-200 text-sm [&>li]:mb-1">
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
            <ul className="text-yellow-800 dark:text-yellow-200 text-sm [&>li]:mb-1">
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
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
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
    </PageLayout>
  );
}
