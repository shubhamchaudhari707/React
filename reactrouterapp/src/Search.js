import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Search = () => {
    let [searchParams, setSearchParams] = useSearchParams();

    const handleSearch =(e)=>{
        e.preventDefault();
        alert(searchParams.get('q'))
    }

    return (
        <>
            <h2>This is a Search Page</h2>

            <form onSubmit={handleSearch}>
                <label htmlFor="">Search</label> <br />
                <input type="text" placeholder='search' onChange={(e) => setSearchParams({ q: e.target.value })} />

                <br /> <br />
                <input type="submit" value='search' />

            </form>

        </>
    )
}

export default Search