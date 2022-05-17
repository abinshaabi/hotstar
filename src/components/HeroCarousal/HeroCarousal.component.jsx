import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import HeroCard from './HeroCard.component'
import "./index.css"
import Slider from './slider'


const HeroCarousal = () => {
  const [heroMovies, setHeroMovies] = useState([])


  useEffect(() => {
    const requestHeroMovies = async () => {
        const getMovies = await axios.get("/movie/now_playing");
        setHeroMovies(getMovies.data.results);
    }
    requestHeroMovies();
    }, [])
  
  return (<>
    <Slider  movies={heroMovies} />
  </>)
}

export default HeroCarousal