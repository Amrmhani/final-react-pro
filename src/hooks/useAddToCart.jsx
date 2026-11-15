import React from 'react'
import { useAuthstore } from '../store/useAuthStore'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstance';

export default function useAddToCart() {
const queryClient = useQueryClient();
const addToCart = async(productId)=>{
  const response = await authAxiosInstance.post(`Carts`,{productId:productId,Count:1});
  return response.data;
}

  return useMutation({
    mutationFn: addToCart,
    onSuccess:()=>{
     queryClient.invalidateQueries({queryKey:['cart']});
    }
  });
}
