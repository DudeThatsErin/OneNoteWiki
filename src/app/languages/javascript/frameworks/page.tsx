import Link from 'next/link';
import { ArrowLeft, ArrowRight, Code, Globe, Server, Smartphone } from 'lucide-react';

const frameworks = [
  {
    name: 'React',
    category: 'Frontend Library',
    description: 'A JavaScript library for building user interfaces with a component-based architecture',
    pros: ['Component-based', 'Virtual DOM', 'Large ecosystem', 'Strong community'],
    cons: ['Learning curve', 'Rapid changes', 'JSX syntax'],
    useCases: ['Single-page applications', 'Complex UIs', 'Reusable components'],
    companies: ['Facebook', 'Netflix', 'Airbnb', 'Instagram'],
    icon: '⚛️'
  },
  {
    name: 'Vue.js',
    category: 'Frontend Framework',
    description: 'Progressive framework with gentle learning curve and excellent documentation',
    pros: ['Easy to learn', 'Great documentation', 'Flexible', 'Great tooling'],
    cons: ['Smaller ecosystem', 'Less job market', 'Mainly one maintainer'],
    useCases: ['Progressive web apps', 'Rapid prototyping', 'Small to medium projects'],
    companies: ['GitLab', 'Adobe', 'Nintendo', 'BMW'],
    icon: '💚'
  },
  {
    name: 'Angular',
    category: 'Frontend Framework',
    description: 'Full-featured framework for building large-scale applications',
    pros: ['Full framework', 'TypeScript by default', 'Powerful CLI', 'Enterprise-ready'],
    cons: ['Steep learning curve', 'Verbose', 'Heavy framework'],
    useCases: ['Enterprise applications', 'Large SPAs', 'Complex business logic'],
    companies: ['Google', 'Microsoft', 'Deutsche Bank', 'Samsung'],
    icon: '🅰️'
  },
  {
    name: 'Node.js',
    category: 'Backend Runtime',
    description: 'JavaScript runtime for server-side development',
    pros: ['Same language as frontend', 'Fast execution', 'Large package ecosystem'],
    cons: ['Single-threaded', 'Not ideal for CPU-intensive tasks'],
    useCases: ['Web servers', 'APIs', 'Real-time applications', 'Microservices'],
    companies: ['Netflix', 'Uber', 'LinkedIn', 'PayPal'],
    icon: '🟢'
  }
];

export default function JavaScriptFrameworksPage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/languages/javascript/fundamentals"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Fundamentals</span>
        </Link>
        <Link
          href="/languages/javascript/async"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>Next: Async Programming</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="text-4xl">🛠️</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">JavaScript Frameworks & Libraries</h1>
            <p className="text-gray-600 dark:text-gray-300">Popular tools that make JavaScript development easier</p>
          </div>
        </div>
      </div>

      {/* Framework Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Popular Frameworks</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {frameworks.map((framework, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl">{framework.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{framework.name}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{framework.category}</span>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{framework.description}</p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-green-700 dark:text-green-300 text-sm mb-1">Pros:</h4>
                  <div className="flex flex-wrap gap-1">
                    {framework.pros.map((pro, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
                        {pro}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-red-700 dark:text-red-300 text-sm mb-1">Cons:</h4>
                  <div className="flex flex-wrap gap-1">
                    {framework.cons.map((con, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full">
                        {con}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 text-sm mb-1">Used by:</h4>
                  <div className="flex flex-wrap gap-1">
                    {framework.companies.map((company, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* React Deep Dive */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">React Deep Dive</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">React Components and JSX</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`// Functional Component with Hooks
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
            <UserStats stats={user.stats} />
        </div>
    );
}

// Custom Hook
function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    };

    return [storedValue, setValue];
}`}
          </pre>
        </div>
      </section>

      {/* Node.js Deep Dive */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Node.js Deep Dive</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Express.js Server</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`// Express.js Server Setup
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

// Routes
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

app.post('/api/users', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        // Validation
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        
        const user = new User({ name, email, password });
        await user.save();
        
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
});

// Error handling middleware
app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
});`}
          </pre>
        </div>
      </section>

      {/* Framework Comparison */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Framework Comparison</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Framework</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Learning Curve</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Performance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">React</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Moderate</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">High</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Complex UIs, SPAs</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Vue.js</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Easy</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">High</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Rapid prototyping, PWAs</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Angular</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Steep</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">High</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Enterprise apps</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Node.js</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Moderate</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">High (I/O)</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">APIs, Real-time apps</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/languages/javascript/fundamentals"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Fundamentals</span>
        </Link>
        <Link
          href="/languages/javascript/async"
          className="flex items-center space-x-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Next: Async Programming</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
