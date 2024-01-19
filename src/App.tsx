import {Helmet} from 'react-helmet-async';
import {useTranslation} from 'react-i18next';
import {RouterProvider} from 'react-router-dom';
import {router} from './router';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {AppContextProvider} from './context';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const {i18n, t} = useTranslation();

  return (
    <>
      <Helmet
        titleTemplate={`%s - ${t('app.title')}`}
        defaultTitle={t('app.title')}
        htmlAttributes={{lang: i18n.language}}
      >
        <meta name="description" content={t('app.description')} />
      </Helmet>
      <QueryClientProvider client={queryClient}>
        <AppContextProvider>
          <RouterProvider router={router} />
        </AppContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
