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
      { title: 'Installation & Setup', href: '/getting-started/installation', icon: <ChevronRight size={16} /> },
      { title: 'Creating Your First Notebook', href: '/getting-started/first-notebook', icon: <ChevronRight size={16} /> },
      { title: 'Basic Navigation', href: '/getting-started/navigation', icon: <ChevronRight size={16} /> }
    ]
  },
  {
    title: 'Notebooks & Organization',
    href: '/notebooks',
    icon: <FileText size={18} />,
    children: [
      { title: 'Creating Notebooks', href: '/notebooks/creating', icon: <ChevronRight size={16} /> },
      { title: 'Sections & Pages', href: '/notebooks/sections-pages', icon: <ChevronRight size={16} /> },
      { title: 'Organization Tips', href: '/notebooks/organization', icon: <ChevronRight size={16} /> },
      { title: 'Templates', href: '/notebooks/templates', icon: <ChevronRight size={16} /> }
    ]
  },
  {
    title: 'Note-Taking Features',
    href: '/features',
    icon: <PenTool size={18} />,
    children: [
      { title: 'Text Formatting', href: '/features/text-formatting', icon: <ChevronRight size={16} /> },
      { title: 'Drawing & Handwriting', href: '/features/drawing', icon: <ChevronRight size={16} /> },
      { title: 'Tables & Lists', href: '/features/tables-lists', icon: <ChevronRight size={16} /> },
      { title: 'Tags & Labels', href: '/features/tags', icon: <ChevronRight size={16} /> }
    ]
  },
  {
    title: 'Media & Attachments',
    href: '/media',
    icon: <Layers size={18} />,
    children: [
      { title: 'Images & Screenshots', href: '/media/images', icon: <ChevronRight size={16} /> },
      { title: 'Audio & Video', href: '/media/audio-video', icon: <ChevronRight size={16} /> },
      { title: 'File Attachments', href: '/media/attachments', icon: <ChevronRight size={16} /> },
      { title: 'Web Clipping', href: '/media/web-clipping', icon: <ChevronRight size={16} /> }
    ]
  },
  {
    title: 'Mobile OneNote',
    href: '/mobile',
    icon: <Smartphone size={18} />,
    children: [
      { title: 'iOS App', href: '/mobile/ios', icon: <ChevronRight size={16} /> },
      { title: 'Android App', href: '/mobile/android', icon: <ChevronRight size={16} /> },
      { title: 'Mobile Tips', href: '/mobile/tips', icon: <ChevronRight size={16} /> }
    ]
  },
  {
    title: 'Sharing & Collaboration',
    href: '/sharing',
    icon: <Share2 size={18} />,
    children: [
      { title: 'Sharing Notebooks', href: '/sharing/notebooks', icon: <ChevronRight size={16} /> },
      { title: 'Real-time Collaboration', href: '/sharing/collaboration', icon: <ChevronRight size={16} /> },
      { title: 'Permissions & Access', href: '/sharing/permissions', icon: <ChevronRight size={16} /> }
    ]
  },
  {
    title: 'Search & Organization',
    href: '/search',
    icon: <Search size={18} />,
    children: [
      { title: 'Search Features', href: '/search/features', icon: <ChevronRight size={16} /> },
      { title: 'OCR & Handwriting Search', href: '/search/ocr', icon: <ChevronRight size={16} /> },
      { title: 'Advanced Search Tips', href: '/search/advanced', icon: <ChevronRight size={16} /> }
    ]
  },
  {
    title: 'Settings & Customization',
    href: '/settings',
    icon: <Settings size={18} />,
    children: [
      { title: 'Account Settings', href: '/settings/account', icon: <ChevronRight size={16} /> },
      { title: 'Sync Settings', href: '/settings/sync', icon: <ChevronRight size={16} /> },
      { title: 'Backup & Recovery', href: '/settings/backup', icon: <ChevronRight size={16} /> }
    ]
  },
  {
    title: 'Templates',
    href: '/templates',
    icon: <Lightbulb size={18} />,
    children: [
      { title: 'Academic Templates', href: '/templates/academic', icon: <ChevronRight size={16} /> },
      { title: 'Business Templates', href: '/templates/business', icon: <ChevronRight size={16} /> },
      { title: 'Personal Templates', href: '/templates/personal', icon: <ChevronRight size={16} /> },
      { title: 'Custom Templates', href: '/templates/custom', icon: <ChevronRight size={16} /> }
    ]
  },
  {
    title: 'Resources',
    href: '/resources',
    icon: <Package size={18} />,
    children: [
      { title: 'OneNote Versions', href: '/resources/versions', icon: <ChevronRight size={16} /> },
      { title: 'Keyboard Shortcuts', href: '/resources/shortcuts', icon: <ChevronRight size={16} /> },
      { title: 'Third-party Tools', href: '/resources/tools', icon: <ChevronRight size={16} /> },
      { title: 'Communities', href: '/resources/communities', icon: <ChevronRight size={16} /> }
    ]
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
    <aside className={`w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 h-screen sticky top-16 overflow-y-auto ${className}`}>
      <nav className="p-4">
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.href) || hasActiveChild(item)
                    ? 'bg-purple-50 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300'
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
                        className={`flex items-center space-x-2 px-3 py-1.5 rounded-md text-sm transition-colors ${
                          isActive(child.href)
                            ? 'bg-purple-50 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300'
                            : 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800/50'
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
