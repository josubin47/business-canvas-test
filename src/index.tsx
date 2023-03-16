import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
  }
  #root {
    height: 100vh;
  }
`;

const root = createRoot(document.getElementById('root') as Element);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
