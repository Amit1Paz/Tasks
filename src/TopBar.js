import React from 'react';
import Notifications from './imgs/Notifications.svg'

const Topbar = ({ activeTab }) => {
    return (
        <div className='top-bar'>
            <h2>{activeTab}</h2>
            <div className='top-bar__left-side'>
                <img className='notifications' src={Notifications} alt='Notifications'/>
                <img className='user-image' src='https://avatars.githubusercontent.com/u/64500653?v=4' alt='User'/>
            </div>
        </div>
    );
}

export default Topbar;
