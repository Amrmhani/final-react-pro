import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./assets/Home/Home";
import AuthLayout from "./Layout/AuthLayout";
import Login from "./assets/LogIn/Login";
import Register from "./assets/Register/Register";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        children:[
            {
                index:true,element:<Home />
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
