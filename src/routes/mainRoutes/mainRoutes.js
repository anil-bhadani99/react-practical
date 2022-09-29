import { lazy } from 'react';

export const guestRoutes = [
  {
    path: '/',
    name: 'Login',
    exact: true,
    component: lazy(() => import('../../views/auth/Login'))
  },
  {
    redirectRoute: true,
    name: 'Login',
    path: '/'
  }
];

export const userRoutes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: lazy(() => import('../../views/user/home/Home'))
  },
  {
    redirectRoute: true,
    name: 'Home',
    path: '/'
  }
];
