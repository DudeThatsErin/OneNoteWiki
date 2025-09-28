export type ContentListType = 'disc' | 'decimal' | 'none';

export interface ContentListProps {
  items: string[];
  type?: ContentListType;
  className?: string;
}
