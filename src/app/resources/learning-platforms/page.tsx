'use client';

import { PageLayout } from '@/components/PageLayout';
import { DataTable } from '@/components/DataTable';
import { GraduationCap, ExternalLink, Star } from 'lucide-react';

interface LearningPlatform {
  name: string;
  category: string;
  type: string;
  price: string;
  rating: number;
  languages: string[];
  specialties: string[];
  features: string[];
  certificateOffered: boolean;
  freeContent: boolean;
  interactiveContent: boolean;
  mentorSupport: boolean;
  communitySize: string;
  founded: number;
  url: string;
  description: string;
  bestFor: string[];
  coursesCount: string;
}

const learningPlatformsData: LearningPlatform[] = [
  {
    name: 'freeCodeCamp',
    category: 'Coding Bootcamp',
    type: 'Free Platform',
    price: 'Free',
    rating: 5,
    languages: ['JavaScript', 'Python', 'HTML', 'CSS', 'React', 'Node.js'],
    specialties: ['Web Development', 'Data Science', 'Machine Learning', 'APIs'],
    features: ['Interactive Coding', 'Projects', 'Certificates', 'Community'],
    certificateOffered: true,
    freeContent: true,
    interactiveContent: true,
    mentorSupport: false,
    communitySize: '400,000+',
    founded: 2014,
    url: 'https://www.freecodecamp.org/',
    description: 'Learn to code for free with interactive lessons and projects',
    bestFor: ['Complete Beginners', 'Self-directed Learners', 'Budget-conscious'],
    coursesCount: '3,000+ hours'
  },
  {
    name: 'Coursera',
    category: 'MOOC Platform',
    type: 'Freemium',
    price: 'Free / $39-79/month',
    rating: 4,
    languages: ['Python', 'Java', 'JavaScript', 'C++', 'R', 'SQL'],
    specialties: ['Computer Science', 'Data Science', 'AI/ML', 'Cloud Computing'],
    features: ['University Courses', 'Degrees', 'Certificates', 'Peer Review'],
    certificateOffered: true,
    freeContent: true,
    interactiveContent: true,
    mentorSupport: true,
    communitySize: '100M+',
    founded: 2012,
    url: 'https://www.coursera.org/',
    description: 'Online courses from top universities and companies',
    bestFor: ['Academic Learning', 'Career Advancement', 'Structured Learning'],
    coursesCount: '5,000+ courses'
  },
  {
    name: 'Udemy',
    category: 'Online Marketplace',
    type: 'Paid Platform',
    price: '$10-200 per course',
    rating: 4,
    languages: ['All Major Languages'],
    specialties: ['Web Development', 'Mobile Development', 'Game Development', 'DevOps'],
    features: ['Lifetime Access', 'Downloadable Content', 'Q&A', 'Assignments'],
    certificateOffered: true,
    freeContent: false,
    interactiveContent: true,
    mentorSupport: false,
    communitySize: '57M+',
    founded: 2010,
    url: 'https://www.udemy.com/',
    description: 'Marketplace for online courses on any topic',
    bestFor: ['Specific Skills', 'Practical Learning', 'Flexible Schedule'],
    coursesCount: '210,000+ courses'
  },
  {
    name: 'Codecademy',
    category: 'Interactive Platform',
    type: 'Freemium',
    price: 'Free / $15.99/month',
    rating: 4,
    languages: ['Python', 'JavaScript', 'Java', 'C++', 'Ruby', 'Go'],
    specialties: ['Programming Languages', 'Web Development', 'Data Science', 'Computer Science'],
    features: ['Interactive Coding', 'Projects', 'Quizzes', 'Career Paths'],
    certificateOffered: true,
    freeContent: true,
    interactiveContent: true,
    mentorSupport: true,
    communitySize: '50M+',
    founded: 2011,
    url: 'https://www.codecademy.com/',
    description: 'Interactive platform for learning programming languages',
    bestFor: ['Hands-on Learning', 'Programming Languages', 'Beginners'],
    coursesCount: '300+ courses'
  },
  {
    name: 'Pluralsight',
    category: 'Tech Learning',
    type: 'Subscription',
    price: '$29-45/month',
    rating: 4,
    languages: ['C#', 'Java', 'JavaScript', 'Python', 'Angular', 'React'],
    specialties: ['Software Development', 'IT Operations', 'Data Science', 'Cybersecurity'],
    features: ['Skill Assessments', 'Learning Paths', 'Hands-on Labs', 'Analytics'],
    certificateOffered: false,
    freeContent: false,
    interactiveContent: true,
    mentorSupport: false,
    communitySize: '17M+',
    founded: 2004,
    url: 'https://www.pluralsight.com/',
    description: 'Technology learning platform for professionals',
    bestFor: ['Professional Development', 'Enterprise Teams', 'Advanced Skills'],
    coursesCount: '7,000+ courses'
  },
  {
    name: 'edX',
    category: 'MOOC Platform',
    type: 'Freemium',
    price: 'Free / $50-300 per course',
    rating: 4,
    languages: ['Python', 'Java', 'C++', 'JavaScript', 'R'],
    specialties: ['Computer Science', 'Data Science', 'AI/ML', 'Cybersecurity'],
    features: ['University Courses', 'MicroMasters', 'Professional Certificates'],
    certificateOffered: true,
    freeContent: true,
    interactiveContent: true,
    mentorSupport: true,
    communitySize: '40M+',
    founded: 2012,
    url: 'https://www.edx.org/',
    description: 'High-quality courses from world-class universities',
    bestFor: ['Academic Rigor', 'University-level Content', 'Credentials'],
    coursesCount: '3,000+ courses'
  },
  {
    name: 'Khan Academy',
    category: 'Educational Platform',
    type: 'Free Platform',
    price: 'Free',
    rating: 5,
    languages: ['JavaScript', 'HTML', 'CSS', 'SQL'],
    specialties: ['Computer Programming', 'Computer Science', 'Algorithms'],
    features: ['Interactive Exercises', 'Instant Feedback', 'Progress Tracking'],
    certificateOffered: false,
    freeContent: true,
    interactiveContent: true,
    mentorSupport: false,
    communitySize: '120M+',
    founded: 2008,
    url: 'https://www.khanacademy.org/',
    description: 'Free world-class education for anyone, anywhere',
    bestFor: ['Complete Beginners', 'K-12 Students', 'Fundamentals'],
    coursesCount: '100+ programming lessons'
  },
  {
    name: 'The Odin Project',
    category: 'Coding Curriculum',
    type: 'Free Platform',
    price: 'Free',
    rating: 5,
    languages: ['JavaScript', 'Ruby', 'HTML', 'CSS', 'React', 'Node.js'],
    specialties: ['Full-Stack Web Development', 'Ruby on Rails', 'JavaScript'],
    features: ['Project-Based Learning', 'Community Support', 'Job Preparation'],
    certificateOffered: false,
    freeContent: true,
    interactiveContent: false,
    mentorSupport: true,
    communitySize: '100,000+',
    founded: 2013,
    url: 'https://www.theodinproject.com/',
    description: 'Free full-stack curriculum supported by an open source community',
    bestFor: ['Full-Stack Development', 'Self-motivated Learners', 'Project Building'],
    coursesCount: '2 main paths'
  },
  {
    name: 'LinkedIn Learning',
    category: 'Professional Learning',
    type: 'Subscription',
    price: '$19.99-39.99/month',
    rating: 4,
    languages: ['All Major Languages'],
    specialties: ['Software Development', 'Business Skills', 'Creative Skills'],
    features: ['Professional Certificates', 'Learning Paths', 'Mobile App'],
    certificateOffered: true,
    freeContent: false,
    interactiveContent: false,
    mentorSupport: false,
    communitySize: '25M+',
    founded: 2015,
    url: 'https://www.linkedin.com/learning/',
    description: 'Professional development courses for career advancement',
    bestFor: ['Professional Skills', 'Career Development', 'Business Context'],
    coursesCount: '20,000+ courses'
  },
  {
    name: 'Udacity',
    category: 'Nanodegree Platform',
    type: 'Paid Platform',
    price: '$399-1,836 per program',
    rating: 4,
    languages: ['Python', 'JavaScript', 'Java', 'C++', 'Swift', 'Kotlin'],
    specialties: ['AI/ML', 'Data Science', 'Autonomous Systems', 'Cloud Computing'],
    features: ['Nanodegrees', 'Mentorship', 'Career Services', 'Real Projects'],
    certificateOffered: true,
    freeContent: false,
    interactiveContent: true,
    mentorSupport: true,
    communitySize: '10M+',
    founded: 2011,
    url: 'https://www.udacity.com/',
    description: 'Industry-relevant nanodegree programs with mentorship',
    bestFor: ['Career Transition', 'Industry Skills', 'Mentorship'],
    coursesCount: '200+ nanodegrees'
  },
  {
    name: 'Treehouse',
    category: 'Tech Education',
    type: 'Subscription',
    price: '$25-199/month',
    rating: 4,
    languages: ['JavaScript', 'Python', 'Java', 'C#', 'PHP', 'Ruby'],
    specialties: ['Web Development', 'Mobile Development', 'Data Analysis'],
    features: ['Tracks', 'Workshops', 'Code Challenges', 'Techdegrees'],
    certificateOffered: true,
    freeContent: false,
    interactiveContent: true,
    mentorSupport: true,
    communitySize: '1M+',
    founded: 2011,
    url: 'https://teamtreehouse.com/',
    description: 'Learn technology skills with tracks and workshops',
    bestFor: ['Structured Learning', 'Beginner-Friendly', 'Tech Careers'],
    coursesCount: '300+ courses'
  },
  {
    name: 'Scrimba',
    category: 'Interactive Coding',
    type: 'Freemium',
    price: 'Free / $20/month',
    rating: 5,
    languages: ['JavaScript', 'React', 'Vue', 'HTML', 'CSS'],
    specialties: ['Frontend Development', 'React', 'JavaScript'],
    features: ['Interactive Screencasts', 'Code Along', 'Community'],
    certificateOffered: true,
    freeContent: true,
    interactiveContent: true,
    mentorSupport: true,
    communitySize: '500,000+',
    founded: 2017,
    url: 'https://scrimba.com/',
    description: 'Interactive coding screencasts for frontend development',
    bestFor: ['Frontend Development', 'Interactive Learning', 'Modern JavaScript'],
    coursesCount: '100+ courses'
  }
];

