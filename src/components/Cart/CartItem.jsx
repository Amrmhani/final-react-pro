import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

export default function CartItem({item}) {
    const {mutate:updateCartItem , iPending} = updateCartItem;

    const handelIncrease = ()=>{
        updateCartItem({productId:item.productId , count: item.count + 1})
    }
    const handelDecrease = ()=>{
        updateCartItem({productId:item.productId , count: item.count - 1})
    }

  return (
    <Paper sx={{p:2 , mb:3 , display:'flex' , justifyContent:'space-between' , alignItems:'center' , }}>
        <Box>
            <Typography>{item.productName}</Typography>
            <Typography>${item.price} each</Typography>
                      
        </Box>

        <Typography>Quantity: {item.count}</Typography>
        <Typography>Total: ${item.totalPrice}</Typography>

    </Paper>
  )
}
