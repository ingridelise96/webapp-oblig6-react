import React from 'react';
import CompletedListItem from './CompletedListItem';
import Search from './Search';

const CompletedList = ({completedTodos, search, searchPhrase, setSearchPhrase, resetSearch, searchHasMatches}) => {

    // creates new array of three first elements in completedTodos
    const newlyCompleted = completedTodos.slice(0,3);

    // JSX elements
    return (
        <section className='completedTodos'>
            <h2 id="completedTitle">Completed todos</h2>
                    
            <Search 
            search={() => search()} 
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase} 
            resetSearch={() => resetSearch()} />
            
            <section id="completedTable">

                <div className="tableHeader">
                    <div><h3>Title</h3></div>
                    <div><h3>Author</h3></div>
                    <div><h3>Description</h3></div>
                    <div><h3>Completed date</h3></div>
                </div>

                {/* Prints message if there are no Todos that matches search */}
                {!searchHasMatches && (
                <p id='noMatchMsg'>No matches for this search</p>
                )}

                {/* checks if there are completed Todos in list and maps data onto CompletedListItem components */}
                {newlyCompleted &&
                newlyCompleted.length > 0 &&
                newlyCompleted.map((todo) => (
                    <CompletedListItem completedTodoObj={todo} />
                ))}

            </section>
        </section>
    );
};

export default CompletedList;