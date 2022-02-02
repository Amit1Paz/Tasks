import HomeHeader from './HomeHeader'
import React from 'react';

const Home = ({ name }) => {
    return (
        <div>
            <HomeHeader name={name}/>
        </div>
    );
}

export default Home;
