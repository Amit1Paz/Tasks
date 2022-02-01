const Menu = ({ setActiveTab }) => {
    const menuItems = ['Home', 'Goals', 'Search', 'Settings'];
    const handleClick = (e) => {
        const upperValue = e.target.innerText;
        const fixedValue = upperValue.toLowerCase();
        setActiveTab(fixedValue);
    }
    return (
        <nav>
            <ul>
                {menuItems.map(item => {
                    return (
                        <li key={item} onClick={handleClick}>
                        {item}
                        </li>
                    ) 
                })}
            </ul>

        </nav>
    );
}

export default Menu;
