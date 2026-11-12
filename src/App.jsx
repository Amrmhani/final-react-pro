import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import {
  QueryClient,
  QueryClientProvider,
}from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AuthProvider } from './context/AuthContext';

const queryClient = new QueryClient()


export default function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
<RouterProvider router={router} />
        </AuthProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>


    </>
  )
}
