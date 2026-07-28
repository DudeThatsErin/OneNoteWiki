'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BookOpen, 
  FileText, 
  Lightbulb, 
  HelpCircle, 
  ChevronRight,
  Home,
  Layers,
  Settings,
  Smartphone,
  Package,
  PenTool,
  Search,
  Share2
} from 'lucide-react';
import { SidebarProps } from './types';

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
      { title: 'What is OneNote?', href: '/getting-started/what-is-onenote', icon: <ChevronRight size={16} /> },
      { title: 'Creating Your First Notebook', href: '/getting-started/first-notebook', icon: <ChevronRight size={16} /> }
    ]
  },
  {
    title: 'Notebooks & Organization',
    href: '/notebooks',
    icon: <FileText size={18} />
  },
  {
    title: 'Note-Taking Features',
    href: '/features',
    icon: <PenTool size={18} />
  },
  {
    title: 'Media & Attachments',
    href: '/media',
    icon: <Layers size={18} />
  },
  {
    title: 'Mobile OneNote',
    href: '/mobile',
    icon: <Smartphone size={18} />
  },
  {
    title: 'Sharing & Collaboration',
    href: '/sharing',
    icon: <Share2 size={18} />
  },
  {
    title: 'Search & Organization',
    href: '/search',
    icon: <Search size={18} />
  },
  {
    title: 'Settings & Customization',
    href: '/settings',
    icon: <Settings size={18} />
  },
  {
    title: 'Templates',
    href: '/templates',
    icon: <Lightbulb size={18} />
  },
  {
    title: 'Resources',
    href: '/resources',
    icon: <Package size={18} />
  },
  {
    title: 'Help & Support',
    href: '/help',
    icon: <HelpCircle size={18} />
  }
];

export function Sidebar({ children, className = '' }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const hasActiveChild = (item: SidebarItem) => {
    if (!item.children) return false;
    return item.children.some(child => isActive(child.href));
  };

  return (
    <aside className={className}>
      <nav className="p-4">
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  isActive(item.href) || hasActiveChild(item)
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                }`}
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
              
              {item.children && (isActive(item.href) || hasActiveChild(item)) && (
                <ul className="mt-2 ml-6 space-y-1">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className={`flex items-center space-x-2 px-3 py-1.5 rounded-md text-base transition-colors ${
                          isActive(child.href)
                            ? 'bg-purple-600 text-white'
                            : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
                        }`}
                      >
                        {child.icon}
                        <span>{child.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      {children}
    </aside>
  );
}
