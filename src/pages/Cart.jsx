import React from 'react'
import useCart from '../hooks/useCart'
import { useAuthstore } from '../store/useAuthStore'
import { Box, Button, CircularProgress, Typography } from '@mui/material';
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
        <Button Com={Link} to="/login">login</Button>
    </Box>
  )
  }

  if(isPending){
    <CircularProgress />
  }

  
}
