import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'

function Home() {
    return (
        <div className="home">
            <Announcement/>
            <Navbar/>
            <Slider/>
        </div>
    )
}

export default Home
