import { useState, useEffect } from 'react';

const PREFIX = 'amit-tasks-app-';

const Uselocalstorage = (key , initialValue) => {
    const preFixedKey = PREFIX + key;
    const [value, setValue] = useState(() => {
        const jasonValue = localStorage.getItem(preFixedKey)
        if (jasonValue != null) {
            return JSON.parse(jasonValue);
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
