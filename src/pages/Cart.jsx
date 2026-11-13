import React from 'react'
import useCart from '../hooks/useCart'
import { useAuthstore } from '../store/useAuthStore'

export default function Cart() {
    const token = useAuthstore((state)=>state.token);
    const {data , isPending , isError} = useCart();

  return (
    <div>
      
    </div>
  )
}
