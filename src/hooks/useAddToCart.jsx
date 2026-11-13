import React from 'react'
import { useAuthstore } from '../store/useAuthStore'
import { useMutation } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstance';

export default function useAddToCart() {
  const token = useAuthstore((state)=>state.token);
const addToCart = async(productId)=>{
  const response = await authAxiosInstance.post(`Carts`,{productId:productId,Count:1});
  return response.data;
}

  return useMutation({
    mutationFn: addToCart,
  });
}
