import { Box, IconButton, Paper, Typography} from '@mui/material'
import React from 'react'
import useUpdateCartItem from '../../hooks/useUpdateCartItem';
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import useRemoveItemCart from '../../hooks/useRemoveItemCart';



export default function CartItem({item}) {
    const {mutate:updateCartItem , isPending} = useUpdateCartItem();
    const {mutate:removeCartItem,isPending:isRemovePending} = useRemoveItemCart();

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
                <Typography>Quantity: {item.count}</Typography>
                    <IconButton onClick={handelIncrease} disable={isPending}>
                      <AddIcon sx={{fontsize:'small'}} />
                    </IconButton>
        </Box>

        <Typography>Total: ${item.totalPrice}</Typography>

    </Paper>
  )
}
