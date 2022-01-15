import React from 'react'
import Card from './Card'

import { PageLoader } from '@bigbinary/neetoui/v2'
const Feed = ({ movieResult, loading }) => {

    if (loading)
        return (<div className=' min-h-screen flex justify-center items-center'><PageLoader /></div>)
    return (
        <div>
            <div className='flex flex-wrap justify-center mt-4'>
                {movieResult?.Search.map((movie, index) => (
                    <Card key={index} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default Feed
