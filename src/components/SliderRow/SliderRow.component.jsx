import React from 'react'
import MovieCard from './MovieCard'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Latest = (props) => {

  const [latest, setLatest] = useState([])


  useEffect(() => {
    const requestLatest = async () => {
        const getLatest = await axios.get(`${props.path}`);
        setLatest(getLatest.data.results);
        console.log(getLatest.data.results);
    }
    requestLatest();
    }, [])
    //fontSize:"21px"
  return (
    <div className='lg:pl-12 pl-3 pb-1 lg:pb-3 md:pl-2'>
        <h1 className="py-2 lg:py-4 font-medium md:text-lg lg:text-xl" style={{}}>{props.title}</h1>
        <div id="slider" className='flex gap-3' style={{overflowX: "scroll"}}>
            {latest.map((movie) => (
              <MovieCard movie={movie}/>   
            ))}
        </div>
    </div>
  )
}

export default Latest