import HomeHeader from './HomeHeader';
import TaskList from './TaskList'
import React from 'react';

const Home = ({ name, setTasksList, tasksList }) => {
    return (
        <div>
            <HomeHeader name={name} setTasksList={setTasksList} tasksList={tasksList}/>
            <TaskList tasksList={tasksList}/>
        </div>
    );
}

export default Home;
