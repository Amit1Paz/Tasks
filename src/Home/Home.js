import '../css/home.css'
import HomeHeader from './HomeHeader';
import TaskList from './TaskList'
import React from 'react';

const Home = ({ name }) => {
    return (
        <div>
            <HomeHeader name={name} />
            <TaskList />
        </div>
    );
}

export default Home;
