import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { Home } from './pages/Home';
import { queryClient } from './services/queryClient';

import './styles/global.css';

const isDev = process.env.NODE_ENV === 'development';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
      {isDev && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
}
