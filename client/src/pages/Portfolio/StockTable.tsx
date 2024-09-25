import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import { usePortfolioStore } from '../../store/PortfolioStore';
import StockTableRow from './StockTableRow';

const StockTable: React.FC = observer(() => {
  const portfolioStore = usePortfolioStore();

  React.useEffect(() => {
    portfolioStore.fetchUserStocks();
  }, [portfolioStore]);

  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: '#1c1e24',
        color: '#ffffff',
        borderRadius: '10px',
        border: '1px solid #2e3035',
      }}
    >
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: '#c1c4d6' }}>Symbol</TableCell>
            <TableCell sx={{ color: '#c1c4d6' }}>Name</TableCell>
            <TableCell sx={{ color: '#c1c4d6' }} align="right">
              Price
            </TableCell>
            <TableCell sx={{ color: '#c1c4d6' }} align="right">
              Quantity
            </TableCell>
            <TableCell sx={{ color: '#c1c4d6' }} align="right">
              Change
            </TableCell>
            <TableCell sx={{ color: '#c1c4d6' }} align="right">
              Market Value
            </TableCell>
            <TableCell sx={{ color: '#c1c4d6' }} align="right">
              Total Cost
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {portfolioStore.filteredStocks.map((stock) => (
            <StockTableRow key={stock.symbol} stock={stock} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

export default StockTable;
