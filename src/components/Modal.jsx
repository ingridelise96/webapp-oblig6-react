import React, {useState} from 'react';
import ModalFormElement from './ModalFormElement';

const Modal = ({toggleModal, createTodo, modalFormData, setModalFormData}) => {

    // useState for counting chars in description
    const [charCount, setCharCount] = useState(50);

    // array of form element data
    const formElements = [
        {name: 'title', labelValue: 'Title', maxLength: 20, value: modalFormData.title},
        {name: 'description', labelValue: 'Description', maxLength: 50, value: modalFormData.description},
        {name: 'author', labelValue: 'Author', maxLength: 20, value: modalFormData.author}
    ];
    
    // calls createTodo()-function after create-button is clicked, closes modal and clears form data
    const submitNewTodo = (event) => {
        event.preventDefault();
        createTodo();
        toggleModal();
        setModalFormData({});
    };

    // updates controlled input field values and char count
    const updateValue = (event) => {
        setModalFormData({...modalFormData, [event.target.name]: event.target.value});

        {event.target.name === 'description' && (
            setCharCount(50 - event.target.value.length)
        )}
    };

    // closes modal when overlay is clicked
    const overlayClicked = (event) => {
        event.target.className === 'modalOverlay' && (
            toggleModal()
        )
    };

    // JSX elements
    return (
        
        <section className='modalOverlay' onClick={overlayClicked}>
            <div className="modal">
                <form className="modalForm">

                    <span className="iconClose" onClick={toggleModal}>  
                        <i className="fas fa-times"></i>
                    </span>

                    <h3>New todo</h3>

                    {/* maps form element data onto ModalFormElement components to create inputs and labels */}
                    {formElements.map((element) => (
                        <ModalFormElement 
                        element={element} 
                        charCount={charCount} 
                        updateValue={updateValue} />
                    ))}

                    <input type="submit" value="Create" id="createTodoBtn" onClick={submitNewTodo}></input>

                </form>
            </div>
        </section>
        
    );
};

export default Modal;