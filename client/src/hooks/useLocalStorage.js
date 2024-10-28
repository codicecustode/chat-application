import { useEffect, useState} from 'react'

export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) {
            try {
                return JSON.parse(jsonValue);
            } catch (error) {
                console.error("Error parsing JSON from localStorage", error);
                // Remove invalid data and use the initial value instead
                localStorage.removeItem(key);
                return typeof initialValue === 'function' ? initialValue() : initialValue;
            }
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}

