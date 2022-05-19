import React from 'react'
import "./SliderRow.css"

const MovieCard = (props) => {
  return (
    <div>
        <div className='moviecard rounded  '>{/*transform transition duration-700 hover:scale-110 */}
            <img className='w-full h-full rounded' src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`} alt="movie image" />
        </div>
    </div>
  )
}

export default MovieCard