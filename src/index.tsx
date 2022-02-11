import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

const client = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={client}>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </QueryClientProvider>,
  document.getElementById('root')
);
