'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BookOpen, 
  Code, 
  Lightbulb, 
  HelpCircle, 
  ChevronRight,
  Home,
  Layers,
  Database,
  Globe,
  Smartphone,
  Package,
  Brain
} from 'lucide-react';

interface SidebarItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  children?: SidebarItem[];
}

const sidebarItems: SidebarItem[] = [
  {
    title: 'Home',
    href: '/',
    icon: <Home size={18} />
  },
  {
    title: 'Getting Started',
    href: '/getting-started',
    icon: <BookOpen size={18} />,
    children: [
      { title: 'What is Programming?', href: '/getting-started/what-is-programming', icon: <ChevronRight size={16} /> },
      { title: 'Choosing Your First Language', href: '/getting-started/choosing-language', icon: <ChevronRight size={16} /> },
      { title: 'Setting Up Your Environment', href: '/getting-started/setup', icon: <ChevronRight size={16} /> },
      { title: 'Your First Program', href: '/getting-started/first-program', icon: <ChevronRight size={16} /> }
    ]
  },
  {
    title: 'Programming Languages',
    href: '/languages',
    icon: <Code size={18} />,
    children: [
      { title: 'Python', href: '/languages/python', icon: <ChevronRight size={16} /> },
      { title: 'JavaScript', href: '/languages/javascript', icon: <ChevronRight size={16} /> },
      { title: 'Java', href: '/languages/java', icon: <ChevronRight size={16} /> },
      { title: 'C++', href: '/languages/cpp', icon: <ChevronRight size={16} /> },
      { title: 'C#', href: '/languages/csharp', icon: <ChevronRight size={16} /> },
      { title: 'Go', href: '/languages/go', icon: <ChevronRight size={16} /> },
      { title: 'Rust', href: '/languages/rust', icon: <ChevronRight size={16} /> },
      { title: 'PHP', href: '/languages/php', icon: <ChevronRight size={16} /> },
      { title: '.NET', href: '/languages/dotnet', icon: <ChevronRight size={16} /> }
    ]
  },
  {
    title: 'Web Development',
    href: '/web-development',
    icon: <Globe size={18} />,
    children: [
      { title: 'HTML & CSS', href: '/web-development/html-css', icon: <ChevronRight size={16} /> },
      { title: 'Frontend Frameworks', href: '/web-development/frontend', icon: <ChevronRight size={16} /> },
      { title: 'Backend Development', href: '/web-development/backend', icon: <ChevronRight size={16} /> },
      { title: 'Full Stack', href: '/web-development/fullstack', icon: <ChevronRight size={16} /> }
    ]
  },
  {
    title: 'Frameworks',
    href: '/frameworks',
    icon: <Package size={18} />,
    children: [
      { title: 'Frontend Frameworks', href: '/frameworks/frontend', icon: <ChevronRight size={16} /> },
      { title: 'Backend Frameworks', href: '/frameworks/backend', icon: <ChevronRight size={16} /> },
      { title: 'Full Stack Frameworks', href: '/frameworks/fullstack', icon: <ChevronRight size={16} /> },
      { title: 'Mobile Frameworks', href: '/frameworks/mobile', icon: <ChevronRight size={16} /> },
      { title: 'CSS Frameworks', href: '/frameworks/css', icon: <ChevronRight size={16} /> }
    ]
  },
  {
    title: 'Mobile Development',
    href: '/mobile-development',
    icon: <Smartphone size={18} />,
    children: [
      { title: 'React Native', href: '/mobile-development/react-native', icon: <ChevronRight size={16} /> },
      { title: 'Expo & EAS', href: '/mobile-development/expo', icon: <ChevronRight size={16} /> },
      { title: 'Flutter', href: '/mobile-development/flutter', icon: <ChevronRight size={16} /> },
      { title: 'Native iOS', href: '/mobile-development/ios', icon: <ChevronRight size={16} /> },
      { title: 'Native Android', href: '/mobile-development/android', icon: <ChevronRight size={16} /> }
    ]
  },
  {
    title: 'Data & Databases',
    href: '/data-databases',
    icon: <Database size={18} />,
    children: [
      { title: 'SQL Basics', href: '/data-databases/sql', icon: <ChevronRight size={16} /> },
      { title: 'NoSQL Databases', href: '/data-databases/nosql', icon: <ChevronRight size={16} /> },
      { title: 'Data Analysis', href: '/data-databases/analysis', icon: <ChevronRight size={16} /> }
    ]
  },
  {
    title: 'DevOps & Tools',
    href: '/devops-tools',
    icon: <Layers size={18} />,
    children: [
      { title: 'Version Control (Git)', href: '/devops-tools/git', icon: <ChevronRight size={16} /> },
      { title: 'IDEs & Editors', href: '/devops-tools/editors', icon: <ChevronRight size={16} /> },
      { title: 'Testing', href: '/devops-tools/testing', icon: <ChevronRight size={16} /> },
      { title: 'Deployment', href: '/devops-tools/deployment', icon: <ChevronRight size={16} /> }
    ]
  },
  {
    title: 'AI & Machine Learning',
    href: '/ai',
    icon: <Brain size={18} />,
    children: [
      { title: 'AI Dos and Don\'ts', href: '/ai/dos-donts', icon: <ChevronRight size={16} /> },
      { title: 'Prompt Engineering', href: '/ai/prompting', icon: <ChevronRight size={16} /> },
      { title: 'Building Your Own AI', href: '/ai/build-ai', icon: <ChevronRight size={16} /> },
      { title: 'AI Languages & Tools', href: '/ai/languages-tools', icon: <ChevronRight size={16} /> }
    ]
  },
  {
    title: 'Resources',
    href: '/resources',
    icon: <Lightbulb size={18} />,
    children: [
      { title: 'Learning Platforms', href: '/resources/platforms', icon: <ChevronRight size={16} /> },
      { title: 'Books & Documentation', href: '/resources/books', icon: <ChevronRight size={16} /> },
      { title: 'Practice Problems', href: '/resources/practice', icon: <ChevronRight size={16} /> },
      { title: 'Communities', href: '/resources/communities', icon: <ChevronRight size={16} /> }
    ]
  },
  {
    title: 'FAQ',
    href: '/faq',
    icon: <HelpCircle size={18} />
  }
];

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <aside className="w-64 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 h-[calc(100vh-4rem)] overflow-y-auto">
      <nav className="p-4 space-y-2">
        {sidebarItems.map((item) => (
          <div key={item.href}>
            <Link
              href={item.href}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                isActive(item.href)
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.title}</span>
            </Link>
            
            {item.children && isActive(item.href) && (
              <div className="ml-6 mt-2 space-y-1">
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={`flex items-center space-x-2 px-3 py-1.5 rounded-md text-sm transition-colors ${
                      pathname === child.href
                        ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400'
                        : 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800/50'
                    }`}
                  >
                    {child.icon}
                    <span>{child.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
