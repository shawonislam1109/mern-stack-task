import {  createBrowserRouter } from "react-router-dom";
import Layout3 from "../Outlet/Layout3";
import HOme from '../Component/HOme'
import Booking from "../Component/Booking/Booking";
import Contact from "../Component/Contact/Contact";
import About from "../Component/About/About";
import Barger from "../Catagory/Barger";
import Breads from "../Catagory/Breads";
import Icccream from "../Catagory/IccCream";
import Pizza from "../Catagory/Pizza";
import Sandwich from "../Catagory/Sandwich";
import Chicken from "../Catagory/Chicken";


export const route = createBrowserRouter([
    {
        path: '/',
        element: <Layout3/> ,
        children: [
            {
                path: '/',
               element: <HOme/>,
               children: [
                {
                    path: '/',
                    element: <Barger/>
                },
                {
                    path: '/breads',
                    element: <Breads/>
                },
                {
                    path: '/icccream',
                   element: <Icccream/>
                },
                {
                    path: '/pizza',
                    element: <Pizza/>
                },
                {
                    path: '/sandwich',
                    element: <Sandwich/>
                },
                {
                    path: '/chicken',
                    element: <Chicken/>
                }
               ]
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