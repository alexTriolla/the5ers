import { useQuery } from '@tanstack/react-query';
import { fetchStocks } from '../services/stockService';

export interface Stock {
  symbol: string;
  name: string;

}
const useStockData = (query: string) => {
  return useQuery({
    queryKey: ['stocks', query],
    queryFn: () => fetchStocks(query),
    enabled: !!query, // Only fetch if query is not empty
    retry: false, // Disable retry on failure (optional)
    staleTime: 5 * 60 * 1000, // Keep data fresh for 5 minutes (optional)
  });
};

export default useStockData;
