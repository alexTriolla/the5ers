import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box } from '@mui/material';
import PortfolioHeader from './PortfolioHeader';
import SearchAndFilters from './SearchAndFilters';
import StockTable from './StockTable';

const PortfolioPage: React.FC = observer(() => {
  return (
    <Box
      sx={{
        padding: '40px',
        minHeight: '90vh',
        width: '100%',
      }}
    >
      {/* Header */}
      <PortfolioHeader />

      {/* Search and Filters */}
      <SearchAndFilters />

      {/* Stock Table */}
      <StockTable />
    </Box>
  );
});

export default PortfolioPage;
