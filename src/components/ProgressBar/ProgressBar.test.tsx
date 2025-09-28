import { render, screen } from '@testing-library/react';
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  it('renders with correct progress value', () => {
    render(<ProgressBar value={50} />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '50');
    expect(progressBar).toHaveAttribute('aria-valuemin', '0');
    expect(progressBar).toHaveAttribute('aria-valuemax', '100');
  });

  it('renders with custom max value', () => {
    render(<ProgressBar value={25} max={50} />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuemax', '50');
  });

  it('renders with label', () => {
    render(<ProgressBar value={75} label="Loading..." />);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-label', 'Loading...');
  });

  it('shows percentage when enabled', () => {
    render(<ProgressBar value={60} showPercentage={true} />);
    
    expect(screen.getByText('60%')).toBeInTheDocument();
  });

  it('applies correct variant styles', () => {
    const { container } = render(<ProgressBar value={50} variant="success" />);
    
    const progressFill = container.querySelector('.bg-green-600');
    expect(progressFill).toBeInTheDocument();
  });

  it('applies correct size styles', () => {
    const { container } = render(<ProgressBar value={50} size="lg" />);
    
    const progressElements = container.querySelectorAll('.h-4');
    expect(progressElements).toHaveLength(2); // Container and fill
  });

  it('handles edge cases for percentage calculation', () => {
    // Test negative value
    const { rerender } = render(<ProgressBar value={-10} showPercentage={true} />);
    expect(screen.getByText('0%')).toBeInTheDocument();
    
    // Test value exceeding max
    rerender(<ProgressBar value={150} max={100} showPercentage={true} />);
    expect(screen.getByText('100%')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <ProgressBar value={50} className="custom-class" />
    );
    
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('calculates percentage correctly with custom max', () => {
    render(<ProgressBar value={25} max={50} showPercentage={true} />);
    
    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  it('renders without label or percentage', () => {
    const { container } = render(<ProgressBar value={50} />);
    
    // Should not have the label/percentage container
    const labelContainer = container.querySelector('.flex.justify-between');
    expect(labelContainer).not.toBeInTheDocument();
  });

  it('has smooth transition animation', () => {
    const { container } = render(<ProgressBar value={50} />);
    
    const progressFill = container.querySelector('[role="progressbar"]');
    expect(progressFill).toHaveClass('transition-all', 'duration-300', 'ease-in-out');
  });
});
