import {  createBrowserRouter } from "react-router-dom";
import Layout3 from "../Outlet/Layout3";
import HOme from '../Component/HOme'
import Booking from "../Component/Booking/Booking";
import Contact from "../Component/Contact/Contact";
import About from "../Component/About/About";


export const route = createBrowserRouter([
    {
        path: '/',
        element: <Layout3/> ,
        children: [
            {
                path: '/',
               element: <HOme/>
            },
            {
                path: '/booking',
                element: <Booking/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/about', 
                element: <About/>
            }
        ]
    }
])