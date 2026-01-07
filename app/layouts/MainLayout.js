"use client"

import Header from "./includes/Header"
import Footer from "./includes/Footer"

export default function MainLayout({ children }) {
    return(
        <>
            <div id="MainLayout" className="relative min-w-screen h-screen">
                <Header />
                <div className="max-w-[1200px] mx-auto">
                    
                    {children}
                    
                </div>
                <Footer />
            </div>
        </>
    )
} 