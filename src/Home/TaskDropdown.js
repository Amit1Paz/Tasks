import React, { useEffect, useState } from 'react';
import colors from '../colors';

const Taskdropdown = ({ currentStatus, currentPriority, showPriorityDropdownMenu, showStatusDropdownMenu, priority, status}) => {
//     const [dropdown, setDropdown] = useState([currentStatus])

//     useEffect(() => {
//         if (showStatusDropdownMenu) {
//             if(status) {
//                 setDropdown(status.filter(status => status.status !== currentStatus))
//             }
//         }
//     }, [showStatusDropdownMenu])

//     useEffect(() => {
//         if (showPriorityDropdownMenu) {
//             setDropdown(priority.filter(priority => priority.priority !== currentPriority))
//         }
//     }, [showPriorityDropdownMenu])

//     console.log('amit')
//     useEffect(() => {
//         if (dropdown) {
//             dropdown.map(item => {
//                 return <ul>
//                     <li key={item.status}>
//                         {item.status}
//                     </li>
//                 </ul>
//             })
//         }
//     }, [dropdown])
    const [dropdown, setDropdown] = useState(null)
    const [list, setList] = useState([])
    useEffect(() => {
        if (showPriorityDropdownMenu) {
            const filtered = priority.filter(priority => priority.priority !== currentPriority);
            setDropdown(
                <ul className='task-drop-down'>
                    {filtered.map(item=>console.log(item.priority))}
                </ul>
            )
        } else if (showStatusDropdownMenu) {
            const filtered = status.filter(status => status.priority !== currentStatus);
            setDropdown(
                <ul className='task-drop-down'>
                    {filtered.map(item => {
                        <>
                        <li key={item.status}>
                            {item.background}
                        </li>
                        <li key='amit'>
                            amit
                        </li>
                        </>
                    })}
                </ul>
            )
        } else {
            return null
        }
    }, [showPriorityDropdownMenu, showStatusDropdownMenu])
    return dropdown
}

export default Taskdropdown;
