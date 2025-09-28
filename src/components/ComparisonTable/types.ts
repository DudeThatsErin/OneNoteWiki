export interface ComparisonItem {
  name: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  popularity: 'Low' | 'Medium' | 'High' | 'Very High';
  useCase: string;
  pros?: string[];
  cons?: string[];
}

export interface ComparisonTableProps {
  title: string;
  items: ComparisonItem[];
  showDifficulty?: boolean;
  showPopularity?: boolean;
  className?: string;
}
