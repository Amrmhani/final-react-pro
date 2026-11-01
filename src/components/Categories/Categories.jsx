import { Box, Chip, CircularProgress, Typography } from "@mui/material";
import axios from "axios"
import react, { useEffect, useState } from "react"

export default function Categories() {

    const [categories, setCategories] = useState([]);
    const [isloading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const getCategories = async () => {

        try {
            const response = await axios.get(`https://knowledgeshop.runasp.net/api/Categories`
                , {
                    headers: {
                        "Accept-Language": "en"
                    }
                }
            );
            console.log(response.data.response.data);
            setCategories(response.data.response.data)
        }catch(err){
          setError("Failed to load categories")
        }finally{
         setIsLoading(false);
        }
        }

    useEffect(() => {
        getCategories();
    }, [])

    if(isloading) return <CircularProgress />
    if(error) return <CircularProgress />

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