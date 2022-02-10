import React, { useEffect, useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Taskdropdown = ({ priority, status, setDropdownSelectedItem, setCurrentKey, id, handleBackgroundColor }) => {
    const [open, setOpen] = useState(false);
    const [filteredPriority, setFilteredPriority] = useState();
    const [filteredStatus, setFilteredStatus] = useState();
    const [returnedDropdownList, setReturnedDropdownList] = useState([]);
    const [selectedDropdown, setSelectedDropdown] = useState();
    const [zIndex, setZIndex] = useState(0)

    const dropdownRef = useRef();

    const handleOpenClick = (e) => {
        setOpen(!open);
        if (open) {
            setZIndex(0)
        } else {
            setZIndex(1)
        }
        const parentElement = e.target.parentElement.parentElement;
        setFilteredPriority(priority.filter(priority => priority.priority !== parentElement.firstChild.innerText));
        setFilteredStatus(status.filter(status => status.status !== parentElement.firstChild.innerText));
        const currentDropdownClass = e.target.parentElement.parentElement.className;
        const slicedCurrentDropdownClass = currentDropdownClass.slice(5);
        setSelectedDropdown(slicedCurrentDropdownClass);
    }
    
    useEffect(() => {
        if (selectedDropdown === 'priority') {
            const priorities = filteredPriority.map(priority => priority = priority.priority);
            setReturnedDropdownList(priorities);
        } else if (selectedDropdown === 'status') {
            const statuses = filteredStatus.map(status => status = status.status);
            setReturnedDropdownList(statuses);
        } else {
            return
        }
    }, [open])

    const handleChooseFromMenu = (e) => {
        setDropdownSelectedItem(e.target.innerText);
        setCurrentKey(id);
    }
    
    useEffect(() => {
        const closeDropdownHandler = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', closeDropdownHandler);
        return () => {
            document.removeEventListener('mousedown', closeDropdownHandler);
        }
    }, [])

    return <ul onClick={handleOpenClick} className='task-dropdown' style={{zIndex: zIndex}} ref={dropdownRef}>
        {open && returnedDropdownList.map(el => {
            return <li style={{background: handleBackgroundColor(el)}} key={uuidv4()} onClick={handleChooseFromMenu} className='task-dropdown__option'>
                {el}
            </li>
        })} 
    </ul>
}

export default Taskdropdown;
