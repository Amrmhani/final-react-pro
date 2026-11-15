import React from 'react'
import authAxiosInstance from '../api/authAxiosInstance'

export default function useRemoveItemCart() {

    const removeItemCart = async(productId)=>{
        const response = await authAxiosInstance.delete(`carts/${productId}`)
        return response.data;
    }
  return (
    <div>
      
    </div>
  )
}
