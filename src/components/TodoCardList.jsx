import React from 'react';
import TodoCards from './TodoCards';

const TodoCardList = ({todosList, deleteTodo, completeTodo}) => {

    // creates new array of three first elements in todosList
    const newTodos = todosList.slice(0,3);

    // JSX elements
    return (
        <section className="todoCards">
            {/* prints message if there are no todos in list, else: maps data onto TodoCard components */}
            {newTodos && newTodos.length < 1 ? (
                    <div className="card">
                        <h3 className='title'>Yay!</h3>
                        <p className='description'>No todos today</p>
                    </div>
                ) : (
                    newTodos.map((todo) => (
                        <TodoCards 
                        todoObject={todo} 
                        deleteTodo={deleteTodo} 
                        completeTodo={completeTodo} />
                    ))
                )}
        </section>
    );
};

export default TodoCardList;