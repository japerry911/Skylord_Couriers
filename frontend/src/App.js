import React from 'react';
import Routes from './router/routes';
import { ThemeProvider } from '@material-ui/styles';
import theme from './misc/theme';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ToastBar from './components/ToastBar/ToastBar';
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
        <ToastBar />
        <footer>
          <Footer />
        </footer>
      </ThemeProvider>
    </div>
  );
}

export default App;
