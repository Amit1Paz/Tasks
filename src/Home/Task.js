import React, { useState, useEffect, useContext } from 'react';
import Delete from '../imgs/Delete.svg';
import colors from '../colors';
import TaskDropdown from './TaskDropdown';
import TasksListContext from '../Contexts/TasksListContext';

const Task = () => {
    const [tasksList, setTasksList] = useContext(TasksListContext);
    const [dragTraget, setDragTarget] = useState()
    const status = [
        {status: 'Not started', background: colors.status.notStarted},
        {status: 'Working on it', background: colors.status.workingOnIt},
        {status: 'Stuck', background: colors.status.stuck},
        {status: 'Done', background: colors.status.done}
    ]
    const priority = [
        {priority: 'Low', background: colors.priority.low},
        {priority: 'Medium', background: colors.priority.medium},
        {priority: 'High', background: colors.priority.high}
    ]

    const [dropdownSelectedItem, setDropdownSelectedItem] = useState();
    const [currentKey, setCurrentKey] = useState();


    useEffect(() => {
        for (let i = 0; i < status.length; i++) {
            if (dropdownSelectedItem === status[i].status) {
                const newTasksList = [...tasksList];
                const selectedTask = newTasksList.find(task => task.index === currentKey);
                selectedTask.status = dropdownSelectedItem;
                setTasksList(newTasksList);
            }
        }
        for (let i = 0; i < priority.length; i++) {
            if (dropdownSelectedItem === priority[i].priority) {
                const newTasksList = [...tasksList];
                const selectedTask = newTasksList.find(task => task.index === currentKey);
                selectedTask.priority = dropdownSelectedItem;
                setTasksList(newTasksList);
            } 
        }
    }, [dropdownSelectedItem, currentKey])
    
    const handleBackgroundColor = (currentState) => {
        for (let i = 0; i < priority.length; i++) {
            if (currentState === priority[i].priority) {
                return priority[i].background;
            }
        }
        for (let i = 0; i < status.length; i++) {
            if (currentState === status[i].status) {
                return status[i].background;
            }
        }
    }

    const handleDeleteTaskClick = (taskIndex) => {
        const newTasksList = [...tasksList];
        const filteredTasksList = newTasksList.filter(task => task.index !== taskIndex);
        setTasksList(filteredTasksList);
    }

    const dragStart = (e) => {
        e.target.style.opacity = 0.3;
        setDragTarget(e.target);

    }
    const dragEnd = (e) => {
        e.target.style.opacity = 1;
    }
    const dragOver = (e) => {
        e.preventDefault()
        const y = e.clientY
        const arr = [...dragTraget.parentElement.children]
        arr.map(task => {
            const taskY = task.getBoundingClientRect().y;
            console.log(y - taskY)
        })
    }

    return <ul onDragOver={dragOver}>
        {tasksList.map(task => {
            return <ul key={task.index} className='task-ul-container' draggable='true' onDragStart={dragStart} onDragEnd={dragEnd}>
                <li className='task-content'>{task.content}</li>

                <ul className='task-priority' style={{backgroundColor: handleBackgroundColor(task.priority)}}>
                    <li>{task.priority}</li>
                    <li>
                        <TaskDropdown priority={priority} status={status} setDropdownSelectedItem={setDropdownSelectedItem} setCurrentKey={setCurrentKey} id={task.index} handleBackgroundColor={handleBackgroundColor}/>
                    </li>
                </ul>

                <ul className='task-status' style={{backgroundColor: handleBackgroundColor(task.status)}}>
                    <li>{task.status}</li>
                    <li>
                        <TaskDropdown priority={priority} status={status} setDropdownSelectedItem={setDropdownSelectedItem} setCurrentKey={setCurrentKey} id={task.index} handleBackgroundColor={handleBackgroundColor}/>
                    </li>
                </ul>

                <ul className='task-date-time'>
                    <li>{task.date}</li>
                    <li className='task-time'>{task.time}</li>
                </ul>
                
                <li className='task-delete' onClick={() => handleDeleteTaskClick(task.index)}>
                    <img src={Delete} alt='Delete'/>
                </li>
            </ul>
        })}
    </ul>
}
export default Task;
