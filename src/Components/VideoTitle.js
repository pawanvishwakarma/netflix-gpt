import React from 'react'

const VideoTitle = ({title, overview}) => {

    
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white'>
        <h1 className='font-bold md:text-6xl text-3xl'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
        <div className='py-4'>
            <button className='w-[100px] h-[35px] bg-slate-400 rounded-sm'>▶ Play</button>
            <button className='w-[100px] h-[35px] bg-slate-400 rounded-sm mx-2'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle