import React, { useState } from 'react';
import { Box, Divider } from '@mui/material';
import SidebarToggleButton from './SidebarToggleButton';
import SidebarLogo from './SidebarLogo';
import SidebarNavLinks from './SidebarNavLinks';
import SidebarActionLinks from './SidebarActionLinks';

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed((prev) => !prev);

  return (
    <Box
      sx={{
        width: collapsed ? 80 : 280,
        bgcolor: '#1C1E24',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
        color: '#FFFFFF',
        transition: 'width 0.3s',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Sidebar Toggle Button */}
      <SidebarToggleButton
        collapsed={collapsed}
        toggleSidebar={toggleSidebar}
      />

      {/* Sidebar Logo */}
      <SidebarLogo collapsed={collapsed} />

      {/* Navigation Links */}
      <SidebarNavLinks collapsed={collapsed} />

      {/* Divider */}
      <Divider sx={{ bgcolor: '#3c4753', marginBottom: 2 }} />

      {/* Action Links (Settings, Help, Logout) */}
      <SidebarActionLinks collapsed={collapsed} />
    </Box>
  );
};

export default Sidebar;
