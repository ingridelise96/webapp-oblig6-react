import React from 'react';

const Search = ({search, searchPhrase, setSearchPhrase, resetSearch}) => {

    // sets search value to be value of input field
    const updateSearchValue = (event) => {
        setSearchPhrase(event.target.value);
    };

    // JSX elements
    return (
        <section className="todoSearchSection">

            <label htmlFor="searchTodos">Search Todos</label>
            <input type="text" id="searchTodos" name="searchTodos" value={searchPhrase} onChange={updateSearchValue} />
            <button className='searchCompleted' onClick={() => search()}>Search</button>
            <button className='resetSearch' onClick={() => resetSearch()}>Reset</button>

        </section>
    );
};

export default Search;