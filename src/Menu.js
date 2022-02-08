import Home from './imgs/Home.svg'
import Goals from './imgs/Goals.svg'
import Search from './imgs/Search.svg'
import Settings from './imgs/Settings.svg'
import Tasks from './imgs/Tasks.svg'
import { useState, useEffect } from 'react'

const Menu = ({ setActiveTab, activeTab }) => {
    let className = {
        notSelected: 'menu-tab',
        selected: 'menu-tab menu-tab--active'
    }

    const [menuTabs, setMenuTabs] = useState([
        {name: 'Home', icon: Home, style: className.notSelected},
        {name: 'Achievements', icon: Goals, style: className.notSelected},
        {name: 'Search', icon: Search, style: className.notSelected},
        {name: 'Settings', icon: Settings, style: className.notSelected}
    ])

    const handleClick = (e) => {
        setActiveTab(e.target.innerText);
    }

    useEffect(() => {
        if (activeTab) {
            const newMenuTabs = [...menuTabs];
            newMenuTabs.map(tab => tab.style = className.notSelected);
            const selectedTab = newMenuTabs.find(tab => tab.name === activeTab);
            selectedTab.style = className.selected;
            setMenuTabs(newMenuTabs);
        }
    }, [activeTab])

    const handleLogoClick = () => {
        setActiveTab('Home');
    }

    return (
        <nav className="menu">
            <button className='logo' onClick={handleLogoClick}>
                <img src={Tasks} alt='Tasks icon'/>
                <h1>Tasks</h1>
            </button>
            <ul>
                {menuTabs.map(tab => {
                    return (
                        <li
                        className={tab.style}
                        key={tab.name}
                        onClick={handleClick}>
                            <img src={tab.icon} alt={`${tab.name} icon`}/>
                            {tab.name}
                        </li>
                    ) 
                })}
            </ul>
        </nav>
    );
}

export default Menu;
