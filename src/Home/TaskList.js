import React, { useEffect, useState, useContext } from 'react';
import Task from './Task';
import TasksHeadlines from './TasksHeadlines';
import TasksListContext from '../Contexts/TasksListContext';

const Tasklist = () => {
    const [tasksList, setTasksList] = useContext(TasksListContext);
    // const [lowerCaseSelectedSort, setLowerCaseSelectedSort] = useState()

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
        // setLowerCaseSelectedSort(e.target.innerText.toLowerCase())
    }
    
    // useEffect(() => {
    //     const newTasksList = [...tasksList];
    //     switch (lowerCaseSelectedSort) {
    //         case 'priority':
    //             const high = newTasksList.filter(task => task[lowerCaseSelectedSort] === 'High');
    //             const medium = newTasksList.filter(task => task[lowerCaseSelectedSort] === 'Medium');
    //             const low = newTasksList.filter(task => task[lowerCaseSelectedSort] === 'Low');
    //             setTasksList([...high, ...medium, ...low]);
    //             break;
    //         case 'status': 
    //             const done = newTasksList.filter(task => task[lowerCaseSelectedSort] === 'Done');
    //             const stuck = newTasksList.filter(task => task[lowerCaseSelectedSort] === 'Stuck');
    //             const working = newTasksList.filter(task => task[lowerCaseSelectedSort] === 'Working on it');
    //             const notStarted = newTasksList.filter(task => task[lowerCaseSelectedSort] === 'Not started');
    //             setTasksList([...done, ...stuck, ...working, ...notStarted]);
    //             break;
    //         case 'date':
    //             const date = 'dateForSort';
    //             const dateSortedList = newTasksList.sort((a, b) => {
    //                 if (a[date] > b[date]) {
    //                     return 1
    //                 } else if (a[date] < b[date]) {
    //                     return -1
    //                 } else {
    //                     return 0
    //                 }
    //             }).reverse();
    //             setTasksList(dateSortedList);
    //             break;
    //     } 

    // }, [selectedSort])

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
            <TasksHeadlines />
            <ul>
                <Task />
            </ul>
        </div>
    );
}

export default Tasklist;
