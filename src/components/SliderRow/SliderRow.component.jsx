import React from 'react'
import MovieCard from './MovieCard'
import "./SliderRow.component.css"
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
  
  return (
    <div className='pl-12'>
        <h1 className=" font-medium py-4" style={{fontSize:"21px"}}>{props.title}</h1>
        <div id="slider" className='flex gap-3' style={{overflowX: "scroll"}}>
            {latest.map((movie) => (
              <MovieCard movie={movie}/>   
            ))}
        </div>
    </div>
  )
}

export default Latest