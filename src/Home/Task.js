import React, { useState } from 'react';
import Delete from '../imgs/Delete.svg';
import colors from '../colors';
import TaskDropdown from './TaskDropdown';
import { useEffect } from 'react/cjs/react.development';

const Task = ({tasksList}) => {
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
    const handlePriorityClick = () => {
        setShowPriorityDropdownMenu(!showPriorityDropdownMenu)
        if (showStatusDropdownMenu) {
            setShowStatusDropdownMenu(false)
        }
    }
    return <div>
        {tasksList.map(task => {
            return <ul key={task.index} className='task-ul-container'>
                <li className='task-content'>
                    <p>{task.content}</p>
                </li>

                <ul className='task-priority'
                onClick={handlePriorityClick}
                style={{backgroundColor: `${priority[pNum].background}`}}>
                    <li>
                        {task.priority = currentPriority}
                    </li>
                    {showPriorityDropdownMenu &&<TaskDropdown
                    currentStatus={currentStatus}
                    currentPriority={currentPriority}
                    showPriorityDropdownMenu={showPriorityDropdownMenu}
                    priority={priority}
                    setCurrentPriority={setCurrentPriority}
                    />}
                </ul>

                <ul className='task-status'
                onClick={handleStatusClick}
                style={{backgroundColor: `${status[sNum].background}`}}>
                    <li>
                        {task.status = currentStatus}
                    </li>
                    {showStatusDropdownMenu &&<TaskDropdown
                    currentStatus={currentStatus}
                    currentPriority={currentPriority}
                    showStatusDropdownMenu={showStatusDropdownMenu}
                    status={status}
                    setCurrentStatus={setCurrentStatus}
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
