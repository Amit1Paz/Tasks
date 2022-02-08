import React, { useContext, useEffect, useState } from 'react';
import Weeklygraph from './WeeklyGraph';
import DoneListContext from '../Contexts/DoneListContext';

const Dashboard = () => {
    const [doneList, setDoneList] = useContext(DoneListContext);
    const [weeklyTasks, setWeeklyTasks] = useState([]);

    useEffect(() => {
        const newDoneList = [...doneList];
        const filtered = newDoneList.filter(task => task.dateInMs <= Date.now() && task.dateInMs > Date.now() - 604800000);
        setWeeklyTasks(filtered)
        weeklyTasks.map(task => console.log(task.dateInMs))
    }, [doneList])

    return (
        <div className='dashboard'>
            <h2>Dashboard</h2>
            <div className='dashboard-category'>
                <h3>Total task completed</h3>
                <p>{doneList.length}</p>
            </div>
            <div className='dashboard-category'>
                <h3>Tasks completed this week</h3>
                <p>{weeklyTasks.length}</p>
            </div>
            <div className='dashboard-category'>
                <h3>Weekly Goal</h3>
                <p>{}</p>
            </div>
            <Weeklygraph />
        </div>
    );
}

export default Dashboard;
