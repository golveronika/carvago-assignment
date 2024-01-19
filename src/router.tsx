import {createBrowserRouter, Navigate, Outlet} from 'react-router-dom';
import {Home, Styles, Login} from './pages';
import {LOGIN_ROUTE, STYLES_ROUTE} from './constants/routes';
import {useAppContext} from './context';
import {Flex, Spinner} from '@chakra-ui/react';

const ProtectedRoutes = () => {
  const {state} = useAppContext();

  if (!state.isAppLoaded)
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
      </Flex>
    );

  return state.user ? <Outlet /> : <Navigate to={`/${LOGIN_ROUTE}`} replace />;
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
