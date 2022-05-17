import React from 'react'
import HeroCarousal from '../components/HeroCarousal/HeroCarousal.component'
import SliderRow from '../components/SliderRow/SliderRow.component'

const HomePage = () => {
    return (
        <>
            <div className=' flex-col gap-10 pl-'>
                <HeroCarousal/>
                <SliderRow title="Latest & Trending" path="trending/movie/day"/>
                <SliderRow title="Popular Movies" path="/movie/popular"/>
                <SliderRow title="Upcoming Movies" path="/movie/upcoming"/>
                <SliderRow title="Top Rated" path="/movie/top_rated"/>
                
            </div>
        </>
    )
}

export default HomePage
