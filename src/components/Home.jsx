import React from 'react'
import Hero from './Hero/Hero'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Timeline from './Timeline/Timeline'


function Home() {
    return (
        <div>
            <Hero />
            {/* <Footer /> */}
            <Timeline />
            <Footer />
            {/* <div className="container mx-auto">

            </div> */}
        </div>
    )
}

export default Home
