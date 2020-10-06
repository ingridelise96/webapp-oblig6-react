import React, {useState} from 'react';
import Navbar from './src/components/Navbar';
import TodoButton from './src/components/TodoButton';
import Modal from './src/components/Modal';
import TodoCardList from './src/components/TodoCardList';
import CompletedList from './src/components/CompletedList';

// global variables
const navTitle = 'HIOF';
const username = 'User User'
let idCounter = 0;
let allCompletedTodos = [];
let searchHasMatches = true;

const App = () => {

    // useState 
    const [modalVisibility, setModalVisibility] = useState(false);
    const [modalFormData, setModalFormData] = useState({});
    const [todosList, setTodo] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);
    const [searchPhrase, setSearchPhrase] = useState('');

    // creates unique IDs for Todos
    const createID = () => {
        idCounter++;
        return idCounter;
    };

    // sets new Todo in todosList
    const createTodo = () => {
        setTodo((prev) => [{id: createID(), ...modalFormData}, ...prev]);
    };

    // deletes Todo that matches clicked button and updates todosList
    const deleteTodo = (id) => {
        const updatedTodos = todosList.filter((todo) => todo.id !== id);
        setTodo(updatedTodos);
    };

    // puts Todo that matches clicked button in completedTodos with date and deletes it from todosList
    const completeTodo = (id) => {
        const completedTodo = todosList.filter((todo) => todo.id === id);
        const todoWithDate = {...completedTodo[0], date: formatDate()};
        setCompletedTodos ((prev) => [todoWithDate, ...prev]);
        deleteTodo(id);
    };

    // formats date of completed Todo
    const formatDate = () => {
        const date = new Date();
        const shortYear = date.getFullYear().toString().substr(2, 2);
        const day = date.getDate().toString();
        const month = (date.getMonth() + 1 ).toString();
        const completedDate = day + "." + month + "." + shortYear;

        return completedDate;
    }
    
    // turns on and off modal visibility
    const toggleModal = () => {
        setModalVisibility((display) => !display);
    };
    
    // creates a new list of completed Todos that matches search and updates completedTodos
    const search = () => {
        allCompletedTodos = completedTodos;

        const matchSearch = completedTodos.filter((todo) => 
            todo.title.toLowerCase().includes(searchPhrase.toLowerCase()) || 
            todo.description.toLowerCase().includes(searchPhrase.toLowerCase()) ||
            todo.author.toLowerCase().includes(searchPhrase.toLowerCase()) ||
            todo.date.includes(searchPhrase)
        );

        !matchSearch || matchSearch.length === 0 && (
            searchHasMatches = false
        )
        
        searchPhrase !== '' && (
            setCompletedTodos(matchSearch)
        )
    };

    // brings back all former completed Todos and clears input value of search box
    const resetSearch = () => {
        setCompletedTodos(allCompletedTodos);
        searchHasMatches = true;
        setSearchPhrase('');
    };
    
    // JSX elements
    return (
        <>  
            <header>
                <Navbar navTitle={navTitle} username={username} />
            </header>

            <main className='content'>
                <TodoButton toggleModal={toggleModal}/>

                {modalVisibility && (
                    <Modal 
                    toggleModal={toggleModal} 
                    createTodo={createTodo} 
                    setModalFormData={setModalFormData} 
                    modalFormData={modalFormData} />
                )}
                
                <TodoCardList 
                todosList={todosList} 
                deleteTodo={deleteTodo} 
                completeTodo={completeTodo} />

                <CompletedList 
                completedTodos={completedTodos} 
                search={search}
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase} 
                resetSearch={resetSearch} 
                searchHasMatches={searchHasMatches} />
                
            </main>
            <footer>
            </footer>
        </>
    );
};

export default App;