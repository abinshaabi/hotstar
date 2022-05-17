import React from 'react'

const MovieCard = (props) => {
  return (
    <div>
        <div style={{width: "147px", height:"200px"}} className=' rounded  '>{/*transform transition duration-700 hover:scale-110 */}
            <img className='w-full h-full rounded' src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`} alt="movie image" />
        </div>
    </div>
  )
}

export default MovieCard