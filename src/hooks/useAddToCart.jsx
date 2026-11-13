import React from 'react'
import { useAuthstore } from '../store/useAuthStore'

export default function useAddToCart() {
  const token = useAuthstore((state)=>state.token);
  return (
    <div>
      
    </div>
  )
}
