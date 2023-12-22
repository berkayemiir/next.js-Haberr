import React from 'react'
import "./globals.css"
import Header from './components/Header'
import Providers from './providers'
import Footer from './components/Footer'
import Tabs from "./components/Tabs"

const Layout = ({ children }) => {
    return (
        <html lang='en'>
            <body className="bg-cover bg-center h-screen">
                <Providers>
                    <Header />
                    <Tabs />
                        {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    )
}

export default Layout
