import React from 'react'
import { IMG_POSTER_URL } from '../utils/contants'

const MovieCard = ({posterPath}) => {

    if(!posterPath) return null;

  return (
    <div  className="w-36 md:w-48 pr-4">
       <img alt='Movie Card' className='rounded-md' src={IMG_POSTER_URL + posterPath}  />
    </div>
  )
}

export default MovieCard