import React, { useState, useEffect } from 'react';
import '../css/home.css'
import AddTaskForm from './AddTaskForm';
const Homeheader = ({ name }) => {
    const [showAddForm, setShowAddForm] = useState(false);
    const [btnContent, setBtnContent] = useState('+')
    const handleAddTaskClick = () => {
        setShowAddForm(!showAddForm)
    }

    useEffect(() => {
        showAddForm ? setBtnContent('-') : setBtnContent('+') 
    }, [showAddForm])

    return (
        <div className='home-header-container'>
            <div className='greeting'>
                <h3>Hi {name},</h3>
                <p>Let's be productive</p>
            </div>
            { showAddForm && <AddTaskForm /> }
            <button onClick={handleAddTaskClick} className='add-task-btn'>{btnContent}</button>
        </div>
    );
}

export default Homeheader;
