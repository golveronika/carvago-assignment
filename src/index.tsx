import {ChakraProvider} from '@chakra-ui/react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {HelmetProvider} from 'react-helmet-async';
import App from './App';
import GlobalStyles from './GlobalStyles';
import WebVitals from './WebVitals';
import './i18n/i18n';
import theme from './theme';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {AppContextProvider} from './context';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const MOUNT_NODE = document.getElementById('root');

if (MOUNT_NODE) {
  const root = createRoot(MOUNT_NODE);

  root.render(
    <StrictMode>
      <ChakraProvider theme={theme} resetCSS>
        <QueryClientProvider client={queryClient}>
          <AppContextProvider>
            <HelmetProvider>
              <App />
              <GlobalStyles />
              <WebVitals showStatusInConsoleLog />
            </HelmetProvider>
          </AppContextProvider>
        </QueryClientProvider>
      </ChakraProvider>
    </StrictMode>
  );
}
