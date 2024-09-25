import React from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Stack,
} from '@mui/material';
import { useToast } from '../../hooks/useToast';
import { addStockToPortfolio } from '../../services/stockService';

interface StockCardProps {
  stock: {
    symbol: string;
    name: string;
    currency: string;
    stockExchange: string;
    exchangeShortName: string;
  };
}

const StockCard: React.FC<StockCardProps> = ({ stock }) => {
  const { showToastWithUndo } = useToast();

  const handleCardClick = () => {
    showToastWithUndo(
      `Adding ${stock.symbol} to your portfolio`,
      () => addStockToPortfolio(stock),
      4000
    );
  };

  return (
    <Card
      sx={{
        backgroundColor: '#1c1e24',
        color: '#ffffff',
        padding: '10px',
        borderRadius: '10px',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: '#2e3035',
        },
      }}
      onClick={handleCardClick}
    >
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="h6">{stock.symbol}</Typography>
          <Typography variant="body2">{stock.name}</Typography>
          <Typography variant="body2">{stock.currency}</Typography>
          <Typography variant="body2">
            {stock.stockExchange} ({stock.exchangeShortName})
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default StockCard;
