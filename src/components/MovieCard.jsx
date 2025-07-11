import React from 'react'

function MovieCard({ movie }) {
  if(!movie || typeof movie !== 'object') return null;
  return (
    <div className='w-[250px] h-[100%] md:w-[300px] md:h-[450px] lg:w-[280px] lg:h-[450px] bg-black shadow-xl rounded-[10px] p-3 flex flex-col justify-between'>
      <div className='w-full h-[300px] rounded-[10px] overflow-hidden '>
        <img src={movie.Poster} alt="" className='h-[100%] w-[100%] '/>
      </div>
     <div className='flex flex-col gap-1'>
       <h1 className='text-[16px] text-white'> Movie: {movie.Title}</h1>
      <p className='text-[16px] text-white'>Year: {movie.Year}</p>
      <p className='text-[16px] text-white'>Type: {movie.Type}</p>
     </div>
    </div>
  )
}

export default MovieCard