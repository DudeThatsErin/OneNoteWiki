'use client';

import { useState, useMemo } from 'react';
import { Search, SortAsc, SortDesc, Maximize, Minimize, ExternalLink } from 'lucide-react';
import type { DataTableProps, Column, SortConfig } from './types';

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  searchableColumns = [],
  defaultSortColumn,
  title,
  description
}: DataTableProps<T>) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<SortConfig<T>>({
    key: defaultSortColumn || (columns[0]?.key as keyof T),
    direction: 'asc'
  });
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Filter data based on search term
  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    
    return data.filter((item: T) =>
      searchableColumns.some((column: keyof T) =>
        String(item[column]).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [data, searchTerm, searchableColumns]);

  // Sort filtered data
  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;

    return [...filteredData].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [filteredData, sortConfig]);

  const handleSort = (key: keyof T) => {
    setSortConfig((prev: SortConfig<T>) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const renderCellContent = (item: T, column: Column<T>) => {
    const value = item[column.key];
    
    if (column.render) {
      return column.render(value, item);
    }
    
    if (column.type === 'link' && value) {
      return (
        <a
          href={value as string}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
        >
          Link
          <ExternalLink className="w-3 h-3" />
        </a>
      );
    }
    
    if (column.type === 'tags' && Array.isArray(value)) {
      return (
        <div className="flex flex-wrap gap-1">
          {value.map((tag: string, index: number) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      );
    }
    
    return String(value || '');
  };

  return (
    <div 
      className={`${isFullscreen ? 'fixed inset-0 z-50 bg-white dark:bg-gray-900 p-6' : 'bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700'}`}
      role="region"
      aria-labelledby="data-table-title"
      aria-describedby="data-table-description"
    >
      {/* Skip link for keyboard users */}
      <a
        href="#data-table-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to table content
      </a>

      {/* Header */}
      <div className="flex flex-col gap-4 p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h2 id="data-table-title" className="text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h2>
            {description && (
              <p id="data-table-description" className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {description}
              </p>
            )}
          </div>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors focus:ring-2 focus:ring-blue-500 focus:outline-none"
            aria-label={isFullscreen ? 'Exit fullscreen mode' : 'Enter fullscreen mode'}
            title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          >
            {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <label htmlFor="data-table-search" className="sr-only">
            Search {title}
          </label>
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" aria-hidden="true" />
          <input
            id="data-table-search"
            type="text"
            placeholder={`Search ${title.toLowerCase()}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
            aria-describedby="search-help"
          />
          <div id="search-help" className="sr-only">
            Search across {searchableColumns.join(', ')} fields
          </div>
        </div>

        {/* Results count */}
        <div className="text-sm text-gray-600 dark:text-gray-400" aria-live="polite" aria-atomic="true">
          Showing {sortedData.length} of {data.length} results
        </div>
      </div>

      {/* Table */}
      <div 
        id="data-table-content"
        className={`overflow-auto ${isFullscreen ? 'max-h-[calc(100vh-200px)]' : 'max-h-96'}`}
        role="region"
        aria-label="Data table content"
        tabIndex={0}
      >
        <table 
          className="w-full"
          role="table"
          aria-label={`${title} data table with ${sortedData.length} rows`}
        >
          <thead className="bg-gray-50 dark:bg-gray-700 sticky top-0">
            <tr role="row">
              {columns.map((column: Column<T>) => (
                <th
                  key={String(column.key)}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors focus:bg-gray-100 dark:focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                  onClick={() => handleSort(column.key)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSort(column.key);
                    }
                  }}
                  tabIndex={0}
                  role="columnheader"
                  aria-sort={
                    sortConfig.key === column.key 
                      ? sortConfig.direction === 'asc' ? 'ascending' : 'descending'
                      : 'none'
                  }
                  aria-label={`Sort by ${column.header}${
                    sortConfig.key === column.key 
                      ? `, currently sorted ${sortConfig.direction === 'asc' ? 'ascending' : 'descending'}`
                      : ''
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {column.header}
                    {sortConfig.key === column.key && (
                      sortConfig.direction === 'asc' 
                        ? <SortAsc className="w-4 h-4" aria-hidden="true" />
                        : <SortDesc className="w-4 h-4" aria-hidden="true" />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {sortedData.map((item: T, index: number) => (
              <tr
                key={index}
                className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus-within:bg-gray-50 dark:focus-within:bg-gray-700"
                role="row"
              >
                {columns.map((column: Column<T>) => (
                  <td
                    key={String(column.key)}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100"
                    role="cell"
                  >
                    {renderCellContent(item, column)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        
        {sortedData.length === 0 && (
          <div 
            className="text-center py-8 text-gray-500 dark:text-gray-400"
            role="status"
            aria-live="polite"
          >
            No results found for "{searchTerm}"
          </div>
        )}
      </div>

      {/* Footer */}
      {isFullscreen && (
        <div className="flex justify-center pt-4">
          <button
            onClick={() => setIsFullscreen(false)}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            Exit Fullscreen
          </button>
        </div>
      )}
    </div>
  );
}
