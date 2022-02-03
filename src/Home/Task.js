import React, { useState } from 'react';
import Delete from '../imgs/Delete.svg';
import colors from '../colors';
import TaskDropdown from './TaskDropdown';

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

    const [currentStatus, setCurrentStatus] = useState(status[0].status);
    const [currentPriority, setCurrentPriority] = useState(priority[0].priority);
    const [showStatusDropdownMenu, setShowStatusDropdownMenu] = useState(false);
    const [showPriorityDropdownMenu, setShowPriorityDropdownMenu] = useState(false);
    

    return <div>
        {tasksList.map(task => {
            return <ul key={task.index} className='task-ul-container'>
                <li className='task-content'>
                    <p>{task.content}</p>
                </li>

                <ul className='task-priority'
                onClick={() => setShowPriorityDropdownMenu(!showPriorityDropdownMenu)}
                style={{backgroundColor: `${priority[0].background}`}}>
                    <li>
                        {task.priority = currentPriority}
                    </li>
                    {showPriorityDropdownMenu &&<TaskDropdown
                    currentStatus={currentStatus}
                    currentPriority={currentPriority}
                    showPriorityDropdownMenu={showPriorityDropdownMenu}
                    priority={priority}
                    />}
                </ul>

                <ul className='task-status'
                style={{backgroundColor: `${status[0].background}`}}>
                    <li>
                        {task.status = currentStatus}
                    </li>
                    {showStatusDropdownMenu &&<TaskDropdown
                    currentStatus={currentStatus}
                    currentPriority={currentPriority}
                    showStatusDropdownMenu={showStatusDropdownMenu}
                    status={status}
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
