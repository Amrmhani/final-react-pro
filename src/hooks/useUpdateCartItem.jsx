import React from 'react'
import authAxiosInstance from '../api/authAxiosInstance'

export default function useUpdateCartItem() {

    const updateCartItem = async({productId,count})=>{
     const response = await authAxiosInstance.patch(`Carts/${productId}`,{count})
       return response.data;
    }

  return (
    <div>
      
    </div>
  )
}
