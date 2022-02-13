import React, { useState, useEffect, useContext } from 'react';
import Delete from '../imgs/Delete.svg';
import Check from '../imgs/Check.svg';
import colors from '../colors';
import TaskDropdown from './TaskDropdown';
import TasksListContext from '../Contexts/TasksListContext';
import DoneListContext from '../Contexts/DoneListContext';

const Task = (props) => {
    const [tasksList, setTasksList] = useContext(TasksListContext);
    const [doneList, setDoneList] = useContext(DoneListContext);

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

    const filterTasksList = (index) => {
        const newTasksList = [...tasksList];
        const filtered = newTasksList.filter(task => task.index !== index);
        setTasksList(filtered)
    }

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
        filterTasksList(taskIndex);
    }

    const handleCheckTaskClick = (index) => {
        filterTasksList(index); 
        const task = tasksList.find(task => task.index === index);
        const newDoneList = [...doneList];
        newDoneList.push({
            task: task,
            date: getDate(),
            dateInMs: Date.now()
        });
        setDoneList(newDoneList);
    }

    const getDate = () => {
        const d = new Date();
        const day = `0${d.getDate()}`.slice(-2);
        const month = `0${d.getMonth() + 1}`.slice(-2);
        const year = `0${d.getFullYear()}`.slice(-2);
        const date = `${day}.${month}.${year}`;
        return date;
    }

    return <ul className='task-ul-container'>
        <li className='task-content'>
            {props.content}
        </li>
        <ul className='task-categories'>
            <ul className='task-priority' style={{backgroundColor: handleBackgroundColor(props.priority)}}>
                <li>{props.priority}</li>
                <li>
                    <TaskDropdown priority={priority} status={status} setDropdownSelectedItem={setDropdownSelectedItem} setCurrentKey={setCurrentKey} id={props.index} handleBackgroundColor={handleBackgroundColor}/>
                </li>
            </ul>

            <ul className='task-status' style={{backgroundColor: handleBackgroundColor(props.status)}}>
                <li>{props.status}</li>
                <li>
                    <TaskDropdown priority={priority} status={status} setDropdownSelectedItem={setDropdownSelectedItem} setCurrentKey={setCurrentKey} id={props.index} handleBackgroundColor={handleBackgroundColor}/>
                </li>
            </ul>

            <ul className='task-date-time'>
                <li>{props.date}</li>
                <li className='task-time'>{props.time}</li>
            </ul>
            {props.status !== 'Done' && 
                <li className='task-delete' onClick={() => handleDeleteTaskClick(props.index)}>
                    <img src={Delete} alt='Delete'/>
                </li>
            }
            {props.status === 'Done' &&
                <li className='task-check' onClick={() => handleCheckTaskClick(props.index)}>
                    <img src={Check} alt='V'/>
                </li>
            }
        </ul>
    </ul>
}

export default Task;
