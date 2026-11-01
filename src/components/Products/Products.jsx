import React from "react";
import {
  Alert,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useProducts } from "../../hooks/UseProducts";
import ProductCard from "./ProductCard";


export default function Products(){
      const { data, isPending, isError } = useProducts();
      if (isPending) {
    return <CircularProgress />;
  }

  if (isError) {
    return (
      <Alert severity="error">
        Failed to load Products.
      </Alert>
    );
  }
    
    return(
<Box>
      <Typography
        variant="h5"
        component="h2"
        sx={{ mb: 2 }}
      >
        Products
      </Typography>

      <Box sx={{ display: "grid", gap: 2,
        gridTemplateColumns:{
            xs:"repeat(2,1fr)",
            sm:"repeat(3,1fr)",
            md:"repeat(4,1fr)",
        

        }
       }}>
        {data?.map((product) => (
            <ProductCard product={product} key={product.id}/>
        ))}
      </Box>
    </Box>   
)
}