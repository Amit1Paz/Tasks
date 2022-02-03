import React, { useEffect, useState } from 'react';
import colors from '../colors';

const Taskdropdown = ({ currentStatus, currentPriority, showPriorityDropdownMenu, showStatusDropdownMenu, priority, status, setCurrentStatus, setCurrentPriority }) => {
    const [dropdown, setDropdown] = useState(null);
    
    const handlePriorityChoose = (e) => {
        setCurrentPriority(e.target.innerText)
    }
    const handleStatusChoose = (e) => {
        setCurrentStatus(e.target.innerText)
    }

    useEffect(() => {
        if (showPriorityDropdownMenu) {
            const filterd = priority.filter(priority => priority.priority !== currentPriority);
            setDropdown(
                <ul className='task-dropdown'>
                    {filterd.map(option => {
                        return (
                            <li key={option.priority}
                            onClick={handlePriorityChoose}
                            className='task-dropdown__option'
                            style={{backgroundColor: `${option.background}`}}>
                                {option.priority}
                            </li>
                        )
                    })}
                </ul>
            )
        } else if (showStatusDropdownMenu) {
            const filterd = status.filter(status => status.status !== currentStatus);
            setDropdown(
                <ul className='task-dropdown'>
                    {filterd.map(option => {
                        return (
                            <li key={option.status}
                            onClick={handleStatusChoose}
                            className='task-dropdown__option'
                            style={{backgroundColor: `${option.background}`}}>
                                {option.status}
                            </li>
                        )
                    })}
                </ul>
            )} else {
            return null
        }
    }, [showPriorityDropdownMenu, showStatusDropdownMenu])


    return dropdown
}

export default Taskdropdown;
