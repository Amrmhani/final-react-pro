import React from 'react'
import authAxiosInstance from '../api/authAxiosInstance';

export default function useCleareItems() {

    const clearCart = async () => {
    const response = await authAxiosInstance.delete("Carts");
    return response.data;
};
  return (
    <div>
      
    </div>
  )
}
