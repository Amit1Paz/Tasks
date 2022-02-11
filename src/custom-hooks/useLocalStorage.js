import { useState, useEffect } from 'react';


const Uselocalstorage = (key , initialValue) => {
    const PREFIX = 'amit-tasks-app-';
    const preFixedKey = PREFIX + key;
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(preFixedKey)
        if (jsonValue) {
            return JSON.parse(jsonValue);
        }
        if (typeof initialValue === 'function') {
            return initialValue();
        } else {
            return initialValue;
        }
    })

    useEffect(() => {
        localStorage.setItem(preFixedKey, JSON.stringify(value))    
    }, [value, preFixedKey])

    return [value, setValue]
}

export default Uselocalstorage;
