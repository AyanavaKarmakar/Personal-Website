import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { App } from './App';
import '../styles/main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <SnackbarProvider maxSnack={2}>
        <App />
      </SnackbarProvider>
    </HashRouter>
  </React.StrictMode>
);
