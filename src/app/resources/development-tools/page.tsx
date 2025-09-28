'use client';

import { PageLayout } from '@/components/PageLayout';
import { DataTable } from '@/components/DataTable';
import { Settings, ExternalLink } from 'lucide-react';

interface DevelopmentTool {
  name: string;
  category: string;
  type: string;
  price: string;
  platforms: string[];
  languages: string[];
  features: string[];
  company: string;
  firstRelease: number;
  downloadUrl: string;
  officialSite: string;
  documentation: string;
  description: string;
  popularity: string;
  openSource: boolean;
}

const developmentToolsData: DevelopmentTool[] = [
  {
    name: 'Visual Studio Code',
    category: 'IDE/Editor',
    type: 'Code Editor',
    price: 'Free',
    platforms: ['Windows', 'macOS', 'Linux'],
    languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C#', 'Go', 'Rust'],
    features: ['IntelliSense', 'Debugging', 'Git Integration', 'Extensions', 'Terminal'],
    company: 'Microsoft',
    firstRelease: 2015,
    downloadUrl: 'https://code.visualstudio.com/download',
    officialSite: 'https://code.visualstudio.com/',
    documentation: 'https://code.visualstudio.com/docs',
    description: 'Lightweight but powerful source code editor with rich ecosystem of extensions',
    popularity: 'Very High',
    openSource: true
  },
  {
    name: 'IntelliJ IDEA',
    category: 'IDE/Editor',
    type: 'IDE',
    price: 'Free (Community) / $149/year (Ultimate)',
    platforms: ['Windows', 'macOS', 'Linux'],
    languages: ['Java', 'Kotlin', 'Scala', 'Groovy', 'JavaScript', 'TypeScript'],
    features: ['Smart Code Completion', 'Refactoring', 'Debugging', 'Version Control', 'Database Tools'],
    company: 'JetBrains',
    firstRelease: 2001,
    downloadUrl: 'https://www.jetbrains.com/idea/download/',
    officialSite: 'https://www.jetbrains.com/idea/',
    documentation: 'https://www.jetbrains.com/help/idea/',
    description: 'Integrated development environment for Java and other JVM languages',
    popularity: 'Very High',
    openSource: false
  },
  {
    name: 'PyCharm',
    category: 'IDE/Editor',
    type: 'IDE',
    price: 'Free (Community) / $89/year (Professional)',
    platforms: ['Windows', 'macOS', 'Linux'],
    languages: ['Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
    features: ['Code Analysis', 'Debugging', 'Testing', 'Django Support', 'Scientific Tools'],
    company: 'JetBrains',
    firstRelease: 2010,
    downloadUrl: 'https://www.jetbrains.com/pycharm/download/',
    officialSite: 'https://www.jetbrains.com/pycharm/',
    documentation: 'https://www.jetbrains.com/help/pycharm/',
    description: 'IDE specifically designed for Python development',
    popularity: 'High',
    openSource: false
  },
  {
    name: 'Xcode',
    category: 'IDE/Editor',
    type: 'IDE',
    price: 'Free',
    platforms: ['macOS'],
    languages: ['Swift', 'Objective-C', 'C++', 'C'],
    features: ['Interface Builder', 'iOS Simulator', 'Debugging', 'Performance Tools', 'App Store Connect'],
    company: 'Apple',
    firstRelease: 2003,
    downloadUrl: 'https://apps.apple.com/us/app/xcode/id497799835',
    officialSite: 'https://developer.apple.com/xcode/',
    documentation: 'https://developer.apple.com/documentation/xcode',
    description: 'Complete developer toolset for creating apps for Apple platforms',
    popularity: 'High',
    openSource: false
  },
  {
    name: 'Android Studio',
    category: 'IDE/Editor',
    type: 'IDE',
    price: 'Free',
    platforms: ['Windows', 'macOS', 'Linux'],
    languages: ['Java', 'Kotlin', 'C++', 'Dart'],
    features: ['Layout Editor', 'APK Analyzer', 'Fast Emulator', 'Intelligent Code Editor', 'Real-time Profilers'],
    company: 'Google',
    firstRelease: 2013,
    downloadUrl: 'https://developer.android.com/studio',
    officialSite: 'https://developer.android.com/studio',
    documentation: 'https://developer.android.com/studio/intro',
    description: 'Official IDE for Android app development',
    popularity: 'High',
    openSource: true
  },
  {
    name: 'Sublime Text',
    category: 'IDE/Editor',
    type: 'Code Editor',
    price: '$99 (Free trial)',
    platforms: ['Windows', 'macOS', 'Linux'],
    languages: ['All major languages'],
    features: ['Multiple Selections', 'Command Palette', 'Split Editing', 'Plugin API', 'Goto Anything'],
    company: 'Sublime HQ',
    firstRelease: 2008,
    downloadUrl: 'https://www.sublimetext.com/download',
    officialSite: 'https://www.sublimetext.com/',
    documentation: 'https://www.sublimetext.com/docs/',
    description: 'Sophisticated text editor for code, markup and prose',
    popularity: 'Medium',
    openSource: false
  },
  {
    name: 'Atom',
    category: 'IDE/Editor',
    type: 'Code Editor',
    price: 'Free (Discontinued)',
    platforms: ['Windows', 'macOS', 'Linux'],
    languages: ['All major languages'],
    features: ['Built-in Package Manager', 'Smart Autocompletion', 'File System Browser', 'Multiple Panes'],
    company: 'GitHub',
    firstRelease: 2014,
    downloadUrl: 'https://github.com/atom/atom/releases',
    officialSite: 'https://atom.io/',
    documentation: 'https://flight-manual.atom.io/',
    description: 'Hackable text editor for the 21st Century (Discontinued in 2022)',
    popularity: 'Low',
    openSource: true
  },
  {
    name: 'Git',
    category: 'Version Control',
    type: 'VCS',
    price: 'Free',
    platforms: ['Windows', 'macOS', 'Linux'],
    languages: ['All'],
    features: ['Distributed VCS', 'Branching', 'Merging', 'Staging Area', 'Remote Repositories'],
    company: 'Git Community',
    firstRelease: 2005,
    downloadUrl: 'https://git-scm.com/downloads',
    officialSite: 'https://git-scm.com/',
    documentation: 'https://git-scm.com/doc',
    description: 'Distributed version control system for tracking changes in source code',
    popularity: 'Very High',
    openSource: true
  },
  {
    name: 'Docker',
    category: 'DevOps',
    type: 'Containerization',
    price: 'Free (Personal) / $5/month (Pro)',
    platforms: ['Windows', 'macOS', 'Linux'],
    languages: ['All'],
    features: ['Containerization', 'Image Management', 'Docker Compose', 'Swarm Mode', 'Registry'],
    company: 'Docker Inc.',
    firstRelease: 2013,
    downloadUrl: 'https://www.docker.com/products/docker-desktop',
    officialSite: 'https://www.docker.com/',
    documentation: 'https://docs.docker.com/',
    description: 'Platform for developing, shipping, and running applications in containers',
    popularity: 'Very High',
    openSource: true
  },
  {
    name: 'Postman',
    category: 'API Testing',
    type: 'API Client',
    price: 'Free / $12/month (Team)',
    platforms: ['Windows', 'macOS', 'Linux', 'Web'],
    languages: ['All'],
    features: ['API Testing', 'Collections', 'Environment Variables', 'Mock Servers', 'Monitoring'],
    company: 'Postman Inc.',
    firstRelease: 2012,
    downloadUrl: 'https://www.postman.com/downloads/',
    officialSite: 'https://www.postman.com/',
    documentation: 'https://learning.postman.com/docs/',
    description: 'Collaboration platform for API development and testing',
    popularity: 'Very High',
    openSource: false
  },
  {
    name: 'Figma',
    category: 'Design',
    type: 'UI/UX Design',
    price: 'Free / $12/month (Professional)',
    platforms: ['Web', 'Windows', 'macOS'],
    languages: ['N/A'],
    features: ['Vector Graphics', 'Prototyping', 'Collaboration', 'Design Systems', 'Developer Handoff'],
    company: 'Figma Inc.',
    firstRelease: 2016,
    downloadUrl: 'https://www.figma.com/downloads/',
    officialSite: 'https://www.figma.com/',
    documentation: 'https://help.figma.com/',
    description: 'Collaborative interface design tool',
    popularity: 'Very High',
    openSource: false
  },
  {
    name: 'Slack',
    category: 'Communication',
    type: 'Team Chat',
    price: 'Free / $6.67/month (Pro)',
    platforms: ['Web', 'Windows', 'macOS', 'Mobile'],
    languages: ['N/A'],
    features: ['Channels', 'Direct Messages', 'File Sharing', 'App Integrations', 'Video Calls'],
    company: 'Slack Technologies',
    firstRelease: 2013,
    downloadUrl: 'https://slack.com/downloads/',
    officialSite: 'https://slack.com/',
    documentation: 'https://slack.com/help',
    description: 'Business communication platform for teams',
    popularity: 'Very High',
    openSource: false
  }
];

const columns = [
  {
    key: 'name' as keyof DevelopmentTool,
    header: 'Tool',
    render: (value: string, item: DevelopmentTool) => (
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
    key: 'category' as keyof DevelopmentTool,
    header: 'Category'
  },
  {
    key: 'price' as keyof DevelopmentTool,
    header: 'Price',
    render: (value: string) => (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
        value === 'Free' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
        value.includes('Free') ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
        'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
      }`}>
        {value}
      </span>
    )
  },
  {
    key: 'platforms' as keyof DevelopmentTool,
    header: 'Platforms',
    type: 'tags' as const
  },
  {
    key: 'languages' as keyof DevelopmentTool,
    header: 'Languages',
    type: 'tags' as const
  },
  {
    key: 'popularity' as keyof DevelopmentTool,
    header: 'Popularity',
    render: (value: string) => (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
        value === 'Very High' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
        value === 'High' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
        value === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
        'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
      }`}>
        {value}
      </span>
    )
  },
  {
    key: 'openSource' as keyof DevelopmentTool,
    header: 'Open Source',
    render: (value: boolean) => (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
        value ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
        'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
      }`}>
        {value ? 'Yes' : 'No'}
      </span>
    )
  },
  {
    key: 'downloadUrl' as keyof DevelopmentTool,
    header: 'Download',
    type: 'link' as const
  }
];

export default function DevelopmentToolsPage() {
  return (
    <PageLayout
      title="Development Tools Database"
      description="Comprehensive database of development tools, IDEs, and software used by programmers with detailed information and download links."
      icon={<Settings className="w-8 h-8 text-blue-600" />}
    >
      <DataTable
        data={developmentToolsData}
        columns={columns}
        searchableColumns={['name', 'category', 'type', 'languages', 'features', 'company']}
        defaultSortColumn="popularity"
        title="Development Tools & IDEs"
        description="Explore and compare development tools, IDEs, and software by category, price, platform support, and more."
      />
    </PageLayout>
  );
}
