import axios from 'axios';
import { Stock } from '../hooks/useStockData';

export const fetchStocks = async (query: string) => {
  try {
    const apiKey = import.meta.env.VITE_STOCK_API_KEY;
    const apiUrl = import.meta.env.VITE_STOCK_API_URL;

    if (!apiKey || !apiUrl) {
      throw new Error('API key or URL is missing from environment variables');
    }

    const url = `${apiUrl}/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${apiKey}`;

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    throw error;
  }
};

export const addStockToPortfolio = async (stock: Stock) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;

    if (!baseUrl) {
      throw new Error('Base URL is missing from environment variables');
    }

    // Send stock object directly instead of nesting it under "stock"
    const response = await axios.post(`${baseUrl}/api/v1/stocks/add`, stock);
    return response.data;
  } catch (error) {
    console.error('Error adding stock to portfolio:', error);
    throw error;
  }
};
