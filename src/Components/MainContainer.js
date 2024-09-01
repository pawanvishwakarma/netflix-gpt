import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'


const MainContainer = () => {

    const movieData = useSelector(store => store.movies?.nowPlayingMovies)
    if(!movieData) return;

    const mainMovie = movieData[0]
    const { original_title, overview, id } = mainMovie
  return (
    <div className=''>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer