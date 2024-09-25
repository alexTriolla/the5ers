import React from 'react';
import { List } from '@mui/material';
import { Settings, HelpOutline, ExitToApp } from '@mui/icons-material';
import SidebarListItem from './SidebarListItem';

interface SidebarActionLinksProps {
  collapsed: boolean;
}

const SidebarActionLinks: React.FC<SidebarActionLinksProps> = ({
  collapsed,
}) => {
  return (
    <List>
      <SidebarListItem
        icon={<Settings />}
        label="Settings"
        to="/settings"
        collapsed={collapsed}
      />
      <SidebarListItem
        icon={<HelpOutline />}
        label="Help"
        to="/help"
        collapsed={collapsed}
      />
      <SidebarListItem
        icon={<ExitToApp />}
        label="Logout"
        to="/logout"
        collapsed={collapsed}
      />
    </List>
  );
};

export default SidebarActionLinks;
