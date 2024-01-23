import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  PropsWithChildren,
  useEffect,
} from 'react';
import {IUser} from '../@types/api';
import useAuth from './api/query/useAuth';
import {Flex, Spinner} from '@chakra-ui/react';

interface AppState {
  actions: {
    setUser: (user: IUser | null) => void;
    setIsAppLoaded: (isAppLoaded: boolean) => void;
  };
  state: {
    user: IUser | null;
    isAppLoaded: boolean;
  };
}

const AppContext = createContext<AppState | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }

  return context;
};

export const AppContextProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isAppLoaded, setIsAppLoaded] = useState<boolean>(false);

  const {data, isLoading, isError} = useAuth();

  useEffect(() => {
    if (!isLoading && data) {
      setUser(data);
      setIsAppLoaded(true);
    } else if (!isLoading && !!!data) {
      setIsAppLoaded(true);
    } else if (isError) {
      setIsAppLoaded(true);
    }
  }, [isLoading, data, isError]);

  const appContextValue = useMemo(
    () => ({
      actions: {setUser, setIsAppLoaded},
      state: {user, isAppLoaded},
    }),
    [user, setUser]
  );

  if (!isAppLoaded)
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
      </Flex>
    );

  return <AppContext.Provider value={appContextValue}>{children}</AppContext.Provider>;
};
