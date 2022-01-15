import React from 'react'
import Card from './Card'
import { Pagination, PageLoader } from "@bigbinary/neetoui/v2";

const Feed = ({ movieResult, loading, page, setPage }) => {

    if (loading)
        return (<div className=' min-h-screen flex justify-center items-center'><PageLoader /></div>)
    return (
        <div>
            <div className='flex flex-wrap justify-center mt-4'>
                {movieResult?.Search.map((movie, index) => (
                    <Card key={index} movie={movie} />
                ))}
            </div>
            <div className='flex justify-center pb-8'>
                <Pagination
                    count={movieResult.totalResults}
                    navigate={(e)=>{setPage(e)}}
                    pageNo={page}
                    pageSize={10}
                />
            </div>
        </div>
    )
}

export default Feed
