import react, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function MainLayout(){
    const [token , setToken] = useState(localStorage.getItem('token'))
    return(
        <>
        <Navbar token={token} setToken={setToken} />
        <Outlet />
        <Footer />
        </>
        
    )
}