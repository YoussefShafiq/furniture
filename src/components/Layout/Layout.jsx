import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
    return <>
        <div className='max-w-screen-2xl m-auto'>
            <Navbar />
            <Outlet></Outlet>
            <Footer />
        </div>
    </>
}
