import React, { useEffect } from 'react';
import colors from '../colors';

const Taskdropdown = ({ currentStatus, currentPriority, showPriorityDropdownMenu, showStatusDropdownMenu}) => {
    useEffect(() => {
        if (showStatusDropdownMenu) {

        }
    }, [showStatusDropdownMenu])

    useEffect(() => {
        if (showPriorityDropdownMenu) {

        }
    }, [showPriorityDropdownMenu])

    return (
        <ul className='task-drop-down'>
            <li>{currentStatus}</li>
            <li>{currentPriority}</li>
        </ul>
    );
}

export default Taskdropdown;
