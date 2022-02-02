import HomeHeader from './HomeHeader'
import React from 'react';

const Home = ({ name, setTasksList, tasksList }) => {
    return (
        <div>
            <HomeHeader name={name} setTasksList={setTasksList} tasksList={tasksList}/>
        </div>
    );
}

export default Home;
