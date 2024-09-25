import React from 'react';
import { Box, Typography } from '@mui/material';
import logo from '../../assets/logo.jpg';

interface SidebarLogoProps {
  collapsed: boolean;
}

const SidebarLogo: React.FC<SidebarLogoProps> = ({ collapsed }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: collapsed ? 'center' : 'flex-start',
        p: 2,
        mb: 2,
      }}
    >
      <img
        src={logo}
        alt="logo"
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          marginRight: collapsed ? 0 : 16,
        }}
      />
      {!collapsed && (
        <Typography variant="h6" sx={{ color: '#FFFFFF' }}>
          Stock Management
        </Typography>
      )}
    </Box>
  );
};

export default SidebarLogo;
