import React from 'react'
import useCart from '../hooks/useCart'
import { useAuthstore } from '../store/useAuthStore'
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Cart() {
    const token = useAuthstore((state)=>state.token);
    const {data , isPending , isError} = useCart();

  if(!token){
    return (
    <Box>
        <Typography>
            Please login to view your cart
        </Typography>
        <Button component={Link} to="/login"></Button>
    </Box>
  )
  }
}
