import React from 'react';
import Weeklygraph from './WeeklyGraph';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <h2>Dashboard</h2>
            <div>
                <h3>Total task completed</h3>
            </div>
            <div>
                <h3>Tasks completed this week</h3>
            </div>
            <div>
                <h3>Weekly Goal</h3>
            </div>
            <Weeklygraph />
        </div>
    );
}

export default Dashboard;
