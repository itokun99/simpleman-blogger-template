import '@src/index.css';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { QueryClientProvider } from '@tanstack/react-query';
import { appRouter } from '@routes';
import { queryClient } from '@core';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <IconContext.Provider value={{ color: '#ddd', className: 'a-icon' }}>
            <RouterProvider router={appRouter} />
          </IconContext.Provider>
        </HelmetProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}

export default App;
