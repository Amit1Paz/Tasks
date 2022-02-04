import React, { useState, useEffect } from 'react';
import Delete from '../imgs/Delete.svg';
import colors from '../colors';
import TaskDropdown from './TaskDropdown';

const Task = ({tasksList, setTasksList}) => {
    const status = [
        {status: 'Not Started', background: colors.status.notStarted},
        {status: 'Working on it', background: colors.status.workingOnIt},
        {status: 'Stuck', background: colors.status.stuck},
        {status: 'Done', background: colors.status.done}
    ]
    const priority = [
        {priority: 'Low', background: colors.priority.low},
        {priority: 'Medium', background: colors.priority.medium},
        {priority: 'High', background: colors.priority.high}
    ]

    const [sNum, setSNum] = useState(0);
    const [pNum, setPNum] = useState(0)

    const [currentStatus, setCurrentStatus] = useState(status[sNum].status);
    const [currentPriority, setCurrentPriority] = useState(priority[pNum].priority);
    const [showStatusDropdownMenu, setShowStatusDropdownMenu] = useState(false);
    const [showPriorityDropdownMenu, setShowPriorityDropdownMenu] = useState(false);
    
    useEffect(() => {
        for (let i = 0; i < status.length; i++) {
            if (currentStatus === status[i].status) {
                setSNum(i);
            }
        }
    }, [currentStatus])

    useEffect(() => {
        for (let i = 0; i < priority.length; i++) {
            if (currentPriority === priority[i].priority) {
                setPNum(i);
            }
        }
    }, [currentPriority])

    const handleStatusClick = () => {
        setShowStatusDropdownMenu(!showStatusDropdownMenu)
        if (showPriorityDropdownMenu) {
            setShowPriorityDropdownMenu(false)
        }
    }
    const handlePriorityClick = (index) => {
        setShowPriorityDropdownMenu(!showPriorityDropdownMenu)
        if (showStatusDropdownMenu) {
            setShowStatusDropdownMenu(false)
        }
    }

    // useEffect(() => {
    //     console.log(tasksList)
    // }, [tasksList])
    return <div>
        {tasksList.map(task => {
            return <ul key={task.index} className='task-ul-container'>
                <li className='task-content'>
                    <p>{task.content}</p>
                </li>

                <ul className='task-priority'
                onClick={() => handlePriorityClick(task.index)}
                style={{backgroundColor: `${priority[pNum].background}`}}>
                    <li>
                        {task.priority}
                    </li>
                    {showPriorityDropdownMenu &&<TaskDropdown
                    taskIndex={task.index}
                    currentStatus={currentStatus}
                    currentPriority={currentPriority}
                    showPriorityDropdownMenu={showPriorityDropdownMenu}
                    priority={priority}
                    setCurrentPriority={setCurrentPriority}
                    tasksList={tasksList}
                    setTasksList={setTasksList}
                    />}
                </ul>

                <ul className='task-status'
                onClick={() => handleStatusClick(task.index)}
                style={{backgroundColor: `${status[sNum].background}`}}>
                    <li>
                        {task.status}
                    </li>
                    {showStatusDropdownMenu &&<TaskDropdown
                    currentStatus={currentStatus}
                    currentPriority={currentPriority}
                    showStatusDropdownMenu={showStatusDropdownMenu}
                    status={status}
                    setCurrentStatus={setCurrentStatus}
                    setTasksList={setTasksList}
                    />}    
                </ul>

                <li className='task-date-time'>
                    <p>{task.date}</p>
                    <p className='task-time'>{task.time}</p>
                </li>

                <li className='task-delete'>
                    <img src={Delete} alt='Delete' />
                </li>

            </ul>
        })}
    </div> 
}

export default Task;
