'use client';

import { PageLayout } from '@/components/PageLayout';
import { DataTable } from '@/components/DataTable';
import { Target, ExternalLink, Star } from 'lucide-react';

interface PracticePlatform {
  name: string;
  category: string;
  type: string;
  price: string;
  languages: string[];
  difficulty: string[];
  features: string[];
  problemCount: string;
  hasContests: boolean;
  hasDiscussion: boolean;
  hasEditorial: boolean;
  companyPrep: boolean;
  founded: number;
  url: string;
  description: string;
  bestFor: string[];
  userBase: string;
}

const practicePlatformsData: PracticePlatform[] = [
  {
    name: 'LeetCode',
    category: 'Coding Interview',
    type: 'Freemium',
    price: 'Free / $35/month',
    languages: ['Python', 'Java', 'C++', 'JavaScript', 'C#', 'Go', 'Ruby'],
    difficulty: ['Easy', 'Medium', 'Hard'],
    features: ['Mock Interviews', 'Company Questions', 'Discussion', 'Solutions'],
    problemCount: '2,500+',
    hasContests: true,
    hasDiscussion: true,
    hasEditorial: true,
    companyPrep: true,
    founded: 2015,
    url: 'https://leetcode.com/',
    description: 'The world\'s leading online programming learning platform',
    bestFor: ['Interview Preparation', 'Algorithm Practice', 'FAANG Prep'],
    userBase: '10M+'
  },
  {
    name: 'HackerRank',
    category: 'Coding Practice',
    type: 'Freemium',
    price: 'Free / $25/month',
    languages: ['30+ Languages'],
    difficulty: ['Easy', 'Medium', 'Hard'],
    features: ['Skill Certifications', 'Company Challenges', 'Tutorials', 'Leaderboards'],
    problemCount: '2,000+',
    hasContests: true,
    hasDiscussion: true,
    hasEditorial: true,
    companyPrep: true,
    founded: 2009,
    url: 'https://www.hackerrank.com/',
    description: 'Practice coding, prepare for interviews, and get hired',
    bestFor: ['Skill Assessment', 'Diverse Domains', 'Certifications'],
    userBase: '20M+'
  },
  {
    name: 'Codewars',
    category: 'Coding Challenges',
    type: 'Free',
    price: 'Free',
    languages: ['55+ Languages'],
    difficulty: ['8 kyu', '7 kyu', '6 kyu', '5 kyu', '4 kyu', '3 kyu', '2 kyu', '1 kyu'],
    features: ['Kata System', 'Community Solutions', 'Clan Battles', 'Honor System'],
    problemCount: '8,000+',
    hasContests: false,
    hasDiscussion: true,
    hasEditorial: false,
    companyPrep: false,
    founded: 2012,
    url: 'https://www.codewars.com/',
    description: 'Achieve mastery through coding practice and developer mentorship',
    bestFor: ['Skill Building', 'Community Learning', 'Language Diversity'],
    userBase: '3M+'
  },
  {
    name: 'CodeSignal',
    category: 'Technical Assessment',
    type: 'Freemium',
    price: 'Free / $99/month',
    languages: ['30+ Languages'],
    difficulty: ['Intro', 'Basic', 'Intermediate', 'Advanced'],
    features: ['Skill Assessment', 'Interview Practice', 'Arcade Mode', 'Company Tests'],
    problemCount: '1,000+',
    hasContests: true,
    hasDiscussion: false,
    hasEditorial: true,
    companyPrep: true,
    founded: 2014,
    url: 'https://codesignal.com/',
    description: 'Technical skills assessment and interview platform',
    bestFor: ['Technical Interviews', 'Skill Validation', 'Job Applications'],
    userBase: '2M+'
  },
  {
    name: 'AtCoder',
    category: 'Competitive Programming',
    type: 'Free',
    price: 'Free',
    languages: ['C++', 'Python', 'Java', 'C#', 'JavaScript', 'Go'],
    difficulty: ['Beginner', 'Regular', 'Advanced'],
    features: ['Regular Contests', 'Educational Content', 'Rating System', 'Virtual Contests'],
    problemCount: '5,000+',
    hasContests: true,
    hasDiscussion: true,
    hasEditorial: true,
    companyPrep: false,
    founded: 2012,
    url: 'https://atcoder.jp/',
    description: 'Programming contest site for everyone from beginners to experts',
    bestFor: ['Competitive Programming', 'Algorithm Contests', 'Skill Rating'],
    userBase: '500K+'
  },
  {
    name: 'Codeforces',
    category: 'Competitive Programming',
    type: 'Free',
    price: 'Free',
    languages: ['C++', 'Java', 'Python', 'C#', 'JavaScript', 'Go'],
    difficulty: ['Div 4', 'Div 3', 'Div 2', 'Div 1'],
    features: ['Regular Contests', 'Problem Archive', 'Blogs', 'Rating System'],
    problemCount: '10,000+',
    hasContests: true,
    hasDiscussion: true,
    hasEditorial: true,
    companyPrep: false,
    founded: 2010,
    url: 'https://codeforces.com/',
    description: 'Programming competitions and contests, programming community',
    bestFor: ['Competitive Programming', 'Algorithm Mastery', 'Contest Practice'],
    userBase: '1M+'
  },
  {
    name: 'TopCoder',
    category: 'Competitive Programming',
    type: 'Free',
    price: 'Free',
    languages: ['Java', 'C++', 'C#', 'Python', 'JavaScript'],
    difficulty: ['Div 1', 'Div 2'],
    features: ['SRM Contests', 'Marathon Matches', 'Tutorials', 'Statistics'],
    problemCount: '3,000+',
    hasContests: true,
    hasDiscussion: true,
    hasEditorial: true,
    companyPrep: false,
    founded: 2001,
    url: 'https://www.topcoder.com/',
    description: 'Competitive programming and software development challenges',
    bestFor: ['Advanced Algorithms', 'Mathematical Problems', 'Long Contests'],
    userBase: '1.5M+'
  },
  {
    name: 'Project Euler',
    category: 'Mathematical Programming',
    type: 'Free',
    price: 'Free',
    languages: ['Any Language'],
    difficulty: ['5%', '10%', '15%', '20%', '25%', '30%+'],
    features: ['Mathematical Problems', 'Progress Tracking', 'Statistics', 'Forums'],
    problemCount: '800+',
    hasContests: false,
    hasDiscussion: true,
    hasEditorial: false,
    companyPrep: false,
    founded: 2001,
    url: 'https://projecteuler.net/',
    description: 'Mathematical problems that require programming skills to solve',
    bestFor: ['Mathematical Programming', 'Algorithm Efficiency', 'Problem Solving'],
    userBase: '1M+'
  },
  {
    name: 'Exercism',
    category: 'Skill Building',
    type: 'Free',
    price: 'Free',
    languages: ['60+ Languages'],
    difficulty: ['Learning', 'Easy', 'Medium', 'Hard'],
    features: ['Mentorship', 'Code Review', 'Learning Tracks', 'Community'],
    problemCount: '3,000+',
    hasContests: false,
    hasDiscussion: true,
    hasEditorial: false,
    companyPrep: false,
    founded: 2013,
    url: 'https://exercism.org/',
    description: 'Code practice and mentorship for everyone',
    bestFor: ['Learning Languages', 'Code Review', 'Mentorship'],
    userBase: '500K+'
  },
  {
    name: 'Coderbyte',
    category: 'Coding Interview',
    type: 'Freemium',
    price: 'Free / $35/month',
    languages: ['JavaScript', 'Python', 'Java', 'C++', 'C#', 'Ruby'],
    difficulty: ['Easy', 'Medium', 'Hard'],
    features: ['Interview Prep', 'Starter Courses', 'Mock Interviews', 'Solutions'],
    problemCount: '300+',
    hasContests: false,
    hasDiscussion: false,
    hasEditorial: true,
    companyPrep: true,
    founded: 2012,
    url: 'https://coderbyte.com/',
    description: 'Improve your coding skills with programming challenges',
    bestFor: ['Interview Practice', 'Beginner Friendly', 'Structured Learning'],
    userBase: '3M+'
  },
  {
    name: 'GeeksforGeeks Practice',
    category: 'Coding Practice',
    type: 'Freemium',
    price: 'Free / $20/month',
    languages: ['C++', 'Java', 'Python', 'C#', 'JavaScript'],
    difficulty: ['School', 'Basic', 'Easy', 'Medium', 'Hard'],
    features: ['Company-wise Problems', 'Topic-wise Practice', 'Mock Tests', 'Articles'],
    problemCount: '1,500+',
    hasContests: true,
    hasDiscussion: true,
    hasEditorial: true,
    companyPrep: true,
    founded: 2008,
    url: 'https://practice.geeksforgeeks.org/',
    description: 'Practice programming problems and prepare for interviews',
    bestFor: ['Indian Job Market', 'Comprehensive Prep', 'Theory + Practice'],
    userBase: '5M+'
  },
  {
    name: 'SPOJ',
    category: 'Competitive Programming',
    type: 'Free',
    price: 'Free',
    languages: ['40+ Languages'],
    difficulty: ['Tutorial', 'Easy', 'Medium', 'Hard', 'Challenge'],
    features: ['Problem Archive', 'Contests', 'Rankings', 'Clusters'],
    problemCount: '25,000+',
    hasContests: true,
    hasDiscussion: true,
    hasEditorial: false,
    companyPrep: false,
    founded: 2003,
    url: 'https://www.spoj.com/',
    description: 'Sphere Online Judge - online programming problems',
    bestFor: ['Large Problem Set', 'Language Variety', 'Classic Problems'],
    userBase: '800K+'
  }
];

