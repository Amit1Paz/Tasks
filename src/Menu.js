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

    const [menuItems, setMenuItems] = useState([
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
            const newMenuItems = [...menuItems];
            newMenuItems.map(tab => tab.style = className.notSelected);
            const selectedTab = newMenuItems.find(tab => tab.name === activeTab);
            selectedTab.style = className.selected;
            setMenuItems(newMenuItems);
        }
    }, [activeTab])

    return (
        <nav className="menu">
            <ul>
                {menuItems.map(item => {
                    return (
                        <li
                        className={item.style}
                        key={item.name}
                        onClick={handleClick}>
                            <img src={item.icon} alt={`${item.name} icon`}/>
                            {item.name}
                        </li>
                    ) 
                })}
            </ul>
        </nav>
    );
}

export default Menu;
