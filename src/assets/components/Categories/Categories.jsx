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

    return (
        <div>
            <h2>Categories</h2>
            {categories.map((category) => (
                <p>{category.name}</p>
            ))}
        </div>

    )
}