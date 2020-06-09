import React from 'react';
import Routes from './router/routes';
import { ThemeProvider } from '@material-ui/styles';
import theme from './misc/theme';
import NavBar from './components/NavBar/NavBar';
import './index.css';

function App() {
  return (
    <div className='app'>
      <ThemeProvider theme={theme}>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes />
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
