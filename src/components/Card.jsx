import React from 'react'

const Card = ({movie}) => {

    return (
        <div>
            <div className="pb-4 m-4 space-y-2 w-60 shadow-xl cursor-pointer hover:scale-105">
                <img src={movie.Poster} alt={movie.Title} />
                <div className='flex flex-col px-2 space-y-2'>
                    <div className="overflow-hidden text-ellipsis whitespace-nowrap">{movie.Title}</div>
                    <div className='flex justify-between'><div>{movie.Year}</div><div className=' border-2 px-2 rounded-xl'>{movie.Type}</div></div>  
                </div>
            </div>
        </div>
    )
}

export default Card
