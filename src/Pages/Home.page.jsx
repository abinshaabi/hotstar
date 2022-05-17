import React from 'react'
import HeroCarousal from '../components/HeroCarousal/HeroCarousal.component'
import Latest from '../components/Sliders/Latest/Latest.component'

const HomePage = () => {
    return (
        <>
            <div className=' flex-col gap-10 pl-'>
                <HeroCarousal/>
                <Latest/>
                
            </div>
        </>
    )
}

export default HomePage
