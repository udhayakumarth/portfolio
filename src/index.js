import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@mantine/core/styles.css';
import './font.css'
import { MantineProvider } from '@mantine/core';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider  theme={{
      fontFamily: 'Open Sans, sans-serif',
      fontFamilyMonospace: 'Inconsolata, Courier, monospace',
      headings: { fontFamily: 'Open Sans, sans-serif' },
    }} withGlobalStyles withNormalizeCSS defaultColorScheme="dark">
      <App />
    </MantineProvider>
  </React.StrictMode>
);
