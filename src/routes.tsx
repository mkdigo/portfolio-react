import { createBrowserRouter } from 'react-router-dom';

import { Home } from './pages/Home';
import { BusinessCard } from './pages/BusinessCard';
import { NotFound } from './pages/NotFound';
import { Resume } from './pages/Resume';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/card',
    element: <BusinessCard />,
  },
  {
    path: '/resume',
    element: <Resume />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
