import React from 'react';
import { Box, IconButton } from '@mui/material';
import {
  Menu as MenuIcon,
  ChevronRight,
  ChevronLeft,
} from '@mui/icons-material';

interface SidebarToggleButtonProps {
  collapsed: boolean;
  toggleSidebar: () => void;
}

const SidebarToggleButton: React.FC<SidebarToggleButtonProps> = ({
  collapsed,
  toggleSidebar,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 0,
        position: 'absolute',
        top: 35,
        right: -15,
        backgroundColor: '#2E3A45',
        borderRadius: '50%',
        zIndex: 1000,
        overflow: 'visible',
        transition: 'right 0.3s ease-in-out',
        '&:hover': {
          backgroundColor: '#3A4B5C',
        },
      }}
    >
      <IconButton
        onClick={toggleSidebar}
        sx={{
          color: '#FFFFFF',
          padding: 0.4,
        }}
      >
        {collapsed ? <ChevronRight /> : <ChevronLeft />}
      </IconButton>
    </Box>
  );
};

export default SidebarToggleButton;
