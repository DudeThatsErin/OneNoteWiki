export interface Column<T> {
  key: keyof T;
  header: string;
  type?: 'text' | 'link' | 'tags' | 'number' | 'date';
  render?: (value: any, item: T) => React.ReactNode;
  sortable?: boolean;
}

export interface SortConfig<T = any> {
  key: keyof T;
  direction: 'asc' | 'desc';
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  searchableColumns?: (keyof T)[];
  defaultSortColumn?: keyof T;
  title: string;
  description?: string;
}
