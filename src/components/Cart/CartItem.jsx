import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

export default function CartItem({item}) {

  return (
    <Paper>
        <Box>
            <Typography>{item.productName}</Typography>
            <Typography>${item.price} each</Typography>
                      
        </Box>

        <Typography>Quantity: {item.quantity}</Typography>
        <Typography>Total: ${item.totalPrice}</Typography>

    </Paper>
  )
}
