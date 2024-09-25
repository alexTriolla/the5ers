import React from 'react';
import { List } from '@mui/material';
import routesConfig from '../../router/routesConfig';
import SidebarListItem from './SidebarListItem';

interface SidebarNavLinksProps {
  collapsed: boolean;
}

const SidebarNavLinks: React.FC<SidebarNavLinksProps> = ({ collapsed }) => {
  return (
    <List sx={{ flexGrow: 1 }}>
      {routesConfig.map(
        (route) =>
          route.path !== '/settings' &&
          route.path !== '/logout' &&
          route.path !== '/help' &&
          route.path !== '/stock/:symbol'  && (
            <SidebarListItem
              key={route.path}
              icon={route.icon}
              label={route.label}
              to={route.path || '/'}
              collapsed={collapsed}
            />
          )
      )}
    </List>
  );
};

export default SidebarNavLinks;
