import React from 'react'
import MovieCard from '../MovieCard'
import "./Latest.component.css"

const Latest = () => {
  return (
    <div className='pl-12'>
        <h1 className=" font-medium py-4" style={{fontSize:"21px"}}>Latest & Trending</h1>
        <div id="slider" className='flex gap-3' style={{overflowX: "scroll"}}>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            

        </div>
    </div>
  )
}

export default Latest