import React from 'react';
import { Typography, Box } from '@mui/material';
import { usePortfolioStore } from '../../store/PortfolioStore';

const PortfolioHeader: React.FC = () => {
  const portfolioStore = usePortfolioStore();

  return (
    <Box sx={{ marginBottom: '20px' }}>
      <Typography variant="h3" sx={{ color: '#ffffff', marginBottom: '10px' }}>
        Hey {portfolioStore.username}, your stock portfolio
      </Typography>
      <Typography variant="subtitle1" sx={{ color: '#c1c4d6' }}>
        Your current holdings
      </Typography>
    </Box>
  );
};

export default PortfolioHeader;
