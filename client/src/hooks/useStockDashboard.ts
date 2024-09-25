import { useState } from 'react';
import useStockData from './useStockData';

export const useStockDashboard = (initialQuery: string = 'AA') => {
  const [query, setQuery] = useState(initialQuery);
  const [perPage, setPerPage] = useState(6);
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = useStockData(query);

  const totalItems = data?.length || 0;
  const totalPages = Math.ceil(totalItems / perPage);
  const paginatedData = data?.slice((page - 1) * perPage, page * perPage) || [];

  const handlePerPageChange = (count: number) => {
    setPerPage(count);
    setPage(1); // Reset to the first page
  };

  const handlePageChange = (newPage: number) => setPage(newPage);

  return {
    query,
    setQuery,
    perPage,
    page,
    totalPages,
    paginatedData,
    isLoading,
    error,
    handlePerPageChange,
    handlePageChange,
  };
};
