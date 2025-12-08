import Footer from '@/components/shared/Footer/Footer'
import Navbar from '@/components/shared/Navbar/Navbar'
import React from 'react'

const WebsiteLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=''>
            <Navbar />
            <main className="min-h-screen">

                {children}
            </main>
            <Footer />
        </div>
    )
}

export default WebsiteLayout