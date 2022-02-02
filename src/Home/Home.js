import React from 'react';
import HomeHeader from './HomeHeader'
const Home = ({ name }) => {
    return (
        <div>
            <HomeHeader name={name}/>
        </div>
    );
}

export default Home;
