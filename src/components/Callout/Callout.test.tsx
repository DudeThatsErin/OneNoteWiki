import { render, screen } from '@testing-library/react';
import { Callout } from './Callout';
import { Star } from 'lucide-react';

describe('Callout', () => {
  it('renders with required props', () => {
    render(
      <Callout type="info">
        <p>This is an info message</p>
      </Callout>
    );
    
    expect(screen.getByText('This is an info message')).toBeInTheDocument();
  });

  it('renders with title', () => {
    render(
      <Callout type="warning" title="Important Notice">
        <p>Warning content</p>
      </Callout>
    );
    
    expect(screen.getByText('Important Notice')).toBeInTheDocument();
    expect(screen.getByText('Warning content')).toBeInTheDocument();
  });

  it('renders default icons for each type', () => {
    const types = ['info', 'warning', 'error', 'success', 'tip'] as const;
    
    types.forEach(type => {
      const { container } = render(
        <Callout type={type}>Content</Callout>
      );
      
      // Check that an icon is rendered (Lucide icons are mocked as divs with data-testid)
      const icon = container.querySelector(`[data-testid="${type === 'info' ? 'info' : 
                                                         type === 'warning' ? 'alert-triangle' :
                                                         type === 'error' ? 'alert-circle' :
                                                         type === 'success' ? 'check-circle' :
                                                         'lightbulb'}-icon"]`);
      expect(icon).toBeInTheDocument();
    });
  });

  it('renders custom icon when provided', () => {
    render(
      <Callout type="info" icon={<Star data-testid="custom-icon" />}>
        Content
      </Callout>
    );
    
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  it('applies correct styling for each type', () => {
    const { container, rerender } = render(
      <Callout type="info">Content</Callout>
    );
    
    expect(container.firstChild).toHaveClass('bg-blue-50', 'border-blue-200');
    
    rerender(<Callout type="success">Content</Callout>);
    expect(container.firstChild).toHaveClass('bg-green-50', 'border-green-200');
    
    rerender(<Callout type="error">Content</Callout>);
    expect(container.firstChild).toHaveClass('bg-red-50', 'border-red-200');
    
    rerender(<Callout type="warning">Content</Callout>);
    expect(container.firstChild).toHaveClass('bg-yellow-50', 'border-yellow-200');
    
    rerender(<Callout type="tip">Content</Callout>);
    expect(container.firstChild).toHaveClass('bg-purple-50', 'border-purple-200');
  });

  it('applies custom className', () => {
    const { container } = render(
      <Callout type="info" className="custom-class">
        Content
      </Callout>
    );
    
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('renders complex children', () => {
    render(
      <Callout type="info" title="Complex Content">
        <div>
          <p>Paragraph 1</p>
          <ul>
            <li>List item</li>
          </ul>
          <p>Paragraph 2</p>
        </div>
      </Callout>
    );
    
    expect(screen.getByText('Paragraph 1')).toBeInTheDocument();
    expect(screen.getByText('List item')).toBeInTheDocument();
    expect(screen.getByText('Paragraph 2')).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    render(
      <Callout type="info" title="Test Title">
        Content
      </Callout>
    );
    
    const heading = screen.getByRole('heading', { level: 4 });
    expect(heading).toHaveTextContent('Test Title');
  });

  it('renders without title gracefully', () => {
    render(
      <Callout type="info">
        Just content without title
      </Callout>
    );
    
    expect(screen.getByText('Just content without title')).toBeInTheDocument();
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });
});
