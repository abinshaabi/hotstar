import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';

const HeroCard = (props) => {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    const requestGenre = async () => {
      const  movieDetails = await axios.get(`/movie/${props.movie.id}`);
      setGenres(movieDetails.data.genres)
      
  }
  requestGenre(); 
  }, [])
  //console.log("genres", {genres});
  let date = props.movie.release_date.substr(0,4)
  return (
    <div style={{height: "400px", backgroundColor: '#030b16'}} className='w-full flex mx-auto rounded-lg'>
        <div className='w-2/5 pl-14 pt-20 '>
            <h1 className='text-3xl font-bold text-white'>{props.movie.original_title}</h1>
            <h3 className='font-medium text-lg text-gray-400 my-2'>English &bull;   &bull; {date}</h3>
            <h2 className='font-medium text-md text-gray-100 pr-5'>
              {props.movie.overview.substring(0,120)}&nbsp;....
            </h2>
        </div>
        <div className='w-8/12 h-full object-cover  '>
            {/*<div className='absolute opacity-80 bg-black h-full w-5' style={{transform: "rotate(180deg)" , backgroundImage: "linear-gradient(90deg, rgb(3, 11, 22) 24.97%, rgb(3, 11, 22) 38.3%, rgba(3, 11, 22, 0.04) 97.47%, rgb(3, 11, 22) 100%"}} /> */}
            
            <img className='w-full h-full object-cove rounded-r-lg' src={`https://image.tmdb.org/t/p/original${props.movie.backdrop_path}`} alt="" />
        
        </div>
    </div>
  )
}

export default HeroCard