import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

interface StockInfoCardProps {
  label: string;
  value: string;
  change: string;
}

const StockInfoCard: React.FC<StockInfoCardProps> = ({
  label,
  value,
  change,
}) => {
  return (
    <Paper
      sx={{
        backgroundColor: '#1c1e24',
        padding: '20px',
        borderRadius: '10px',
        minWidth: '150px',
        textAlign: 'center',
      }}
    >
      <Typography variant="h6" color="#c1c4d6" sx={{ marginBottom: '5px' }}>
        {label}
      </Typography>
      <Typography variant="h5" color="#ffffff">
        {value}
      </Typography>
      <Typography variant="body2" color="#4caf50">
        {change}
      </Typography>
    </Paper>
  );
};

export default StockInfoCard;
