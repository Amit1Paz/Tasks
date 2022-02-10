import '../css/home.css'
import HomeHeader from './HomeHeader';
import TaskList from './TaskList'
import React, { useState } from 'react';
import SortListContext from '../Contexts/SortListContext';

const Home = ({ name }) => {
    const [selectedSort, setSelectedSort] = useState();
    return (
        <div className='home-container'>
            <SortListContext.Provider value={[selectedSort, setSelectedSort]}>
                <HomeHeader name={name} />
                <TaskList />
            </SortListContext.Provider>
        </div>
    );
}

export default Home;
