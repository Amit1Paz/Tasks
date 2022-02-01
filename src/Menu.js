import Home from './imgs/Home.svg'
import Goals from './imgs/Goals.svg'
import Search from './imgs/Search.svg'
import Settings from './imgs/Settings.svg'
import { useState, useEffect } from 'react'

const Menu = ({ setActiveTab, activeTab }) => {
    let className = {
        notSelected: 'menu-item',
        selected: 'menu-item menu-item--active'
    }

    const [menuTabs, setMenuTabs] = useState([
        {name: 'Home', icon: Home, style: className.notSelected},
        {name: 'Goals', icon: Goals, style: className.notSelected},
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

    return (
        <nav className="menu">
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
