import React from 'react';
import { ListItem, ListItemIcon, ListItemText, SxProps } from '@mui/material';
import { Link } from 'react-router-dom';

interface SidebarListItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  collapsed: boolean;
}

const SidebarListItem: React.FC<SidebarListItemProps> = ({
  icon,
  label,
  to,
  collapsed,
}) => {
  return (
    <ListItem
      component={Link}
      to={to}
      sx={{
        marginBottom: 1,
        borderRadius: 2,
        '&:hover': {
          backgroundColor: '#293038',
        },
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: collapsed ? 'center' : 'flex-start',
        paddingLeft: collapsed ? 0 : 2, 
        paddingRight: collapsed ? 0 : 2,
      }}
    >
      <ListItemIcon
        sx={{
          color: '#FFFFFF',
          minWidth: collapsed ? 'auto' : 40, 
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {icon}
      </ListItemIcon>
      {!collapsed && (
        <ListItemText
          primary={label}
          primaryTypographyProps={{
            variant: 'body1',
            fontWeight: 600,
            color: '#FFFFFF',
          }}
        />
      )}
    </ListItem>
  );
};

export default SidebarListItem;
