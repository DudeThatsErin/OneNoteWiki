import { render, screen } from '@testing-library/react';
import GettingStartedSection from './GettingStartedSection';
import { Download, Code } from 'lucide-react';

describe('GettingStartedSection', () => {
  const mockSteps = [
    {
      title: 'Install Dependencies',
      description: 'Install the required packages',
      icon: <Download data-testid="download-icon" />,
      code: 'npm install react'
    },
    {
      title: 'Write Code',
      description: 'Create your first component',
      icon: <Code data-testid="code-icon" />
    }
  ];

  it('renders with default title', () => {
    render(<GettingStartedSection steps={mockSteps} />);
    
    expect(screen.getByText('🚀 Getting Started')).toBeInTheDocument();
  });

  it('renders with custom title and description', () => {
    render(
      <GettingStartedSection 
        title="Custom Title"
        description="Custom description"
        steps={mockSteps} 
      />
    );
    
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
    expect(screen.getByText('Custom description')).toBeInTheDocument();
  });

  it('renders steps correctly', () => {
    render(<GettingStartedSection steps={mockSteps} />);
    
    expect(screen.getByText('Install Dependencies')).toBeInTheDocument();
    expect(screen.getByText('Install the required packages')).toBeInTheDocument();
    expect(screen.getByText('Write Code')).toBeInTheDocument();
    expect(screen.getByText('Create your first component')).toBeInTheDocument();
  });

  it('renders step numbers', () => {
    render(<GettingStartedSection steps={mockSteps} />);
    
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('renders icons when provided', () => {
    render(<GettingStartedSection steps={mockSteps} />);
    
    expect(screen.getByTestId('download-icon')).toBeInTheDocument();
    expect(screen.getByTestId('code-icon')).toBeInTheDocument();
  });

  it('renders code blocks when provided', () => {
    render(<GettingStartedSection steps={mockSteps} />);
    
    expect(screen.getByText('npm install react')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <GettingStartedSection steps={mockSteps} className="custom-class" />
    );
    
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('handles steps without icons or code', () => {
    const simpleSteps = [
      { title: 'Simple Step', description: 'Simple description' }
    ];

    render(<GettingStartedSection steps={simpleSteps} />);
    
    expect(screen.getByText('Simple Step')).toBeInTheDocument();
    expect(screen.getByText('Simple description')).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    render(<GettingStartedSection title="Test Guide" steps={mockSteps} />);
    
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Test Guide');
    expect(screen.getAllByRole('heading', { level: 4 })).toHaveLength(2);
  });
});
