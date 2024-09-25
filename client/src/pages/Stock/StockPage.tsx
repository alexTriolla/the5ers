import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Box, Typography, Stack, Paper, Button, Divider } from '@mui/material';
import { usePortfolioStore } from '../../store/PortfolioStore';
import StockGraph from './StockGraph';
import StockInfoCard from './StockInfoCard';

const StockPage: React.FC = observer(() => {
  const { symbol } = useParams<{ symbol: string }>();
  const portfolioStore = usePortfolioStore();

  // Fetch stock data for the symbol from the store
  const stockData = portfolioStore.stocks.find(
    (stock) => stock.symbol === symbol
  );

  useEffect(() => {
    if (!stockData) {
      // If no stock data is found, you can handle this scenario, such as navigating back or showing an error message
      console.error('Stock data not found');
    }
  }, [symbol, stockData]);

  if (!stockData) {
    return (
      <Box
        sx={{
          padding: '40px',
          minHeight: '90vh',
          width: '100%',
          bgcolor: '#121212',
        }}
      >
        <Typography variant="h4" color="#ffffff">
          Stock not found
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        padding: '40px',
        minHeight: '90vh',
        width: '100%',
        bgcolor: '#121212',
      }}
    >
      {/* Breadcrumb Navigation */}
      <Typography variant="body1" color="gray" sx={{ marginBottom: '20px' }}>
        Home /{' '}
        <Link to="/portfolio" style={{ color: 'gray', textDecoration: 'none' }}>
          Portfolio
        </Link>{' '}
        / <strong>{symbol}</strong>
      </Typography>

      {/* Stock Name */}
      <Typography variant="h3" sx={{ marginBottom: '20px', color: '#ffffff' }}>
        {stockData.name}
      </Typography>

      {/* Stock Graph */}
      <Paper
        sx={{
          backgroundColor: '#1c1e24',
          padding: '20px',
          borderRadius: '10px',
          marginBottom: '20px',
        }}
      >
        <Typography variant="h6" color="#c1c4d6" sx={{ marginBottom: '10px' }}>
          {symbol}
        </Typography>
        <StockGraph data={stockData.graphData} />
      </Paper>

      {/* Stock Information Cards */}
      <Stack direction="row" spacing={2} sx={{ marginBottom: '20px' }}>
        <StockInfoCard
          label="Price"
          value={`$${stockData.price}`}
          change={`${stockData.change}%`} // Pass change prop here
        />
        <StockInfoCard
          label="Quantity"
          value={`${stockData.quantity}`}
          change={`${stockData.change}%`} // Pass change prop here
        />
        <StockInfoCard
          label="Market Value"
          value={`$${stockData.marketValue}`}
          change={`${stockData.change}%`} // Pass change prop here
        />
        <StockInfoCard
          label="Total Cost"
          value={`$${stockData.totalCost}`}
          change={`${stockData.change}%`} // Pass change prop here
        />
      </Stack>

      {/* Order Types */}
      <Typography variant="h5" color="#ffffff" sx={{ marginBottom: '10px' }}>
        Order Types
      </Typography>
      <Paper
        sx={{
          backgroundColor: '#1c1e24',
          padding: '20px',
          borderRadius: '10px',
          marginBottom: '10px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box sx={{ marginRight: '20px' }}>
          <Divider
            orientation="vertical"
            sx={{ height: '100%', bgcolor: '#565c65' }}
          />
        </Box>
        <Box>
          <Typography variant="h6" color="#ffffff">
            Market Order
          </Typography>
          <Typography variant="body2" color="#c1c4d6">
            A market order is a request to buy or sell a security immediately at
            the best available current price.
          </Typography>
        </Box>
      </Paper>

      <Button
        variant="contained"
        sx={{
          bgcolor: '#0a73ff',
          color: '#ffffff',
          borderRadius: '20px',
          padding: '10px 30px',
          fontSize: '16px',
        }}
      >
        Trade
      </Button>
    </Box>
  );
});

export default StockPage;
