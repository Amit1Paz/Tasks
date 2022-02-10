import React, { useContext, useEffect, useState } from 'react';
import DoneListContext from '../Contexts/DoneListContext';
import WeeklyGoalContext from '../Contexts/WeeklyGoalContext'
import WeeklyChart from './WeeklyChart';

const Dashboard = () => {
    const [doneList, setDoneList] = useContext(DoneListContext);
    const [weeklyTasks, setWeeklyTasks] = useState([]);
    const [textColor, setTextColor] = useState('white');
    let [weeklyGoal, setWeeklyGoal] = useContext(WeeklyGoalContext);

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

    useEffect(() => {
        if (weeklyTasks.length >= weeklyGoal) {
            setTextColor('rgb(180, 115, 255)');
        } else {
            setTextColor('white');
        }
    }, [weeklyGoal, weeklyTasks])

    return (
        <div className='dashboard'>
            <h2>Dashboard</h2>
            <div className='dashboard-categories'>
                <div className='dashboard-category'>
                    <h3>Total tasks completed</h3>
                    <p>{doneList.length}</p>
                </div>
                <div className='dashboard-category'>
                    <h3>Completed this week</h3>
                    <p style={{color: textColor}}>{weeklyTasks.length}</p>
                </div>
                <div className='dashboard-category'>
                    <h3>Weekly goal</h3>
                    <div className='weekly-goal'>
                        <button onClick={handleChangeGoal}>-</button>
                        <p>{weeklyGoal}</p>
                        <button onClick={handleChangeGoal}>+</button>
                    </div>
                </div>
            </div>
            <WeeklyChart />
        </div>
    );
}

export default Dashboard;
