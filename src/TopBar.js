import React from 'react';

const Topbar = ({ activeTab }) => {
    return (
        <div className='top-bar'>
            <h2 className='top-bar__headline'>{activeTab}</h2>
        </div>
    );
}

export default Topbar;
