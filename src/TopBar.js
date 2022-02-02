import React from 'react';
import Notifications from './imgs/Notifications.svg'

const Topbar = ({ activeTab }) => {
    return (
        <div className='top-bar'>
            <h2 className='top-bar__headline'>{activeTab}</h2>
            <div className='top-bar__left-side'>
                <div className='notifications-wrap'>
                    <img className='notifications' src={Notifications} alt='Notifications'/>
                    <div className='notifications-circle'></div>
                </div>
                <img className='user-img' src='https://avatars.githubusercontent.com/u/64500653?v=4' alt='User'/>
            </div>
        </div>
    );
}

export default Topbar;
