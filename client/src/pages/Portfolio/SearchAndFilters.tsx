import React from 'react';
import { observer } from 'mobx-react-lite';
import { Stack, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { usePortfolioStore } from '../../store/PortfolioStore';

const SearchAndFilters: React.FC = observer(() => {
  // Wrap component with observer
  const portfolioStore = usePortfolioStore();

  return (
    <Stack spacing={2} sx={{ marginBottom: '20px' }}>
      {/* Search Input */}
      <TextField
        variant="outlined"
        placeholder="Search for stocks, funds, or ETFs"
        InputProps={{
          startAdornment: <SearchIcon sx={{ color: '#c1c4d6', mr: 1 }} />,
        }}
        onChange={(e) => portfolioStore.setSearchQuery(e.target.value)}
        value={portfolioStore.searchQuery}
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

      {/* Filters */}
      <Stack direction="row" spacing={1}>
        <Button
          variant={portfolioStore.filter === 'all' ? 'contained' : 'outlined'}
          onClick={() => portfolioStore.setFilter('all')}
          sx={{
            bgcolor:
              portfolioStore.filter === 'all' ? '#565c65' : 'transparent',
            color: '#ffffff',
            borderColor: '#565c65',
            borderRadius: '20px',
          }}
        >
          All
        </Button>
        <Button
          variant={portfolioStore.filter === 'gain' ? 'contained' : 'outlined'}
          onClick={() => portfolioStore.setFilter('gain')}
          sx={{
            bgcolor:
              portfolioStore.filter === 'gain' ? '#565c65' : 'transparent',
            color: '#ffffff',
            borderColor: '#565c65',
            borderRadius: '20px',
          }}
        >
          Gaining
        </Button>
        <Button
          variant={portfolioStore.filter === 'loss' ? 'contained' : 'outlined'}
          onClick={() => portfolioStore.setFilter('loss')}
          sx={{
            bgcolor:
              portfolioStore.filter === 'loss' ? '#565c65' : 'transparent',
            color: '#ffffff',
            borderColor: '#565c65',
            borderRadius: '20px',
          }}
        >
          Losing
        </Button>
      </Stack>
    </Stack>
  );
});

export default SearchAndFilters;
