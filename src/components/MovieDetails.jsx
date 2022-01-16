import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { omdbapi } from '../apis/omdb';
import { PageLoader } from '@bigbinary/neetoui/v2'
import Header from './Header';

const MovieDetails = () => {
    const [movie, setMovie] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    const MovieData = ['Director', 'Writer', 'Actors', 'Country', 'Language']

    useEffect(() => {
        const fetchDetails = async () => {
            setIsLoading(true);
            try {
                const response = await omdbapi({
                    i: id,
                    plot: 'full'
                })
                setMovie(response.data)
            }
            catch (error) { console.log(error) }
            finally { setIsLoading(false) }
        }
        fetchDetails();
    }, [id])

    if (isLoading)
        return (<div className='min-h-screen flex justify-center items-center bg-gray-700'><PageLoader color="white" /></div>)

    return (
        <div className='min-h-screen bg-gray-700 text-white'>
            <Header />
            <div className='flex flex-col p-4 space-y-2'>
                <div className='space-y-1'>
                    <div className=' text-4xl'>{movie.Title}</div>
                    <div>{movie.Year} • {movie.Rated} • {movie.Runtime} </div>
                </div>
                <div className='sm:flex-row flex-col flex '>
                    <img src={movie?.Poster} alt={movie?.Title} className=' self-start pr-2 pb-2' />
                    <div className='space-y-3'>
                        <div>
                            {movie.Plot}
                        </div>
                        <div className='space-x-2'>
                            {movie.Genre.split(', ').map((item, index) => (
                                <span key={index} className='border-2 rounded-xl px-1.5 pb-0.5'>{item}</span>
                            ))}
                        </div>
                        {
                            MovieData.map((item, index) => (
                                <div>
                                    <span key={index} className='font-bold'>{item}</span> : <span className='font-semibold text-blue-500'>{movie[item]}</span>
                                </div>
                            ))
                        }
                        <div className='font-semibold '>
                            IMDb {movie.imdbRating}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails
