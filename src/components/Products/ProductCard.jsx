import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function ProductCard({product}){
    return(
        <Card>
                <CardActionArea component={Link} to={`/Products/${product.id}`}>
                    <CardMedia
                    sx={{width:200,height:250}}
                    component={'img'}
                    image={product.image}
                    alt={product.name}/>
                    <CardContent>
                        <Typography>{product.name}</Typography>
                        <Rating value={product.Rating}></Rating>
                        <Typography variant="h6" color="primary">
                            ${product.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
    )
}