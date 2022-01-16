import React, { useState, useEffect } from 'react'

import { omdbapi } from '../apis/omdb'
import Feed from './Feed'
import Header from './Header'
import Search from './Search'

const Dashboard = () => {
    const [page, setPage] = useState(1);
    const [searchMovie, setSearchMovie] = useState("Friends");
    const [movieResult, setMovieResult] = useState();
    const [loading, setloading] = useState(true);

    const fetchMovies = async () => {
        setloading(true)
        try {
            const response = await omdbapi({
                s: searchMovie,
                page
            });
            setMovieResult(response.data);
            setloading(false)
        } catch (error) { console.log(error) }
    }

    useEffect(() => {
        fetchMovies();
    }, [page, searchMovie])

    return (
        <div className='flex flex-col min-h-screen text-white bg-slate-700'>
            <Header />
            <Search setSearchMovie={setSearchMovie} />
            <Feed movieResult={movieResult} loading={loading} page={page} setPage={setPage} />
        </div>
    )
}

export default Dashboard
