import React, { useState, useEffect, useRef } from 'react';
import AddTaskForm from './AddTaskForm';
const Homeheader = ({ name }) => {
    const [showAddForm, setShowAddForm] = useState(false);
    const [btnContent, setBtnContent] = useState('+');
    const [btnRotation, setBtnRotation] = useState('-90deg');

    const btnRef = useRef();

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

    return (
        <div className='home-header-container'>
            <div className='greeting'>
                <h3>Hi {name},</h3>
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