import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, popularMovies}) => {
  return (
    <div className='px-6'>
        <h1 className='text-lg md:text-3xl py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
         <div className='flex'>
            {popularMovies && popularMovies.map((movies)=>(
               <MovieCard key={movies.id} posterPath={movies.poster_path} />
            ))}
         </div>
        </div>
    </div>
  )
}

export default MovieList