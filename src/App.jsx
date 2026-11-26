import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import CssBaseline  from '@mui/material/CssBaseline';
import { getTheme } from './theme';
import { useThemeStore } from './store/themeStore';
import { ThemeProvider } from '@mui/material/styles';

const queryClient = new QueryClient();

export default function App() {
const mode = useThemeStore((state)=>state.mode);
const theme = getTheme(mode);
console.log(`mode :${mode}`);

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
