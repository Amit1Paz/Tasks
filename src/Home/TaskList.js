import React, { useEffect, useState, useContext } from 'react';
import Task from './Task';
import TasksHeadlines from './TasksHeadlines';
import TasksListContext from '../Contexts/TasksListContext';
import SortListContext from '../Contexts/SortListContext';


const Tasklist = () => {
    const [tasksList, setTasksList] = useContext(TasksListContext);
    const [selectedSort, setSelectedSort] = useContext(SortListContext);

    const [order, setOrder] = useState([]);
    const [sort, setSort] = useState();

    const [sortList, setSortList] = useState([
        {name: 'Custom', selected:false, className: null},
        {name: 'Priority', selected: false, className: null},
        {name: 'Status', selected: false, className: null},
        {name: 'Date', selected: false, className: null}
    ]);

    useEffect(() => {
        if(tasksList.length === 0) {
            setSelectedSort(sortList[0].name);
        }
    }, [tasksList])

    const handleSortClick = (e) => {
        setSelectedSort(e.target.innerText);
    }

    useEffect(() => {
        if (sort === 'priority') {
            setOrder(['High', 'Medium', 'Low']);
        } else if (sort === 'status') {
            setOrder(['Done', 'Stuck', 'Working on it', 'Not started']);
        } else if (sort === 'date') {
            setOrder([2, 1]);
        } else {
            return
        }
    }, [sort])

    useEffect(() => {
        if (order.length > 0) {
            const newTasksList = [...tasksList];
            if (sort !== 'date') {
                newTasksList.sort((a, b) => {
                    if (a[sort] === b[sort]) return 0
                    return order.indexOf(a[sort]) - order.indexOf(b[sort])
                })
            } else if (sort === 'date') {
                const date = 'dateForSort';
                newTasksList.sort((a, b) => {
                    if (a[date] > b[date]) {
                        return -1
                    } else if (a[date] < b[date]) {
                        return 1
                    } else {
                        return 0
                    }
                })
            }
            setTasksList(newTasksList);
        }
    }, [order])

    useEffect(() => {
        if (selectedSort) {
            setSort(selectedSort.toLowerCase());
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
            <ul className='tasks-wrap'>
                {tasksList.map(task => {
                   return <Task setSelectedSort={setSelectedSort}
                    key={task.index}
                    index={task.index}
                    content={task.content}
                    priority={task.priority}
                    status={task.status}
                    date={task.date}
                    time={task.time}
                    />
                })}
            </ul>
        </div>
    );
}

export default Tasklist;
