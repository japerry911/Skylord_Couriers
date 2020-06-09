import React from 'react';
import Routes from './router/routes';
import { ThemeProvider } from '@material-ui/styles';
import theme from './misc/theme';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