const columns = [
  {
    key: 'name' as keyof PracticePlatform,
    header: 'Platform',
    render: (value: string, item: PracticePlatform) => (
      <div className="flex items-center gap-2">
        <span className="font-medium">{value}</span>
        <a
          href={item.url}
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
    key: 'category' as keyof PracticePlatform,
    header: 'Category',
    render: (value: string) => (
      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full font-medium">
        {value}
      </span>
    )
  },
  {
    key: 'price' as keyof PracticePlatform,
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
    key: 'problemCount' as keyof PracticePlatform,
    header: 'Problems'
  },
  {
    key: 'languages' as keyof PracticePlatform,
    header: 'Languages',
    type: 'tags' as const
  },
  {
    key: 'hasContests' as keyof PracticePlatform,
    header: 'Contests',
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
    key: 'companyPrep' as keyof PracticePlatform,
    header: 'Company Prep',
    render: (value: boolean) => (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
        value ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
        'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
      }`}>
        {value ? 'Yes' : 'No'}
      </span>
    )
  },
  {
    key: 'userBase' as keyof PracticePlatform,
    header: 'Users'
  },
  {
    key: 'bestFor' as keyof PracticePlatform,
    header: 'Best For',
    type: 'tags' as const
  }
];

export default function PracticePlatformsPage() {
  return (
    <PageLayout
      title="Practice Platforms Database"
      description="Comprehensive database of coding practice platforms for interview preparation, competitive programming, and skill development."
      icon={<Target className="w-8 h-8 text-blue-600" />}
    >
      <DataTable
        data={practicePlatformsData}
        columns={columns}
        searchableColumns={['name', 'category', 'languages', 'features', 'bestFor', 'description']}
        defaultSortColumn="name"
        title="Practice Platforms"
        description="Compare coding practice platforms by focus area, problem count, features, and difficulty to find the best platform for your goals."
      />
    </PageLayout>
  );
}
