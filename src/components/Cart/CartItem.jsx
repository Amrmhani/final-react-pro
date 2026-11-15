import { Box, IconButton, Paper, Typography ,RemoveIcon } from '@mui/material'
import React from 'react'

export default function CartItem({item}) {
    const {mutate:updateCartItem , isPending} = updateCartItem;

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
        <Box sx={{display:'flex' , alignItems:'center' , border:1, borderColor:'gray.400' , borderRadius:1 , p:1}}>
            <IconButton onClick={handelDecrease} disabled={isPending || item.count == 1}>
            <RemoveIcon sx={{ fontsize:'small'}}/>
        </IconButton>
        </Box>

        <Typography>Quantity: {item.count}</Typography>
        <Typography>Total: ${item.totalPrice}</Typography>

    </Paper>
  )
}
