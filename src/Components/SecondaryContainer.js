import React from 'react'
import usePopularMovies from '../hooks/usePopularMovies';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const SecondaryContainer = () => {

  const movies = useSelector((store)=> store.movies)
  console.log("Popular",movies)

  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className='bg-black'>
      <div className='mt-0 md:-mt-52 pl-4 md:pl-6 relative z-20'>
         <MovieList title={"Popular Movies"} popularMovies={movies.popularMovies}/>
         <MovieList title={"Top Rated Movies"} popularMovies={movies.topRatedMovies}/>
         <MovieList title={"Up Coming Movies"} popularMovies={movies.upcommingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer