import React, { useState } from 'react';
import '../css/home.css'
const Homeheader = ({ name }) => {
    const [showAddForm, setShowAddForm] = useState(false);
    const handleAddTaskClick = () => {
        setShowAddForm(!showAddForm)
    }
    console.log(showAddForm)
    return (
        <div className='home-header-container'>
            <div className='greeting'>
                <h3>Hi {name},</h3>
                <p>Let's be productive</p>
            </div>
            <button onClick={handleAddTaskClick} className='add-task-btn'>+</button>
        </div>
    );
}

export default Homeheader;
