import { useState } from "react";

export const useLocalStorage = <T>(key: string, defaultValue?: T): [T | undefined, (value: T | undefined) => void] => {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    try {
      const value = localStorage.getItem(key)
      if (value) {
        return JSON.parse(value)
      }
      else if (defaultValue) {
        localStorage.setItem(key, JSON.stringify(defaultValue))
      }
      return defaultValue;
    } catch {
      return defaultValue
    }
  })

  const setLocalStorageStateValue = (newValue: T | undefined) => {
    if(newValue) {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
    else {
      localStorage.removeItem(key);
    }

    setLocalStorageValue(newValue);
  }
  return [localStorageValue, setLocalStorageStateValue]
}

export default useLocalStorage;