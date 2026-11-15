import React from 'react'
import authAxiosInstance from '../api/authAxiosInstance';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useCleareItems() {

    const queryClient = useQueryClient();

    const clearCart = async () => {
    const response = await authAxiosInstance.delete("Carts");
    return response.data;
};
  return useMutation ({
    mutationFn:clearCart,
    onSuccess:()=>{
        queryClient.invalidateQueries({queryKey:['cart']})
    }
  }
   
  )
}
