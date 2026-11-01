import axios from "axios"
import react, { useEffect, useState } from "react"

export default function Categories(){
    
    const [categories , setCategories]=useState([]);

    const getCategories = async ()=>{
        const response = await axios.get(`https://knowledgeshop.runasp.net/api/Categories`
        ,{headers:{
            "Accept-Language":"en"
        }}
        );
         console.log(response.data.response.data);
    }
    useEffect(()=>{
        getCategories();
    }, [])
    
    return(
        <div>Categories</div>
)
}