const columns = [
  {
    key: 'name' as keyof LearningPlatform,
    header: 'Platform',
    render: (value: string, item: LearningPlatform) => (
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
    key: 'category' as keyof LearningPlatform,
    header: 'Category',
    render: (value: string) => (
      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full font-medium">
        {value}
      </span>
    )
  },
  {
    key: 'price' as keyof LearningPlatform,
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
    key: 'rating' as keyof LearningPlatform,
    header: 'Rating',
    render: (value: number) => (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-3 h-3 ${i < value ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
        ))}
        <span className="text-xs text-gray-500 ml-1">({value}/5)</span>
      </div>
    )
  },
  {
    key: 'languages' as keyof LearningPlatform,
    header: 'Languages',
    type: 'tags' as const
  },
  {
    key: 'specialties' as keyof LearningPlatform,
    header: 'Specialties',
    type: 'tags' as const
  },
  {
    key: 'certificateOffered' as keyof LearningPlatform,
    header: 'Certificates',
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
    key: 'freeContent' as keyof LearningPlatform,
    header: 'Free Content',
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
    key: 'communitySize' as keyof LearningPlatform,
    header: 'Community Size'
  },
  {
    key: 'coursesCount' as keyof LearningPlatform,
    header: 'Courses'
  }
];

export default function LearningPlatformsPage() {
  return (
    <PageLayout
      title="Learning Platforms Database"
      description="Comprehensive database of online learning platforms for programming and technology skills with detailed comparisons."
      icon={<GraduationCap className="w-8 h-8 text-blue-600" />}
    >
      <DataTable
        data={learningPlatformsData}
        columns={columns}
        searchableColumns={['name', 'category', 'languages', 'specialties', 'features', 'bestFor']}
        defaultSortColumn="rating"
        title="Learning Platforms"
        description="Compare online learning platforms by price, content quality, specialties, and features to find the best fit for your learning goals."
      />
    </PageLayout>
  );
}
