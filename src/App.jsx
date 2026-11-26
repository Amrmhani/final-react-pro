import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { CssBaseline, ThemeProvider } from '@mui/material';

const queryClient = new QueryClient();
const theme = getTheme('light');

export default function App() {

  return (
    <>
      <ThemeProvider theme = {theme}>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>

    </>
  )
}
