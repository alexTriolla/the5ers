import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

const Pagination = ({
  perPage,
  page,
  totalPages,
  handlePerPageChange,
  handlePageChange,
}: {
  perPage: number;
  page: number;
  totalPages: number;
  handlePerPageChange: (count: number) => void;
  handlePageChange: (newPage: number) => void;
}) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ marginTop: '20px', width: '100%' }}
    >
      {/* Per Page Selector */}
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography variant="body1" sx={{ color: '#c1c4d6' }}>
          Items per page:
        </Typography>
        {[3, 6, 9].map((count) => (
          <Button
            key={count}
            variant={perPage === count ? 'contained' : 'outlined'}
            onClick={() => handlePerPageChange(count)}
            sx={{
              color: '#ffffff',
              borderColor: '#565c65',
              bgcolor: perPage === count ? '#565c65' : 'transparent',
              borderRadius: '10px',
              minWidth: '40px',
              padding: '6px',
            }}
          >
            {count}
          </Button>
        ))}
      </Stack>

      {/* Pagination Buttons */}
      <Stack direction="row" spacing={1}>
        <Button
          disabled={page === 1}
          onClick={() => handlePageChange(Math.max(page - 1, 1))}
          sx={{
            color: '#c1c4d6', 
            borderColor: '#565c65',
            bgcolor: 'transparent',
            borderRadius: '10px',
            padding: '6px 12px',
            '&:hover': {
              bgcolor: '#565c65',
            },
            '&.Mui-disabled': {
              color: '#565c65', 
            },
          }}
        >
          Previous
        </Button>
        <Button
          disabled={page === totalPages}
          onClick={() => handlePageChange(Math.min(page + 1, totalPages))}
          sx={{
            color: '#c1c4d6', 
            borderColor: '#565c65',
            bgcolor: 'transparent',
            borderRadius: '10px',
            padding: '6px 12px',
            '&:hover': {
              bgcolor: '#565c65',
            },
            '&.Mui-disabled': {
              color: '#565c65',
            },
          }}
        >
          Next
        </Button>
      </Stack>
    </Stack>
  );
};

export default Pagination;
