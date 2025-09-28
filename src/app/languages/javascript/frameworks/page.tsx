import Link from 'next/link';
import { ArrowRight, ArrowLeft, Code, Users, Star, Globe } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';
import { InfoCard } from '@/components/InfoCard';
import { FeatureList } from '@/components/FeatureList';
import { CodeBlock } from '@/components/CodeBlock';
import { ComparisonTable } from '@/components/ComparisonTable';

// Framework stats for QuickStats component
const frameworkStats = [
  { value: "4", label: "Major Frameworks", icon: <Code className="w-5 h-5" /> },
  { value: "2013", label: "React Released", icon: <Star className="w-5 h-5" /> },
  { value: "Millions", label: "Developers", icon: <Users className="w-5 h-5" /> },
  { value: "Universal", label: "Platform Support", icon: <Globe className="w-5 h-5" /> }
];

// Framework features for FeatureList component
const frameworkFeatures = [
  {
    title: 'Component-Based Architecture',
    description: 'Build encapsulated components that manage their own state',
    icon: <Code className="w-5 h-5" />,
    details: 'Reusable UI components make development faster and more maintainable'
  },
  {
    title: 'Virtual DOM',
    description: 'Efficient updates through virtual representation of the DOM',
    icon: <Star className="w-5 h-5" />,
    details: 'Better performance by minimizing expensive DOM operations'
  },
  {
    title: 'Rich Ecosystem',
    description: 'Vast collection of libraries, tools, and community resources',
    icon: <Users className="w-5 h-5" />,
    details: 'NPM packages, development tools, and active community support'
  },
  {
    title: 'Cross-Platform',
    description: 'Build for web, mobile, and desktop from the same codebase',
    icon: <Globe className="w-5 h-5" />,
    details: 'React Native, Electron, and other tools extend JavaScript everywhere'
  }
];

// Comparison data for ComparisonTable component
const frameworkComparison = [
  {
    name: 'React',
    description: 'A JavaScript library for building user interfaces',
    difficulty: 'Intermediate' as const,
    popularity: 'Very High' as const,
    useCase: 'Complex UIs, SPAs'
  },
  {
    name: 'Vue.js',
    description: 'Progressive framework with gentle learning curve',
    difficulty: 'Beginner' as const,
    popularity: 'High' as const,
    useCase: 'Rapid prototyping, PWAs'
  },
  {
    name: 'Angular',
    description: 'Full-featured framework for large-scale applications',
    difficulty: 'Advanced' as const,
    popularity: 'High' as const,
    useCase: 'Enterprise applications'
  },
  {
    name: 'Node.js',
    description: 'JavaScript runtime for server-side development',
    difficulty: 'Intermediate' as const,
    popularity: 'Very High' as const,
    useCase: 'APIs, Real-time apps'
  }
];

export default function JavaScriptFrameworksPage() {
  return (
    <PageLayout
      title="JavaScript Frameworks"
      description="Explore the most popular JavaScript frameworks and libraries including React, Vue, Angular, and more for building modern web applications."
      icon={<div className="text-4xl">⚡</div>}
      previousLink={{
        href: "/languages/javascript/async",
        label: "Previous: Async JavaScript"
      }}
      nextLink={{
        href: "/languages/javascript",
        label: "Back to JavaScript"
      }}
    >
      {/* Framework Statistics */}
      <QuickStats 
        title="JavaScript Framework Ecosystem"
        stats={frameworkStats}
        columns={4}
      />

      {/* Framework Features */}
      <FeatureList 
        title="Why Use JavaScript Frameworks?"
        features={frameworkFeatures}
        columns={2}
        variant="detailed"
      />

      {/* Framework Overview */}
      <InfoCard 
        title="🛠️ Popular JavaScript Frameworks" 
        variant="blue"
        icon={<Code className="w-5 h-5" />}
      >
        <p className="text-blue-900 dark:text-blue-100 mb-4">
          JavaScript frameworks provide structure, reusable components, and powerful tools for building modern web applications.
          Each framework has its strengths and is suited for different types of projects.
        </p>
      </InfoCard>

      {/* React Code Example */}
      <CodeBlock
        title="React Component Example"
        language="javascript"
        code={`// Functional Component with Hooks
import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await fetch(\`/api/users/\${userId}\`);
                const userData = await response.json();
                setUser(userData);
            } catch (error) {
                console.error('Failed to fetch user:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchUser();
    }, [userId]);

    if (loading) return <div>Loading...</div>;
    if (!user) return <div>User not found</div>;

    return (
        <div className="user-profile">
            <img src={user.avatar} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    );
}`}
        showLineNumbers={true}
      />

      {/* Node.js Code Example */}
      <CodeBlock
        title="Express.js Server Setup"
        language="javascript"
        code={`// Express.js Server Setup
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Routes
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

app.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
});`}
        showLineNumbers={true}
      />

      {/* Framework Comparison */}
      <ComparisonTable
        title="Framework Comparison"
        items={frameworkComparison}
        showDifficulty={true}
        showPopularity={true}
      />
    </PageLayout>
  );
}
