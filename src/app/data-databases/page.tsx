import Link from 'next/link';
import { Database, ArrowRight, BarChart, Table, FileText } from 'lucide-react';

const databaseCategories = [
  {
    title: 'SQL Basics',
    description: 'Learn relational databases and SQL query language fundamentals',
    examples: ['PostgreSQL', 'MySQL', 'SQLite', 'SQL Server'],
    href: '/data-databases/sql',
    icon: <Table className="w-6 h-6" />,
    color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
  },
  {
    title: 'NoSQL Databases',
    description: 'Explore non-relational databases for flexible data storage',
    examples: ['MongoDB', 'Redis', 'Cassandra', 'DynamoDB'],
    href: '/data-databases/nosql',
    icon: <Database className="w-6 h-6" />,
    color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
  },
  {
    title: 'Data Analysis',
    description: 'Analyze and visualize data to extract meaningful insights',
    examples: ['Python/Pandas', 'R', 'Excel', 'Tableau'],
    href: '/data-databases/analysis',
    icon: <BarChart className="w-6 h-6" />,
    color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800'
  }
];

const databaseTypes = [
  { name: 'Relational (SQL)', usage: 'Structured data with relationships', popularity: 'Very High' },
  { name: 'Document', usage: 'JSON-like documents', popularity: 'High' },
  { name: 'Key-Value', usage: 'Simple key-value pairs', popularity: 'High' },
  { name: 'Graph', usage: 'Connected data relationships', popularity: 'Growing' },
  { name: 'Column-Family', usage: 'Wide-column storage', popularity: 'Moderate' },
  { name: 'Time-Series', usage: 'Time-stamped data', popularity: 'Growing' }
];

export default function DataDatabasesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Database className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Data & Databases
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Master data storage, retrieval, and analysis. From SQL fundamentals to 
          NoSQL databases and data analytics tools.
        </p>
      </div>

      {/* Why Data & Databases Matter */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
          📊 Why Data & Databases Matter
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🏗️ Foundation of Applications:</h4>
            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
              <li>• Every app needs data storage</li>
              <li>• User accounts and profiles</li>
              <li>• Content and media storage</li>
              <li>• Transaction records</li>
              <li>• Analytics and logging</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💼 Career Opportunities:</h4>
            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
              <li>• Database Administrator (DBA)</li>
              <li>• Data Analyst</li>
              <li>• Data Scientist</li>
              <li>• Backend Developer</li>
              <li>• Business Intelligence Developer</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🚀 Business Impact:</h4>
            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
              <li>• Data-driven decision making</li>
              <li>• Performance optimization</li>
              <li>• Customer insights</li>
              <li>• Predictive analytics</li>
              <li>• Competitive advantage</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Learning Paths */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Learning Paths
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {databaseCategories.map((category, index) => (
            <Link
              key={category.href}
              href={category.href}
              className={`block p-6 rounded-lg border-2 transition-all hover:shadow-lg hover:scale-105 ${category.color}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-gray-700 dark:text-gray-300">{category.icon}</div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {category.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {category.description}
              </p>
              
              <div className="flex flex-wrap gap-1">
                {category.examples.map((example, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-white dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300">
                    {example}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Database Types Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Database Types Overview
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Database Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Best For
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Popularity
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {databaseTypes.map((db, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900 dark:text-white">{db.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600 dark:text-gray-300">{db.usage}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        db.popularity === 'Very High' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                        db.popularity === 'High' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                        db.popularity === 'Growing' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                        'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                      }`}>
                        {db.popularity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key Concepts */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Essential Concepts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">🗃️ Database Design</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Entity-Relationship (ER) modeling</li>
              <li>• Normalization and denormalization</li>
              <li>• Primary and foreign keys</li>
              <li>• Indexes and constraints</li>
              <li>• Schema design patterns</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">⚡ Performance</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Query optimization</li>
              <li>• Indexing strategies</li>
              <li>• Caching mechanisms</li>
              <li>• Connection pooling</li>
              <li>• Database monitoring</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">🔒 Security</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Authentication and authorization</li>
              <li>• SQL injection prevention</li>
              <li>• Data encryption</li>
              <li>• Backup and recovery</li>
              <li>• Access control</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">📈 Scaling</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Horizontal vs vertical scaling</li>
              <li>• Replication and sharding</li>
              <li>• Load balancing</li>
              <li>• Distributed databases</li>
              <li>• Cloud database services</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
          🎯 Recommended Learning Path
        </h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Start with SQL Fundamentals</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Learn basic queries, joins, and database design principles</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Practice with Real Databases</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Use PostgreSQL or MySQL for hands-on experience</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Explore NoSQL Options</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Learn MongoDB or Redis for different use cases</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Learn Data Analysis</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Use Python/Pandas or R for data manipulation and visualization</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tools & Technologies */}
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
          🛠️ Popular Tools & Technologies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">SQL Databases:</h4>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
              <li>• PostgreSQL</li>
              <li>• MySQL</li>
              <li>• SQLite</li>
              <li>• SQL Server</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">NoSQL Databases:</h4>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
              <li>• MongoDB</li>
              <li>• Redis</li>
              <li>• Cassandra</li>
              <li>• DynamoDB</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Analysis Tools:</h4>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
              <li>• Python/Pandas</li>
              <li>• R</li>
              <li>• Tableau</li>
              <li>• Power BI</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Cloud Services:</h4>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
              <li>• AWS RDS</li>
              <li>• Google Cloud SQL</li>
              <li>• Azure Database</li>
              <li>• Firebase</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
