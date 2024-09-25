import React from 'react';
import { TableCell, TableRow, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Stock {
  symbol: string;
  name: string;
  price: number;
  quantity: number;
  change: number;
  marketValue: number;
  totalCost: number;
}

interface StockTableRowProps {
  stock: Stock;
}

const StockTableRow: React.FC<StockTableRowProps> = ({ stock }) => {
  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate(`/stock/${stock.symbol}`);
  };

  return (
    <TableRow
      hover
      sx={{
        cursor: 'pointer',
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: '#2e3035', 
        },
        borderBottom: '1px solid #2e3035',
      }}
      onClick={handleRowClick}
    >
      <TableCell sx={{ color: '#ffffff' }}>{stock.symbol}</TableCell>
      <TableCell sx={{ color: '#ffffff' }}>{stock.name}</TableCell>
      <TableCell sx={{ color: '#ffffff' }} align="right">
        {`$${stock.price.toFixed(2)}`}
      </TableCell>
      <TableCell sx={{ color: '#ffffff' }} align="right">
        {stock.quantity}
      </TableCell>
      <TableCell
        sx={{ color: stock.change >= 0 ? '#4caf50' : '#f44336' }}
        align="right"
      >
        {stock.change >= 0 ? (
          <Chip label={`▲ ${stock.change.toFixed(2)}%`} color="success" />
        ) : (
          <Chip label={`▼ ${stock.change.toFixed(2)}%`} color="error" />
        )}
      </TableCell>
      <TableCell sx={{ color: '#ffffff' }} align="right">
        {`$${stock.marketValue.toFixed(2)}`}
      </TableCell>
      <TableCell sx={{ color: '#ffffff' }} align="right">
        {`$${stock.totalCost.toFixed(2)}`}
      </TableCell>
    </TableRow>
  );
};

export default StockTableRow;
