import ErrorBoundary from 'ErrorBoundary';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from 'contexts/AuthContext';
import App from './App';
import './index.css';

ReactDOM.render(
  <AuthProvider>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </AuthProvider>,
  document.getElementById('root'),
);
