import React from 'react';

const TodoButton = ({toggleModal}) => {

    return (
       
        <section className="newTodo">
            <button id="newTodoBtn" onClick={toggleModal}>
                <span className="iconStyle">
                    <i className="fas fa-plus"></i>
                </span>
                Todo
            </button>
        </section>
        
    );
};

export default TodoButton;