import React, { useEffect, useState } from 'react';
import colors from '../colors';

const Taskdropdown = ({ currentStatus, currentPriority, showPriorityDropdownMenu, showStatusDropdownMenu, priority, status}) => {
    const [dropdown, setDropdown] = useState(null);

    useEffect(() => {
        if (showPriorityDropdownMenu) {
            const filterd = priority.filter(priority => priority.priority !== currentPriority);
            setDropdown(
                <ul className='task-dropdown'>
                    {filterd.map(option => {
                        return (
                            <li key={option.priority}
                            className='task-dropdown__option'
                            style={{backgroundColor: `${option.background}`}}>
                                {option.priority}
                            </li>
                        )
                    })}
                </ul>
            )
        } else if (showStatusDropdownMenu) {
            const filtered = status.filter(status => status.priority !== currentStatus);
            setDropdown(
                <ul className='task-drop-down'>
                </ul>
            )
        } else {
            return null
        }
    }, [showPriorityDropdownMenu, showStatusDropdownMenu])


    return dropdown
}

export default Taskdropdown;
