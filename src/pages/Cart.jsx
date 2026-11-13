import React from 'react'
import useCart from '../hooks/useCart'
import { useAuthstore } from '../store/useAuthStore'
import { Alert, Box, Button, CircularProgress, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import CartItem from '../components/Cart/CartItem';
import CartSummary from '../components/Cart/CartSummary';

export default function Cart() {
    const token = useAuthstore((state)=>state.token);
    const {data , isPending , isError} = useCart();

  if(!token){
    return (
    <Box>
        <Typography>
            Please login to view your cart
        </Typography>
        <Button component={Link} to="/login">login</Button>
    </Box>
  )
  }

  if(isPending){
    <CircularProgress />
  }
  
  if(isError){
    return <Alert severity="error">Faild to load cart items</Alert>
  }

  return(
    <Box sx={{
        display:'grid',gridTemplateColumns:{xs:'1fr',md:'2fr 1fr'}
    }}>
        <Box>
    {data?.item?.map((item) => (
        <CartItem key={item.id} item={item} />
    ))}
</Box>

       <Box>
        <CartSummary />
       </Box>
    </Box>
  )
}
