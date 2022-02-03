import React from 'react';
import Delete from '../imgs/Delete.svg';
import colors from '../colors';

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

    return <div>
        {tasksList.map(task => {
            return <ul key={task.index} className='task-ul-container'>
                <li className='task-content'>
                    <p>{task.content}</p>
                </li>

                <li className='task-priority'
                style={{backgroundColor: `${priority[0].background}`}}>
                    {task.priority = priority[0].priority}
                </li>

                <li className='task-status'
                style={{backgroundColor: `${status[0].background}`}}>
                    {task.status = status[0].status}
                </li>

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
