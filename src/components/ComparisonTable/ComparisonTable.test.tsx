import { render, screen } from '@testing-library/react';
import { ComparisonTable } from './ComparisonTable';

describe('ComparisonTable', () => {
  const mockItems = [
    {
      name: 'React',
      description: 'A JavaScript library for building user interfaces',
      difficulty: 'Intermediate' as const,
      popularity: 'Very High' as const,
      useCase: 'Single-page applications and complex UIs',
      pros: ['Virtual DOM', 'Large ecosystem'],
      cons: ['Learning curve', 'Frequent updates']
    },
    {
      name: 'Vue.js',
      description: 'Progressive JavaScript framework',
      difficulty: 'Beginner' as const,
      popularity: 'High' as const,
      useCase: 'Progressive web apps and prototyping'
    }
  ];

  it('renders table with title', () => {
    render(<ComparisonTable title="JavaScript Frameworks" items={mockItems} />);
    
    expect(screen.getByText('JavaScript Frameworks')).toBeInTheDocument();
  });

  it('renders all items correctly', () => {
    render(<ComparisonTable title="Frameworks" items={mockItems} />);
    
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('A JavaScript library for building user interfaces')).toBeInTheDocument();
    expect(screen.getByText('Vue.js')).toBeInTheDocument();
    expect(screen.getByText('Progressive JavaScript framework')).toBeInTheDocument();
  });

  it('renders table headers correctly', () => {
    render(<ComparisonTable title="Frameworks" items={mockItems} />);
    
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Difficulty')).toBeInTheDocument();
    expect(screen.getByText('Popularity')).toBeInTheDocument();
    expect(screen.getByText('Use Case')).toBeInTheDocument();
  });

  it('renders difficulty and popularity tags', () => {
    render(<ComparisonTable title="Frameworks" items={mockItems} />);
    
    expect(screen.getByText('Intermediate')).toBeInTheDocument();
    expect(screen.getByText('Very High')).toBeInTheDocument();
    expect(screen.getByText('Beginner')).toBeInTheDocument();
    expect(screen.getByText('High')).toBeInTheDocument();
  });

  it('hides difficulty column when showDifficulty is false', () => {
    render(
      <ComparisonTable 
        title="Frameworks" 
        items={mockItems} 
        showDifficulty={false} 
      />
    );
    
    expect(screen.queryByText('Difficulty')).not.toBeInTheDocument();
    expect(screen.queryByText('Intermediate')).not.toBeInTheDocument();
  });

  it('hides popularity column when showPopularity is false', () => {
    render(
      <ComparisonTable 
        title="Frameworks" 
        items={mockItems} 
        showPopularity={false} 
      />
    );
    
    expect(screen.queryByText('Popularity')).not.toBeInTheDocument();
    expect(screen.queryByText('Very High')).not.toBeInTheDocument();
  });

  it('renders use cases correctly', () => {
    render(<ComparisonTable title="Frameworks" items={mockItems} />);
    
    expect(screen.getByText('Single-page applications and complex UIs')).toBeInTheDocument();
    expect(screen.getByText('Progressive web apps and prototyping')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <ComparisonTable 
        title="Frameworks" 
        items={mockItems} 
        className="custom-class" 
      />
    );
    
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('handles empty items array', () => {
    render(<ComparisonTable title="Empty Table" items={[]} />);
    
    expect(screen.getByText('Empty Table')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    
    // Should have no data rows
    const tbody = screen.getByRole('table').querySelector('tbody');
    expect(tbody?.children).toHaveLength(0);
  });

  it('has proper table structure', () => {
    render(<ComparisonTable title="Frameworks" items={mockItems} />);
    
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
    
    const headers = screen.getAllByRole('columnheader');
    expect(headers).toHaveLength(5); // Name, Description, Difficulty, Popularity, Use Case
    
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(3); // Header + 2 data rows
  });

  it('applies hover effects to table rows', () => {
    const { container } = render(
      <ComparisonTable title="Frameworks" items={mockItems} />
    );
    
    const dataRows = container.querySelectorAll('tbody tr');
    dataRows.forEach(row => {
      expect(row).toHaveClass('hover:bg-gray-50', 'dark:hover:bg-gray-700/50', 'transition-colors');
    });
  });
});
