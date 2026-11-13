import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  CircularProgress,
  Divider,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import UseProduct from "../hooks/UseProduct";
import ReviewItem from "../components/Products/ReviewItem";
import { useAuthstore } from "../store/useAuthStore";
import useAddToCart from "../hooks/useAddToCart";


export default function ProductDetails() {
const token = useAuthstore((state)=>state.token)
const navigate = useNavigate();
 const {id} = useParams();
 const {mutate:addToCart,isPending:addToCartPending} = useAddToCart();
  const { data, isPending, isError } = UseProduct(id);

  if (isPending) return <CircularProgress />;
  if (isError) return <Alert severity="error">Failed to load product details.</Alert>;

  const inStock = data.quantity > 0;

  const handelAddToCart = ()=>{
    if(!token){
      navigate('/login')
      return;
    }
    addToCart(data.id,{
      onsuccess:()=>{
        console.log("added To Cart")
      },onError:(error)=>{
        console.log(error)
      }
    });
  }

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 4,
        }}
      >
        <Card>
          <CardMedia
            component="img"
            image={data.image}
            sx={{ maxHeight: 400, objectFit: "contain" }}
          />
          <CardContent></CardContent>
        </Card>

        <Box>
          <Typography>{data.name}</Typography>

          <Rating value={data.rate} readOnly />

          <Typography variant="h4" color="primary">
            ${data.price}
          </Typography>

          <Chip
            label={inStock ? "In Stock" : "Out Of Stock"}
            color={inStock ? "success" : "error"}
          />

          <Typography>{data.description}</Typography>

          <Button variant="contained" disabled={!inStock} onClick={addToCart(handelAddToCart)}>
            Add To Cart
          </Button>
        </Box>
      </Box>

      <Divider sx={{ mt: 3, mb: 3, borderBottomWidth: 3 }} />

      {data.reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </>
  );
}
