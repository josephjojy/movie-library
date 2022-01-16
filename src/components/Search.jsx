import React, { useState, useCallback } from 'react'
import { omdbapi } from '../apis/omdb'
import { Input, Button } from "@bigbinary/neetoui/v2"
import { Search as SearchIcon, Close as CloseIcon } from "@bigbinary/neeto-icons"
import debounce from "lodash/debounce"

const Search = ({ setSearchMovie }) => {
    const [searchText, setSearchText] = useState("");
    const [searchResult, setSearchResult] = useState();


    const clearData = () => {
        setSearchText("");
        setSearchResult();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        searchText.length ? setSearchMovie(searchText) : setSearchMovie("Friends")
        setSearchResult();
    }

    const fetchMovies = async (searchText) => {
        try {
            const response = await omdbapi({
                s: searchText,
                page: 1
            });
            setSearchResult(response.data);
        } catch (error) { console.log(error) }
    }

    const searchDebounce = useCallback(debounce(value => fetchMovies(value), 500), [])

    return (
        <div className=" mt-4 flex flex-col items-center justify-center">
            <form className="searchBox" onSubmit={(event) => handleSubmit(event)}>
                <Input
                    className="w-full"
                    placeholder="Search for your favorite movies"
                    prefix={<SearchIcon />}
                    suffix={searchText && <Button icon={CloseIcon} style="text" onClick={() => clearData()} />}
                    value={searchText}
                    onChange={(e) => { setSearchText(e.target.value); searchDebounce(e.target.value) }}
                    onBlur={() => clearData()}
                />
            </form>
            {searchResult && <div className="searchBox absolute top-32 mt-2 max-h-72 overflow-y-auto bg-white rounded-sm border-b-2 z-50">
                {
                    searchResult?.Search?.map((ele, index) => {
                        return (
                            <div className="m-2 p-2 bg-gray-100 rounded-sm border-b-2 text-black" key={index}>
                                {ele.Title}
                            </div>)
                    })
                }
            </div>}
        </div>
    )
}

export default Search
