import { Alert, Box, Chip, CircularProgress, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import react, { useEffect, useState } from "react"

export default function Categories() {

   const getCategories = async()=>{
    const response = await axios.get('https://knowledgeshop.runasp.net/api/Categories',
        {headers:{'Accept-Language':"en"}})
    console.log(response.data.response.data)
    return response.data.response.data
   }
   const[data,isLoading,isError] = useQuery({
    queryKey:["Categories"],
    queryFn:getCategories,
    staleTime:1000 * 60 * 60 * 24 * 3
   });
 if(isLoading) return <CircularProgress />
 if (isError) return <Alert severity="error">{error}.</Alert>
    return (
        <Box>
            <Typography variant="h5" component={'h2'} sx={{mb:2}}>Categories</Typography>
            <Box sx={{display:"flex" ,gap:1,flexWrap:'wrap'}}>
                {categories.map((category) => (
                
                <Chip label={category.name} clickable/>
            ))}
            </Box>
            
        </Box>

    )
}