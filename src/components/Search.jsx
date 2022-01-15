import React from 'react'

import { Input } from "@bigbinary/neetoui/v2"
import { Search as SearchIcon, Close as CloseIcon } from "@bigbinary/neeto-icons"

const Search = () => {

    return (
        <div className=" mt-4 flex flex-col items-center justify-center">
            <Input className = "w-1/3" label={<span className='text-white'>Search for your favorite movies</span>} prefix={<SearchIcon />} suffix ={<CloseIcon />}/>
        </div>
    )
}

export default Search
