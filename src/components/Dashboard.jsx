import React,{useState,useEffect} from 'react'

import { omdbapi } from './apis/omdb'
import Feed from './Feed'
import Header from './Header'
import Search from './Search'

const Dashboard = () => {
    const [page,setPage] = useState(1);
    const [searchText,setSearchText] = useState("Friends");
    const [movieResult, setMovieResult] = useState();
    const [loading, setloading] = useState(true);

    const fetchMovies = async() =>{
        try{
            const response = await omdbapi({
                s: searchText,
                page
            });
            setMovieResult(response.data);
            setloading(false)
        }catch(error){console.log(error)}
    }

    useEffect(() => {
        fetchMovies();
    }, [page,searchText])

    return (
        <div className='flex flex-col min-h-screen text-white bg-slate-700'>
            <Header />
            <Search />
            <Feed movieResult={movieResult}  loading={loading}/>
        </div>
    )
}

export default Dashboard
