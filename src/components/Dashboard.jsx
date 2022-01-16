import React, { useState, useEffect } from 'react'

import { omdbapi } from '../apis/omdb'
import Feed from './Feed'
import Header from './Header'
import Search from './Search'

const Dashboard = () => {
    const [page, setPage] = useState(1);
    const [searchMovie, setSearchMovie] = useState("Friends");
    const [movieResult, setMovieResult] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            setIsLoading(true)
            try {
                const response = await omdbapi({
                    s: searchMovie,
                    page
                });
                setMovieResult(response.data);
            } catch (error) { console.log(error) }
            finally { setIsLoading(false) }
        }
    
        fetchMovies();
    }, [page, searchMovie])

    return (
        <div className='flex flex-col min-h-screen text-white bg-slate-700'>
            <Header />
            <Search setSearchMovie={setSearchMovie} />
            <Feed movieResult={movieResult} isLoading={isLoading} page={page} setPage={setPage} />
        </div>
    )
}

export default Dashboard
