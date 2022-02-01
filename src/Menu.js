import Home from './imgs/Home.svg'
import Goals from './imgs/Goals.svg'
import Search from './imgs/Search.svg'
import Settings from './imgs/Settings.svg'
import { useState, useEffect } from 'react'

const Menu = ({ setActiveTab, activeTab }) => {
    const [menuItems, setMenuItems] = useState([
        {name: 'Home', icon: Home, color: null},
        {name: 'Goals', icon: Goals, color: null},
        {name: 'Search', icon: Search, color: null},
        {name: 'Settings', icon: Settings, color: null}
    ])

    const selectedBackgroundColor = 'rgb(180, 115, 255)'

    const handleClick = (e) => {
        setActiveTab(e.target.innerText);
    }

    useEffect(() => {
        if (activeTab) {
            const newMenu = [...menuItems]
            const unselectedItems = newMenu.filter(item => item.name !== activeTab);
            const selectedItem = newMenu.find(item => item.name === activeTab);
            unselectedItems.map(item => item.color = null)
            selectedItem.color = selectedBackgroundColor;
            setMenuItems(newMenu)    
        }
    }, [activeTab])

    return (
        <nav className="menu">
            <ul>
                {menuItems.map(item => {
                    return (
                        <li key={item.name} onClick={handleClick} style={{backgroundColor: item.color}}>
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
