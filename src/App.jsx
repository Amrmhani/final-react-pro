import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { getTheme } from './theme';

const queryClient = new QueryClient();
const theme = getTheme('dark');

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
