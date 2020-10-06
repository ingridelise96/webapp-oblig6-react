import React from 'react';

const ModalFormElement = ({element, charCount, updateValue}) => (

    <div className="textBox">
        <label htmlFor={element.name}>{element.labelValue}</label>

        <input type="text" 
        id={element.name} 
        name={element.name} 
        maxLength={element.maxLength} 
        autoComplete="off" 
        value={element.value} 
        onChange={updateValue} />

        {element.name === 'description' && (
            <p id="availChars">Remaining characters: {charCount}</p>
        )}
    </div>
    
);

export default ModalFormElement;