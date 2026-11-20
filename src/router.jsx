import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./assets/Home/Home";
import AuthLayout from "./Layout/AuthLayout";
import Login from "./assets/LogIn/Login";
import Register from "./assets/Register/Register";
import ProductsDetails from "./pages/ProductsDetails";
import Cart from "./pages/Cart";
import SendCode from "./assets/SendCode/SendCode";
import ResetPassword from "./assets/ResetPassword/ResetPassword";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        children:[
            {
                index:true,element:<Home />
            },
            {
                path:'products/:id',element:<ProductsDetails />
            },
            {
                path:'cart',element:<Cart />
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
    },
    {
        path:'/send-code',element:<SendCode />
    },
    {
        path:'/reset-password',element:<ResetPassword />
    }
]
}
])


export default router;
