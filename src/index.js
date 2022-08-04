import React from 'react';
import { createRoot } from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './demo';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StyledEngineProvider injectFirst>
    <Demo />
  </StyledEngineProvider>
);
