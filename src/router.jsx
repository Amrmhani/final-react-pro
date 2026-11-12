import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./assets/Home/Home";
import AuthLayout from "./Layout/AuthLayout";
import Login from "./assets/LogIn/Login";
import Register from "./assets/Register/Register";
import ProductsDetails from "./pages/ProductsDetails";
import { AuthProvider } from "./context/AuthContext";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        children:[
            {
                index:true,element:
                <AuthProvider>
                 <Home />
                </AuthProvider>
                
            },
            {
                path:'products/:id',element:<ProductsDetails />
            }
        ]
    },
{
    element:<AuthLayout/>,
    children:[
    {
    path:'/login',element:<Login />
    },
        {
     path:'/register',element: <Register />
    }
]
}
])


export default router;
