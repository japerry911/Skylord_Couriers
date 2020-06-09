import React from 'react';
import Routes from './router/routes';
import { ThemeProvider } from '@material-ui/styles';
import theme from './misc/theme';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
