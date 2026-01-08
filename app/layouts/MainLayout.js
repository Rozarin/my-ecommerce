"use client"

import Header from "./includes/Header"
import Footer from "./includes/Footer"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MainLayout({ children }) {
    return(
        <>
            <div id="MainLayout" className="relative">
                <Header />
                <div className="max-w-[1200px] mx-auto">
                    
                    {children}
                    
                </div>
                <Footer />
                <ToastContainer position="top-right" autoClose={2000} />
            </div>
        </>
    )
} 