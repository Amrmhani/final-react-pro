import react from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
}from '@tanstack/react-query'

const queryClient = new QueryClient()


export default function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>


    </>
  )
}
