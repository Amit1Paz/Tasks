import React, { useContext, useEffect, useState } from 'react';
import Weeklygraph from './WeeklyGraph';
import DoneListContext from '../Contexts/DoneListContext';

const Dashboard = () => {
    const [doneList, setDoneList] = useContext(DoneListContext);
    const [weeklyTasks, setWeeklyTasks] = useState([]);
    let [weeklyGoal, setWeeklyGoal] = useState(1);

    useEffect(() => {
        const newDoneList = [...doneList];
        const filtered = newDoneList.filter(task => task.dateInMs <= Date.now() && task.dateInMs > Date.now() - 604800000);
        setWeeklyTasks(filtered);
    }, [doneList])

    const handleChangeGoal = (e) => {
        const operator = e.target.innerText;
        if (operator === '-') {
            if (weeklyGoal > 0) {
                setWeeklyGoal(weeklyGoal -= 1);
            }
        } else {
            if (weeklyGoal < 999) {
                setWeeklyGoal(weeklyGoal += 1);
            }
        }
    }

    return (
        <div className='dashboard'>
            <h2>Dashboard</h2>
            <div className='dashboard-categories'>
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
                    <div className='weekly-goal'>
                        <button onClick={handleChangeGoal}>-</button>
                        <p>{weeklyGoal}</p>
                        <button onClick={handleChangeGoal}>+</button>
                    </div>
                </div>
            </div>
            <Weeklygraph />
        </div>
    );
}

export default Dashboard;
