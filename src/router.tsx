import {createBrowserRouter, Navigate, Outlet} from 'react-router-dom';
import {Home, Styles, Login} from './pages';

import {LOGIN_ROUTE, STYLES_ROUTE} from './constants/routes';

const ProtectedRoutes = () => {
  // TODO: Use authentication token
  const localStorageToken = localStorage.getItem('token');

  return localStorageToken ? <Outlet /> : <Navigate to={`/${LOGIN_ROUTE}`} replace />;
};

export const router = createBrowserRouter([
  {
    element: <Login />,
    path: `/${LOGIN_ROUTE}`,
  },
  {
    element: <Styles />,
    path: `/${STYLES_ROUTE}`,
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);
