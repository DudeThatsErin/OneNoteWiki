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
      {/* Try This First Tutorial */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h3 className="font-semibold text-white mb-4">🛠️ Try This First: Set Up Your First React Project</h3>
        <div className="flex flex-col gap-6 text-gray-300">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
              <h4 className="font-semibold text-white text-sm">Create a new React project</h4>
            </div>
            <p className="text-sm mb-3">Use Vite for a fast, modern setup (requires Node.js):</p>
            <pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900 p-4 rounded">{`npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev`}</pre>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
              <h4 className="font-semibold text-white text-sm">Create your first component</h4>
            </div>
            <p className="text-sm mb-3">Replace the content in <code className="bg-gray-700 px-1 rounded">src/App.jsx</code>:</p>
            <pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900 p-4 rounded">{`function App() {
  const name = "World"
  
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <button onClick={() => alert('Button clicked!')}>
        Click me
      </button>
    </div>
  )
}

export default App`}</pre>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
              <h4 className="font-semibold text-white text-sm">Add state to make it interactive</h4>
            </div>
            <p className="text-sm mb-3">Use <code className="bg-gray-700 px-1 rounded">useState</code> to track data that changes:</p>
            <pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900 p-4 rounded">{`import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}`}</pre>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
              <h4 className="font-semibold text-white text-sm">Break it into components</h4>
            </div>
            <p className="text-sm mb-3">Create reusable pieces:</p>
            <pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900 p-4 rounded">{`function Counter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue)
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>My Counters</h1>
      <Counter initialValue={5} />
      <Counter initialValue={10} />
    </div>
  )
}`}</pre>
          </div>

          <div className="text-xs text-gray-400 mt-4">
            💡 Save your files and see the changes instantly in your browser at http://localhost:5173
          </div>
        </div>
      </div>

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
