import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from '@routes/AppRouter';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/global.css';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
