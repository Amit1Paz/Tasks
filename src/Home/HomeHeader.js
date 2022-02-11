import React, { useState, useEffect, useRef } from 'react';
import AddTaskForm from './AddTaskForm';
import Edit from '../imgs/Edit.svg'

const Homeheader = ({ name, setName }) => {
    const [showAddForm, setShowAddForm] = useState(false);
    const [btnContent, setBtnContent] = useState('+');
    const [btnRotation, setBtnRotation] = useState('-90deg');
    const [showEditInput, setShowEditInput] = useState(false);

    const btnRef = useRef();
    const nameInputRef = useRef();

    const handleAddTaskClick = (e) => {
        setShowAddForm(!showAddForm);
    }

    useEffect(() => {
        if (showAddForm) {
            setBtnContent('-');
            setBtnRotation('0deg');
        } else {
            setBtnContent('+');
            setBtnRotation('-90deg');
        } 
    }, [showAddForm])

    const handleEditClick = () => {
        setShowEditInput(!showEditInput)
    }
    
    useEffect(() => {
        if (showEditInput) {
            const keyDownHandler = (e) => {
                if (e.key === 'Enter') {
                    setName(nameInputRef.current.value);
                    setShowEditInput(false);
                }
            }
            window.addEventListener('keydown', keyDownHandler)
            return () => {
                window.removeEventListener('keydown', keyDownHandler)
            }
        }
    }, [showEditInput])

    return (
        <div className='home-header-container'>
            <div className='greeting'>
                <div className='name-container'>
                    <h3>Hi {name},</h3>
                    <img className='edit' src={Edit} alt='Edit' onClick={handleEditClick}/>
                    {showEditInput && <input className='edit-name-input' type='text' autoFocus ref={nameInputRef} />}
                </div>
                <p>Let's be productive</p>
            </div>
            { showAddForm && <AddTaskForm setShowAddForm={setShowAddForm} btnRef={btnRef} /> }
            <button
            onClick={handleAddTaskClick}
            className='add-task-btn'
            style={{transform: `rotate(${btnRotation})`}}
            ref={btnRef}>
            {btnContent}
            </button>
        </div>
    );
}

export default Homeheader;