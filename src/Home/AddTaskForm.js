import React from 'react';

const Addtaskform = () => {
    return (
        <form className='add-task-form'>
            <label htmlFor='task-input'>Task</label>
            <input id='task-input' type='text' placeholder='Insert task here...' required/>
            <label htmlFor='task-schedule-date'>Schedule date</label>
            <input id='task-schedule-date' type='date' required/>
            <label htmlFor='task-schedule-time'>Schdule time</label>
            <input id='task-schedule-time' type='time' required/>
            <input className='add-task-form__submit' type='submit' value='Add task'/>
        </form>
    );
}

export default Addtaskform;
