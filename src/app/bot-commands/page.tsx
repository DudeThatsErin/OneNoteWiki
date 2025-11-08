'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, Bot, MessageCircle, Hash, Users, Settings, HelpCircle, Github, Zap, Smile, Heart } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';
import { InfoCard } from '@/components/InfoCard';

interface BotCommand {
  name: string;
  description: string;
  aliases: string[];
  usage: string;
  example: string;
}

interface CategoryData {
  description: string;
  icon: string;
  commands: BotCommand[];
}

interface CommandData {
  prefix_commands: {
    [category: string]: CategoryData;
  };
  slash_commands: {
    [category: string]: CategoryData;
  };
}

interface CommandCategory {
  id: string;
  title: string;
  icon: JSX.Element;
  description: string;
  commands: BotCommand[];
  type: 'prefix' | 'slash';
}

// Function to get icon for category
const getCategoryIcon = (iconName: string, type: 'prefix' | 'slash'): JSX.Element => {
  const name = iconName?.toLowerCase() || '';
  
  switch (name) {
    case 'settings':
      return <Settings className="w-5 h-5" />;
    case 'smile':
      return <Smile className="w-5 h-5" />;
    case 'heart':
      return <Heart className="w-5 h-5" />;
    case 'message-circle':
      return <MessageCircle className="w-5 h-5" />;
    case 'zap':
      return <Zap className="w-5 h-5" />;
    case 'help-circle':
      return <HelpCircle className="w-5 h-5" />;
    default:
      return type === 'prefix' ? <Hash className="w-5 h-5" /> : <Bot className="w-5 h-5" />;
  }
};


// Function to process command data into categories
const processCommandData = (data: CommandData): CommandCategory[] => {
  const categories: CommandCategory[] = [];
  
  // Validate data structure
  if (!data || typeof data !== 'object') {
    return categories;
  }
  
  // Process prefix commands
  if (data.prefix_commands && typeof data.prefix_commands === 'object') {
    Object.entries(data.prefix_commands).forEach(([categoryName, categoryData]) => {
      if (categoryData && categoryData.commands && Array.isArray(categoryData.commands)) {
        categories.push({
          id: `prefix-${categoryName.toLowerCase().replace(/\s+/g, '-')}`,
          title: `${categoryName} (Prefix Commands)`,
          icon: getCategoryIcon(categoryData.icon, 'prefix'),
          description: categoryData.description || 'No description available',
          commands: categoryData.commands,
          type: 'prefix'
        });
      }
    });
  }
  
  // Process slash commands
  if (data.slash_commands && typeof data.slash_commands === 'object') {
    Object.entries(data.slash_commands).forEach(([categoryName, categoryData]) => {
      if (categoryData && categoryData.commands && Array.isArray(categoryData.commands)) {
        categories.push({
          id: `slash-${categoryName.toLowerCase().replace(/\s+/g, '-')}`,
          title: `${categoryName} (Slash Commands)`,
          icon: getCategoryIcon(categoryData.icon, 'slash'),
          description: categoryData.description || 'No description available',
          commands: categoryData.commands,
          type: 'slash'
        });
      }
    });
  }
  
  return categories;
};

export default function BotCommandsPage() {
  const [commandData, setCommandData] = useState<CommandData | null>(null);
  const [categories, setCategories] = useState<CommandCategory[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const loadCommands = async () => {
      try {
        const response = await fetch('/command-list.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCommandData(data);
        setCategories(processCommandData(data));
      } catch (error) {
        console.error('Failed to load bot commands:', error);
        setCategories([]);
      }
    };

    loadCommands();
  }, []);

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
      description="Our OneNote Discord Bot provides helpful commands for server management, fun activities, social interaction, suggestions, and utility functions. Browse the categories below to find the commands you need."
      icon={<div className="text-4xl">🤖</div>}
    >

      {/* Command Categories */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Command Categories
        </h2>
        
        {!isMounted ? (
          <div className="text-center py-8">
            <p className="text-gray-600 dark:text-gray-300">Loading commands...</p>
          </div>
        ) : categories.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-red-600 dark:text-red-400">Failed to load bot commands. Please check the console for errors.</p>
            {commandData && (
              <details className="mt-4 text-left">
                <summary className="cursor-pointer text-blue-600 dark:text-blue-400">Show raw data</summary>
                <pre className="mt-2 p-4 bg-gray-100 dark:bg-gray-800 rounded text-xs overflow-auto">
                  {JSON.stringify(commandData, null, 2)}
                </pre>
              </details>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-4 md:gap-6">
            {categories.map((category) => {
            const isExpanded = expandedCategories.includes(category.id);
            
            return (
              <div key={category.id} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-gray-700 dark:text-gray-300" suppressHydrationWarning>
                        {isMounted ? category.icon : <Bot className="w-5 h-5" />}
                      </div>
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
                      <div suppressHydrationWarning>
                        {isMounted && isExpanded ? (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </div>
                </button>
                
                {isMounted && isExpanded && (
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
                            
                            {command.aliases && command.aliases.length > 0 && (
                              <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">
                                  Aliases:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {command.aliases.map((alias, aliasIndex) => (
                                    <code key={aliasIndex} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-800 dark:text-gray-200">
                                      {alias}
                                    </code>
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
        )}
      </section>

      {/* Get Involved */}
      <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          🤝 Get Involved
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Want to help shape the OneNote Discord Bot? We welcome contributions and feedback from the community!
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/DudeThatsErin/OneNoteBot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Contribute on GitHub</span>
          </a>
          <a
            href="https://discord.gg/5kv4bDUkpc"
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
