import React, { useState, useEffect, useContext } from 'react';
import Delete from '../imgs/Delete.svg';
import Check from '../imgs/Check.svg';
import colors from '../colors';
import TaskDropdown from './TaskDropdown';
import TasksListContext from '../Contexts/TasksListContext';
import DoneListContext from '../Contexts/DoneListContext';

const Task = ({ setSelectedSort, isDone }) => {
    const [tasksList, setTasksList] = useContext(TasksListContext);
    const [doneList, setDoneList] = useContext(DoneListContext);
    const [dragTraget, setDragTarget] = useState();
    const [dragParent, setDragParent] = useState();
    const [closestTask, setClosestTask] = useState();

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
    const dragStart = (e, index) => {
        e.target.style.opacity = 0.5;
        setDragParent(e.target.parentElement);
        const target = tasksList.find(task => task.index === index);
        setDragTarget(target);
        setSelectedSort('Custom');
    }
    const dragEnd = (e) => {
        e.target.style.opacity = 1;
    }
    const dragOver = (e) => {
        e.preventDefault();
        const y = e.clientY;
        const tasks = [...dragParent.children];
        console.log()
        const closest = tasks.reduce((closest, task) => {
            const box = task.getBoundingClientRect();
            // const offset = y - box.top;
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return {offset: offset, task: task}
            } else {
                return closest
            }
        }, { offset: Number.NEGATIVE_INFINITY })
        setClosestTask(closest.task);
    }

    return <ul onDragOver={dragOver}>
        {tasksList.map(task => {
            return <ul key={task.index} className='task-ul-container' draggable='true' onDragStart={(e) => dragStart(e, task.index)} onDragEnd={dragEnd}>
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
                {task.status !== 'Done' && 
                    <li className='task-delete' onClick={() => handleDeleteTaskClick(task.index)}>
                        <img src={Delete} alt='Delete'/>
                    </li>
                }
                {task.status === 'Done' &&
                    <li className='task-check' onClick={() => handleCheckTaskClick(task.index)}>
                        <img src={Check} alt='V'/>
                    </li>
                }
            </ul>
        })}
    </ul>
}
export default Task;
