import { Alert } from "@mui/material";
import Categories from "../../components/Categories/Categories";
import Products from "../../components/Products/Products";
import { useAuthstore } from "../../store/useAuthStore";

export default function Home(){

    const token = useAuthstore((state)=>state.token)
    return(
    <>
    {token?<Alert severity="success">Welcome Back</Alert>:''}
    <Categories />
    <Products />
    
    
    </>
    )
}