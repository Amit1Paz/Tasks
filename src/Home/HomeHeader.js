import React, { useState } from 'react';
import '../css/home.css'
import AddTaskForm from './AddTaskForm';
const Homeheader = ({ name }) => {
    const [showAddForm, setShowAddForm] = useState(false);
    const handleAddTaskClick = () => {
        setShowAddForm(!showAddForm)
    }

    return (
        <div className='home-header-container'>
            <div className='greeting'>
                <h3>Hi {name},</h3>
                <p>Let's be productive</p>
            </div>
            { showAddForm && <AddTaskForm /> }
            <button onClick={handleAddTaskClick} className='add-task-btn'>+</button>
        </div>
    );
}

export default Homeheader;
