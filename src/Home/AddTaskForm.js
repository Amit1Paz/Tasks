import React, { useRef, useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TasksListContext from '../Contexts/TasksListContext';
import SortListContext from '../Contexts/SortListContext';

const Addtaskform = ({ setShowAddForm, btnRef }) => {
    const [tasksList, setTasksList] = useContext(TasksListContext);
    const [selectedSort, setSelectedSort] = useContext(SortListContext);

    const taskRef = useRef();
    const dateRef = useRef();
    const timeRef = useRef();
    const formRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setShowAddForm(false);
        const day = dateRef.current.value.slice(8);
        const month = dateRef.current.value.slice(5,7);
        const year = dateRef.current.value.slice(2,4);
        setTasksList([{
            index: `${uuidv4()}`,
            priority: 'Low',
            status: 'Not started',
            content: taskRef.current.value,
            date: `${day}.${month}.${year}`,
            dateForSort: dateRef.current.value.split('-').join(''),
            time: timeRef.current.value
            }, ...tasksList
        ])
        setSelectedSort('Custom')
    }

    useEffect(() => {
        const handleCloseForm = (e) => {
            if (!formRef.current.contains(e.target)) {
                if (!btnRef.current.contains(e.target)) {
                    setShowAddForm(false);
                }
            }
        }
        document.addEventListener('mousedown', handleCloseForm);
        return () => {
            document.removeEventListener('mousedown', handleCloseForm);
        }
    }, [])

    return (
        <form className='add-task-form' onSubmit={handleFormSubmit} ref={formRef}>
            <label htmlFor='task-input'>Task</label>
            <input ref={taskRef} id='task-input' type='text' placeholder='Insert task here...' required/>
            <label htmlFor='task-schedule-date'>Schedule date</label>
            <input ref={dateRef} id='task-schedule-date' type='date' timezone="[[timezone]]" required/>
            <label htmlFor='task-schedule-time'>Schdule time</label>
            <input ref={timeRef} id='task-schedule-time' type='time' required/>
            <input className='add-task-form__submit'
            type='submit'
            value='Add task'/>
        </form>
    );
}

export default Addtaskform;
