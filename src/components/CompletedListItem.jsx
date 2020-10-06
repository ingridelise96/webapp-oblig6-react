import React from 'react';

const CompletedListItem = ({completedTodoObj}) => (
  
    <div className="tableRow" key={completedTodoObj.id}>
        <div><p>{completedTodoObj.title}</p></div>
        <div><p>{completedTodoObj.author}</p></div>
        <div><p>{completedTodoObj.description}</p></div>
        <div><p>{completedTodoObj.date}</p></div>
    </div>
    
);

export default CompletedListItem;