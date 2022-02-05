import React, { useEffect, useState } from 'react';
import Task from './Task';

const Tasklist = ({tasksList, setTasksList}) => {
    const [sortList, setSortList] = useState([
        {name: 'Newest', selected:false, className: null},
        {name: 'Priority', selected: false, className: null},
        {name: 'Status', selected: false, className: null},
        {name: 'Date', selected: false, className: null},
        {name: 'Custom', selected: false , className: null}
    ]);

    const [selectedSort, setSelectedSort] = useState(sortList[0].name);

    const handleSortClick = (e) => {
        setSelectedSort(e.target.innerText);
    }
    useEffect(() => {
        if (selectedSort) {
            const newSortList = [...sortList];
            newSortList.map(item => item.className = null);
            const sort = newSortList.find(item => item.name === selectedSort);
            sort.className = 'selected-sort';
            setSortList(newSortList);
        }
    }, [selectedSort])
    
    return (
        <div className='tasks-list-container'>
            <h3>Tasks:</h3>
            <div className='sort'>
                <h5>Sort:</h5>
                <ul>
                    {sortList.map(item => {
                        return <li key={item.name} onClick={handleSortClick} className={item.className}>{item.name}</li>
                    })}
                </ul>
            </div>
            <ul>
                <Task tasksList={tasksList} setTasksList={setTasksList} />
            </ul>
        </div>
    );
}

export default Tasklist;
