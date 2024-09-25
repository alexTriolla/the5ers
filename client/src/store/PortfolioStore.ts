import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';
import axios from 'axios';

interface Stock {
  symbol: string;
  name: string;
  price: number;
  quantity: number;
  change: number;
  marketValue: number;
  totalCost: number;
  graphData: number[];
}

class PortfolioStore {
  username = 'Alex';
  stocks: Stock[] = [];
  searchQuery = '';
  filter: 'all' | 'gain' | 'loss' = 'all';

  constructor() {
    makeAutoObservable(this);
  }

  // Function to fetch user's stocks from the backend
  async fetchUserStocks() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v1/stocks`
      );
      const userStocks = response.data;

      // Add mock data to each stock
      const stocksWithMockData = userStocks.map((stock: any) => ({
        ...stock,
        price: this.getRandomNumber(100, 1000),
        quantity: this.getRandomNumber(1, 50),
        change: this.getRandomNumber(-10, 10),
        marketValue: this.getRandomNumber(1000, 50000),
        totalCost: this.getRandomNumber(1000, 50000),
        graphData: this.generateGraphData(),
      }));

      this.setStocks(stocksWithMockData);
    } catch (error) {
      console.error('Error fetching user stocks:', error);
    }
  }

  getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateGraphData() {
    return Array.from({ length: 20 }, () => this.getRandomNumber(100, 500));
  }

  setStocks(stocks: Stock[]) {
    this.stocks = stocks;
  }

  setSearchQuery(query: string) {
    this.searchQuery = query;
  }

  setFilter(filter: 'all' | 'gain' | 'loss') {
    this.filter = filter;
  }

  get filteredStocks() {
    let filtered = this.stocks;

    // Apply search filter
    if (this.searchQuery) {
      filtered = filtered.filter((stock) =>
        stock.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    // Apply gain/loss filter
    if (this.filter === 'gain') {
      filtered = filtered.filter((stock) => stock.change > 0);
    } else if (this.filter === 'loss') {
      filtered = filtered.filter((stock) => stock.change < 0);
    }

    return filtered;
  }
}

// Create a single instance of the store
const portfolioStoreInstance = new PortfolioStore();
const PortfolioStoreContext = createContext(portfolioStoreInstance);

export const usePortfolioStore = () => useContext(PortfolioStoreContext);

export { portfolioStoreInstance as portfolioStore };
