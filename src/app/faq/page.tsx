'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight, HelpCircle, Search, BookOpen, Users, MessageCircle } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';
import { InfoCard } from '@/components/InfoCard';

const faqData = [
  {
    id: '1',
    question: "Is OneNote really free to use?",
    answer: "Yes! OneNote is completely free with a Microsoft account. You get 5GB of free OneDrive storage, which is typically enough for thousands of pages of notes. Premium features are available with Microsoft 365 subscriptions, but the core functionality is free forever."
  },
  {
    id: '2',
    question: "Can I use OneNote offline?",
    answer: "Absolutely! OneNote works offline and automatically syncs your changes when you reconnect to the internet. You can create, edit, and organize notes without an internet connection. Some features like real-time collaboration require connectivity."
  },
  {
    id: '3',
    question: "What's the difference between OneNote versions?",
    answer: "There are several OneNote versions: OneNote for Windows 10/11 (modern app), OneNote 2016 (desktop version), OneNote for Mac, mobile apps (iOS/Android), and OneNote for the web. All versions sync to the same notebooks, but have slightly different features and interfaces."
  },
  {
    id: '4',
    question: "How do I organize my OneNote notebooks effectively?",
    answer: "Use the three-level hierarchy: Notebooks for major topics/projects, Sections for categories within those topics, and Pages for individual notes. Create consistent naming conventions, use tags for important items, and consider separate notebooks for different areas of your life (work, personal, projects)."
  },
  {
    id: '5',
    question: "Can I share my OneNote notebooks with others?",
    answer: "Yes! You can share entire notebooks or individual sections with others. Recipients can view, edit, or have full control depending on the permissions you set. Shared notebooks support real-time collaboration, so multiple people can work on the same notes simultaneously."
  },
  {
    id: '6',
    question: "How do I backup my OneNote data?",
    answer: "OneNote automatically backs up your data to OneDrive cloud storage. For additional security, you can export notebooks to PDF format or use the File > Export feature to save local copies. Your notes are also cached locally on each device for offline access."
  },
  {
    id: '7',
    question: "Can I import notes from other apps into OneNote?",
    answer: "Yes! OneNote can import from many sources including Evernote (using the OneNote Importer tool), PDF files, Word documents, PowerPoint presentations, and more. You can also copy and paste content from most applications directly into OneNote pages."
  },
  {
    id: '8',
    question: "Is programming difficult to learn?",
    answer: "Programming can be challenging, especially at first, but it's definitely learnable with patience and practice. The key is to start with basics, practice regularly, and not get discouraged by initial difficulties. Everyone struggles at first - it's part of the learning process."
  },
  {
    id: '9',
    question: "What career opportunities are available for programmers?",
    answer: "Programming opens doors to many careers: web developer, mobile app developer, software engineer, data scientist, game developer, cybersecurity specialist, DevOps engineer, and many more. The tech industry offers excellent salaries and job security."
  },
  {
    id: '10',
    question: "Should I specialize in one programming language or learn multiple?",
    answer: "Start by becoming proficient in one language first. Once you're comfortable with programming concepts, learning additional languages becomes much easier. Different languages are better for different purposes, so eventually learning multiple languages is beneficial."
  },
  {
    id: '11',
    question: "How do I stay motivated while learning programming?",
    answer: "Set small, achievable goals and celebrate your progress. Build projects that interest you, join communities like ours for support, and remember that every expert was once a beginner. Focus on the problem-solving aspect and the satisfaction of creating something functional."
  },
  {
    id: '12',
    question: "What's the best way to practice programming?",
    answer: "The best practice is building projects. Start with simple programs and gradually increase complexity. Practice coding challenges on platforms like LeetCode or HackerRank, contribute to open source projects, and try to code a little bit every day."
  },
  {
    id: '13',
    question: "How do I debug my code when it doesn't work?",
    answer: "Debugging is a crucial skill. Read error messages carefully, use print statements to check variable values, break your code into smaller parts, and use debugging tools in your IDE. Don't hesitate to ask for help in our community when you're stuck."
  }
];

function FAQItem({ faq, isOpen, onToggle }: { faq: { id: string; question: string; answer: string }; isOpen: boolean; onToggle: () => void; }) {
  const contentId = `faq-content-${faq.id}`;
  const buttonId = `faq-button-${faq.id}`;

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <button
        id={buttonId}
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between bg-gray-800 border border-gray-700 hover:border-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-lg"
        aria-expanded={isOpen}
        aria-controls={contentId}
        aria-describedby={contentId}
      >
        <span className="font-medium text-gray-900 dark:text-white pr-4">
          {faq.question}
        </span>
        {isOpen ? (
          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 transform rotate-180 transition-transform" aria-hidden="true" />
        ) : (
          <ChevronRight className="w-5 h-5 text-gray-500 flex-shrink-0 transition-transform" aria-hidden="true" />
        )}
      </button>
      <div
        id={contentId}
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-labelledby={buttonId}
        role="region"
      >
        <div className="px-6 pb-4 border-t border-gray-200 dark:border-gray-700">
          <div className="pt-4">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <PageLayout
      title="Frequently Asked Questions"
      description="Find answers to the most common questions about programming, learning to code, and using this wiki effectively."
      icon={<HelpCircle className="w-8 h-8 text-purple-600" />}
    >
        {/* FAQ Items */}
          {faqData.map((faq, index) => (
            <FAQItem 
              key={faq.id} 
              faq={faq} 
              isOpen={openItems.includes(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}

        {/* Still Have Questions */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-purple-800 dark:text-purple-200 mb-4">
            Can't find the answer you're looking for? Our community is here to help! 
            Join our Discord server or visit our subreddit to get personalized help from OneNote experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://discord.gg/5kv4bDUkpc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
            >
              💬 Ask on Discord
            </a>
            <a
              href="https://reddit.com/r/OneNote"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
            >
              🤝 Post on Reddit
            </a>
          </div>
        </div>

        {/* Contributing */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Help Improve This FAQ
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Notice a question that should be added? Have a better answer for an existing question? 
            We welcome contributions from the community to make this resource better for everyone.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            You can suggest improvements by reaching out to us on Discord or Reddit.
          </p>
        </div>
    </PageLayout>
  );
}
