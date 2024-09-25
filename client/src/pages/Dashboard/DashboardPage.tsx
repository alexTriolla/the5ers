import React from 'react';
import {
  Box,
  TextField,
  Typography,
  CircularProgress,
  Grid,
  Stack,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import StockCard from './StockCard';
import { useStockDashboard } from '../../hooks/useStockDashboard';
import Pagination from './Pagination';

const DashboardPage: React.FC = () => {
  const {
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
  } = useStockDashboard(); // Default query set to 'AA'

  return (
    <Box
      sx={{
        padding: '40px',
        minHeight: '90vh',
        width: '100%',
        overflowY: 'hidden',
      }}
    >
      {/* Header */}
      <Typography variant="h3" sx={{ marginBottom: '20px', color: '#ffffff' }}>
        Stock Dashboard
      </Typography>

      {/* Search Box */}
      <Stack
        sx={{ marginBottom: '30px', display: 'flex', alignItems: 'flex-start' }}
      >
        <TextField
          variant="outlined"
          placeholder="Search for stocks, funds, or ETFs"
          InputProps={{
            startAdornment: <SearchIcon sx={{ color: '#c1c4d6', mr: 1 }} />,
          }}
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          sx={{
            bgcolor: '#2e3035',
            input: { color: '#ffffff' },
            width: '100%',
            borderRadius: '20px',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderRadius: '20px',
              },
              '&:hover fieldset': {
                borderColor: '#565c65',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#565c65',
              },
            },
          }}
        />
        {/* Pagination Controls */}
        <Pagination
          perPage={perPage}
          page={page}
          totalPages={totalPages}
          handlePerPageChange={handlePerPageChange}
          handlePageChange={handlePageChange}
        />
      </Stack>

      {/* Loading and Error Handling */}
      {isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      )}
      {error && (
        <Typography variant="h6" sx={{ color: '#f44336' }}>
          Error fetching stock data
        </Typography>
      )}

      {/* Stock Cards */}
      <Grid container spacing={2} justifyContent="center">
        {paginatedData.map((stock: any) => (
          <Grid item xs={12} sm={6} md={3} key={stock.symbol}>
            <StockCard stock={stock} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DashboardPage;
