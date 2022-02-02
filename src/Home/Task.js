import React from 'react';

const Task = ({tasksList}) => {
    return <ul>
        {tasksList.map(task => {
            return <li key={Math.random()}>
                <p>{task.content}</p>
                <p>{task.date}</p>
                <p>{task.time}</p>
                </li>
        })}
    </ul> 
}

export default Task;
