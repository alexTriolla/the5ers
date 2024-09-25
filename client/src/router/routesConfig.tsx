import React, { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import {
  Home,
  HelpOutline,
  AccountBalanceWallet,
  Info,
  Settings,
  ExitToApp,
} from '@mui/icons-material';

// Lazy load the components
const DashboardPage = lazy(() => import('../pages/Dashboard/DashboardPage'));
const PortfolioPage = lazy(() => import('../pages/Portfolio/PortfolioPage')); 
const StockDetailsPage = lazy(() => import('../pages/Stock/StockPage'));
const SettingsPage = lazy(() => import('../pages/Settings'));
const LogoutPage = lazy(() => import('../pages/Logout'));
const HelpPage = lazy(() => import('../pages/Help'));

type CustomRoute = {
  path: string;
  element: React.ReactNode;
  label: string;
  icon: React.ReactNode;
};

const routesConfig: CustomRoute[] = [
  {
    path: '/',
    element: <DashboardPage />,
    label: 'Dashboard',
    icon: <Home />,
  },
  {
    path: '/portfolio',
    element: <PortfolioPage />,
    label: 'My Portfolio', 
    icon: <AccountBalanceWallet />,
  },
  {
    path: '/stock/:symbol', 
    element: <StockDetailsPage />,
    label: 'Stock Details',
    icon: <Info />, 
  },
  {
    path: '/help',
    element: <HelpPage />,
    label: 'Help',
    icon: <HelpOutline />,
  },
  {
    path: '/settings',
    element: <SettingsPage />,
    label: 'Settings',
    icon: <Settings />,
  },
  {
    path: '/logout',
    element: <LogoutPage />,
    label: 'Logout',
    icon: <ExitToApp />,
  },
];

// Convert routesConfig to react-router format
export const reactRouterConfig: RouteObject[] = routesConfig.map((route) => ({
  path: route.path,
  element: route.element,
}));

export default routesConfig;
