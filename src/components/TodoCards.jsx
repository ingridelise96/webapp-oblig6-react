import React from 'react';

const TodoCards = ({todoObject, deleteTodo, completeTodo}) => (

    <div className="card" key={todoObject.id}>
        <h3 className="title">{todoObject.title}</h3>
        <p className="description">{todoObject.description}</p>

        <button className="deleteTodo" onClick={() => deleteTodo(todoObject.id)}>Delete</button>
        <button className="completeTodo" onClick={() => completeTodo(todoObject.id)}>Complete</button>
    </div>

);

export default TodoCards;